from rest_framework import serializers
from .models import Produto 

class ProdutoSerializer(serializers.ModelSerializer):
    """
    Serializer para o modelo Produto (itens do cardápio).
    Converte instâncias do modelo Produto em representações JSON
    e vice-versa, lidando com a validação e persistência de dados.
    """
    class Meta:
        model = Produto 
        fields = '__all__' 
