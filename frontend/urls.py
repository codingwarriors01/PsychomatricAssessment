from django.urls import path
from frontend import views
from .views import*
urlpatterns = [
    path('',views.list),
    path('get',views.get_data),
    path('login/',views.login),
   path('index/',views.index,name='index'),


]
