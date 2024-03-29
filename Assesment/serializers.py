from rest_framework import serializers
from .models import  *





class  CandidateloginSerializer(serializers.ModelSerializer):
    class Meta:
        model=Candidate
        fields = ('username', 'password') 
        
    def get(self,validated_data):
        candidate=Candidate.objects.filter(**validated_data) 
        return candidate

class CustomUserSerializer(serializers.ModelSerializer):
    """
    Currently unused in preference of the below.
    """
    email = serializers.EmailField(required=True)
    user_name = serializers.CharField(required=True)
    password = serializers.CharField(min_length=8, write_only=True)

    class Meta:
        model = Candidate
        fields = ('id','email', 'user_name', 'password','first_name','last_name','is_staff','image')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        password = validated_data.pop('password', None)
        # as long as the fields are the same, we can just use this
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance        
 


class CandidateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Candidate
        fields = ('id','username','first_name', 'last_name','email','password','contact_no')

    def create(self, validated_data):
        apptitude = Candidate.objects.create(**validated_data)

        return apptitude



class AptitudeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Aptitude
        fields = ('q_id','question', 'q_ans','q_option1','q_option2','q_option3','q_option4')

    def create(self, validated_data):
        apptitude = Aptitude.objects.create(**validated_data)

        return apptitude


class User_Aptitude_mapper_Serializer(serializers.ModelSerializer):
    class Meta:
        model = User_Aptitude_mapper
        fields = ('id','q_id','user_answer')
     
    def create(self, validated_data):
        apptitude = User_Aptitude_mapper.objects.create(**validated_data)

        return apptitude







class VerbalSerializer(serializers.ModelSerializer):
    class Meta:
        model=Verbal
        fields=('q_id','question','q_option_1','q_option_2','q_option_3','q_option_4','q_answer')
        
        def create(self,validate_data):
            verbal = Verbal.objects.create(**validate_data)
            return verbal



class User_Verbal_mapper_Serializer(serializers.ModelSerializer):
    class Meta:
        model=User_Verbal_mapper
        fields='__all__'

    def create(self,validated_data):
        verbal=User_Verbal_mapper.objects.create(**validated_data)
        return verbal    

class Self_developmentSerializer(serializers.ModelSerializer):
    class Meta:
        model=Self_development
        fields='__all__'      

    def create(self,validated_data):
      self_development=Self_development.objects.create(**validated_data)
      return self_development    

class User_selfdevelop_mapperSerializer(serializers.ModelSerializer):
    class meta:
        model=User_selfdevelop_mapper
        fields='__all__'

    def create(self,validated_data):
        user_selfdevelop_mapper=User_selfdevelop_mapper.objects.create(**validated_data)
        return user_selfdevelop_mapper

class Self_development_User_mapperSerializer(serializers.ModelSerializer):
    class Meta:
        model=Self_development_User_mapper
        fields='__all__'

    def create(self,validated_data):
        user_selfdevelop_mapper=Self_development_User_mapper.objects.create(**validated_data)
        return user_selfdevelop_mapper








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

class user_feedback_Serializer(serializers.ModelSerializer):
    class Meta:
        model= user_feedback
        feilds='__all__'

class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Candidate
        fields='__all__'        







class User_Feedback_Serializer(serializers.ModelSerializer):
    class Meta:
        model = user_feedback
        fields = "__all__"
     


class Result_Serializer(serializers.ModelSerializer):
    class Meta:
        model=Result
        fields='__all__'