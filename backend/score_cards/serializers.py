from rest_framework import serializers
from .models import ScoreCard

class ScoreCardSerializer(serializers.ModelSerializer):
    class Meta: 
        model = ScoreCard
        fields = ['id', 'red_fan_score', 'blue_fan_score', 'fan', 'match', 'match_id']
        depth = 1

    match_id = serializers.IntegerField()
