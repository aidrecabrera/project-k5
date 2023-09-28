from rest_framework.response import Response
from rest_framework.decorators import api_view
import pymongo


@api_view(['GET'])
def getdata_ph_co2(request):
    client = pymongo.MongoClient('mongodb+srv://svenesismar:a4JvXYZg4PdHpo6m@projectk5cluster.xx0tioc.mongodb.net/')
    k5_database = client['k5-cluster']
    collection = k5_database['api_test']
    ph_co2 = collection.find({})
    for document in ph_co2:
        print(document['year'])
    return Response("hello")
