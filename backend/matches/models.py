from django.db import models
from events.models import Event
from fighters.models import Fighter
# Create your models here.


class Match(models.Model):
    bout_name = models.CharField(max_length=70)
    
    fans_avrg_one = models.DecimalField(max_digits=5, decimal_places=2, null=True)
    fans_avrg_two = models.DecimalField(max_digits=5, decimal_places=2, null=True)

    event_id = models.ForeignKey(Event, on_delete=models.CASCADE)

    fighter_one = models.ForeignKey(Fighter, related_name="Red", on_delete=models.CASCADE)
    fighter_two = models.ForeignKey(Fighter, related_name="Blue", on_delete=models.CASCADE)



    judge_avg_one = models.DecimalField(max_digits=5, decimal_places=2, null=True)
    judge_avg_two = models.DecimalField(max_digits=5, decimal_places=2, null=True) 

    #result either decision or finish, record finish