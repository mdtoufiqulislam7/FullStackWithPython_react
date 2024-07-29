from django.shortcuts import render

from .models import *
from .serializer import *
from rest_framework.response import Response
from rest_framework.views import APIView


# class CatagoryProductView(APIView):
#     def get(self,request):
#         category_obj = Category.objects.all()
#         category_seri = CetagorySerializer(category_obj,many=True).data 
        
#         data = []
        
#         for cata in category_seri:
#             product_obj = Product.objects.filter(category=cata['id'])
#             cata['products'] = ProductSerializer(product_obj,many=True).data
#             data.append(cata)
#         return Response(data)    

class CatagoryProductView(APIView):
    def get(self, request):
        category_obj = Category.objects.all()
        category_serializer = CetagorySerializer(category_obj, many=True).data
        data = []
        for cata in category_serializer:
            product_obj = Product.objects.filter(category=cata['id'])
            cata['products'] = ProductSerializer(
                product_obj, many=True, context={'request': request}).data
            data.append(cata)
        return Response(data)    


class Catagoryisview(APIView):
    def get(self,request):
        catagory_obj = Category.objects.all()
        category_serializer =  CetagorySerializer(catagory_obj,many=True,context={'request': request}).data  
        return Response(category_serializer) 
    

class CatagoryDetails(APIView):
    def get(self,request,pk):
        category_obj = Category.objects.filter(id=pk)
        category_serializer = CetagorySerializer(category_obj, many=True,context={'request': request}).data
        data = []
        for cata in category_serializer:
            product_obj = Product.objects.filter(category=cata['id'])
            cata['products'] = ProductSerializer(product_obj, many=True, context={'request': request}).data
            data.append(cata)
        return Response(data) 

class Catagorydynamicdetais(APIView):
    def get(self,request,pk):
        category_obj = Product.objects.filter(id=pk)
        data =[]
        category_serializer = Produtdynamicdetails(category_obj,many=True,context={'request': request}).data
        for prod in category_serializer:
            prod_view = ProductView.objects.filter(product=prod['id']).first()
            if prod_view:
                prod['view']=prod_view.view
            else:
                prod['view']=0
            prod_review = Review.objects.filter(product=prod['id'])
            prod_review_serializer= ProductReviewseralizer(prod_review,many=True).data 
            prod['review']= prod_review_serializer   
            data.append(prod)            
        return Response(data)           
    
class mostviewsproduct(APIView):
    def get(self,request):
        tranding_obj = TrendingProduct.objects.all()
        tranding_seri= trandingproductserializer(tranding_obj,context={'request':request}, many=True).data
        return Response(tranding_seri)    
    
class Sliderview(APIView):
    def get(self,request):
        slider_obj = Slider.objects.all()
        slider_seri = sliderserializer(slider_obj,many=True,context={'request':request}).data  
        return Response(slider_seri)  
    

class addviewproduct(APIView):
    def post(self,request):
        p_id = request.data['id']
        p_obj = Product.objects.get(id=p_id)
        p_view_obj = ProductView.objects.filter(product=p_obj).first()
        
        if p_view_obj:
            p_view_obj.view += 1  
            p_view_obj.save() 
        else:
            ProductView.objects.create(product=p_obj,view=1)     
        return Response({'error': False,'massege':'succesfully done'})    