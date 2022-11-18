from rest_framework import serializers
from .models import Figther

class FighterSerializer(serializers.Serializer):
    class Meta:
        model = Figther
        fields = ['id', 'name', 'fan_acm_points', 'ofc_acm_points']