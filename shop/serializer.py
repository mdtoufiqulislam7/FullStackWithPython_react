from rest_framework import serializers
from .models import *



class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'
        depth = 1
    def imageurl(self, obj):
        request = self.context.get('request')
        return request.url(image)    

class CetagorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = "__all__"        
    def imageurl(self, obj):
        request = self.context.get('request')
        return request.url(image)      


class Produtdynamicdetails(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'
        depth = 1
    def imageurl(self, obj):
        request = self.context.get('request')
        return request.url(image)     
    
class ProductReviewseralizer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = ['id','customer','title']
        depth = 1    

class trandingproductserializer(serializers.ModelSerializer):
    class Meta:
        model = TrendingProduct
        fields = '__all__'        
    def to_representation(self,instance):
        response = super().to_representation(instance)
        request =self.context.get('request')
        response['product'] = ProductSerializer(instance.product,context={'request':request}).data 
        return response   

class sliderserializer(serializers.ModelSerializer):
    class Meta:
        model = Slider
        fields = '__all__'  
        
    def image(self,*args, **kwargs):
        request = self.context.get('request')
        return request.url(image)       