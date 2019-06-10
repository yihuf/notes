# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.renderers import JSONRenderer
from rest_framework.parsers import JSONParser
from models import Note
from serializers import NoteSerializers

import uuid
from datetime import datetime

class JSONResponse(HttpResponse):
    """
    An HttpResponse that renders its content into JSON.
    """
    def __init__(self, data, **kwargs):
        content = JSONRenderer().render(data)
        kwargs['content_type'] = 'application/json'
        super(JSONResponse, self).__init__(content, **kwargs)


@csrf_exempt
def all_titles(request):
    if request.method == 'GET':
        try:
            titles = Note.objects.all()
        except Note.DoesNotExist:
            return HttpResponse(status=404)

        serializer = NoteSerializers(titles, many=True)
        return JSONResponse(serializer.data)
    elif request.method == 'POST':
        data = JSONParser().parse(request)
        data['uuid'] = str(uuid.uuid1())
        if data['parent_uuid'] == '000-000-000-000':
            data['content'] = 'NA'
        data['modifyDate'] = datetime.now()
        serializer = NoteSerializers(data=data)
        if serializer.is_valid():
            serializer.save()
            return JSONResponse(serializer.data, status=201)
        return JSONResponse(serializer.errors, status=400)

@csrf_exempt
def titles(request, uuid):
    print(uuid)
    try:
        titles = Note.objects.get(uuid=uuid)
    except Note.DoesNotExist:
        return HttpResponse(status=404)

    if request.method == 'GET':
        serializer = NoteSerializers(titles)
        return JSONResponse(serializer.data)

    elif request.method == 'PUT':
        data = JSONParser().parse(request)
        serializer = NoteSerializers(titles, data=data)
        if serializer.is_valid():
            serializer.save()
            return JSONResponse(serializer.data)
        return JSONResponse(serializer.errors, status=400)

    elif request.method == 'DELETE':
        titles.delete()
        return HttpResponse(status=204)


@csrf_exempt
def get_titles_by_parent_uuid(request, parent_uuid):
    if request.method == 'GET':
        try:
            titles = Note.objects.filter(parent_uuid=parent_uuid)
        except Note.DoesNotExist:
            return HttpResponse(status=404)

        serializer = NoteSerializers(titles, many=True)
        return JSONResponse(serializer.data)

@csrf_exempt
def content(request, uuid):
    try:
        content = Note.objects.get(uuid=uuid)
    except Note.DoesNotExist:
        return HttpResponse(status=404)

    if request.method == 'GET':
        serializer = NoteSerializers(content)
        return JSONResponse(serializer.data)

    elif request.method == 'PUT':
        data = JSONParser().parse(request)
        serializer = NoteSerializers(content, data=data)
        if serializer.is_valid():
            serializer.save()
            return JSONResponse(serializer.data)
        return JSONResponse(serializer.errors, status=400)

    elif request.method == 'DELETE':
        content.delete()
        return HttpResponse(status=204)

@csrf_exempt
def add_content(request):
    if request.method == 'POST':
        data = JSONParser().parse(request)
        serializer = NoteSerializers(data=data)
        if serializer.is_valid():
            serializer.save()
            return JSONResponse(serializer.data, status=201)
        return JSONResponse(serializer.errors, status=400)
    elif request.method == 'GET':
        try:
            content = Note.objects.all()
        except Note.DoesNotExist:
            return HttpResponse(status=404)
        serializer = NoteSerializers(content, many=True)
        return JSONResponse(serializer.data)

@csrf_exempt
def all_content(request):
    if request.method == 'GET':
        try:
            content = Note.objects.all()
        except Note.DoesNotExist:
            return HttpResponse(status=404)
        serializer = NoteSerializers(content, many=True)
        return JSONResponse(serializer.data)
