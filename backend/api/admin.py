from django.contrib import admin
from .models import Item

@admin.register(Item)
class ItemAdmin(admin.ModelAdmin):
    list_display = ('id', 'nome', 'preco', 'imagem', 'disponivel')
    list_filter = ('disponivel',)
    search_fields = ('nome',)
