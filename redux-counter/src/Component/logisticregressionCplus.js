import React from 'react';
import 'bootstrap'
import DOMPurify from 'dompurify';




    const rawHTML = `
    #include &lt bits/stdc++.h &gt // header file for all c++ libraries <br/>
    using namespace std;   // stdout library for printing values <br/>
    bool custom_sort(double a, double b) /* this custom sort function is defined to 
                                         sort on basis of min absolute value or error*/<br/>
    {<br/>
        double  a1=abs(a-0);<br/>
        double  b1=abs(b-0);<br/>
        return a1<b1; <br/>
    }<br/>
    int main()<br/>
    {<br/>
    /*Intialization Phase*/<br/>
    double x1[] = {2.7810836, 1.465489372, 3.396561688, 1.38807019, 3.06407232,7.627531214,5.332441248,6.922596716,8.675418651 ,7.673756466};          <br/>                
    double x2[] = {2.550537003,2.362125076,4.400293529,1.850220317,3.005305973,2.759262235,2.088626775,1.77106367,-0.2420686549,3.508563011};<br/>
    double y[] = {0, 0, 0, 0, 0, 1, 1, 1, 1, 1};<br/>
     
    vector<double>error; // for storing the error values<br/>
    double err;    // for calculating error on each stage<br/>
    double b0 = 0; // initializing b0<br/>
    double b1 = 0; // initializing b1<br/>
    double b2=  0; // initializing b2<br/>
    double alpha = 0.01; // initializing our learning rate<br/>
    double  e = 2.71828<br/>
      
    /*Training Phase*/<br/>
    for (int i = 0; i < 40; i ++) { //Since there are 10 values in our dataset and we want to run for 4 epochs so total for loop run 40 times<br/>
        int idx = i % 10;   //for accessing index after every epoch<br/>
        double p = -(b0 + b1 * x1[idx]+ b2* x2[idx]); //making the prediction<br/>
        double pred  = 1/(1+ pow(e,p)); //calculating final prediction applying sigmoid<br/>
        err = y[idx]-pred;  //calculating the error<br/>
        b0 = b0 - alpha * err*pred *(1-pred)* 1.0;   //updating b0<br/>
        b1 = b1 + alpha * err * pred*(1-pred) *x1[idx];//updating b1<br/>
        b2 = b2 + alpha * err * pred*(1-pred) * x2[idx];//updating b2<br/>
        cout&lt&lt"B0="&lt&ltb0&lt&lt" "&lt&lt"B1="&lt&ltb1&lt&lt" "&lt&lt"B2="&lt&ltb2&lt&lt" error="&lt&lterr&lt&ltendl;// printing values after every step<br/>
        error.push_back(err);<br/>
        }<br/>
    sort(error.begin(),error.end(),custom_sort);//custom sort based on absolute error difference<br/>
    cout&lt&lt"Final Values are: "&lt&lt"B0="&lt&ltb0&lt&lt" "&lt&lt"B1="&lt&ltb1&lt&lt" "&lt&lt"B2="&lt&ltb2&lt&lt" error="&lt&lterror[0];<br/>
      
    /*Testing Phase*/<br/>
    double test1,test2; //enter test x1 and x2<br/>
    cin>>test1>>test2;<br/>
    double pred=b0+b1*test1+b2*test2; //make prediction<br/>
    cout&lt&lt"The value predicted by the model= "&lt&ltpred&lt&ltendl;<br/>
    if(pred>0.5)<br/>
    pred=1;<br/>
    else<br/>
    pred=0;<br/>
    cout&lt&lt"The class predicted by the model= "&lt&ltpred;<br/>
    }<br/>
    `
    function LogisticregressionCplus(){
        return(
            
      <div>
          <h5>Logistic Regression In Python</h5>
                  { <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(rawHTML) }} /> }
      </div>
      )
    }
    export default LogisticregressionCplus;
       
  
