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

        

    def tearDown(self):
        return super().tearDown()        