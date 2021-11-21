from typing import ClassVar
from django.db.models import fields
from rest_framework import serializers
from .models import  Aptitude, User_Aptitude_mapper,user_feedback,Candidate,Result,Verbal,User_Verbal_mapper,Reasoning,User_Reasoning_mapper



#by pratiksha
class  CandidateloginSerializer(serializers.ModelSerializer):
    class Meta:
        model=Candidate
        fields = ('username', 'password') 
        
    def get(self,validated_data):
        candidate=Candidate.objects.filter(**validated_data) 
        return candidate
 


#By Rajat 
class CandidateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Candidate
        fields = ('id','username','first_name', 'last_name','email','password','contact_no')

    def create(self, validated_data):
        apptitude = Candidate.objects.create(**validated_data)

        return apptitude

#By Rajat 

class AptitudeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Aptitude
        fields = ('q_id','question', 'q_ans','q_option1','q_option2','q_option3','q_option4')

    def create(self, validated_data):
        apptitude = Aptitude.objects.create(**validated_data)

        return apptitude
#By Rajat 

class User_Aptitude_mapper_Serializer(serializers.ModelSerializer):
    class Meta:
        model = User_Aptitude_mapper
        fields = ('id','q_id','user_answer')
     
    def create(self, validated_data):
        apptitude = User_Aptitude_mapper.objects.create(**validated_data)

        return apptitude






#By Aman
class VerbalSerializer(serializers.ModelSerializer):
    class Meta:
        model=Verbal
        fields=('q_id','question','q_option_1','q_option_2','q_option_3','q_option_4','q_answer')
        
        def create(self,validate_data):
            verbal = Verbal.objects.create(**validate_data)
            return verbal


#By Aman
class User_Verbal_mapper_Serializer(serializers.ModelSerializer):
    class Meta:
        model=User_Verbal_mapper
        fields=('q_id','user_answer')

    def create(self,validated_data):
        verbal=User_Verbal_mapper.objects.create(**validated_data)
        return verbal    








#by gaurav
class ReasoningSerializer(serializers.ModelSerializer):
    class Meta:
        model = Reasoning
        fields = ('question_id', 'question', 'option_1', 'option_2', 'option_3', 'option_4', 'answer')

    def create(self, validated_data):
        reasoning = Reasoning.objects.create(**validated_data)
        return reasoning

class User_Reasoning_mapper_Serializer(serializers.ModelSerializer):
    class Meta:
        model = User_Reasoning_mapper
        fields=('id', 'question_id', 'user_answer')
    def create(self, validated_data):
        reasoning=User_Reasoning_mapper.objects.create(**validated_data)
        return reasoning





#By Rajat 
class User_Feedback_Serializer(serializers.ModelSerializer):
    class Meta:
        model = user_feedback
        fields = "__all__"
     

#By Rajat 
class Result_Serializer(serializers.ModelSerializer):
    class Meta:
        model=Result
        fields='__all__'