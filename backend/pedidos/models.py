from django.db import models
from cardapio.models import Produto

# Create your models here.
class Pedido(models.Model):
    produto = models.ForeignKey(Produto, on_delete=models.CASCADE, related_name='pedidos', blank=True, null=True)
    nome_cliente = models.CharField(max_length=100, blank=True, null=True)
    obersarvacao = models.TextField(blank=True, null=True)

    def __str__(self):
       return f"Pedido de {self.nome_cliente} - {self.produto.nome}"