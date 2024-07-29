
from django.urls import path, include
from .views import *


urlpatterns = [
    path('categoryproduct/',CatagoryProductView.as_view()),
    path('categoryisview/',Catagoryisview.as_view()),
    path('catagorydetails/<int:pk>/',CatagoryDetails.as_view()),
    path('catagorydynamic/<int:pk>/',Catagorydynamicdetais.as_view()),
    path('trandingproduct/',mostviewsproduct.as_view()),
    path('slider/',Sliderview.as_view()),
    path('addview/',addviewproduct.as_view()),
   
   ]
