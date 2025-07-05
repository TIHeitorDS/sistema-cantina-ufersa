from django.db import models

# Create your models here.
class Produto(models.Model):
    nome = models.CharField(max_length=100)
    preco = models.DecimalField(decimal_places=2, max_digits=6)
    disponivel = models.BooleanField(default=True)
    
    def __str__(self):
        return self.nome