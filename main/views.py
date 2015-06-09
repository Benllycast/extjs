#from django.shortcuts import render
from rest_framework import viewsets
from .models import User, Permission, UserPermissions
from .serializers import UserSerializer, PermissionSerializer, UserPermissionsSerializer
# Create your views here.


class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all()
    serializer_class = UserSerializer


class PermissionViewSet(viewsets.ModelViewSet):

    queryset = Permission.objects.all()
    serializer_class = PermissionSerializer


class UserPermissionsViewSet(viewsets.ModelViewSet):

    queryset = UserPermissions.objects.all()
    serializer_class = UserPermissionsSerializer
