from django.db import models
from authentication.models import User

# Create your models here.

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<


class Car(models.Model):
    user_name = models.ForeignKey(User, on_delete=models.CASCADE)
    password = models.CharField(max_length=30)
    email = models.CharField(max_length=100)
    accuracy = models.IntegerField()
    is_admin = models.BooleanField(default=False)
