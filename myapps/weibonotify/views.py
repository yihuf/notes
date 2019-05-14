# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render

import notify

# Create your views here.
def index(request):
    functions = [
        '微博通知'
    ]

    return render(request, 'weibonotify/index.html', {'functions': functions})


def search(request):
    return render(request, 'weibonotify/search_uid.html')


def check_login(request):
    uid = request.POST['uid']
    is_need_check_verify_code = notify.pre_login(uid)
    if not is_need_check_verify_code:
        notify.login()

    return render(request, 'weibonotify/pre_login.html', {'is_need_check_verify_code': is_need_check_verify_code})

def login(request):
    verify_code = request.POST['verify_code']
    notify.login(verify_code)

    return render(request, 'weibonotify/success.html')
