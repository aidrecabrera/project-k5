import json

from rest_framework.response import Response
from rest_framework.decorators import api_view

import pymongo


@api_view(['GET'])
def getdata_ph_co2(request):
    client = pymongo.MongoClient('mongodb+srv://svenesismar:a4JvXYZg4PdHpo6m@projectk5cluster.xx0tioc.mongodb.net/')
    k5_database = client['k5-cluster']
    collection = k5_database['api_test']

    documents = collection.find({})

    projected_documents = []
    for document in documents:
        projected_documents.append(document["year"])

    return Response(projected_documents)


from django.views.decorators.csrf import csrf_exempt


@csrf_exempt
@api_view(['GET'])
def ph_population(request):
    client = pymongo.MongoClient('mongodb+srv://svenesismar:a4JvXYZg4PdHpo6m@projectk5cluster.xx0tioc.mongodb.net/')
    k5_database = client['k5-cluster']
    collection = k5_database['api_test']
    documents = collection.find({})

    projected_documents = []
    for document in documents:
        projected_documents.append(
            {
                document["year"]: document["population"]
            }
        )
    output_format = [{
        "ph_population": projected_documents
    }]
    return Response(output_format)
