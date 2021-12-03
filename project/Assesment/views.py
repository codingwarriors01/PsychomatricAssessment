
from django.shortcuts import render
from django.contrib.auth.hashers import check_password
from django.contrib.auth import logout
from rest_framework.authentication import SessionAuthentication, TokenAuthentication
from rest_framework.decorators import authentication_classes
from json.decoder import JSONDecoder
from json.encoder import JSONEncoder
from rest_framework.mixins import ListModelMixin, CreateModelMixin, RetrieveModelMixin, UpdateModelMixin, DestroyModelMixin
from django.db.models.query import QuerySet
from django.shortcuts import render
from django.http import JsonResponse
from rest_framework import generics, serializers
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.generics import GenericAPIView
from rest_framework.mixins import RetrieveModelMixin
from rest_framework.authtoken.models import Token
from django.core.exceptions import ValidationError
from django.db import IntegrityError
from django.contrib.auth import authenticate, login
from django.shortcuts import get_object_or_404
from rest_framework import response
from rest_framework.decorators import api_view, renderer_classes
from rest_framework.renderers import TemplateHTMLRenderer, JSONRenderer
from rest_framework.response import Response
from .serializers import  *
from rest_framework.views import APIView
from .models import *
from rest_framework import status
from django.core import serializers as core_serializers
from django.core import serializers
from rest_framework.decorators import api_view, permission_classes
import json
from django.views.decorators.csrf import csrf_exempt
from rest_framework.permissions import AllowAny
from django.http.response import HttpResponse

def indexpage(request):
    return render(request, 'assesment_system/index.html')

def basepage(request):
    return render(request, 'assesment_system/base.html')


# @permission_classes([AllowAny])
# class CandidateRegister(generics.GenericAPIView):
#     serializer_class = CandidateSerializer   

    
#     def post(self,request):
#       try:   
#             data={}
#             serializer = CandidateSerializer(data=request.data)
#             print(serializer)
#             if serializer.is_valid():
#                 account=serializer.save()
#                 token = Token.objects.get_or_create(user=account)[0].key
#                 data["user"]=account.username
#                 data["password"]=account.password
#                 data["Email"]=account.Email_Address
#                 data["token"]=token
#             else:
#                     data = serializer.errors


#             return Response(data)   
#       except IntegrityError as e:
#         account=Candidate.objects.get(username='')
#         account.delete()
#         raise ValidationError({"400": f'{str(e)}'})

#       except KeyError as e:
#         print(e)
#         raise ValidationError({"400": f'Field {str(e)} missing'})   
# class CandidateRegister(generics.GenericAPIView):
#      serializer_class = CandidateSerializer
#      def post(self,request):
#         serializer = CandidateSerializer(data=request.data)
#         print(serializer)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data, status=status.HTTP_201_CREATED)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)        

def candidateregister(request):
    return render(request, 'assesment_system/CandidateRegister.html')



# # @permission_classes([AllowAny])
# @permission_classes([IsAuthenticated])
# class candidateList(APIView):
#     def get(self, request):
#         tasks = Candidate.objects.all()
#         serialized = CandidateSerializer(tasks, many=True)
#         return Response(serialized.data)


class user_details_operation(generics.RetrieveUpdateDestroyAPIView):
	queryset=Candidate.objects.all()
	serializer_class=CandidateSerializer


def candidatelogin(request):
    return render(request, 'assesment_system/login.html')




class ApptitudeAPI(generics.GenericAPIView):
    serializer_class = AptitudeSerializer
    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        apptitude = serializer.save()
        return Response({
        "apptitude": AptitudeSerializer(apptitude, context=self.get_serializer_context()).data

        })


class  ApptitudeList(APIView):
    def get(self, request):
        tasks = Aptitude.objects.all()
        serialized = AptitudeSerializer(tasks, many=True)
        return Response(serialized.data)

# class  Show(GenericAPIView,RetrieveModelMixin):
#     queryset=Aptitude.objects.all()
#     serializer_class=AptitudeSerializer

#     def get(self,request,*args,**kwargs):
#         return self.retrieve(request,*args,**kwargs)

class  Show(GenericAPIView,RetrieveModelMixin):
    queryset=Reasoning.objects.all()
    serializer_class=ReasoningSerializer

    def get(self,request,*args,**kwargs):
        return self.retrieve(request,*args,**kwargs)

      

