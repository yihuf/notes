# -*- coding: utf-8 -*-
# Generated by Django 1.11.15 on 2019-05-26 14:22
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('notes', '0003_contents_modifydate'),
    ]

    operations = [
        migrations.CreateModel(
            name='Note',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('uuid', models.CharField(max_length=37)),
                ('parent_uuid', models.CharField(max_length=37)),
                ('name', models.CharField(max_length=100)),
                ('content', models.CharField(max_length=5000)),
                ('modifyDate', models.DateTimeField()),
                ('status', models.IntegerField()),
            ],
        ),
        migrations.DeleteModel(
            name='Contents',
        ),
        migrations.DeleteModel(
            name='Titles',
        ),
    ]
