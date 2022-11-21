from rest_framework import serializers
from .models import Match

class MatchSerializer(serializers.ModelSerializer):
    class Meta:
        model = Match
        fields = ['id', 'bout_name', 'fans_avrg_one', 'fans_avrg_two', 'event_id', 'fighter_one', 
        'fighter_two', 'judge_avg_one', 'judge_avg_two', 'results', 'event_id_id', 'fighter_one_id', 'fighter_two_id']
        
        depth = 1

    event_id_id = serializers.CharField(write_only=True)
    fighter_one_id = serializers.DecimalField(max_digits=7, decimal_places=2)
    fighter_two_id = serializers.DecimalField(max_digits=7, decimal_places=2)