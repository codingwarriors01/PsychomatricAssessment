# import pytest
# from rest_framework.test import APITestCase
# from rest_framework.fields import CharField
# from Assesment.serializers import *

# from Assesment.models import *

# class TestSetup(APITestCase):
#     def setUp(self):
#         self.appti_attributes = {
#             'q_id':'1',
#             'question':'question',
#             'q_option1':'q_option1',
#             'q_option2':'q_option2',
#             'q_option3':'q_option3',
#             'q_option4':'q_option4',
#             'q_ans':'q_ans'
#         }
#         self.apptiserializer_data = {
#             'q_id':'1',
#             'question': 'question1',
#             'q_option1': 'q_option11',
#             'q_option2': 'q_option22',
#             'q_option3': 'q_option33',
#             'q_option4': 'q_option44',
#             'q_ans': 'q_ans'
#         }
#         self.appti = Aptitude.objects.create(**self.appti_attributes)
#         self.serializer = AptitudeSerializer(instance=self.appti)
    
  
        # self.userapptimapper_attributes={
        #     'id':'2',
        #     'q_id':'1',
        #     'user_answer': 'user_answer',

        # }    
        # self.userapptimapper_data={
        #     'id':'2',
        #     'q_id':'1',
        #     'user_answer': 'user_answer1',
        # }
        # self.apptimapper = User_Aptitude_mapper.objects.create(**self.userapptimapper_attributes)
        # self.serializer = User_Aptitude_mapper_Serializer(instance=self.apptimapper)
        
        
        
        
#         return super().setUp()

    
    
    # def tearDown(self):
    #     return super().tearDown()