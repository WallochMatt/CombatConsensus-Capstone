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
        if serializer.is_valid(raise_exception=True):
            serializer.save(user=request.fan_id)
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