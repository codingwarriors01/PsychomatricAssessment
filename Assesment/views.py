import json
import csv

from django.contrib.auth.tokens import PasswordResetTokenGenerator
from django.utils.http import urlsafe_base64_decode, urlsafe_base64_encode
from django.contrib.sites.shortcuts import get_current_site
from django.utils.encoding import  smart_bytes,smart_str,DjangoUnicodeDecodeError
from rest_framework import response
from .utils import Util
from django.urls import reverse


from django.core.files.base import ContentFile
from django.core.files.storage import FileSystemStorage

from rest_framework import serializers, viewsets
from rest_framework.decorators import action, permission_classes
from rest_framework.response import Response
from django.http.response import HttpResponse
from django.shortcuts import render
from rest_framework import generics, status
from rest_framework.generics import GenericAPIView
from rest_framework.mixins import (DestroyModelMixin, ListModelMixin,
                                   RetrieveModelMixin)
from rest_framework.permissions import AllowAny, IsAdminUser
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.views import APIView

from .models import *
from .serializers import *

def indexpage(request):
    return render(request, 'assesment_system/index.html')

def basepage(request):
    return render(request, 'assesment_system/base.html')

fs = FileSystemStorage(location='tmp/')


class CandidateRegister(APIView):
     serializer_class =CustomUserSerializer
     def post(self,request):
        serializer = CustomUserSerializer(data=request.data)
        print(serializer)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)      

def candidateregister(request):
    return render(request, 'assesment_system/CandidateRegister.html')




class candidateList(APIView):
   
    def get(self, request):
        tasks = Candidate.objects.all()
        serialized = CustomUserSerializer(tasks, many=True)
     
       
        return Response(serialized.data)


class user_details_operation(generics.RetrieveUpdateDestroyAPIView):
	queryset=Candidate.objects.all()
	serializer_class=CandidateSerializer


def candidatelogin(request):
    return render(request, 'assesment_system/login.html')

#Csv file upload

class CandidateViewSet(viewsets.ModelViewSet):
  
  
    queryset = Candidate.objects.all()
    serializer_class = CustomUserSerializer

    @action(detail=False, methods=['POST'])
    def upload_data(self, request):
       
        file = request.FILES["file"]

        content = file.read()  # these are bytes
        file_content = ContentFile(content)
        file_name = fs.save(
            "_tmp.csv", file_content
        )
        tmp_file = fs.path(file_name)

        csv_file = open(tmp_file, errors="ignore")
        reader = csv.reader(csv_file)
        next(reader)
        
        product_list = []
        for email, row in enumerate(reader):
            (
                email,
                user_name,
                first_name,
                last_name,
               
              
            ) = row
            product_list.append(
                Candidate(
                    email=email,
                    user_name=user_name,
                    first_name=first_name,
                    last_name=last_name,
                  
                  
                )
            )

        Candidate.objects.bulk_create(product_list)

        return Response("Successfully upload the data")







#Aptitude
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

class  Show(GenericAPIView,RetrieveModelMixin):
    queryset=Aptitude.objects.all()
    serializer_class=AptitudeSerializer

    def get(self,request,*args,**kwargs):
        return self.retrieve(request,*args,**kwargs)



class  ReasoningShow(GenericAPIView,RetrieveModelMixin):
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


class User_Verbal_mapperAPI(generics.CreateAPIView):    
    serializer_class = User_Verbal_mapper_Serializer
    queryset=User_Verbal_mapper.objects.all()

  

class User_Verbal_mapperList(APIView): 
    def get(self, request):
        tasks = User_Verbal_mapper.objects.all()
        serialized = User_Verbal_mapper_Serializer(tasks, many=True)
        return Response(serialized.data)

#Self development Curd operations




class Self_development_User_mapperDeleteApi(generics.DestroyAPIView):
    queryset = Self_development_User_mapper.objects.all()
    serializer_class = Self_development_User_mapperSerializer

class Self_development_User_mapperList(APIView):
    def get(self, request):
        tasks = Self_development_User_mapper.objects.all()
        serialized = Self_development_User_mapperSerializer(tasks, many=True)
        return Response(serialized.data)

class Self_development_User_mapperApi(generics.CreateAPIView):
    serializer_class = Self_development_User_mapperSerializer
    queryset = Self_development_User_mapper.objects.all()
  

    


#####################################

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




#############################################################


class Self_developmentAPI(generics.GenericAPIView):
    serializer_class= Self_developmentSerializer
    def post(self,request,*args,**kwargs):
        serializer=self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self_development= serializer.save()
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

# class ReasoningAPI(generics.CreateAPIView):
#     queryset = Reasoning.objects.all()
#     serializer_class = ReasoningSerializer

    


