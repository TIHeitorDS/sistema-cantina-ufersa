from django.urls import path, include
from rest_framework import routers
from .views import CardapioViewSet, cardapio_list

router = routers.DefaultRouter()
router.register(r'produtos', CardapioViewSet)

urlpatterns = [
     path('api/', include(router.urls)), 
    path('cardapio/', cardapio_list, name='cardapio_list'),
]