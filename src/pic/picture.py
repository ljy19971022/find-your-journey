import urllib.request
import requests
import json

park_codes = ["ACAD","ARCH","BADL","BIBE","BISC","BLCA","BRCA","CANY","CARE","CAVE","CHIS","CONG","CRLA","CUVA","DENA","DEVA","DRTO","EVER","GAAR","GLAC","GLBA","GRBA","GRCA","GRSA","GRSM","GRTE","GUMO","HALE","HAVO","HOSP","ISRO","JOTR","KATM","KEFJ","KOVA","LACL","LAVO","MACA","MEVE","MORA","NOCA","OLYM","PEFO","PINN","REDW","ROMO","SAGU","SEKI","SHEN","THRO","VOYA","WICA","WRST","YELL","YOSE","ZION"]

for park_id in park_codes:
    url = 'https://developer.nps.gov/api/v1/parks/?'
    params = {
        "parkCode": park_id,
        "api_key": "XyfGexV5dD7h0K4I05ycyNYc9oF5waptcu82RckQ",
    }
    response = requests.get(url, params=params).json()

    park_data = response['data']
    park_code = park_data[0]['parkCode']

    images = park_data[0]['images']
    park_image = images[0]['url']

    park_image_name = park_code + ".jpg"

    urllib.request.urlretrieve(park_image, park_image_name)