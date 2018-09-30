from django.db import models

class Gear(models.Model):
    header = models.CharField(max_length=255)
    place = models.CharField(max_length=255)
    itemID = models.IntegerField()
    tableloc = models.CharField(max_length=1)
    spec = models.CharField(max_length = 255)
    category = models.IntegerField()