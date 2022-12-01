from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAdminUser, AllowAny
from rest_framework.decorators import api_view, permission_classes
from .models import Match
from .serializers import MatchSerializer
from django.shortcuts import get_object_or_404

from score_cards.views import find_fan_total_one, find_fan_total_two


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
def find_ofc_total(request, fighter):
    if request.method == "GET":
        matches_with_fighter = Match.objects.filter(fighter_one=fighter) or Match.objects.filter(fighter_two=fighter)
        
        ttl_judged = 0
        ttl_fan = 0
        for match in matches_with_fighter:
            if match.fighter_one.id == fighter:
                ttl_judged += match.judge_avg_one
                ttl_fan += find_fan_total_one(match)
            if match.fighter_two.id == fighter:
                ttl_judged += match.judge_avg_two
                ttl_fan += find_fan_total_two(match)

        return Response([[ttl_judged],[ttl_fan]])

        #iterate through fighters in the front end to see favorites


# def find_ofc_total(request, fighter):
        #     if request.method == "GET":
        # matches_with_fighter_as_1 = Match.objects.filter(fighter_one=fighter)
        

        # ttl_judged_one = 0
        # ttl_fan_one = 0
        # for match in matches_with_fighter_as_1:
        #     ttl_judged_one += match.judge_avg_one
        #     ttl_fan_one += find_fan_total_one(match)

        # matches_with_fighter_as_2 = Match.objects.filter(fighter_two=fighter)
        
        
        # ttl_judged_two = 0
        # ttl_fan_two = 0
        # for match in matches_with_fighter_as_2:
        #     ttl_judged_two += match.judge_avg_two
        #     ttl_fan_two += find_fan_total_two(match)
        # total_judge_points = ttl_judged_one + ttl_judged_two

        # total_fan_points = ttl_fan_one + ttl_fan_two

        # return Response([[total_judge_points],[total_fan_points]])
