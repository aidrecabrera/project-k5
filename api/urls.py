from django.urls import path
from . import views

urlpatterns = [
    path('ph/', views.getdata_ph_co2),
    path('ph/population', views.ph_population),
]
