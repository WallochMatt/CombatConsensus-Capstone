from rest_framework import serializers
from .models import ScoreCard

class ScoreCard(serializers.ModelSerializer):
    class Meta: 
        model = ScoreCard
        fields = ['id', 'fan_score_f1', 'fan_score_f2', 'match', 'fan', 'match_id', 'fan_id']

    match_id = serializers.IntegerField()
    fan_id = serializers.IntegerField()