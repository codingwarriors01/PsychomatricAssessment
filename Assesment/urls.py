from django.urls import path
from Assesment import views
from django.urls import path
from .views import *


urlpatterns = [
	path('candidateregister/',views.candidateregister,name="candidateregister"),
	path('CandidateRegister/', CandidateRegister.as_view(), name='CandidateRegister'),
	path('api/UserFeedback', UserFeedback.as_view(), name='UserFeedback'),
	path('api/UserFeedbackList', UserFeedbackList.as_view(), name='UserFeedbackList'),
	path('candidateList/', candidateList.as_view(), name='candidateList'),
	path('user_details_operation/<int:pk>/', user_details_operation.as_view(), name='user_details_operation'),
	path('userfeedback/',views.userfeedback,name="userfeedback"),
    path('show/<int:pk>/', CandidateRetrive.as_view()),
    path('update/<int:pk>/',CandidateUpdate.as_view()),
    path('delete/<int:pk>/', CandidateDestroy.as_view()),
	path('candidatelogin/',views.candidatelogin,name="candidatelogin"),
	path('Apptitude', ApptitudeAPI.as_view(), name='Apptitude'),
	path('ApptitudeList', ApptitudeList.as_view(), name='ApptitudeList'),
	path('Aptitudeshow/<int:pk>', Show.as_view(), name='ApptitudeList'),
	# path('', views.indexpage,name='indexpage'),
	path('basepage', views.basepage,name='basepage'),
	path('ApptitudeQuestionList', views.homepage,name='ApptitudeQuestionList'),
	path('crud/<int:pk>/', crud.as_view(), name='crud'),
	path('User_Apptitude_mapper_crud/<int:pk>/', User_Apptitude_mapper_crud.as_view(), name='User_Apptitude_mapper_crud'),
	path('User_Aptitude_mapperAPI', User_Aptitude_mapperAPI.as_view(), name='User_Aptitude_mapperAPI'),
	path('User_Aptitude_mapperList', User_Aptitude_mapperList.as_view(), name='User_Aptitude_mapperList'),

	path('checkanswer',views.checkanswer,name='checkanswer'),

#by Aman
	path('Verbal',VerbalAPI.as_view(),name='Verbal'),
    path('profileList',ProfileList.as_view(),name='Verbals'),
	path('display',VerbalListApi.as_view(), name='display'),
    path('questions',views.homepage1, name='questions'),
	path('User_Verbal_mapperAPI' , User_Verbal_mapperAPI.as_view(), name= 'User_Verbal_mapperAPI'),
    path('User_Verbal_mapperList', User_Verbal_mapperList.as_view(), name='User_Verbal_mapperList'),

#by Gaurav
    path('reasoning', ReasoningAPI.as_view(), name='reasoning'),
	path('questionsList', views.QuestionPage,name='questionsList'),
    path('User_Reasoning_mapperAPI' , User_Reasoning_mapperAPI.as_view(), name= 'User_Reasoning_mapperAPI'),
    path('User_Reasoning_mapperList', User_Reasoning_mapperList.as_view(), name='User_Reasoning_mapperList'),
 	path('view', ReasoningViewApi.as_view(), name='view'),
	path('login/',UserLoginView.as_view()),	
	path('exam_dashboard/',views.ExamDashboard,name='exam_dashboard'),
	path('', views.index, name='index'),
    path('profilelist', views.ProfileList.as_view(), name='reasoning'),
    path('questions', views.QuestionPage),
    path('create', ReasoningCreateApi.as_view(), name='create'),
    path('show/<int:pk>',Show.as_view(), name='show'),
    path('update/<int:pk>',ReasoningUpdateApi.as_view(), name='update'),
    path('User_Reasoning_mapperAPI' , User_Reasoning_mapperAPI.as_view(), name= 'User_Reasoning_mapperAPI'),
    path('User_Reasoning_mapperList', User_Reasoning_mapperList.as_view(), name='User_Reasoning_mapperList'),
    path('UserFeedback', UserFeedback.as_view(), name='UserFeedback'),
	path('UserFeedbackList', UserFeedackList.as_view(), name='UserFeedbackList'),
	path('userfeedback/',views.userfeedback,name="userfeedback"),
    path('result', views.ResultView, name='result'),
    path('resultview', ResultList.as_view(), name='resultview'),
    path('registerview', RegisterListView.as_view(), name='registerview'),
    path('createuser', RegisterCreateApi.as_view(), name='createuser'),
    path('updateuser/<int:pk>',RegisterUpdateApi.as_view(), name='updateuser'),
    path('exam_dashboard', views.ExamDashboard, name='exam_dashboard'),	
]
