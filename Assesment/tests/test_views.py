
from rest_framework.reverse import reverse

from .test_setup import TestSetup
from django.test import Client
from rest_framework.test import APIRequestFactory, CoreAPIClient
from Assesment.views import *



class TestViews(TestSetup):


    def test_candidatelist(self):
        factory = APIRequestFactory()
        view=candidateList.as_view()
        response  = factory.get('candidateList')
        response = view(response)
        response.render()
        # self.assertEqual(response.content)




# Apptitude


    def test_apptitude(self):
        res=self.client.post(self.apti_url,self.apti_data,format="json")
        self.assertEqual(res.status_code,200)

    def test_Apptitudelist(self):
        factory = APIRequestFactory()
        view= ApptitudeList.as_view()
        response  = factory.get('ApptitudeList')
        response = view(response)
        response.render()

    def test_user_appti(self):
        res=self.client.post(self.user_appti_mapper_url, self.user_appti_mapper_data,format="json")
        self.assertEqual(res.status_code,201)
    
    def test_userApptilist(self):
                factory = APIRequestFactory()
                view= User_Aptitude_mapperList.as_view()
                response  = factory.get('User_Aptitude_mapperList')
                response = view(response)
                response.render()



#verbal
    def test_verbal(self):
        res=self.client.post(self.verbal_url,self.verbal_data,format="json")
        self.assertEqual(res.status_code,200)

    def test_user_verbal_mapper(self):
        res=self.client.post(self.user_verbal_mapper_url,self.user_verbal_mapper_data,format="json")
        self.assertEqual(res.status_code,201)    

    def test_userVerballist(self):
            factory = APIRequestFactory()
            view= User_Verbal_mapperList.as_view()
            response  = factory.get('User_Verbal_mapperList')
            response = view(response)
            response.render()

    def test_verballist(self):
        factory = APIRequestFactory()
        view = VerbalListApi.as_view()
        response = factory.get('display')
        response = view(response)
        response.render()

#self development
    def test_self_development_User_mapperList(self):
        factory = APIRequestFactory()
        view =Self_development_User_mapperApi.as_view()
        response = factory.get('developmentselflist')
        response = view(response)
        response.render()

    def test_selfdevelopmentcreation(self):
        res = self.client.post(self.dev_url, self.devself_data, format="json")
        self.assertEqual(res.status_code, 201)

    def test_user_self_development(self):
            res = self.client.post(self.user_development_mapper_url, self.Selfdevelopment_User_mapper_data)
            self.assertEqual(res.status_code, 201)

#Reasoning


    # def test_Createreasoning(self):
    #     res = self.client.post(self.reasoning_url, self.reasoning_data, format="json")
    #     # import pdb
    #     # pdb.set_trace()
    #     self.assertEqual(res.status_code, 201)


    def test_user_reasoning(self):
            res=self.client.post(self.user_reasoning_mapper_url, self.user_reasoning_mapper_data,format="json")
            self.assertEqual(res.status_code,201)



    def test_user_reasoning_mapper_list(self):
        factory = APIRequestFactory()
        view =User_Reasoning_mapperList.as_view()
        response = factory.get('User_Reasoning_mapperList')
        response = view(response)
        response.render()

  

    def test_reasoning_list(self):
        factory = APIRequestFactory()
        view =ReasoningViewApi.as_view()
        response = factory.get('view')
        response = view(response)
        response.render()





#feedback and Result

    def test_feedback(self):
        res = self.client.post(self.feeback_ulr, self.feedback_data)
        self.assertEqual(res.status_code, 201)


    def test_feedback_list(self):
        factory = APIRequestFactory()
        view = UserFeedbackList.as_view()
        response = factory.get('UserFeedbackList')
        response = view(response)
        response.render()
