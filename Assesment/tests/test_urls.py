from django.urls import  reverse
from rest_framework.test import  APITestCase,APIClient
from  Assesment.models import *






class TestSetup(APITestCase):

    def test_homepage(self):
        response = self.client.get(reverse('ApptitudeQuestionList'))
        self.assertEqual(response.status_code, 200)



    def test_apticreate(self):
        response = self.client.post(reverse('Apptitude'),data={'q_id':'1','question':'question','q_ans':'q_ans','q_option1':'q_option1','q_option2':'q_option2','q_option3':'q_option3','q_option4':'q_option4'})
        self.assertEqual(response.status_code, 200)

    def test_aptilist(self):
        response = self.client.get(reverse('ApptitudeList'))
        self.assertEqual(response.status_code, 200)   
    
    
    
    # def test_indexpage(self):
    #     response = self.client.get(reverse('indexpage'))
    #     self.assertEqual(response.status_code, 200) 
   
    def test_basepage(self):
        response = self.client.get(reverse('basepage'))
        self.assertEqual(response.status_code, 200) 
    

    def test__user_aptitudecreate(self):
        response = self.client.post(reverse('User_Aptitude_mapperAPI'),data={'id':'id','q_id':'q_id','user_answer':'user_answer'})
        self.assertEqual(response.status_code, 201)



    def test_user_aptitude_mapperlist(self):
            response = self.client.get(reverse('User_Aptitude_mapperList'))
          
            self.assertEqual(response.status_code, 200) 
    
    def test_homepage1(self):
            response = self.client.get(reverse('questions'))
          
            self.assertEqual(response.status_code, 200) 
    

    def test_verbalcreate(self):
            response = self.client.post(reverse('Verbal'),data={'q_id':'1','question':'question','q_answer':'q_answer','q_option_1':'q_option_1','q_option_2':'q_option_2','q_option_3':'q_option_3','q_option_4':'q_option_4'})
            # import pdb
            # pdb.set_trace()
            self.assertEqual(response.status_code, 200)

    def test_VerbalListApi(self):
        response = self.client.get(reverse('display'))
        self.assertEqual(response.status_code, 200) 

    def test_User_Verbal_mappercreate(self):
        response = self.client.post(reverse('User_Verbal_mapperAPI'),data={'q_id':'1','user_answer':'user_answer'})
        # import pdb
        # pdb.set_trace()
        self.assertEqual(response.status_code, 201)

    def test_User_Verbal_mapperList(self):
        response = self.client.get(reverse('User_Verbal_mapperList'))
        self.assertEqual(response.status_code, 200) 


    def test_Self_developmentcreate(self):
        response = self.client.post(reverse('Self_add'),data={'self_qid':'self_qid','self_question':'self_question','self_option1':'self_option1','self_option2':'self_option2','self_option3':'self_option3','self_option4':'self_option4','self_option5':'self_option5','self_option6':'self_option6'})
        self.assertEqual(response.status_code, 201)
    
            
    def test_Self_developmentusercreate(self):
            response = self.client.post(reverse('SelfdevelopeUser'),data={'Sq_id':'Sq_id','Suser_answer':'Suser_answer'})
            self.assertEqual(response.status_code, 201)
    
    def test_Self_development_User_mapperList(self):
        response = self.client.get(reverse('developmentselflist'))
        self.assertEqual(response.status_code, 200)

    # def test_Reasoningcreate(self):
    #     response = self.client.post(reverse('reasoning'),
    #                                 data={'question_id': 'question_id', 'question': 'question','option_1':'option_1','option_2':'option_2','option_3':'option_3','option_4':'option_4','answer':'answer'})
    #     self.assertEqual(response.status_code, 201)

    def test_Reasoning_List(self):
        response = self.client.get(reverse('questionsList'))
        self.assertEqual(response.status_code, 200)

    def test_ReasoningApilist(self):
        response = self.client.get(reverse('view'))
        self.assertEqual(response.status_code, 200)

    def test_User_Reasoning_mappercreate(self):
        response = self.client.post(reverse('User_Reasoning_mapperAPI'),
                                    data={'question_id': 'question_id', 'user_answer': 'user_answer'
                                          })
        self.assertEqual(response.status_code, 201)

    def test_User_Reasoning_mapperList(self):
        response = self.client.get(reverse('User_Reasoning_mapperList'))
        self.assertEqual(response.status_code, 200)

    def test_ResultList(self):
        response = self.client.get(reverse('resultview'))
        self.assertEqual(response.status_code, 200)

    def test_ExamDashboard(self):
        response = self.client.get(reverse('exam_dashboard'))
        self.assertEqual(response.status_code, 200)