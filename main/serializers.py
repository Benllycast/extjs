from rest_framework import serializers
from .models import User, Permission, UserPermissions


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User


class PermissionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Permission


class UserPermissionsSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserPermissions