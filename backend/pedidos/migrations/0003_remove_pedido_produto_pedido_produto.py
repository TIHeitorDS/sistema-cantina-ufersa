# Generated by Django 4.2.23 on 2025-07-05 19:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cardapio', '0002_produto_imagem'),
        ('pedidos', '0002_remove_pedido_cliente_remove_pedido_data_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='pedido',
            name='produto',
        ),
        migrations.AddField(
            model_name='pedido',
            name='produto',
            field=models.ManyToManyField(blank=True, related_name='pedidos', to='cardapio.produto'),
        ),
    ]
