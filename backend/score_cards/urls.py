from django.urls import path
from . import views

urlpatterns = [
path('post/', views.fan_card),
path('fetch/', views.all_fan_cards)
]