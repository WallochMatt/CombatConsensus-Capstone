from rest_framework import serializers
from .models import Match

class MatchSerializer(serializers.ModelSerializer):
    class Meta:
        model = Match
        fields = ['id', 'bout_name', 'event', 'number_of_rounds', 'red_corner', 
        'blue_corner', 'red_judge_avg', 'blue_judge_avg', 'results', 'event_id', 'red_corner_id', 'blue_corner_id']
        
        depth = 1

    event_id = serializers.IntegerField()
    red_corner_id = serializers.IntegerField()
    blue_corner_id = serializers.IntegerField()