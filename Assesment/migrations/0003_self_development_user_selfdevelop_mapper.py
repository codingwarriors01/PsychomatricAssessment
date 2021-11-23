# Generated by Django 3.2.9 on 2021-11-23 10:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Assesment', '0002_register'),
    ]

    operations = [
        migrations.CreateModel(
            name='Self_development',
            fields=[
                ('self_qid', models.AutoField(primary_key=True, serialize=False)),
                ('self_question', models.CharField(max_length=500)),
                ('self_option1', models.CharField(max_length=100)),
                ('self_option2', models.CharField(max_length=100)),
                ('self_option3', models.CharField(max_length=100)),
                ('self_option4', models.CharField(max_length=100)),
                ('self_option5', models.CharField(max_length=100)),
                ('self_option6', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='User_selfdevelop_mapper',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('selfuser_ans', models.CharField(max_length=100)),
                ('self_qid', models.CharField(max_length=100)),
            ],
        ),
    ]
