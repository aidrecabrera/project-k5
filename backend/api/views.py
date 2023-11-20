import pymongo
from django.conf import settings
from django.views.decorators.cache import cache_page
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.shortcuts import render

client = pymongo.MongoClient(
    'mongodb+srv://svenesismar:a4JvXYZg4PdHpo6m@projectk5cluster.xx0tioc.mongodb.net/')
k5_database = client['k5-cluster']
collection = k5_database['api_test']

@api_view(['GET'])
def getApiInformation(request):
    return Response({
        "Project": "K5",
        "Author": "Aidre Cabrera"
    })


def get_data_with_projection(projection, sort_key='_id'):
    documents = collection.find({}, projection=projection).sort(sort_key, pymongo.ASCENDING)
    projected_documents = []

    for document in documents:
        document["_id"] = str(document["_id"])
        projected_documents.append(document)

    return projected_documents


def handle_missing_data(data, key):
    result = []
    for document in data:
        if key in document:
            result.append({document["year"]: document[key]})
    return result


@api_view(['GET'])
@cache_page(600)
def population(request):
    projected_documents = get_data_with_projection({'year': 1, 'population': 1})
    population = handle_missing_data(projected_documents, 'population')

    return Response({
        "ph_population": population
    })


@api_view(['GET'])
@cache_page(600)
def year(request):
    projected_documents = get_data_with_projection({'year': 1})
    years = [document["year"] for document in projected_documents]

    return Response({
        "Projected Years": years
    })


@api_view(['GET'])
@cache_page(600)
def co2(request):
    projected_documents = get_data_with_projection({'year': 1, 'co2': 1})
    data = handle_missing_data(projected_documents, 'co2')

    return Response({"CO2 Data": data})


@api_view(['GET'])
@cache_page(600)
def cement_co2(request):
    projected_documents = get_data_with_projection({'year': 1, 'cement_co2': 1})
    cement_co2 = handle_missing_data(projected_documents, 'cement_co2')

    return Response({
        "Cement CO2 Data": cement_co2
    })


@api_view(['GET'])
@cache_page(600)
def cement_co2_per_capita(request):
    projected_documents = get_data_with_projection(
        {'year': 1, 'cement_co2_per_capita': 1})
    cement_co2_per_capita = handle_missing_data(
        projected_documents, 'cement_co2_per_capita')

    return Response({
        "Cement CO2 Per Capita Data": cement_co2_per_capita
    })


@api_view(['GET'])
@cache_page(600)
def co2_growth_abs(request):
    projected_documents = get_data_with_projection(
        {'year': 1, 'co2_growth_abs': 1})
    co2_growth_abs = handle_missing_data(
        projected_documents, 'co2_growth_abs')

    return Response({
        "CO2 Growth Absolute Data": co2_growth_abs
    })


@api_view(['GET'])
@cache_page(600)
def co2_growth_prct(request):
    projected_documents = get_data_with_projection(
        {'year': 1, 'co2_growth_prct': 1})
    co2_growth_prct = handle_missing_data(
        projected_documents, 'co2_growth_prct')

    return Response({
        "CO2 Growth Percentage Data": co2_growth_prct
    })


@api_view(['GET'])
@cache_page(600)
def co2_including_luc(request):
    projected_documents = get_data_with_projection(
        {'year': 1, 'co2_including_luc': 1})
    co2_including_luc = handle_missing_data(
        projected_documents, 'co2_including_luc')

    return Response({
        "CO2 Including LUC Data": co2_including_luc
    })


@api_view(['GET'])
@cache_page(600)
def co2_including_luc_growth_abs(request):
    projected_documents = get_data_with_projection(
        {'year': 1, 'co2_including_luc_growth_abs': 1})
    co2_including_luc_growth_abs = handle_missing_data(
        projected_documents, 'co2_including_luc_growth_abs')

    return Response({
        "CO2 Including LUC Growth Absolute Data": co2_including_luc_growth_abs
    })


@api_view(['GET'])
@cache_page(600)
def co2_including_luc_growth_prct(request):
    projected_documents = get_data_with_projection(
        {'year': 1, 'co2_including_luc_growth_prct': 1})
    co2_including_luc_growth_prct = handle_missing_data(
        projected_documents, 'co2_including_luc_growth_prct')

    return Response({
        "CO2 Including LUC Growth Percentage Data": co2_including_luc_growth_prct
    })


@api_view(['GET'])
@cache_page(600)
def co2_including_luc_per_capita(request):
    projected_documents = get_data_with_projection(
        {'year': 1, 'co2_including_luc_per_capita': 1})
    co2_including_luc_per_capita = handle_missing_data(
        projected_documents, 'co2_including_luc_per_capita')

    return Response({
        "CO2 Including LUC Per Capita Data": co2_including_luc_per_capita
    })


