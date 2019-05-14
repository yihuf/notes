#!/bin/python
#coding=utf-8

import logging
import logging.handlers
import os

max_log_size = 5*1024*1024
max_backup_num = 5
log_file_name = 'log/my.log'

if not os.path.exists('log'):
    os.mkdir('log', 755)

FORMAT = '[%(asctime)s] [%(filename)s : %(lineno)d] [%(process)d] [%(levelname)s] %(message)s'
logging.basicConfig(format=FORMAT)

my_logger = logging.getLogger('mylog')
my_logger.setLevel(logging.DEBUG)

my_handler = logging.handlers.RotatingFileHandler(log_file_name, maxBytes=max_log_size, backupCount=max_backup_num)

my_handler.setFormatter(logging.Formatter(fmt=FORMAT))

my_logger.addHandler(my_handler)





