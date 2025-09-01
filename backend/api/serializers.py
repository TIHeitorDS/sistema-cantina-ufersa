from rest_framework import serializers
from .models import Product, Customer, Order, OrderProduct

class ProductSerializers(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'
        
class CustomerSerializers(serializers.ModelSerializer):
    class Meta:
        model = Customer
        fields = '__all__'
  
class OrderSerializers(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = '__all__'

class OrderProductSerializers(serializers.ModelSerializer):
    class Meta:
        model = OrderProduct
        fields = '__all__'