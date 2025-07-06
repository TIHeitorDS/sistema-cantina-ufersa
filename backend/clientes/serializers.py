from rest_framework import serializers
from .models import Cliente # Importe o seu modelo Cliente

class ClienteSerializer(serializers.ModelSerializer):
    """
    Serializer para o modelo Cliente.
    Converte instâncias do modelo Cliente em representações JSON
    e vice-versa, lidando com a validação e persistência de dados.
    """
    class Meta:
        model = Cliente
        fields = '__all__' 
