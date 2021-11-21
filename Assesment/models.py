from django.db import models

class Candidate(models.Model):
  username=models.CharField(max_length=100,unique=True)
  first_name = models.CharField(max_length=100)
  last_name = models.CharField(max_length=100)
  email = models.CharField(max_length=50)
  password=models.CharField(max_length=50)
  contact_no = models.CharField(max_length=100)


#by Rajat
class Aptitude(models.Model):
  q_id=models.AutoField(primary_key=True)
  question=models.CharField(max_length=100)
  q_option1=models.CharField(max_length=100)
  q_option2=models.CharField(max_length=100)
  q_option3=models.CharField(max_length=100)
  q_option4=models.CharField(max_length=100)
  q_ans=models.CharField(max_length=100,unique=True)

class User_Aptitude_mapper(models.Model):
 
  q_id=models.CharField(max_length=100)
  user_answer=models.CharField(max_length=100)
  

# by Aman
class Verbal(models.Model):
    q_id=models.AutoField(primary_key=True)
    question=models.CharField(max_length=500)
    q_option_1=models.CharField(max_length=100)
    q_option_2=models.CharField(max_length=100)
    q_option_3=models.CharField(max_length=100)
    q_option_4=models.CharField(max_length=100)
    q_answer=models.CharField(max_length=100)


class User_Verbal_mapper(models.Model):
    q_id=models.CharField(max_length=100)
    user_answer=models.CharField(max_length=100)



#by gaurav
class Reasoning(models.Model):
    question_id = models.AutoField(primary_key=True)
    question = models.CharField(max_length=850)
    option_1 = models.CharField(max_length=100)
    option_2 = models.CharField(max_length=100)
    option_3 = models.CharField(max_length=100)
    option_4 = models.CharField(max_length=100)
    answer = models.CharField(max_length=100)


class User_Reasoning_mapper(models.Model):
    question_id = models.CharField(max_length=100)
    user_answer = models.CharField(max_length=100)

#by Rajat

class user_feedback(models.Model):
  user_feedback=models.CharField(max_length=10)


class Result(models.Model):
  # uid=models.ForeignKey(Candidate,on_delete=models.CASCADE)
  user_cresult=models.CharField(max_length=10)
  user_wresult=models.CharField(max_length=10)