from django.db import models

# Create your models here.

class Fighter(models.Model):
    name = models.CharField(max_length=50)
    fan_acm_points = models.ImageField()
    ofc_acm_points = models.IntegerField()