# Generated by Django 3.2.7 on 2021-11-25 06:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Assesment', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='User_selfdevelop_mapper',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('selfuser_ans', models.CharField(max_length=100)),
                ('self_qid', models.CharField(max_length=100)),
            ],
        ),
    ]
