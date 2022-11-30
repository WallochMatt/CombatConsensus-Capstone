from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAdminUser, AllowAny
from rest_framework.decorators import api_view, permission_classes
from .models import Match
from .serializers import MatchSerializer
from django.shortcuts import get_object_or_404




@api_view(["GET"])
@permission_classes([AllowAny])
def all_matches(request):
    if request.method == 'GET':
        matches = Match.objects.all()
        serializer = MatchSerializer(matches, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(['GET'])
@permission_classes([AllowAny])
def one_match(request, pk):
    if request.method == 'GET':
        match = Match.objects.filter(pk=pk)
        serializer = MatchSerializer(match, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(["GET"])
@permission_classes([AllowAny])
def event_matches(request, event):
    if request.method == 'GET':
        matches = Match.objects.all()
        event_matches = matches.filter(event = event)
        serializer = MatchSerializer(event_matches, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)






@api_view(["POST"])
@permission_classes([IsAdminUser])
def add_match(request):
    serialzer = MatchSerializer(data=request.data)
    if serialzer.is_valid(raise_exception=True):
        serialzer.save()
        return Response(serialzer.data, status=status.HTTP_201_CREATED)

@api_view(['PUT', 'DELETE'])
@permission_classes([IsAdminUser])
def edit_match(request, pk):
    match = get_object_or_404(Match, pk=pk)
    if request.method == 'PUT':
        serializer = MatchSerializer(match, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_200_OK)

    elif request.method == 'DELETE':
        match.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)



@api_view(["GET"])
@permission_classes([AllowAny])
def find_fan_fav(request,fighter):
    if request.method == "GET":
        matches_with_fighter_1 = Match.objects.filter(fighter_one=fighter)
        
        ttl_fgt_one_points = 0
        for match in matches_with_fighter_1:
            ttl_fgt_one_points += match.fans_avrg_one

        return Response(ttl_fgt_one_points)