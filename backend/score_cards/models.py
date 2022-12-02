from django.db import models
from matches.models import Match
from authentication.models import User
# Create your models here.

class ScoreCard(models.Model):
    red_fan_score = models.IntegerField()
    blue_fan_score = models.IntegerField()
    
    match = models.ForeignKey(Match, on_delete=models.CASCADE)
    fan = models.ForeignKey(User, on_delete=models.CASCADE)