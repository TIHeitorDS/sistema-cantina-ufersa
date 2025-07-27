from django.db import models
from django.db.models.signals import post_save
from django.dispatch import receiver
from channels.layers import get_channel_layer
from asgiref.sync import async_to_sync
from cardapio.models import Produto
from django.db.models.signals import m2m_changed
import json

# Create your models here.
class Pedido(models.Model):
    produto = models.ManyToManyField(Produto, related_name='pedidos', blank=True)
    nome_cliente = models.CharField(max_length=100, blank=True, null=True)
    observacao = models.TextField(blank=True, null=True)

    def __str__(self):
       return f"Pedido de {self.nome_cliente}"
    
@receiver(m2m_changed, sender=Pedido.produto.through)
def notify_pedido(sender, instance, action, **kwargs):
    if action == "post_add":
        channel_layer = get_channel_layer()
        async_to_sync(channel_layer.group_send)(
            'group_pedidos_cantina',
            {
            'type': 'notificar_pedido',
            'pedido': {
                'id': instance.id,
                'nome_cliente': instance.nome_cliente,
                'observacao': instance.observacao,
                'produtos': [produto.nome for produto in instance.produto.all()],
                'preco': [float(produto.preco) for produto in instance.produto.all()],
            }
            }
        )