def homepage(request):
    return render(request, 'assesment_system/QuestionPage.html')


class VerbalAPI(generics.GenericAPIView):
    serializer_class= VerbalSerializer
    def post(self,request,*args,**kwargs):
        serializer=self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        verbal= serializer.save()
        return Response({
            "verbal":VerbalSerializer(verbal,context=self.get_serializer_context()).data
        })

class ProfileList(APIView):
    def get(self,request):
        tasks= Verbal.objects.all()
        serialized= VerbalSerializer(tasks,many=True)
        return Response(serialized.data)

def homepage1(request):
    return render(request,'assesment_system/questionpaper.html')

class VerbalCreateApi(generics.CreateAPIView):
     queryset=Verbal.objects.all()
     serializer_class=VerbalSerializer

class VerbalListApi(generics.ListAPIView):
     queryset=Verbal.objects.all()
     serializer_class=VerbalSerializer

class VerbalUpdateApi(generics.RetrieveUpdateDestroyAPIView):
     queryset=Verbal.objects.all()
     serializer_class=VerbalSerializer

class VerbalDeleteApi(generics.DestroyAPIView):
     queryset=Verbal.objects.all()
     serializer_class=VerbalSerializer


class User_Verbal_mapperAPI(generics.GenericAPIView):    
    serializer_class = User_Verbal_mapper_Serializer
    def post(self, request):      
        serializer = self.get_serializer(data=request.data,many=True)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response()

class User_Verbal_mapperList(APIView): 
    def get(self, request):
        tasks = User_Verbal_mapper.objects.all()
        serialized = User_Verbal_mapper_Serializer(tasks, many=True)
        return Response(serialized.data)


class Self_developmentAPI(generics.GenericAPIView):
    serializer_class= Self_developmentSerializer
    def post(self,request,*args,**kwargs):
        serializer=self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        verbal= serializer.save()
        return Response({
            "self_development":Self_developmentSerializer(self_development,context=self.get_serializer_context()).data
        })  

class Self_developmentCreateApi(generics.CreateAPIView):
     queryset=Self_development.objects.all()
     serializer_class=Self_developmentSerializer


class Self_developmentShow(GenericAPIView,RetrieveModelMixin):
     queryset=Self_development.objects.all()
     serializer_class=Self_developmentSerializer

     def get(self,request,*args,**kwargs):
         return self.retrieve(request,*args,**kwargs)




class Self_developmentUpdateApi(generics.RetrieveUpdateDestroyAPIView):
     queryset=Self_development.objects.all()
     serializer_class=Self_developmentSerializer

class Self_developmentDeleteApi(generics.DestroyAPIView):
     queryset=Self_development.objects.all()
     serializer_class=Self_developmentSerializer


class User_selfdevelop_mapperAPI(generics.GenericAPIView):    
    serializer_class = User_Verbal_mapper_Serializer
    def post(self, request):      
        serializer = self.get_serializer(data=request.data,many=True)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response()

class User_selfdevelop_mapperList(APIView): 
    def get(self, request):
        tasks = User_selfdevelop_mapper.objects.all()
        serialized = User_selfdevelop_mapperSerializer(tasks, many=True)
        return Response(serialized.data)     



#by gaurav

class ReasoningAPI(generics.GenericAPIView):
    serializer_class = ReasoningSerializer
    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        reasoning = serializer.save()
        return Response({
            "reasoning": ReasoningSerializer(reasoning, context=self.get_serializer_context()).data
        })

class ReasoningList(APIView):
    def get(self, request):
        tasks = Reasoning.objects.all()
        serialized = ReasoningSerializer(tasks, many=True)
        return Response(serialized.data)




def QuestionPage(request):
    # tasks = Reasoning.objects.all()
    return render(request, 'assesment_system/question_page.html')

class ReasoningUpdateApi(generics.RetrieveUpdateDestroyAPIView):
    queryset = Reasoning.objects.all()
    serializer_class = ReasoningSerializer

class User_Reasoning_mapperAPI(generics.GenericAPIView):
    serializer_class = User_Reasoning_mapper_Serializer
    def post(self, request):      
        serializer = self.get_serializer(data=request.data,many=True)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response()

