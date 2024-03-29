
from Assesment import views
from django.urls import path
from .views import *
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

from rest_framework import routers
from Assesment.views import CandidateViewSet

router = routers.SimpleRouter()
router.register("candidateList", CandidateViewSet)
urlpatterns = router.urls

urlpatterns += [
	path('register/', CandidateRegister.as_view(), name='CandidateRegister'),
    
	path('CandidateRegister', CandidateRegister.as_view(), name='CandidateRegister'),
	path('api/UserFeedback', UserFeedback.as_view(), name='UserFeedback'),
	path('api/UserFeedbackList', UserFeedbackList.as_view(), name='UserFeedbackList'),
	path('candidateList/', candidateList.as_view(), name='candidateList'),
	path('userfeedback/',views.userfeedback,name="userfeedback"),
	path('CandidateRegister/', CandidateRegister.as_view(), name='CandidateRegister'),
	path('user_details_operation/<int:pk>/', user_details_operation.as_view(), name='user_details_operation'), #Crud operation on candidate by Pratiksha 
    path('candidateshow/<int:pk>/', CandidateRetrive.as_view()),
    path('update/<int:pk>/',CandidateUpdate.as_view()),
    path('delete/<int:pk>', CandidateDestroy.as_view()),
	path('candidatelogin/',views.candidatelogin,name="candidatelogin"),
	path('Apptitude', ApptitudeAPI.as_view(), name='Apptitude'),
	path('ApptitudeList', ApptitudeList.as_view(), name='ApptitudeList'),
	path('Aptitudeshow/<int:pk>', Show.as_view(), name='ApptitudeList'),
	path('', views.indexpage,name='indexpage'),
	path('basepage', views.basepage,name='basepage'),
	path('ApptitudeQuestionList', views.homepage,name='ApptitudeQuestionList'),
	path('crud/<int:pk>/', crud.as_view(), name='crud'), 
	path('User_Apptitude_mapper_crud/<int:pk>/', User_Apptitude_mapper_crud.as_view(), name='User_Apptitude_mapper_crud'),
	path('User_Aptitude_mapperAPI', User_Aptitude_mapperAPI.as_view(), name='User_Aptitude_mapperAPI'),
	path('User_Aptitude_mapperList', User_Aptitude_mapperList.as_view(), name='User_Aptitude_mapperList'),
	path('checkanswer',views.checkanswer,name='checkanswer'),

#by Aman
	 path('Verbal',VerbalAPI.as_view(),name='Verbal'),
    # path('profileList',views.ProfileList.as_view(),name='Verbals'),
    path('questions',views.homepage, name='questions'),
    path('create', VerbalCreateApi.as_view(), name='create'),
    path('display',VerbalListApi.as_view(), name='display'),
    path('update/<int:pk>',VerbalUpdateApi.as_view(),name='update'),
    path('showverbal/<int:pk>',Show.as_view(),name='showverbal'),
    path('delete/<int:pk>',VerbalDeleteApi.as_view(),name='delete'),
    path('User_Verbal_mapperAPI' , User_Verbal_mapperAPI.as_view(), name= 'User_Verbal_mapperAPI'),
    path('User_Aptitude_mapperList', User_Verbal_mapperList.as_view(), name='User_Verbal_mapperList'),

    path('api/UserFeedback', UserFeedback.as_view(), name='UserFeedback'),
	path('api/UserFeedbackList', UserFeedackList.as_view(), name='UserFeedbackList'),
	
	path('userfeedback/',views.userfeedback,name="userfeedback"),

    path('result',views.ResultView,name= 'result'),




    path('Self_development',Self_developmentAPI.as_view(),name='Self_development'),
    path('add', Self_developmentCreateApi.as_view(), name='add'),

	path('Verbal',VerbalAPI.as_view(),name='Verbal'),
    # path('profileList',ProfileList.as_view(),name='Verbals'),
    path('questions',views.homepage1, name='questions'),
	path('User_Verbal_mapperAPI' , User_Verbal_mapperAPI.as_view(), name= 'User_Verbal_mapperAPI'),
    path('User_Verbal_mapperList', User_Verbal_mapperList.as_view(), name='User_Verbal_mapperList'),
    path('create', VerbalCreateApi.as_view(), name='create'),
    path('display',VerbalListApi.as_view(), name='display'),
    # path('update/<int:pk>',VerbalUpdateApi.as_view(),name='update'),
    # path('showverbal/<int:pk>',Show.as_view(),name='showverbal'),
    path('delete/<int:pk>',VerbalDeleteApi.as_view(),name='delete'),
    # path('User_Verbal_mapperAPI' , User_Verbal_mapperAPI.as_view(), name= 'User_Verbal_mapperAPI'),
    # path('User_Aptitude_mapperList', User_Verbal_mapperList.as_view(), name='User_Verbal_mapperList'),
    # path('api/UserFeedback', UserFeedback.as_view(), name='UserFeedback'),
	# path('api/UserFeedbackList', UserFeedackList.as_view(), name='UserFeedbackList'),
	# path('userfeedback/',views.userfeedback,name="userfeedback"),
    path('result',views.ResultView,name= 'result'),
    path('Self_add', Self_developmentCreateApi.as_view(), name='Self_add'),
    # path('USer_Self_development_mapper_Result', User_selfdevelop_mapperAPI.as_view(), name='USer_Self_development_mapper_Result'),

    path('self_update/<int:pk>',Self_developmentUpdateApi.as_view(),name='self_update'),
    path('erase/<int:pk>',Self_developmentDeleteApi.as_view(),name='erase'),
    path('displayself_dev/<int:pk>',Self_developmentShow.as_view(),name='displayself_dev'),

    path('developmentselflist',Self_development_User_mapperList.as_view(),name='developmentselflist'),
	path('SelfdevelopeUser', Self_development_User_mapperApi.as_view(), name='SelfdevelopeUser'),
	path('SelfdevelopeUserDelete/<int:pk>', Self_development_User_mapperDeleteApi.as_view(), name='SelfdevelopeUserDelete'),


    # path('reasoning', ReasoningAPI.as_view(), name='reasoning'),
	path('questionsList', views.QuestionPage,name='questionsList'),
	path('result', views.Resultlist, name='result'),
 	path('view', ReasoningViewApi.as_view(), name='view'),
	path('login/',UserLoginView.as_view()),	
	path('exam_dashboard/',views.ExamDashboard,name='exam_dashboard'),
	path('', views.index, name='index'),
    path('profilelist', views.ProfileList.as_view(), name='reasoning'),
    path('questions', views.QuestionPage),
    path('reasoning', ReasoningCreateApi.as_view(), name='create'),
    path('show/<int:pk>',ReasoningShow.as_view(), name='show'),
    path('updatereasoning/<int:pk>',ReasoningUpdateApi.as_view(), name='update'),
	path('login/',UserLoginView.as_view()),	         # by pratiksha 
    # path('profilelist', views.ProfileList.as_view(), name='reasoning'),
    # path('create', ReasoningCreateApi.as_view(), name='create'),
    path('ReasoningShow/<int:pk>',ReasoningShow.as_view(), name='ReasoningShow'),
    # path('update/<int:pk>',ReasoningUpdateApi.as_view(), name='update'),
    path('User_Reasoning_mapperAPI' , User_Reasoning_mapperAPI.as_view(), name= 'User_Reasoning_mapperAPI'),
    path('User_Reasoning_mapperList', User_Reasoning_mapperList.as_view(), name='User_Reasoning_mapperList'),
    # path('UserFeedback', UserFeedback.as_view(), name='UserFeedback'),
	# path('UserFeedbackList', UserFeedackList.as_view(), name='UserFeedbackList'),
	# path('userfeedback/',views.userfeedback,name="userfeedback"),
    path('result1', views.ResultView, name='result1'),
    path('resultview', ResultList.as_view(), name='resultview'),
    # path('registerview', RegisterListView.as_view(), name='registerview'),
    # path('createuser', RegisterCreateApi.as_view(), name='createuser'),
    # path('updateuser/<int:pk>',RegisterUpdateApi.as_view(), name='updateuser'),
    path('exam_dashboard', views.ExamDashboard, name='exam_dashboard'),	
    path('logout/blacklist/', BlacklistTokenUpdateView.as_view(),
        name='blacklist'),
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'), 

]
