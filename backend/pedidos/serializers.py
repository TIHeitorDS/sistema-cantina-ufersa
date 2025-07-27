from rest_framework import serializers
from .models import Pedido

class PedidoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pedido
        fields = ['id', 'produto', 'nome_cliente', 'observacao']
    
    def get_produto(self, obj):
        return [produto.nome for produto in obj.produto.all()]
    
    def create(self, validated_data):
        produtos_data = validated_data.pop('produto', [])
        pedido = Pedido.objects.create(**validated_data)
        pedido.produto.set(produtos_data)
        return pedido