from django.shortcuts import render
from rest_framework import viewsets
from .serializer import ProdutoSerializer
from .models import Produto
from rest_framework.parsers import MultiPartParser, FormParser

# API REST
class CardapioViewSet(viewsets.ModelViewSet):
    queryset = Produto.objects.all()
    serializer_class = ProdutoSerializer
    parser_classes = (MultiPartParser, FormParser)

# Página HTML
def cardapio_list(request):
    produtos = Produto.objects.all()
    return render(request, 'cardapio/cardapio.html', {'produtos': produtos})
