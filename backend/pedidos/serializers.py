from rest_framework import serializers
from .models import Pedido
from clientes.serializers import ClienteSerializer 

class PedidoSerializer(serializers.ModelSerializer):

    cliente = ClienteSerializer(read_only=True) 

    class Meta:
        model = Pedido
        fields = ['id', 'cliente', 'data', 'finalizado']