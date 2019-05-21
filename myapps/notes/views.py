# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.renderers import JSONRenderer
from rest_framework.parsers import JSONParser
from models import Contents, Titles
from serializers import ContentsSerializers, TitlesSerializers

import uuid

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
            titles = Titles.objects.all()
        except Titles.DoesNotExist:
            return HttpResponse(status=404)

        serializer = TitlesSerializers(titles, many=True)
        return JSONResponse(serializer.data)
    elif request.method == 'POST':
        data = JSONParser().parse(request)
        data['uuid'] = str(uuid.uuid1())
        serializer = TitlesSerializers(data=data)
        if serializer.is_valid():
            serializer.save()
            return JSONResponse(serializer.data, status=201)
        return JSONResponse(serializer.errors, status=400)

@csrf_exempt
def titles(request, uuid):
    print(uuid)
    try:
        titles = Titles.objects.get(uuid=uuid)
    except Titles.DoesNotExist:
        return HttpResponse(status=404)

    if request.method == 'GET':
        serializer = TitlesSerializers(titles)
        return JSONResponse(serializer.data)

    elif request.method == 'PUT':
        data = JSONParser().parse(request)
        serializer = TitlesSerializers(titles, data=data)
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
            titles = Titles.objects.filter(parent_uuid=parent_uuid)
        except Titles.DoesNotExist:
            return HttpResponse(status=404)

        serializer = TitlesSerializers(titles, many=True)
        return JSONResponse(serializer.data)

@csrf_exempt
def content(request, uuid):
    try:
        content = Contents.objects.get(uuid=uuid)
    except Contents.DoesNotExist:
        return HttpResponse(status=404)

    if request.method == 'GET':
        serializer = ContentsSerializers(content)
        return JSONResponse(serializer.data)

    elif request.method == 'PUT':
        data = JSONParser().parse(request)
        serializer = ContentsSerializers(content, data=data)
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
        serializer = ContentsSerializers(data=data)
        if serializer.is_valid():
            serializer.save()
            return JSONResponse(serializer.data, status=201)
        return JSONResponse(serializer.errors, status=400)
    elif request.method == 'GET':
        try:
            content = Contents.objects.all()
        except Contents.DoesNotExist:
            return HttpResponse(status=404)
        serializer = ContentsSerializers(content, many=True)
        return JSONResponse(serializer.data)

@csrf_exempt
def all_content(request):
    if request.method == 'GET':
        try:
            content = Contents.objects.all()
        except Contents.DoesNotExist:
            return HttpResponse(status=404)
        serializer = ContentsSerializers(content, many=True)
        return JSONResponse(serializer.data)
