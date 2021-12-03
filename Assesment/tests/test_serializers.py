from rest_framework.test import APITestCase

from Assesment.serializers import *
from Assesment.models import *

class TestViews(APITestCase):
    def setUp(self):
        self.appti_attributes = {
            'q_id':'1',
            'question':'question',
            'q_option1':'q_option1',
            'q_option2':'q_option2',
            'q_option3':'q_option3',
            'q_option4':'q_option4',
            'q_ans':'q_ans'
        }
        self.apptiserializer_data = {
            'q_id':'1',
            'question': 'question1',
            'q_option1': 'q_option11',
            'q_option2': 'q_option22',
            'q_option3': 'q_option33',
            'q_option4': 'q_option44',
            'q_ans': 'q_ans'
        }
        self.appti = Aptitude.objects.create(**self.appti_attributes)
        self.serializer = AptitudeSerializer(instance=self.appti)
    
    def test_appticontains_expected_fields(self):
        data = self.serializer.data
        self.assertEqual(set(data.keys()),set(['q_id', 'question', 'q_option1', 'q_option2', 'q_option3', 'q_option4', 'q_ans']))

    def test_aptiserializer_field_content(self):
        data = self.serializer.data
        self.assertEqual(data['question'], self.appti_attributes['question'])

        
        
        
    #     self.userapptimapper_attributes={
    #         'id':'2',
    #         'q_id':'1',
    #         'user_answer': 'user_answer',

    #     }    
    #     self.userapptimapper_data={
    #         'id':'2',
    #         'q_id':'1',
    #         'user_answer': 'user_answer1',
    #     }
    #     self.apptimapper = User_Aptitude_mapper.objects.create(**self.userapptimapper_attributes)
    #     self.serializer = User_Aptitude_mapper_Serializer(instance=self.apptimapper)
        
    # def test_userappticontains_expected_fields(self):
    #     data1 = self.serializer.data

    #     self.assertEqual(set(data1.keys()),set(['q_id','user_answer']))

    # def test_useraptiserializer_field_content(self):
    #     data1 = self.serializer.data
    #     import pdb
    #     pdb.set_trace()

    #     self.assertEqual(data1['q_id'], self.appti_attributes['q_id'])          


    def tearDown(self):
        return super().tearDown()        