def QuestionPage(request):

    return render(request, 'assesment_system/question_page.html')

class ReasoningUpdateApi(generics.RetrieveUpdateDestroyAPIView):
    queryset = Reasoning.objects.all()
    serializer_class = ReasoningSerializer

class User_Reasoning_mapperAPI(generics.CreateAPIView):
    serializer_class = User_Reasoning_mapper_Serializer
    queryset = User_Reasoning_mapper.objects.all()
    
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





class crud(generics.RetrieveUpdateDestroyAPIView):
	queryset=Aptitude.objects.all()
	serializer_class=AptitudeSerializer
  

class User_Aptitude_mapperAPI(generics.CreateAPIView):
    queryset = User_Aptitude_mapper.objects.all()
    serializer_class = User_Aptitude_mapper_Serializer
   


class User_Apptitude_mapper_crud(generics.RetrieveUpdateDestroyAPIView):
	queryset=User_Aptitude_mapper.objects.all()
	serializer_class=User_Aptitude_mapper_Serializer



class User_Aptitude_mapperList(APIView):
    def get(self, request):
        tasks = User_Aptitude_mapper.objects.all()
        serialized = User_Aptitude_mapper_Serializer(tasks, many=True)
        return Response(serialized.data)






class UserFeedback(generics.CreateAPIView):
    queryset = user_feedback.objects.all()
    serializer_class = User_Feedback_Serializer


class UserFeedbackList(APIView):
    def get(self, request):
        tasks = user_feedback.objects.all()
        serialized = User_Feedback_Serializer(tasks, many=True)
        return Response(serialized.data)


def userfeedback(request):
     return render(request, 'assesment_system/feedback.html')



# def checkanswer(request):
#     cresult=0
#     wresult=0
#     post1=User_Aptitude_mapper.objects.all()
#     for i in post1:
#         qid=i.q_id
#         user_answer=i.user_answer
#         post2=Aptitude.objects.filter(q_id=qid)
#         for j in post2:
#             q_ans=j.q_ans
#         if user_answer == q_ans:
#             cresult=cresult+1           
#         else:
#             user_wresult=wresult+1
#     b = Result(user_cresult=cresult,user_wresult=user_wresult)
#     b.save()
#     return render(request,'assesment_system/index.html')
   


# class ResultList(APIView): 
#     def get(self, request):
#         tasks = Result.objects.all()
#         serialized = Result_Serializer(tasks, many=True)
#         return Response(serialized.data)

# def Resultlist(request):
#     productData =Result.objects.all()
#     print("products are ",productData)
#     return render(request,'assesment_system/result.html',{"products": productData})





class UserLoginView(generics.GenericAPIView):
    permission_classes = (AllowAny,)
    serializer_class = CandidateloginSerializer


    def post(self, request):
        serializer=self.serializer_class(data=request.data)
        status_code = status.HTTP_200_OK
        username=serializer.initial_data['username']
        password=serializer.initial_data['password']
        user=Candidate.objects.filter(username=username,password=password)
        if user:
          response = {
              'success': 'True',
              'status code': status_code,
              'message': 'User logged in  successfully',

              'username': serializer.initial_data["username"],

          }
          return HttpResponse("successfully logged in")


        else:
            return HttpResponse("wrong username or password")   

def ExamDashboard(request):
    return render(request,'assesment_system/exam_dashboard.html')            

class CandidateList(GenericAPIView, ListModelMixin):
     queryset = Candidate.objects.all()
     serializer_class = CandidateSerializer

     def get(self, request, *args, **kwargs):
      return self.list(request, *args, **kwargs)  

class CandidateRetrive(GenericAPIView, RetrieveModelMixin):
     queryset = Candidate.objects.all()
     serializer_class = CandidateSerializer

     def get(self, request, *args, **kwargs):
       return self.retrieve(request, *args, **kwargs)   

class CandidateUpdate(generics.RetrieveUpdateDestroyAPIView):
     queryset = Candidate.objects.all()
     serializer_class = CandidateSerializer

     def put(self, request, *args, **kwargs):
      return self.update(request, *args, **kwargs) 

class CandidateDestroy(GenericAPIView, DestroyModelMixin):
     queryset = Candidate.objects.all()
     serializer_class = CandidateSerializer


     def delete(self, request, *args, **kwargs):
      return self.destroy(request, *args, **kwargs)

class UserFeedackList(APIView):
    def get(self,request):
        tasks=user_feedback.objects.all()
        serailzed= user_feedback_Serializer(tasks,many=True)
        return Response(serailzed.data)  


def index(request):
    return render(request, 'assesment_system/index.html')     

