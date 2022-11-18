from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from .models import Event
from .serializers import EventSerializer
from django.shortcuts import get_object_or_404



#FIGHT FANS
@api_view(['GET'])
@permission_classes([AllowAny])
def all_events(request):
    if request.method == 'GET':
        events = Event.objects.all()
        serializer = EventSerializer(events, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(['GET'])
@permission_classes([AllowAny])
def one_event(request, pk): #Don't forget to include param in URL path
    if request.method == 'GET':
        events = Event.objects.filter(pk=pk)
        serializer = EventSerializer(events)#many false?
        return Response(serializer.data, status=status.HTTP_200_OK)



# ADMINS  Admin field for register, I could add a code or codes to grant admin acess. As if I sent them an email for sign up

@api_view(["POST"])
@permission_classes(IsAuthenticated)
def add_event(request):
    serializer = EventSerializer(data=request.data)
    if serializer.is_valid(raise_exception=True):
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)

@api_view(["PUT", "DELETE"])
@permission_classes(IsAuthenticated)
def edit_event(request, pk):
    event = get_object_or_404(Event, pk=pk)
    if request.method == 'PUT':
        serializer = EventSerializer(event, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)

    elif request.method == 'DELETE':
        event.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

