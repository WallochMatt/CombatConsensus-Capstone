from django.db import models
from events.models import Event
from fighters.models import Fighter
# Create your models here.


class Match(models.Model):
    event_id = models.ForeignKey(Event, on_delete=models.CASCADE)
    bout_name = models.CharField(max_length=70)
    
    fighter_one = models.ForeignKey(Fighter, related_name="Red", on_delete=models.CASCADE)
    fans_avrg_one = models.DecimalField(max_digits=5, decimal_places=2, null=True)
    judge_avg_one = models.DecimalField(max_digits=5, decimal_places=2, null=True)
    
    fighter_two = models.ForeignKey(Fighter, related_name="Blue", on_delete=models.CASCADE)
    fans_avrg_two = models.DecimalField(max_digits=5, decimal_places=2, null=True)
    judge_avg_two = models.DecimalField(max_digits=5, decimal_places=2, null=True) 