# def ResultView(request):
    # user_cresult = 0
    # user_wresult=0
    # res = User_Reasoning_mapper.objects.all()
    # for i in res:
    #     question_id = i.question_id
    #     user_answer = i.user_answer
    #     res2 = Reasoning.objects.filter(question_id=question_id)
    #     for j in res2:
    #         answer = j.answer
    #     if user_answer == answer:
    #         user_cresult = user_cresult+1
    #     else:
    #         user_wresult = user_wresult+1
    # print("Your " +str(user_cresult)+ " answer is correct and " +str(user_wresult)+ " answer is incorrect.")
    # result = Result(user_cresult = user_cresult, user_wresult = user_wresult)
    # result.save()
    # return render(request, 'assesment_system/result.html')    


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


#forgot password
class RequestPasswordResetEmail(generics.GenericAPIView):
    serializer_class = ResetPasswordEmailRequestSerializer
    def post(self, request):
        # serializer = self.serializer_class(data=request.data)
        email = request.data.get('email', '')
        if Candidate.objects.filter(email=email).exists():
            user = Candidate.objects.get(email=email)
            uidb64 = urlsafe_base64_encode(smart_bytes(user.id))
            token = PasswordResetTokenGenerator().make_token(user)
            current_site = get_current_site(
                request=request).domain
            relativeLink = reverse(
                'password-reset-confirm', kwargs={'uidb64': uidb64, 'token': token})
            # redirect_url = request.data.get('redirect_url', '')
            absurl = 'http://'+'localhost:3000' + relativeLink
            email_body = 'Hello, \n Use link below to reset your password  \n' + \
                absurl
            data = {'email_body': email_body, 'to_email': user.email,
                    'email_subject': 'Reset your passsword'}
            Util.send_email(data)
        return Response({'success': 'We have sent you a link to reset your password','token':token,'uidb64':uidb64}, status=status.HTTP_200_OK)
class SetNewPasswordAPIView(generics.GenericAPIView):
    serializer_class = SetNewPasswordSerializer
    def patch(self, request):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        return Response({'success': True, 'message': 'Password reset success'}, status=status.HTTP_200_OK)
class PasswordTokenCheckAPI(generics.GenericAPIView):
    def get(self, request, uidb64, token):
        try:
            id = smart_str(urlsafe_base64_decode(uidb64))
            user = Candidate.objects.get(id=id)
            if not PasswordResetTokenGenerator().check_token(user, token):
                 return Response({'error': 'Token is not valid, please request a new one'}, status=status.HTTP_400_BAD_REQUEST)
            return Response({'succes':True,'message':'credential valid','uidb64':uidb64,'token':token})
        except DjangoUnicodeDecodeError as identifier:
                if not PasswordResetTokenGenerator().check_token(user):
                     return Response({'error': 'Token is not valid, please request a new one'}, status=status.HTTP_400_BAD_REQUEST)




#Api for Candidateresult
# class CandidateResult(APIView):
#      serializer_class =UserResult_Serializer
#      def post(self,request):
#         print("Requested data ",request.data) 
#         serializer = UserResult_Serializer(data=request.data)
#         print("Serializer is ",serializer)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data, status=status.HTTP_201_CREATED)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)      

class  CandidateResultList(APIView):
    def get(self, request):
        tasks = UserResult.objects.all()
        serialized = UserResult_Serializer(tasks, many=True)
        return Response(serialized.data)

def Candiresult(request):
    user_cresult = 0
    user_wresult=0
    #For Aptitude 
    res = User_Aptitude_mapper.objects.all()
    for i in res:
        username=i.username
        q_id = i.q_id
        user_answer = i.user_answer
        testtype=i.testtype
        res2 = Aptitude.objects.filter(q_id=q_id)
        for j in res2:
            q_ans = j.q_ans
        if q_ans == user_answer:
            user_cresult = user_cresult+1
        else:
            user_wresult = user_wresult+1
    result = UserResult(username=username,user_cresult = user_cresult, user_wresult = user_wresult,testtype=testtype)
    result.save()
    # #For reasoning
    user_coresult = 0
    user_wroesult=0
    res3 = User_Reasoning_mapper.objects.all()
    for i in res3:
        username=i.username
        question_id = i.question_id
        user_answer = i.user_answer
        testtype=i.testtype
        res4 = Reasoning.objects.filter(question_id=question_id)
        for j in res4:
            answer = j.answer
        if answer == user_answer:
            user_coresult = user_coresult+1
        else:
            user_wroesult = user_wroesult+1
    result = UserResult(username=username,user_cresult = user_coresult, user_wresult = user_wroesult,testtype=testtype)
    result.save()







    return render(request, 'assesment_system/result.html')
