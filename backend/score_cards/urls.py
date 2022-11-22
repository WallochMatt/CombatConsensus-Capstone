from django.urls import path
from . import views

urlpatterns = [
path('post/', views.fan_card),
path('<int:fan_id>/', views.all_fan_cards)
]