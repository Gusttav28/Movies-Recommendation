# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models


class Dbmovies(models.Model):
    tmdb_id = models.BigIntegerField(blank=True, primary_key=True)
    title = models.TextField(blank=True, null=True)
    original_title = models.TextField(blank=True, null=True)
    release_date = models.TextField(blank=True, null=True)
    genres = models.TextField(blank=True, null=True)
    vote_average = models.FloatField(blank=True, null=True)
    vote_count = models.BigIntegerField(blank=True, null=True)
    popularity = models.FloatField(blank=True, null=True)
    original_language = models.TextField(blank=True, null=True)
    overview = models.TextField(blank=True, null=True)
    poster_url = models.TextField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'DBMovies'
