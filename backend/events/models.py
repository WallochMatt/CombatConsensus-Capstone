from django.db import models

# Create your models here.

class Event(models.Model):
    event_title = models.CharField(max_length=50)
    date = models.DateField()
