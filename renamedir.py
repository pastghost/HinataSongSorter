from os import listdir
from os.path import isfile, join, exists
from os import rename
import re

mypath = r'src\songs'
onlyfiles = [f for f in listdir(mypath) if isfile(join(mypath, f))]

for i in onlyfiles :
    complete = mypath + r'\\'
    newname = re.sub(r'.*\d\.?\s','',i)
    rename(complete + i,complete + newname)
    print(mypath + newname)
