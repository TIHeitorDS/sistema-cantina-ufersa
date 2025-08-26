from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ItemViewSet, CustomerViewSet, OrderViewSet, OrderItemViewSet

router = DefaultRouter()
router.register(r'items', ItemViewSet)
router.register(r'customers', CustomerViewSet)
router.register(r'order', OrderViewSet)
router.register(r'items', OrderItemViewSet)


urlpatterns = [
    path('', include(router.urls)),
]