class User_Reasoning_mapperList(APIView): 
    def get(self, request):
        tasks = User_Reasoning_mapper.objects.all()
        serialized = User_Reasoning_mapper_Serializer(tasks, many=True)
        return Response(serialized.data)



class ReasoningCreateApi(generics.CreateAPIView):
    queryset = Reasoning.objects.all()
    serializer_class = ReasoningSerializer

class ReasoningViewApi(generics.ListAPIView):
    queryset = Reasoning.objects.all()
    serializer_class = ReasoningSerializer




#By Rajat   
class crud(generics.RetrieveUpdateDestroyAPIView):
	queryset=Aptitude.objects.all()
	serializer_class=AptitudeSerializer
  
class User_Aptitude_mapperAPI(generics.GenericAPIView):
    serializer_class = User_Aptitude_mapper_Serializer
    def post(self, request):
        requestdata=json.loads(request.body)       
        serializer = self.get_serializer(data=requestdata,many=True)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return render(request,'assesment_system/feedback.html')


class User_Apptitude_mapper_crud(generics.RetrieveUpdateDestroyAPIView):
	queryset=User_Aptitude_mapper.objects.all()
	serializer_class=User_Aptitude_mapper_Serializer



class User_Aptitude_mapperList(APIView):
    def get(self, request):
        tasks = User_Aptitude_mapper.objects.all()
        serialized = User_Aptitude_mapper_Serializer(tasks, many=True)
        return Response(serialized.data)




class UserFeedback(generics.GenericAPIView):
    serializer_class = User_Feedback_Serializer    
    def post(self, request):
        requestdata=json.loads(request.body) 
        serializer = self.get_serializer(data=requestdata)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)    




class UserFeedbackList(APIView):
    def get(self, request):
        tasks = user_feedback.objects.all()
        serialized = User_Feedback_Serializer(tasks, many=True)
        return Response(serialized.data)


def userfeedback(request):
     return render(request, 'assesment_system/feedback.html')



def checkanswer(request):
    cresult=0
    wresult=0
    post1=User_Aptitude_mapper.objects.all()
    for i in post1:
        qid=i.q_id
        user_answer=i.user_answer
        post2=Aptitude.objects.filter(q_id=qid)
        for j in post2:
            q_ans=j.q_ans
        if user_answer == q_ans:
            cresult=cresult+1           
        else:
            user_wresult=wresult+1
    b = Result(user_cresult=cresult,user_wresult=user_wresult)
    b.save()
    return render(request,'assesment_system/index.html')
   


class ResultList(APIView): 
    def get(self, request):
        tasks = Result.objects.all()
        serialized = Result_Serializer(tasks, many=True)
        return Response(serialized.data)

def Resultlist(request):
    productData =Result.objects.all()
    print("products are ",productData)
    return render(request,'assesment_system/result.html',{"products": productData})



 #by pratiksha 

# class UserLoginView(generics.GenericAPIView):
#     permission_classes = (AllowAny,)
#     serializer_class = CandidateloginSerializer
   
#     # filter_fields = ('username')
#     # lookup_field = 'pk'

#     def post(self, request):
#         print("Requested data is ",request.data)
#         # serializer = CandidateloginSerializer(data=request.data)  
#         serializer=self.serializer_class(data=request.data)
#         print(serializer)
#         print(serializer.is_valid()) 
#         # serializer.is_valid(raise_exception=True)
#         print(serializer)
#         print(serializer.data)
#         # print(serializer.initial_data['username'])
#         print("llll")
#         status_code = status.HTTP_200_OK
#         username=serializer.initial_data['username']
#         password=serializer.initial_data['password']
#         print(username)
#         user=Candidate.objects.filter(username=username,password=password)
#         print(user)
#         if user: 
            
#           print(user)    
#           response = {
#               'success': 'True',
#               'status code': status_code,
#               'message': 'User logged in  successfully',
#               # 'token': serializer.initial_data['csrfmiddlewaretoken'],
#               # 'userId': serializer.data['username'],
#               'username': serializer.initial_data["username"],
#               # 'default_role': user[0].default_role

#           }
#           print(response)
#           return HttpResponse("successfully logged in")


