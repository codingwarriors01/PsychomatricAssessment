import React from 'react';
import 'bootstrap'
import DOMPurify from 'dompurify';




    const rawHTML = `
    import numpy as np <br/>

    # Reading value of n<br/>
    n = int(input("How many data points? "))<br/>
    
    # Creating numpy array x & y to store n data points<br/>
    x = np.zeros(n)<br/>
    y = np.zeros(n)<br/>
    
    # Reading data
    print("Enter data:")<br/>
    for i in range(n):<br/>
        x[i] = float(input("x["+str(i)+"]= "))<br/>
        y[i] = float(input("y["+str(i)+"]= "))<br/>
        
    # Finding required sum for least square methods<br/>
    sumX,sumX2,sumY,sumXY = 0,0,0,0<br/>
    for i in range(n):<br/>
        sumX = sumX + x[i]<br/>
        sumX2 = sumX2 + x[i]*x[i]<br/>
        sumY = sumY + y[i]<br/>
        sumXY = sumXY + x[i]*y[i]<br/>
    
    # Finding coefficients a and b<br/>
    b = (n*sumXY-sumX*sumY)/(n*sumX2-sumX*sumX)<br/>
    a = (sumY - b*sumX)/n<br/>
    
    # Displaying coefficients a, b & equation<br/>
    print("\nCoefficients are:")<br/>
    print("a: ", a)<br/>
    print("b: ", b)<br/>
    print("And equation is: y = %0.4f + %0.4f x" %(a,b))<br/>
    
    `
    function LinearProgramP(){
        return(
      <div>
          <h5>Linear Regression in Python</h5>
        { <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(rawHTML) }} /> }
      </div>
      )
    }
    export default LinearProgramP;
  
