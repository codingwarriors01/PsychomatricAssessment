# Generated by Django 3.2.7 on 2021-12-22 04:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Assesment', '0002_alter_aptitude_question'),
    ]

    operations = [
        migrations.AlterField(
            model_name='aptitude',
            name='q_ans',
            field=models.CharField(max_length=100),
        ),
    ]
