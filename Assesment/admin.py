from django.contrib import admin

# Register your models here.
from .models import  Customer_support, Reasoning, User_Verbal_mapper, UserResult, Verbal,Candidate,Aptitude,User_Aptitude_mapper,user_feedback,Customer_support


# Register your models here.
admin.site.register(Verbal)
admin.site.register(User_Verbal_mapper)
admin.site.register(Candidate)
admin.site.register(Aptitude)
admin.site.register(User_Aptitude_mapper)
admin.site.register(user_feedback)
admin.site.register(Customer_support)
admin.site.register(Reasoning)
admin.site.register(UserResult)


