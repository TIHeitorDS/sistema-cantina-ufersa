from django.db import models
from clientes.models import Cliente

# Create your models here.
class Pedido(models.Model):
    cliente = models.ForeignKey(Cliente, on_delete=models.CASCADE)
    data = models.DateTimeField(auto_now_add=True)
    finalizado = models.BooleanField(default=False)

    def __str__(self):
        return f"Pedido #{self.id} - {self.cliente.nome}"