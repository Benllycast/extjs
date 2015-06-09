from django.db import models

# Create your models here.


class User(models.Model):

    id = models.AutoField(primary_key=True, db_column='usrId')
    name = models.CharField(max_length=50, db_column='usrName')
    last_name = models.CharField(max_length=50, db_column='usrLastName')
    login = models.CharField(max_length=50, db_column='usrLogin', unique=True)
    password = models.CharField(max_length=50, db_column='usrPass')
    mail = models.CharField(max_length=50, db_column='usrMail')
    tel = models.CharField(max_length=50, db_column='usrTel')
    status = models.BooleanField(default=False, db_column='usrStatus')
    date_log = models.DateField(auto_now_add=True, db_column='usrDateLog')

    class Meta:
        db_table = 'Users'

    def __unicode__(self):
        return "%s - %s" % (self. name, self.last_name)


class Permission(models.Model):
    """docstring for Permission"""
    id = models.AutoField(primary_key=True, db_column='perId')
    name = models.CharField(max_length=50, db_column='perName')
    status = models.BooleanField(default=False, db_column='perStatus')

    class Meta:
        db_table = 'Permissions'

    def __unicode__(self):
        return "%s" % (self. name)


class UserPermissions(models.Model):
    id = models.AutoField(primary_key=True, db_column='uspId')
    date_log = models.DateField(auto_now_add=True, db_column='uspDateLog')
    assigned_by = models.IntegerField(db_column='uspAssignedBy')
    user_id = models.ForeignKey('User', db_column='uspUserId')
    permission_id = models.ForeignKey('Permission', db_column='uspPermissionId')

    class Meta:
        db_table = 'UserPermission'

    def __unicode__(self):
        return "%s - %s" % (self.user_id, self.permission_id)
