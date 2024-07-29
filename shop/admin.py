from django.contrib import admin
from .models import (
    Customer,
    Cart,
    CartProduct,
    Category,
    Product,
    ProductView,
    Slider,
    Review,
    TrendingProduct,
    Order,
    Brand,
    
    )
# Register your models here.
admin.site.register([
    Customer,
    Cart,
    CartProduct,
    Category,
    Product,
    ProductView,
    Slider,
    Review,
    TrendingProduct,
    Order,
    Brand,
    ])