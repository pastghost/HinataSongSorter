
import json
from os.path import exists

with open('tst.js', encoding="utf8") as f:
  data = json.load(f)

for i in data:
    name = 'src/songs/' + i['nameKanji'] + '.mp3'
    if not exists(name):
        print(name + ' | ' + i['name'])
