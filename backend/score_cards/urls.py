from django.urls import path
from . import views

urlpatterns = [
path('post/', views.fan_card),
path('<str:username>/', views.all_fan_cards),
path('<str:username>/accuracy/', views.accuracy),
path('<int:match>/findaverage/', views.find_average),
# path('<int:match>/find-fan-total/', views.find_fan_total)
]