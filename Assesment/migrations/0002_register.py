# Generated by Django 3.2.7 on 2021-11-23 04:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Assesment', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Register',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.CharField(max_length=100)),
                ('last_name', models.CharField(max_length=100)),
                ('email', models.EmailField(max_length=254)),
                ('mob', models.IntegerField()),
            ],
        ),
    ]