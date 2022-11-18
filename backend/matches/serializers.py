from rest_framework import serializers
from .models import Match

class MatchSerializer(serializers.Serializer):
    class Meta:
        model = Match
        fields = ['id', 'event_id', 'bout_name', 'fighter_one', 'fans_avrg_one', 
        'judge_avg_one', 'fighter_two', 'fans_avrg_two', 'judge_avg_two']