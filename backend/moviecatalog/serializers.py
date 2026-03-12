from rest_framework import serializers
from .models import Dbmovies

class DBMovies_Serializer(serializers.ModelSerializer):
    product_id = serializers.PrimaryKeyRelatedField(queryset=Dbmovies.objects.all(), source='tmdb_id')
    class Meta:
        model = Dbmovies
        fields = '__all__'
        
        