from django.urls import path
from . import views

urlpatterns = [
    path('', views.all_matches),
    path('<int:pk>/', views.one_match),
    path('admin/add/', views.add_match),
    path('<int:pk>/admin/edit/', views.edit_match),
    path('<int:event>/sort-matches/', views.event_matches),
    path('<int:fighter>/find-ofc-total/', views.find_ofc_total)
]