@api_view(['GET'])
@cache_page(600)
def co2_including_luc_per_unit_energy(request):
    projected_documents = get_data_with_projection(
        {'year': 1, 'co2_including_luc_per_unit_energy': 1})
    co2_including_luc_per_unit_energy = handle_missing_data(
        projected_documents, 'co2_including_luc_per_unit_energy')

    return Response({
        "CO2 Including LUC Per Unit Energy Data": co2_including_luc_per_unit_energy
    })


@api_view(['GET'])
@cache_page(600)
def co2_per_capita(request):
    projected_documents = get_data_with_projection(
        {'year': 1, 'co2_per_capita': 1})
    co2_per_capita = handle_missing_data(
        projected_documents, 'co2_per_capita')

    return Response({
        "CO2 Per Capita Data": co2_per_capita
    })


@api_view(['GET'])
@cache_page(600)
def co2_per_unit_energy(request):
    projected_documents = get_data_with_projection(
        {'year': 1, 'co2_per_unit_energy': 1})
    co2_per_unit_energy = handle_missing_data(
        projected_documents, 'co2_per_unit_energy')

    return Response({
        "CO2 Per Unit Energy Data": co2_per_unit_energy
    })


@api_view(['GET'])
@cache_page(600)
def coal_co2(request):
    projected_documents = get_data_with_projection({'year': 1, 'coal_co2': 1})
    coal_co2 = handle_missing_data(projected_documents, 'coal_co2')

    return Response({
        "Coal CO2 Data": coal_co2
    })


@api_view(['GET'])
@cache_page(600)
def coal_co2_per_capita(request):
    projected_documents = get_data_with_projection(
        {'year': 1, 'coal_co2_per_capita': 1})
    coal_co2_per_capita = handle_missing_data(
        projected_documents, 'coal_co2_per_capita')

    return Response({
        "Coal CO2 Per Capita Data": coal_co2_per_capita
    })


@api_view(['GET'])
@cache_page(600)
def cumulative_cement_co2(request):
    projected_documents = get_data_with_projection(
        {'year': 1, 'cumulative_cement_co2': 1})
    cumulative_cement_co2 = handle_missing_data(
        projected_documents, 'cumulative_cement_co2')

    return Response({
        "Cumulative Cement CO2 Data": cumulative_cement_co2
    })


@api_view(['GET'])
@cache_page(600)
def cumulative_co2(request):
    projected_documents = get_data_with_projection(
        {'year': 1, 'cumulative_co2': 1})
    cumulative_co2 = handle_missing_data(
        projected_documents, 'cumulative_co2')

    return Response({
        "Cumulative CO2 Data": cumulative_co2
    })


@api_view(['GET'])
@cache_page(600)
def cumulative_co2_including_luc(request):
    projected_documents = get_data_with_projection(
        {'year': 1, 'cumulative_co2_including_luc': 1})
    cumulative_co2_including_luc = handle_missing_data(
        projected_documents, 'cumulative_co2_including_luc')

    return Response({
        "Cumulative CO2 Including LUC Data": cumulative_co2_including_luc
    })


@api_view(['GET'])
@cache_page(600)
def cumulative_coal_co2(request):
    projected_documents = get_data_with_projection(
        {'year': 1, 'cumulative_coal_co2': 1})
    cumulative_coal_co2 = handle_missing_data(
        projected_documents, 'cumulative_coal_co2')

    return Response({
        "Cumulative Coal CO2 Data": cumulative_coal_co2
    })


@api_view(['GET'])
@cache_page(600)
def cumulative_flaring_co2(request):
    projected_documents = get_data_with_projection(
        {'year': 1, 'cumulative_flaring_co2': 1})
    cumulative_flaring_co2 = handle_missing_data(
        projected_documents, 'cumulative_flaring_co2')

    return Response({
        "Cumulative Flaring CO2 Data": cumulative_flaring_co2
    })


@api_view(['GET'])
@cache_page(600)
def cumulative_gas_co2(request):
    projected_documents = get_data_with_projection(
        {'year': 1, 'cumulative_gas_co2': 1})
    cumulative_gas_co2 = handle_missing_data(
        projected_documents, 'cumulative_gas_co2')

    return Response({
        "Cumulative Gas CO2 Data": cumulative_gas_co2
    })


@api_view(['GET'])
@cache_page(600)
def cumulative_luc_co2(request):
    projected_documents = get_data_with_projection(
        {'year': 1, 'cumulative_luc_co2': 1})
    cumulative_luc_co2 = handle_missing_data(
        projected_documents, 'cumulative_luc_co2')

    return Response({
        "Cumulative LUC CO2 Data": cumulative_luc_co2
    })


@api_view(['GET'])
@cache_page(600)
def cumulative_oil_co2(request):
    projected_documents = get_data_with_projection(
        {'year': 1, 'cumulative_oil_co2': 1})
    cumulative_oil_co2 = handle_missing_data(
        projected_documents, 'cumulative_oil_co2')

    return Response({
        "Cumulative Oil CO2 Data": cumulative_oil_co2
    })
