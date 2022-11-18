from rest_framework import serializers
from .models import Fighter

class FighterSerializer(serializers.Serializer):
    class Meta:
        model = Fighter
        fields = ['id', 'name', 'fan_acm_points', 'ofc_acm_points']