from django.urls import path
from . import api

urlpatterns = [ 
    path('invoice/', api.invoice_list, name='invoice'),
    path('invoice/<int:pk>/', api.invoice_detail, name='invoice'),
    path('customer/', api.customer_list, name='customer'),

]