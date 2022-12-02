from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from .models import ScoreCard
from .serializers import ScoreCardSerializer
from django.shortcuts import get_object_or_404
from authentication.models import User


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def fan_card(request):
    if request.method == "POST":
        serializer = ScoreCardSerializer(data=request.data)
        print("serializer is:", serializer)
        if serializer.is_valid():
            serializer.save(fan=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
@permission_classes([AllowAny])
def all_fan_cards(request, username):
    if request.method == "GET":
        fan = get_object_or_404(User, username=username)
        cards_for_fan = ScoreCard.objects.filter(fan=fan)
        print("fan is:", fan)
        serializer = ScoreCardSerializer(cards_for_fan, many=True)
        return Response(serializer.data)



@api_view(['GET'])
@permission_classes([AllowAny])
def accuracy(request, username):
    if request.method == "GET":
        fan = get_object_or_404(User, username=username)
        cards_for_fan = ScoreCard.objects.filter(fan=fan)

        total_fan_red_score = 0
        for card in cards_for_fan:
            total_fan_red_score += card.fan_score_f1 #I had this backwards, it was: card.fan_score += total_fan_f1_score

        total_jdg_red_score = 0
        for card in cards_for_fan:
            total_jdg_red_score += card.match.red_judge_avg

        accuracy_1 = 100 - ((abs((total_jdg_red_score - total_fan_red_score)) / total_jdg_red_score) * 100)

        total_fan_blue_score = 0
        for card in cards_for_fan:
            total_fan_blue_score += card.blue_fan_score #I had this backwards, it was: card.fan_score += total_fan_f1_score

        total_jdg_blue_score = 0
        for card in cards_for_fan:
            total_jdg_blue_score += card.match.blue_judge_avg

        accuracy_2 = 100 - ((abs((total_jdg_blue_score - total_fan_blue_score)) / total_jdg_blue_score) * 100)

        total_accuracy = (accuracy_1 + accuracy_2) / 2
        return Response(round(total_accuracy, 2))



@api_view(['GET'])
@permission_classes([AllowAny])
def find_average(request, match):
    if request.method == 'GET':
        try:
            cards = ScoreCard.objects.filter(match=match)
            running_total_red = 0
            running_total_blue = 0
            count_rt = 0

            for card in cards:
                count_rt += 1
                running_total_red += card.red_fan_score
                running_total_blue += card.blue_fan_score

            f1_average = running_total_red/count_rt
            f2_average = running_total_blue/count_rt

            final_result = [
                [f1_average],
                [f2_average]
            ]
        except:
            return Response([["TBD"], ["TBD"]])

        return Response(final_result)



def find_fan_total_one(match):
    cards = ScoreCard.objects.filter(match=match)

    red_score = 0
    for card in cards:
        red_score += card.red_fan_score
    
    return red_score

def find_fan_total_two(match):
    cards = ScoreCard.objects.filter(match=match)

    blue_score = 0
    for card in cards:
        blue_score += card.blue_fan_score

    return blue_score
