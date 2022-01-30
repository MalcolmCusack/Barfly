import requests
from bs4 import BeautifulSoup
import datetime

log_mode = 0
log = []
log_file = "C:/Fall_2021/CSCI_331/Final_Project/Barfly/src/python_files/log_files/"+datetime.datetime.now().strftime("%d_%b_%Y")+".txt"
output_location = "C:/Fall_2021/CSCI_331/Final_Project/Barfly/src/scraped_files/echo.txt"

def time():
    return datetime.datetime.now().strftime("%d/%b/%Y %H:%M:%S")

def rocking_r_drinks():

    location = "Rocking R Bar"
    
    #log.append(time() + " Starting Rocking R Drinks Function")
    
    output = []
    
    URL = "https://rockingrbar.com/Menus/category/drink"
    page = requests.get(URL)

    soup = BeautifulSoup(page.content, "html.parser")

    results = soup.find_all("div", class_="isoItem")
    
    for element in results:
        categories = element.find_all("h1")
        for category in categories:
            name = "Cocktail"
            drinks = element.find_all("div", class_="menuitem")
            for drink in drinks:
                drink_item = drink.find("h6").text.strip().split(" $")
                output.append("|".join([location, name, drink_item[0], drink_item[1], drink.find("p").text.strip()]))

    #log.append(time() + " Finished Rocking R Drinks Function")
    return output



file = open(output_location, "w")
for item in rocking_r_drinks():
    file.write(item + "\n")
file.close()

if(log_mode):
    file = open(log_file, "a")
    for item in log:
        file.write(item + "\n")
    file.close()

print("Echo Scan Completed")
