from rest_framework import routers
from rest_framework.routers import DefaultRouter
from .views import DBMovies_ViewSet, SearchMoview_ViewSet
from django.urls import path, include

router1 = DefaultRouter()
router1.register(r'movies_info',  DBMovies_ViewSet)
router2 = DefaultRouter()
router2.register(r'search_movie',  SearchMoview_ViewSet)

urlpatterns = [
    path('', include(router1.urls)),
    path('', include(router2.urls))
]

