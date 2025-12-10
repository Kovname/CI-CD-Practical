"""Demo Project URL Configuration."""
from django.urls import path, include


urlpatterns = [
    path('', include('demo_app.urls')),
]
