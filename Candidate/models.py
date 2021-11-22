from django.db import models
from django.contrib.auth.base_user import BaseUserManager
from django.contrib.auth.models import AbstractBaseUser

# Create your models here.
class Candidate(models.Model):
    username=models.CharField(max_length=100,unique=True)
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    email = models.EmailField()
    password=models.CharField(max_length=50)
    contact_no = models.IntegerField()
  

  