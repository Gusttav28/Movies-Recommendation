from django.shortcuts import render
from rest_framework import viewsets, permissions, filters
from django_filters.rest_framework import DjangoFilterBackend
from .models import Dbmovies
from .serializers import DBMovies_Serializer

# Create your views here.

class DBMovies_ViewSet(viewsets.ModelViewSet):
    queryset = Dbmovies.objects.all()[:50]
    permission_classes = [permissions.AllowAny]
    serializer_class = DBMovies_Serializer


class SearchMoview_ViewSet(viewsets.ModelViewSet):
    queryset = Dbmovies.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = DBMovies_Serializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['=title', '=genres', '=tmdb_id']