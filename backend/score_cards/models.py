from django.db import models
from ..matches.models import Match
from ..authentication.models import User
# Create your models here.

class ScoreCard(models.Model):
    fan_score_f1 = models.IntegerField()
    fan_score_f2 = models.IntegerField()
    match = models.ForeignKey(Match, on_delete=models.CASCADE)
    fan = models.ForeignKey(User, on_delete=models.CASCADE)