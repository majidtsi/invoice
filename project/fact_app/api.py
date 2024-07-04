from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser
from rest_framework import status
from rest_framework.response import Response
from django.contrib.auth.models import User

from .models import Customer, Invoice, Article
from .serializers import customerSerializer, invoiceSerializer, articleSerializer
from rest_framework.decorators import api_view, permission_classes

from rest_framework.permissions import AllowAny, IsAuthenticated

@api_view(['GET','POST'])
#@permission_classes([IsAuthenticated])
def invoice_list(request):
    # GET all invoice 
    if request.method == 'GET':
        print("------user-----")
        print(request.user)
        
        print("------fin user------")
        invoice = Invoice.objects.all().order_by('-invoice_date_time')
        invoice_serializer = invoiceSerializer(invoice, many=True)
        return Response(invoice_serializer.data)
    if request.method == 'POST':
        invoice_serializer = invoiceSerializer(data=request.data)
        if invoice_serializer.is_valid():
            invoice_serializer.save()
            return Response(status=status.HTTP_201_CREATED)
        return Response(invoice_serializer.errors,status=status.HTTP_400_BAD_REQUEST)

@api_view(['PUT','DELETE','GET'])
def invoice_detail(request,pk):
    try:
        invoice = Invoice.objects.get(pk=pk)
    except Invoice.DoesNotExist:
        return JsonResponse(status=status.HTTP_404_NOT_FOUND)
    
    if request.method == 'GET':
        articles=invoice.article_set.all()
        customer=invoice.customer
            
        serializer_article=articleSerializer(articles, many=True)
        serializer_invoice = invoiceSerializer(invoice)
        serializer_customer = customerSerializer(customer)
        context = {
        'invoice': serializer_invoice.data,
        'articles': serializer_article.data,
        'customer':serializer_customer.data
        }
        return JsonResponse(context,safe=False)
    
    elif request.method == 'PUT':
        serializer = invoiceSerializer(invoice,data=request.data, context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(status=status.HTTP_204_NO_CONTENT)
        return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'DELETE':
        invoice.delete()
        return Response({"delete": "success."},status=status.HTTP_204_NO_CONTENT)
    
@api_view(['POST'])
#@permission_classes([IsAuthenticated])
def customer_list(request):
    
    if request.method == 'POST':
     
        # user=User.objects.filter(username=request.data['save_by'])[0]
     
        customer_serializer = customerSerializer(data=request.data)
        if customer_serializer.is_valid():
            print("------prima di save-----")
            customer_serializer.save()
            print("------dopo save------")
            return Response(status=status.HTTP_201_CREATED)
        print("-------fin customer data --------")
        return Response(customer_serializer.errors,status=status.HTTP_400_BAD_REQUEST)