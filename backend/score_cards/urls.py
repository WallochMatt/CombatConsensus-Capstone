from django.urls import path
from . import views

urlpatterns = [
path('post/', views.fan_card),
path('<str:username>/', views.all_fan_cards),
path('<str:username>/accuracy/', views.accuracy),
]