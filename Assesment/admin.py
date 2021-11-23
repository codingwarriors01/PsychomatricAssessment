from django.contrib import admin

# Register your models here.
from .models import  User_Verbal_mapper, Verbal,Candidate,Aptitude,User_Aptitude_mapper,user_feedback,Result

# Register your models here.
admin.site.register(Verbal)
admin.site.register(User_Verbal_mapper)
admin.site.register(Candidate)
admin.site.register(Aptitude)
admin.site.register(User_Aptitude_mapper)
admin.site.register(user_feedback)
admin.site.register(Result)
