import json
from os import listdir
from os.path import isfile, join

json_path = "A:/Fall_2021/CSCI_331/Barfly/Barfly/src/json_dictionary/dictionary.json"
scanned_files_path = "A:/Fall_2021/CSCI_331/Barfly/Barfly/src/scraped_files/"

output = {}

files = [f for f in listdir(scanned_files_path) if isfile(join(scanned_files_path, f))]
for file in files:
    f = open(scanned_files_path + file, "r")
    for line in f:
        line = line.strip().split("|")
        if(line[1] not in output.keys()):
            if(len(line) == 4):
                output[line[1]] = [{"location":line[0], "name":line[2], "price":line[3]}]
            else:
                output[line[1]] = [{"location":line[0], "name":line[2], "price":line[3], "description":line[4]}]
        else:
            if(len(line) == 4):
                output[line[1]].append({"location":line[0], "name":line[2], "price":line[3]})
            else:
                output[line[1]].append({"location":line[0], "name":line[2], "price":line[3], "description":line[4]})
    f.close()

dump = json.dumps(output, sort_keys=True, indent=4)

file = open(json_path, "w")
for item in dump:
    file.write(item)
file.close()
