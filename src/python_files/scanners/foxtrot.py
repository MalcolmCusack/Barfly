import requests
from bs4 import BeautifulSoup
import datetime

log_mode = 0
log = []
log_file = "C:/Fall_2021/CSCI_331/Final_Project/Barfly/src/python_files/log_files/"+datetime.datetime.now().strftime("%d_%b_%Y")+".txt"
output_location = "C:/Fall_2021/CSCI_331/Final_Project/Barfly/src/scraped_files/foxtrot.txt"

def time():
    return datetime.datetime.now().strftime("%d/%b/%Y %H:%M:%S")

def rocking_r_food():

    location = "Rocking R Bar"
    
    #log.append(time() + " Starting Rocking R Food Function")

    output = []
    
    URL = "https://www.hailmarysbozeman.com/"
    page = requests.get(URL)

    soup = BeautifulSoup(page.content, "html.parser")
    
    items = soup.find_all("div", "menu-item")
    for item in items:
        name = "Food"
        title = item.find("div", "menu-item-title").text.strip()
        description = item.find("div", "menu-item-description")
        if(description == None):
            #log.append(time()+ " ERROR: Description unavailible for " + title)
            description = ""
        else:
            description = description.text.strip()
        price = item.find("span", "menu-item-price-top")
        if(price == None):
            price = None
            #log.append(time()+ " ERROR: Price unavailible for " + title)
        else:
            price = price.text.strip()
            price = price.split("$")[1:]
            price = "".join([i.strip() for i in price])
            price = price.split(" ")
            price = "".join([i.strip() for i in price])
        if(description != None and price != None):
            output.append("|".join([location, name, title, price, description]))

    #log.append(time()+ " Finished Rocking R Food Function")
    return output

file = open(output_location, "w")
for item in rocking_r_food():
    file.write(item + "\n")
file.close()

if(log_mode):
    file = open(log_file, "a")
    for item in log:
        file.write(item + "\n")
    file.close()

print("Foxtrot Scan Completed")
