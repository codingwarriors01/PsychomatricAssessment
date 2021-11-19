from rest_framework import serializers

from .models import*
from .views import*
from .import*

class CandidateSerializer(serializers.ModelSerializer):
 class Meta:
  model = Candidate
  fields =  '__all__'
 def create(self,validated_data):
     candidate=Candidate.objects.create(**validated_data)
     return candidate

class  CandidateloginSerializer(serializers.ModelSerializer):
    class Meta:
        model=Candidate
        fields = ('username', 'password') 
        
    def get(self,validated_data):
        candidate=Candidate.objects.filter(**validated_data) 
        return candidate     
# class RegistrationSerializer(serializers.ModelSerializer):
    
#     class Meta:
#         model = Users
#         fields = [
#             "name",
#             "Email_Address",
#             "zipcode",
#             "Date_of_Birth",
#             "password",

#         ]

#         extra_kwargs = {"password": {"write_only": True}}
#         password = self.validated_data["password"]
#         account.set_password(password)
#         account.save()
#         return account    