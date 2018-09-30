from django.shortcuts import render, redirect
from .models import *
from django.core.serializers import serialize

def index(request):
    return render(request, 'wowwtf/index.html')

def process(request, spec):
    request.session['spec'] = spec
    gear = serialize('json', Gear.objects.filter(spec=spec, category="1"))
    context = { 
            'gearset': gear
            }
    return render(request, 'wowwtf/class.html', context)

# def show(request):
#     print(request.session['spec'])
#     context = {
#             'gear': request.session['gear']
#     }
#     print(context)
    