from django.shortcuts import render
from rest_framework import viewsets
from .models import Pedido
from .serializers import PedidoSerializer

# Create your views here.
class PedidoViewSet(viewsets.ModelViewSet):
    queryset = Pedido.objects.all()
    serializer_class = PedidoSerializer

    def get_queryset(self):
        """
        Optionally restricts the returned pedidos to a given cliente,
        by filtering against a `cliente` query parameter in the URL.
        """
        queryset = Pedido.objects.all()
        return queryset