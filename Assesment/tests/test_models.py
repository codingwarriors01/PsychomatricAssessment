from rest_framework.test import APITestCase
from  Assesment.models import *

class TestModels(APITestCase):
    def test_should_create_user(self):
        user=Candidate(username='username',first_name='first_name',last_name='last_name',email='email@gmail.com',contact_no="1234567896")
        user.set_password=('1234')
        user.save()
        self.assertEqual(str(user),'email@gmail.com')

    def test_should_create_apptitude(self):
        apti = Aptitude(question='question', q_option1='q_option1', q_option2='q_option2', q_option3='q_option3',q_option4='q_option4',q_ans="q_ans")
        apti.save()
        self.assertEqual(str(apti), 'question')

    def test_should_create_verbal(self):
        verbal  = Verbal(question='question', q_option_1='q_option_1', q_option_2='q_option_2', q_option_3='q_option_3',
                        q_option_4='q_option4', q_answer="q_answer")
        verbal.save()
        self.assertEqual(str(verbal), 'question')

    def test_should_create_self_development(self):
        self_development = Self_development(self_question='self_question', self_option1='self_option1', self_option2='self_option2', self_option3='self_option3',self_option4='self_option4',self_option5="self_option5",self_option6="self_option6")
        self_development.save()
        self.assertEqual(str(self_development), 'self_question')

    def test_should_create_reasoning(self):
         reasoning= Reasoning(question='question', option_1='option_1', option_2='option_2', option_3='option_3',
                        option_4='option4', answer="answer")
         reasoning.save()
         self.assertEqual(str(reasoning), 'question')

    def test_should_create_user_apptitude_mapper(self):
        userapptimapper = User_Aptitude_mapper(q_id='q_id', user_answer='user_answer')
        userapptimapper.save()
        self.assertEqual(str(userapptimapper), 'q_id')

    def test_should_create_user_verbal_mapper(self):
        userverbalmapper = User_Verbal_mapper(q_id='q_id', user_answer='user_answer')
        userverbalmapper.save()
        self.assertEqual(str(userverbalmapper), 'user_answer')


    def test_should_create_self_develoment_user_mapper(self):
        user_self_mapper = Self_development_User_mapper(Sq_id='Sq_id', Suser_answer='Suser_answer')
        user_self_mapper.save()
        self.assertEqual(str(user_self_mapper),'Suser_answer')

    def test_should_create_user_reaasoning_mapper(self):
        user_reasoning_mapper = User_Reasoning_mapper(question_id='question_id', user_answer='user_answer')
        user_reasoning_mapper.save()
        self.assertEqual(str(user_reasoning_mapper),'user_answer')

    def test_should_create_user_feedback(self):
        user_feedabck = user_feedback(user_feedback='user_feedback')
        user_feedabck.save()
        self.assertEqual(str(user_feedabck), 'user_feedback')

    def test_should_create_result(self):
        result = Result(user_cresult='user_cresult',user_wresult='user_wresult')
        result.save()
        self.assertEqual(str(result), 'user_cresult')


