from django.db import models

from django.contrib.auth.base_user import BaseUserManager
from django.contrib.auth.models import AbstractBaseUser
from django.utils.translation import gettext_lazy as _
from django.utils import timezone
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager


class CustomAccountManager(BaseUserManager):

    def create_superuser(self, email, user_name, first_name, password, **other_fields):

        other_fields.setdefault('is_staff', True)
        other_fields.setdefault('is_superuser', True)
        other_fields.setdefault('is_active', True)

        if other_fields.get('is_staff') is not True:
            raise ValueError(
                'Superuser must be assigned to is_staff=True.')
        if other_fields.get('is_superuser') is not True:
            raise ValueError(
                'Superuser must be assigned to is_superuser=True.')

        return self.create_user(email, user_name, first_name, password, **other_fields)

    def create_user(self, email, user_name, first_name, password, **other_fields):

        if not email:
            raise ValueError(_('You must provide an email address'))

        email = self.normalize_email(email)
        user = self.model(email=email, user_name=user_name,
                          first_name=first_name, **other_fields)
        user.set_password(password)
        user.save()
        return user


class Candidate(AbstractBaseUser, PermissionsMixin):

    email = models.EmailField(_('email address'), unique=True)
    user_name = models.CharField(max_length=150, unique=True)
    first_name = models.CharField(max_length=150, blank=True)
    last_name = models.CharField(max_length=150, blank=True)
    start_date = models.DateTimeField(default=timezone.now)

    about = models.TextField(_(
        'about'), max_length=500, blank=True)
    is_staff = models.BooleanField(default=True)
    is_active = models.BooleanField(default=True)
    image = models.ImageField(default='default.jpg', upload_to='profile_pics')

    objects = CustomAccountManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['user_name', 'first_name']

    def __str__(self):
        return self.user_name


#   def __str__(self):
#       return self.email


class Aptitude(models.Model):
    q_id = models.AutoField(primary_key=True)
    question = models.CharField(max_length=900)
    q_option1 = models.CharField(max_length=100)
    q_option2 = models.CharField(max_length=100)
    q_option3 = models.CharField(max_length=100)
    q_option4 = models.CharField(max_length=100)
    q_ans = models.CharField(max_length=100)

    def __str__(self):
        return self.question


class User_Aptitude_mapper(models.Model):
    username = models.CharField(max_length=100)
    q_id = models.CharField(max_length=100)
    user_answer = models.CharField(max_length=100)
    testtype=models.CharField(max_length=100,default="Aptitude")

    def __str__(self):
        return self.q_id


class Verbal(models.Model):
    q_id = models.AutoField(primary_key=True)
    question = models.CharField(max_length=500)
    q_option_1 = models.CharField(max_length=100)
    q_option_2 = models.CharField(max_length=100)
    q_option_3 = models.CharField(max_length=100)
    q_option_4 = models.CharField(max_length=100)
    q_answer = models.CharField(max_length=100)

    def __str__(self):
        return self.question


class User_Verbal_mapper(models.Model):
    username = models.CharField(max_length=100)
    q_id = models.CharField(max_length=100)
    user_answer = models.CharField(max_length=100)
    testtype=models.CharField(max_length=100,default="Verbal")
    def __str__(self):
        return self.user_answer


class Self_development(models.Model):
    self_qid = models.AutoField(primary_key=True)
    self_question = models.CharField(max_length=500)
    self_option1 = models.CharField(max_length=100)
    self_option2 = models.CharField(max_length=100)
    self_option3 = models.CharField(max_length=100)
    self_option4 = models.CharField(max_length=100)
    self_option5 = models.CharField(max_length=100)
    self_option6 = models.CharField(max_length=100)

    def __str__(self):
        return self.self_question


class User_selfdevelop_mapper(models.Model):
    selfuser_ans = models.CharField(max_length=100)
    self_qid = models.CharField(max_length=100)


class Self_development_User_mapper(models.Model):
    username = models.CharField(max_length=100)
    Sq_id = models.CharField(max_length=100)
    Suser_answer = models.CharField(max_length=100)
    testtype=models.CharField(max_length=100,default="Self_development")
    def __str__(self):
        return self.Suser_answer


class Reasoning(models.Model):
    question_id = models.AutoField(primary_key=True)
    question = models.CharField(max_length=850)
    option_1 = models.CharField(max_length=100)
    option_2 = models.CharField(max_length=100)
    option_3 = models.CharField(max_length=100)
    option_4 = models.CharField(max_length=100)
    answer = models.CharField(max_length=100)

    def __str__(self):
        return self.question


class User_Reasoning_mapper(models.Model):
    username = models.CharField(max_length=100)
    question_id = models.CharField(max_length=100)
    user_answer = models.CharField(max_length=100)
    testtype=models.CharField(max_length=100,default="Reasoning")

    def __str__(self):
        return self.user_answer


class user_feedback(models.Model):
    user_feedback = models.CharField(max_length=10)

    def __str__(self):
        return self.user_feedback


# class Result(models.Model):
#     userid = models.ForeignKey(Candidate, on_delete=models.CASCADE,default=1)
#     user_cresult = models.IntegerField()
#     user_wresult = models.CharField(max_length=100)
#     testtype=models.CharField(max_length=200)
    

#     def __str__(self):
#         return self.user_cresult

# class Register(models.Model):
#     first_name = models.CharField(max_length=100)
#     last_name = models.CharField(max_length=100)
#     email = models.EmailField()
#     mob = models.IntegerField()
class Customer_support(models.Model):
    email_fetch=models.EmailField(max_length=50)

    def __str__(self):
        return self.email_fetch


class UserResult(models.Model):
    username = models.CharField(max_length=100)
    user_cresult = models.IntegerField()
    user_wresult = models.CharField(max_length=100)
    testtype=models.CharField(max_length=200)
    
    
