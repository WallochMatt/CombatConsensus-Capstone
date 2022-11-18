from django.db import models

# Create your models here.

class Fighter(models.Model):
    name = models.CharField(max_length=50)
    fan_acm_points = models.DecimalField(max_digits=5, decimal_places=2, null=True)
    ofc_acm_points = models.DecimalField(max_digits=5, decimal_places=2, null=True)