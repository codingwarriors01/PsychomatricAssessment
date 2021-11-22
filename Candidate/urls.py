from django.urls import path
from  .views import *
from .import views

urlpatterns = [
    # path('register/',views.Register_Users,name='register')
    path('Candidateapi/', CandidateList.as_view()),
    path('create/', CandidateCreate.as_view(),name='create'),
    path('show/<int:pk>/', CandidateRetrive.as_view()),
    path('update/<int:pk>/',CandidateUpdate.as_view()),
    path('delete/<int:pk>/', CandidateDestroy.as_view()),
    path('login/',UserLoginView.as_view()),
    # path('logout/',Userlogoutview.as_view()),
    path('logout/',views.logout,name='logout'),
    
    

 ]




