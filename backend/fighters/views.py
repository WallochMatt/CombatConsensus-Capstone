from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAdminUser, AllowAny
from rest_framework.decorators import api_view, permission_classes
from .models import Fighter
from .serializers import FighterSerializer
from django.shortcuts import get_object_or_404
from django.db.models import Max



#FIGHT FANS
@api_view(['GET'])
@permission_classes([AllowAny])
def all_fighters(request):
    if request.method == 'GET':
        fighters = Fighter.objects.all()
        serializer = FighterSerializer(fighters, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

@api_view(['GET'])
@permission_classes([AllowAny])
def one_fighter(request, pk):
    if request.method == 'GET':
        fighters = Fighter.objects.filter(pk=pk)
        serializer = FighterSerializer(fighters, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)



#ADMINS
@api_view(["POST"])
@permission_classes([IsAdminUser])
def add_fighter(request):
    serializer = FighterSerializer(data=request.data)
    if serializer.is_valid(raise_exception=True):
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)


@api_view(["PUT", "DELETE"])
@permission_classes([IsAdminUser])
def edit_fighter(request, pk):
    fighter = get_object_or_404(Fighter, pk=pk)
    if request.method == "PUT":
        serialzer = FighterSerializer(fighter, data=request.data)
        serialzer.is_valid(raise_exception=True)
        serialzer.save()
        return Response(serialzer.data, status=status.HTTP_200_OK)

    elif request.method == "DELETE":
        fighter.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


#PAGE DATA

@api_view(['GET'])
@permission_classes([AllowAny])
def find_fan_fav(request):
    if request.method == 'GET':
        # top_score = Fighter.objects.aggregate(Max('fan_acm_points'))
        # print(top_score)
        # fan_fav = Fighter.objects.filter(fan_acm_points=top_score)
        # serializer = FighterSerializer(fan_fav, many=True)
        # return Response(serializer.data)

        fighters = Fighter.objects.all()
        fan_fav = fighters.order_by('-fan_acm_points').first()
        serializer = FighterSerializer(fan_fav)
        return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(['GET'])
@permission_classes([AllowAny])
def find_ofc_fav(request):
    if request.method == 'GET':
        fighters = Fighter.objects.all()
        ofc_fav = fighters.order_by('-ofc_acm_points').first()
        serializer = FighterSerializer(ofc_fav)
        return Response(serializer.data, status=status.HTTP_200_OK)