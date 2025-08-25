from rest_framework import viewsets
from .models import Item
from .serializers import ItemSerializers

class ItemViewSet(viewsets.ModelViewSet):
    queryset = Item.objects.all()
    serializer_class = ItemSerializers