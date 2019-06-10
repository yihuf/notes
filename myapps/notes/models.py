# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models


# Create your models here.
class Note(models.Model):
    uuid = models.CharField(max_length=37)
    parent_uuid = models.CharField(max_length=37)
    name = models.CharField(max_length=100)
    content = models.CharField(max_length=5000)
    modifyDate = models.DateTimeField()
    status = models.IntegerField()

