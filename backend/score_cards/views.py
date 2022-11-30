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


#may need to change this so I can use USERNAME and combine that with a username Param hook in React
@api_view(['GET'])
@permission_classes([AllowAny])
def all_fan_cards(request, username):
    if request.method == "GET":
        fan = get_object_or_404(User, username=username)
        cards_for_fan = ScoreCard.objects.filter(fan=fan)
        print("fan is:", fan)
        serializer = ScoreCardSerializer(cards_for_fan, many=True)
        return Response(serializer.data)



#  ^previous version
# @api_view(['GET'])
# @permission_classes([AllowAny])
# def all_fan_cards(request, fan_id):
#     if request.method == "GET":
#         cards = ScoreCard.objects.filter(fan_id=fan_id)
#         serializer = ScoreCardSerializer(cards, many=True)
#         return Response(serializer.data)






@api_view(['GET'])
@permission_classes([AllowAny])
def accuracy(request, username):
    if request.method == "GET":
        fan = get_object_or_404(User, username=username)
        cards_for_fan = ScoreCard.objects.filter(fan=fan)

        total_fan_f1_score = 0
        for card in cards_for_fan:
            total_fan_f1_score += card.fan_score_f1 #I had this backwards, it was: card.fan_score += total_fan_f1_score

        total_jdg_f1_score = 0
        for card in cards_for_fan:
            total_jdg_f1_score += card.match.judge_avg_one

        accuracy_1 = 100 - ((abs((total_jdg_f1_score - total_fan_f1_score)) / total_jdg_f1_score) * 100)

        total_fan_f2_score = 0
        for card in cards_for_fan:
            total_fan_f2_score += card.fan_score_f2 #I had this backwards, it was: card.fan_score += total_fan_f1_score

        total_jdg_f2_score = 0
        for card in cards_for_fan:
            total_jdg_f2_score += card.match.judge_avg_two

        accuracy_2 = 100 - ((abs((total_jdg_f2_score - total_fan_f2_score)) / total_jdg_f2_score) * 100)

        total_accuracy = (accuracy_1 + accuracy_2) / 2
        return Response(round(total_accuracy, 2))



@api_view(['GET'])
@permission_classes([AllowAny])
def find_average(request, match):
    if request.method == 'GET':
        cards = ScoreCard.objects.filter(match=match)

        running_total_f1 = 0
        running_total_f2 = 0
        count_rt = 0

        for card in cards:
            count_rt += 1
            running_total_f1 += card.fan_score_f1
            running_total_f2 += card.fan_score_f2

        f1_average = running_total_f1/count_rt
        f2_average = running_total_f2/count_rt
        # final_result = f"{f1_average} - {f2_average}"

        final_result = {
            "f1_average" : f1_average,
            "f2_average" : f2_average
        }

        return Response(final_result)

#^PUT IN A ELSE OR TRY INCASE THERE ARE NO FAN SCORES IT WONT DIVIDE 0
#Return an object  with each average as a property/ iv