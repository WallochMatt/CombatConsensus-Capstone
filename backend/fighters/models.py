from django.db import models

# Create your models here.

class Fighter(models.Model):
    name = models.CharField(max_length=50)
    image_link = models.CharField(max_length=255)
