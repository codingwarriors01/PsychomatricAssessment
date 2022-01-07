from rest_framework.test import  APITestCase,APIClient
from django.urls import  reverse




class TestSetup(APITestCase):
    def setUp(self):

        self.apti_url = reverse('Apptitude')
        self.verbal_url = reverse('Verbal')
        self.reasoning_url = reverse('reasoning')
        self.dev_url=reverse('Self_add')
        self.userreasoningmapper_url=reverse('User_Reasoning_mapperAPI')
        self.feeback_ulr=reverse('UserFeedback')
        self.user_appti_mapper_url=reverse('User_Aptitude_mapperAPI')
        self.user_reasoning_mapper_url=reverse('User_Reasoning_mapperAPI')
        self.user_development_mapper_url=reverse('SelfdevelopeUser')
        self.user_verbal_mapper_url=reverse('User_Verbal_mapperAPI')
        



        self.apti_data = {
            'question': 'question',
            'q_option1': 'q_option1',
            'q_option2': 'q_option2',
            'q_option3': 'q_option3',
            'q_option4': 'q_option4',
            'q_ans': 'q_ans'
        }

        self.verbal_data = {
            'question': 'question',
            'q_option_1': 'q_option_1',
            'q_option_2': 'q_option_2',
            'q_option_3': 'q_option_3',
            'q_option_4': 'q_option_4',
            'q_answer': 'q_answer'
        }
        self.reasoning_data = {
            'question': 'question',
            'option_1': 'option_1',
            'option_2': 'option_2',
            'option_3': 'option_3',
            'option_4': 'option_4',
            'answer': 'answer'

        }
        self.devself_data = {
            'self_question': 'self_question',
            'self_option1': 'self_option1',
            'self_option2': 'self_option2',
            'self_option3': 'self_option3',
            'self_option4': 'self_option4',
            'self_option5': 'self_option5',
            'self_option6':'self_option6',
        }

        self.user_appti_mapper_data={
            'q_id':'q_id',
            'user_answer':'user_answer'

        }
        self.user_reasoning_mapper_data={
                    'question_id':'question_id',
                    'user_answer':'user_answer'

        }
        self.user_verbal_mapper_data={
                    'q_id':'q_id',
                    'user_answer':'user_answer'

        }
        self.Selfdevelopment_User_mapper_data={
                    'Sq_id':'Sq_id',
                    'Suser_answer':'Suser_answer'


        }



        self.feedback_data = {
            'user_feedback': '1',

        }

        return super().setUp()



    def tearDown(self):
        return super().tearDown()