import pymongo
from django.views.decorators.cache import cache_page
from rest_framework.response import Response
from rest_framework.decorators import api_view

# MongoDB client and add new connection to the k5-cluster once.
client = pymongo.MongoClient('mongodb+srv://svenesismar:a4JvXYZg4PdHpo6m@projectk5cluster.xx0tioc.mongodb.net/')


@api_view(['GET'])
@cache_page(600)
def getdata_ph_co2(request):
    k5_database = client['k5-cluster']
    collection = k5_database['api_test']

    documents = collection.find({}, projection={'year': 1})
    for document in documents:
        print(document)

    return Response(documents)


@api_view(['GET'])
@cache_page(600)
def ph_population(request):
    k5_database = client['k5-cluster']
    collection = k5_database['api_test']

    documents = collection.find({}, projection={'year': 1, 'population': 1})

    projected_documents = []
    for document in documents:
        document["_id"] = str(document["_id"])
        projected_documents.append(document)

    population = [{document["year"]: document["population"]} for document in projected_documents]

    return Response({
        "ph_population": population
    })

