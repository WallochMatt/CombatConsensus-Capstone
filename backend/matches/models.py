from django.db import models
from events.models import Event
from fighters.models import Fighter
# Create your models here.


class Match(models.Model):
    bout_name = models.CharField(max_length=70)
    
    event = models.ForeignKey(Event, on_delete=models.CASCADE)
    number_of_rounds = models.IntegerField()

    red_corner = models.ForeignKey(Fighter, related_name="Red", on_delete=models.CASCADE)
    blue_corner = models.ForeignKey(Fighter, related_name="Blue", on_delete=models.CASCADE)

    red_judge_avg = models.DecimalField(max_digits=5, decimal_places=2, null=True)
    blue_judge_avg = models.DecimalField(max_digits=5, decimal_places=2, null=True) 

    results = models.CharField(max_length=70)