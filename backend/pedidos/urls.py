from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import PedidoViewSet

# Create a router and register our viewset with it.
router = DefaultRouter()
router.register(r'pedidos', PedidoViewSet) 

urlpatterns = [
    path('', include(router.urls)),
]