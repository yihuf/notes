#coding:utf-8
import re
import base64
import rsa
import binascii
import time
import sys
import cookielib
import urllib2
import urllib
import json
import random
import os



def pre_login(uid):
    cj = cookielib.CookieJar()
    handler = urllib2.HTTPCookieProcessor(cj)
    opener = urllib2.build_opener(handler)
    urllib2.install_opener(opener)

    username = base64.encodestring(urllib2.quote('18827070643')).rstrip()

    url = 'http://login.sina.com.cn/sso/prelogin.php?'\
       'entry=weibo&callback=sinaSSOController.preloginCallBack&rsakt=mod&checkpin=1&'\
       'su={username}&_={timestamp}&client={client}'.format(username=username, timestamp=int(time.time() * 1000), client='ssologin.js(v1.4.18)')

    resp = urllib2.urlopen(url).read()
    p = re.compile('preloginCallBack\((.+)\)')
    info = json.loads(re.findall(p, resp)[0])

    if 'showpin' in info and info['showpin']:  # need to input verify code
        process_verify_code(info['pcid'])
        return True

    return False

def login(verify_code=''):
    if verify_code == '':
        return


def process_verify_code(pcid):
    url = 'http://login.sina.com.cn/cgi/pin.php?r={randint}&s=0&p={pcid}'.format(
        randint=int(random.random() * 1e8), pcid=pcid)
    BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    filename = os.path.join(BASE_DIR, 'static', 'images', '1.jpg')
    if os.path.isfile(filename):
        os.remove(filename)

    urllib.urlretrieve(url, filename)

