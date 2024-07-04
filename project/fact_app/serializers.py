from rest_framework import serializers
from .models import *
from authy.serializers import UserSerializer
from django.forms.models import model_to_dict
from django.contrib.auth.models import User

class UserListingField(serializers.RelatedField):
    def to_representation(self, instance):
        return model_to_dict(instance.User)
class customerSerializer(serializers.ModelSerializer):
    #save_by = UserListingField(many=False, read_only=True)
    #save_by = UserSerializer(read_only=True)
    class Meta:
        model = Customer
        fields = '__all__'
        # ( "name", "email", "phone", "address", "sex", "age", "city", "created_date", "save_by")
        

class invoiceSerializer(serializers.ModelSerializer):
    #save_by = UserSerializer(read_only=True)
    #customer = customerSerializer(read_only=True)
    class Meta:
        model = Invoice
        fields = '__all__'
        
class articleSerializer(serializers.ModelSerializer):
    #invoice = invoiceSerializer(read_only=True)
    class Meta:
        model = Article
        fields = '__all__'