import json

##Practical Example of the format for the python to raw json converison

# a Python object (dict):
x = {"beers":[
        {
            "name" : "Modelo Premium",
            "brand" : "Modelo",
            "price" : "$4.00"
        },
        {
            "name" : "Carona Premium",
            "brand" : "Carona",
            "price" : "$3.00"
        }
    ]
}

# convert into JSON:
y = json.dumps(x)

# the result is a JSON string:
print(y)