#         else:
#             return HttpResponse("wrong username or password")   
class UserLoginView(generics.GenericAPIView):
    permission_classes = (AllowAny,)
    serializer_class = CandidateloginSerializer
    def post(self,request):
        try:  
                data = {}
                serializer=self.serializer_class(data=request.data)
                Email=serializer.initial_data['Email_Address']
                print("email",Email)
                password=serializer.initial_data['password']
                Account = Candidate.objects.get(Email_Address=Email)

                
        except BaseException as e:
                raise ValidationError({"400": f'{str(e)}'})

        token = Token.objects.get_or_create(user_id=Account)[0].key
        
        print(token)
        if Account:
            if Account.is_active:
     
                    print("pratiksha",request.user)
                    login(request, Account)
                    data["message"] = "user logged in"
                    data["email_address"] = Account.Email_Address
                    Res = {"data": data, "token": token}
                    return Response(Res)
            else:
                    raise ValidationError({"400": f'Account not active'})

        else:
                raise ValidationError({"400": f'Account doesnt exist'})
   
def ExamDashboard(request):
    return render(request,'assesment_system/exam_dashboard.html')

# @permission_classes([IsAuthenticated])
@permission_classes([AllowAny])
class candidateList(GenericAPIView, ListModelMixin):
     queryset = Candidate.objects.all()
     serializer_class = CustomUserSerializer

     def get(self, request, *args, **kwargs):
      return self.list(request, *args, **kwargs)  

@permission_classes([AllowAny])
class CandidateRetrive(GenericAPIView, RetrieveModelMixin):
     queryset = Candidate.objects.all()
     serializer_class = CustomUserSerializer

     def get(self, request, *args, **kwargs):
       return self.retrieve(request, *args, **kwargs)   

@permission_classes([AllowAny])
class CandidateUpdate(generics.RetrieveUpdateDestroyAPIView):
     queryset = Candidate.objects.all()
     serializer_class = CustomUserSerializer

     def put(self, request, *args, **kwargs):
      return self.update(request, *args, **kwargs) 

@permission_classes([AllowAny])
class CandidateDestroy(GenericAPIView, DestroyModelMixin):
     queryset = Candidate.objects.all()
     serializer_class = CustomUserSerializer


     def delete(self, request, *args, **kwargs):
      return self.destroy(request, *args, **kwargs)

class UserFeedackList(APIView):
    def get(self,request):
        tasks=user_feedback.objects.all()
        serailzed= user_feedback_Serializer(tasks,many=True)
        return Response(serailzed.data)  

class RegisterListView(APIView):
    def get(self, request):
        tasks = Register.objects.all()
        serialized = RegisterSerializer(tasks, many=True)
        return Response(serialized.data)    

class RegisterCreateApi(generics.CreateAPIView):
    queryset = Register.objects.all()
    serializer_class = RegisterSerializer

class RegisterUpdateApi(generics.RetrieveUpdateDestroyAPIView):
    queryset = Register.objects.all()
    serializer_class = RegisterSerializer   

def index(request):
    return render(request, 'assesment_system/index.html')     

def ResultView(request):
    correct = 0
    incorrect=0
    res = User_Reasoning_mapper.objects.all()
    for i in res:
        question_id = i.question_id
        user_answer = i.user_answer
        res2 = Reasoning.objects.filter(question_id=question_id)
        for j in res2:
            answer = j.answer
        if user_answer == answer:
            correct = correct+1
        else:
            incorrect = incorrect+1
    print("Your " +str(correct)+ " answer is correct and " +str(incorrect)+ " answer is incorrect.")
    result = Result(correct_answer = correct, incorrect_answer = incorrect)
    result.save()
    return render(request, 'result.html')      

@api_view(["GET"])
@permission_classes([IsAuthenticated]) 
@authentication_classes([TokenAuthentication])
def User_logout(request):
    print(request.user)

    request.user.auth_token.delete()
    logout(request)

    return Response('User Logged out successfully')            


class BlacklistTokenUpdateView(APIView):
    permission_classes = [AllowAny]
    authentication_classes = ()

    def post(self, request):
        try:
            refresh_token = request.data["refresh_token"]
            token = RefreshToken(refresh_token)
            token.blacklist()
            return Response(status=status.HTTP_205_RESET_CONTENT)
        except Exception as e:
            return Response(status=status.HTTP_400_BAD_REQUEST)     

class CandidateRegister(APIView):
     serializer_class =CustomUserSerializer
     def post(self,request):
        serializer = CustomUserSerializer(data=request.data)
        print(serializer)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)                            


