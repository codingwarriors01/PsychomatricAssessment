# GenericAPIView and Model Mixin
from django.http.response import HttpResponse
from django.shortcuts import render,redirect
from .models import Candidate
from django.contrib.auth import logout

from django.core.exceptions import ValidationError
from rest_framework.authtoken.models import Token
import json
from django.db import IntegrityError
from .models import*
from rest_framework.permissions import AllowAny
from rest_framework import status
from rest_framework.views import APIView
from .serializers import CandidateSerializer,CandidateloginSerializer
from rest_framework.response import Response
from rest_framework.generics import RetrieveAPIView
from rest_framework.generics import GenericAPIView
from rest_framework import generics
from rest_framework.decorators import api_view,permission_classes
from rest_framework.mixins import ListModelMixin, CreateModelMixin, RetrieveModelMixin, UpdateModelMixin, DestroyModelMixin

class CandidateList(GenericAPIView, ListModelMixin):
 queryset = Candidate.objects.all()
 serializer_class = CandidateSerializer

 def get(self, request, *args, **kwargs):
  return self.list(request, *args, **kwargs)

class CandidateCreate(generics.GenericAPIView):
 serializer_class = CandidateSerializer
 def post(self,request):
        serializer = CandidateSerializer(data=request.data)
        print(serializer)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)       



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

class UserLoginView(generics.GenericAPIView):
    permission_classes = (AllowAny,)
    serializer_class = CandidateloginSerializer
   
    # filter_fields = ('username')
    # lookup_field = 'pk'

    def post(self, request):
        print(request.data)
        # serializer = CandidateloginSerializer(data=request.data)  
        serializer=self.serializer_class(data=request.data)
        print(serializer)
        print(serializer.is_valid()) 
        # serializer.is_valid(raise_exception=True)
        print(serializer)
        print(serializer.data)
        # print(serializer.initial_data['username'])
        print("llll")
        status_code = status.HTTP_200_OK
        username=serializer.initial_data['username']
        password=serializer.initial_data['password']
        print(username)
        user=Candidate.objects.filter(username=username,password=password)
        print(user)
        if user: 
            
          print(user)    
          response = {
              'success': 'True',
              'status code': status_code,
              'message': 'User logged in  successfully',
              # 'token': serializer.initial_data['csrfmiddlewaretoken'],
              # 'userId': serializer.data['username'],
              'username': serializer.initial_data["username"],
              # 'default_role': user[0].default_role

          }
          print(response)
          return HttpResponse("logged in successfully ")
        else:
              
            print("sorry")  
            return HttpResponse("wrong username or password")
  

class Userlogoutview(generics.GenericAPIView):
  def get(self,request):
    
        request.user.token.delete()

        logout(request)

        return Response('User Logged out successfully')
def index(request):
  return render(request,'index.html')        
       
def logout(request):
      request.session.delete()
      return render(request,'login.html')           

# @api_view(["POST"])
# @permission_classes([AllowAny])
# def Register_Users(request):
#     try:
#         data = []
#         serializer = RegistrationSerializer(data=request.data)
#         if serializer.is_valid():
#             account = serializer.save()
#             account.is_active = True
#             account.save()
#             token = Token.objects.get_or_create(user=account)[0].key
#             data["message"] = "user registered successfully"
#             data["email"] = account.email
#             data["username"] = account.username
#             data["token"] = token

#         else:
#             data = serializer.errors


#         return Response(data)
#     except IntegrityError as e:
#         account=Users.objects.get(username='')
#         account.delete()
#         raise ValidationError({"400": f'{str(e)}'})

#     except KeyError as e:
#         print(e)
#         raise ValidationError({"400": f'Field {str(e)} missing'})

# @api_view(["POST"])
# @permission_classes([AllowAny])
# def login_user(request):

#         data = {}
#         reqBody = json.loads(request.body)
#         email1 = reqBody['Email_Address']
#         print(email1)
#         password = reqBody['password']
#         try:

#             Account = Users.objects.get(Email_Address=email1)
#         except BaseException as e:
#             raise ValidationError({"400": f'{str(e)}'})

#         token = Token.objects.get_or_create(user=Account)[0].key
#         print(token)
#         if not check_password(password, Account.password):
#             raise ValidationError({"message": "Incorrect Login credentials"})

#         if Account:
#             if Account.is_active:
#                 print(request.user)
#                 login(request, Account)
#                 data["message"] = "user logged in"
#                 data["email_address"] = Account.email

#                 Res = {"data": data, "token": token}

#                 return Response(Res)

#             else:
#                 raise ValidationError({"400": f'Account not active'})

#         else:
#             raise ValidationError({"400": f'Account doesnt exist'})

# @api_view(["GET"])
# @permission_classes([IsAuthenticated])
# def User_logout(request):

#     request.user.auth_token.delete()

#     logout(request)

#     return Response('User Logged out successfully')            

      

      


        






