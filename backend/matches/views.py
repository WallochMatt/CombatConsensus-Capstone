from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAdminUser, AllowAny
from rest_framework.decorators import api_view, permission_classes
from .models import Match
from .serializers import MatchSerializer
from django.shortcuts import get_object_or_404


from score_cards.views import find_fan_total_one, find_fan_total_two
from fighters.models import Fighter


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
        match = get_object_or_404(Match, pk=pk)
        serializer = MatchSerializer(match)
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
def find_match_total(request):

    all_fighter_totals = []
    for fighter in Fighter.objects.all():

        if request.method == "GET":
            matches_with_fighter = Match.objects.filter(red_corner=fighter.id) or Match.objects.filter(blue_corner=fighter.id)
            
            ttl_judged = 0
            ttl_fan = 0
            for match in matches_with_fighter:
                if match.red_corner.id == fighter.id:
                    ttl_judged += match.red_judge_avg
                    ttl_fan += find_fan_total_one(match)
                if match.blue_corner.id == fighter.id:
                    ttl_judged += match.blue_judge_avg
                    ttl_fan += find_fan_total_two(match)

                fighter_totals = {
                "fighter_id" : fighter.id,
                "name": fighter.name,
                "image": fighter.image_link,
                "judge_total" :ttl_judged, 
                "fan_total" : ttl_fan}

                all_fighter_totals.append(fighter_totals)

    return Response(all_fighter_totals)

