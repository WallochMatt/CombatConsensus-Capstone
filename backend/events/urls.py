from django.urls import path
from . import views

urlpatterns = [
    path('', views.all_events),
    path('<int:pk>/', views.one_event),
    path('admin/add/', views.add_event),
    path('<int:pk>/admin/edit/', views.edit_event)#Does int:pk need to be first?
]