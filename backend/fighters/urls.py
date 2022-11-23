from django.urls import path
from . import views

urlpatterns = [
    path('', views.all_fighters),
    path('<int:pk>/', views.one_fighter),
    path('admin/add/', views.add_fighter),
    path('<int:pk>/admin/edit/', views.edit_fighter),
    path('fanfav/', views.find_fan_fav),
    path('ofcfav/', views.find_ofc_fav)
]