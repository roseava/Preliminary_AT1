from django.urls import path
from eduprod.views import *

urlpatterns = [
    path('', IndexView.as_view(), name='index'),
    # Add more paths for other views if needed
]
