from django.db import models

# Create your models here.
class Item(models.Model):
    nome = models.CharField(max_length=100)
    preco = models.CharField(max_length=5)
    imagem = models.ImageField(upload_to='itens/')
    disponivel = models.BooleanField(default=True)

    def __str__(self):
        return self.nome