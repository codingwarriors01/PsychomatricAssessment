# Generated by Django 3.2.7 on 2022-01-06 06:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Assesment', '0007_alter_user_aptitude_mapper_username'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='self_development_user_mapper',
            name='userid',
        ),
        migrations.RemoveField(
            model_name='user_reasoning_mapper',
            name='userid',
        ),
        migrations.RemoveField(
            model_name='user_verbal_mapper',
            name='userid',
        ),
        migrations.AddField(
            model_name='self_development_user_mapper',
            name='username',
            field=models.CharField(default='Rajat', max_length=100),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='user_reasoning_mapper',
            name='username',
            field=models.CharField(default='Rajat', max_length=100),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='user_verbal_mapper',
            name='username',
            field=models.CharField(default='Rajat', max_length=100),
            preserve_default=False,
        ),
    ]
