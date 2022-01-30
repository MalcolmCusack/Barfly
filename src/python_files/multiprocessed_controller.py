import json
from os import listdir
from os.path import isfile, join
import datetime
from multiprocessing import Pool
import requests
from bs4 import BeautifulSoup

CORES = 4

def processor(file):
    exec(open(scanners_path + file, "r").read())
    log.append(str(file) + " Completed");

log_mode = 1
log = []
log_file = "C:/Fall_2021/CSCI_331/Final_Project/Barfly/src/python_files/log_files/"+datetime.datetime.now().strftime("%d_%b_%Y")+".txt"

scanners_path = "C:/Fall_2021/CSCI_331/Final_Project/Barfly/src/python_files/scanners/"

output = {}

files = [f for f in listdir(scanners_path) if isfile(join(scanners_path, f))]

if __name__ == '__main__':
    pool = Pool(CORES)
    pool.map(processor, files)
    pool.close()
    pool.join()

exec(open("dictionary_generator.py", "r").read())

if(log_mode):
    file = open(log_file, "a")
    for item in log:
        file.write(item + "\n")
    file.close()
