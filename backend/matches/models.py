from django.db import models
from ..events.models import Event
from ..fighters.models import Fighter
# Create your models here.


class Match(models.Model):
    event_id = models.ForeignKey(Event, on_delete=models.CASCADE)
    bout_name = models.CharField(max_length=70)
    
    fighter_one = models.ForeignKey(Fighter, on_delete=models.CASCADE)
    fans_avrg_one = models.IntegerField()
    ofc_score_one = models.IntegerField()
    
    fighter_two = models.ForeignKey(Fighter, on_delete=models.CASCADE)
    fans_avrg_two = models.IntegerField()
    ofc_score_two = models.IntegerField()