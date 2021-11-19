from django.shortcuts import render

# Create your views here.
def list(request):
    return render(request,'Register.html')

def get_data(request):
    return render(request,'getdata.html')

def login(request):
    return render(request,'login.html')  

def index(request):
    return render(request,'index.html')
     


   
