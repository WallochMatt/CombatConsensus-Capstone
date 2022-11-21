from rest_framework import serializers
from .models import Match

class MatchSerializer(serializers.ModelSerializer):
    class Meta:
        model = Match
        fields = ['id', 'bout_name', 'fans_avrg_one', 'fans_avrg_two', 'event', 'fighter_one', 
        'fighter_two', 'judge_avg_one', 'judge_avg_two', 'results', 'event_id', 'fighter_one_id', 'fighter_two_id']
        
        depth = 1

    event_id = serializers.IntegerField()
    fighter_one_id = serializers.IntegerField()
    fighter_two_id = serializers.IntegerField()