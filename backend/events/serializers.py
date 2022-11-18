from rest_framework import serializers
from .models import Event

class EventSerializer(serializers.Serializer):
    class Meta:
        model = Event
        fields = ['id', 'event_title', 'date']