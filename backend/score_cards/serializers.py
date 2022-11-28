from rest_framework import serializers
from .models import ScoreCard

class ScoreCardSerializer(serializers.ModelSerializer):
    class Meta: 
        model = ScoreCard
        fields = ['id', 'fan_score_f1', 'fan_score_f2', 'fan_id', 'match', 'match_id']
        # fields = ['id', 'fan_score_f1', 'fan_score_f2', 'fan', 'fan_id', 'match', 'match_id']
        depth = 1

    match_id = serializers.IntegerField()
    fan_id = serializers.IntegerField()