from rest_framework.response import Response
from rest_framework.decorators import api_view
import pymongo


import pymongo

@api_view(['GET'])
def getdata_ph_co2(request):
    client = pymongo.MongoClient('mongodb+srv://svenesismar:a4JvXYZg4PdHpo6m@projectk5cluster.xx0tioc.mongodb.net/')
    k5_database = client['k5-cluster']
    collection = k5_database['api_test']

    documents = collection.find({})

    projected_documents = []
    for document in documents:
        projected_documents.append({"population": document["population"]})

    return Response(projected_documents)

