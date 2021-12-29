import React from 'react';
import 'bootstrap'
import DOMPurify from 'dompurify';




    const rawHTML = `
    #include<iostream><br/>


    #define S 50<br/>

    using namespace std;<br/>
    int main()<br/>
    {<br/>
    int n, i;<br/>
    float x[S], y[S], sumX=0, sumX2=0, sumY=0, sumXY=0, a, b;<br/>
    
    /* Input */<br/>
    cout<<"How many data points? ";<br/>
    cin>>n;<br/>
    
    cout<<"Enter data:"<< endl;<br/>

    for(i=1;i<=n;i++)<br/>
    {<br/>
      cout<<"x["<< i <<"] = ";<br/>
      cin>>x[i];<br/>
      cout<<"y["<< i <<"] = ";<br/>
      cin>>y[i];<br/>
    }<br/>

    /* Calculating Required Sum */<br/>
    for(i=1;i<=n;i++)<br/>
    {<br/>
      sumX = sumX + x[i];<br/>
      sumX2 = sumX2 + x[i]*x[i];<br/>
      sumY = sumY + y[i];<br/>
      sumXY = sumXY + x[i]*y[i];<br/>
    }
    /* Calculating a and b */<br/>
    b = (n*sumXY-sumX*sumY)/(n*sumX2-sumX*sumX);<br/>
    a = (sumY - b*sumX)/n;<br/>
    
    /* Displaying value of a and b */<br/>
    cout<<"Calculated value of a is "<< a << "and b is "<< b << endl;<br/>
    cout<<"Equation of best fit is: y = "<< a <<" + "<< b<<"x";<br/>

    return(0);<br/>
    }
    `
    function LinearProgramCplus(){
        return(
      <div>
        <h5>Linear Regression in C++</h5>
        { <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(rawHTML) }} /> }
      </div>
      )
    }
    export default LinearProgramCplus;
  



    
    

