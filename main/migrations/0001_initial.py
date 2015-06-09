# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Permission',
            fields=[
                ('id', models.AutoField(serialize=False, primary_key=True, db_column=b'perId')),
                ('name', models.CharField(max_length=50, db_column=b'perName')),
                ('status', models.BooleanField(default=False, db_column=b'perStatus')),
            ],
            options={
                'db_table': 'Permissions',
            },
            bases=(models.Model,),
        ),
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.AutoField(serialize=False, primary_key=True, db_column=b'usrId')),
                ('name', models.CharField(max_length=50, db_column=b'usrName')),
                ('last_name', models.CharField(max_length=50, db_column=b'usrLastName')),
                ('ogin', models.CharField(unique=True, max_length=50, db_column=b'usrLogin')),
                ('password', models.CharField(max_length=50, db_column=b'usrPass')),
                ('mail', models.CharField(max_length=50, db_column=b'usrMail')),
                ('tel', models.CharField(max_length=50, db_column=b'usrTel')),
                ('status', models.BooleanField(default=False, db_column=b'usrStatus')),
                ('date_log', models.DateField(auto_now_add=True, db_column=b'usrDateLog')),
            ],
            options={
                'db_table': 'Users',
            },
            bases=(models.Model,),
        ),
        migrations.CreateModel(
            name='UserPermissions',
            fields=[
                ('id', models.AutoField(serialize=False, primary_key=True, db_column=b'uspId')),
                ('date_log', models.DateField(auto_now_add=True, db_column=b'uspDateLog')),
                ('assigned_by', models.IntegerField(db_column=b'uspAssignedBy')),
                ('permission_id', models.ForeignKey(to='main.Permission', db_column=b'uspPermissionId')),
                ('user_id', models.ForeignKey(to='main.User', db_column=b'uspUserId')),
            ],
            options={
                'db_table': 'UserPermission',
            },
            bases=(models.Model,),
        ),
    ]
