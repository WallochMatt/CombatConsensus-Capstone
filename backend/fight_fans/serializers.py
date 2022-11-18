from rest_framework import serializers
from .models import FightFan
# class CarSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Car
#         fields = ['id', 'make', 'model', 'year', 'user_id']
#         depth = 1


class FightFanSerialzier(serializers.ModelSerializer):
    class Meta:
        model = FightFan
        fields = ['id', 'user_name', 'password', 'email', 'accuracy', 'is_admin']
        #May need to add depth