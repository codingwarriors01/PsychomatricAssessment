import React, { useState} from 'react';
import 'bootstrap'
import DOMPurify from 'dompurify';


   

    const rawHTML = `
    #include &ltstdio.h&gt <br/>
    #include &ltconio.h&gt <br/>

    #define S 50 <br/>


    int main() <br/>
    { <br/>
    int n, i; <br/>
    float x[S], y[S], sumX=0, sumX2=0, sumY=0, sumXY=0, a, b; <br/>
    clrscr(); <br/>
    /* Input */ <br/>
    printf("How many data points?\n"); <br/>
    scanf("%d", &n); <br/>
    printf("Enter data:\n"); <br/>
    for(i=1;i<=n;i++) <br/>
    { <br/>
    printf("x[%d]=",i); <br/>
    scanf("%f", &x[i]); <br/>
    printf("y[%d]=",i); <br/>
    scanf("%f", &y[i]); <br/>
    } <br/>
    /* Calculating Required Sum */ <br/> 
    for(i=1;i<=n;i++) <br/>
    { <br/>
    sumX = sumX + x[i]; <br/>
    sumX2 = sumX2 + x[i]*x[i]; <br/>
    sumY = sumY + y[i]; <br/>
    sumXY = sumXY + x[i]*y[i]; <br/>
    } <br/>
    /* Calculating a and b */ <br/>
    b = (n*sumXY-sumX*sumY)/(n*sumX2-sumX*sumX); <br/>
    a = (sumY - b*sumX)/n; <br/>
    /* Displaying value of a and b */ <br/>
    printf("Values are: a=%0.2f and b = %0.2f",a,b); <br/>
    printf("\nEquation of best fit is: y = %0.2f + %0.2fx",a,b); <br/>
    getch(); <br/>
    return(0); <br/>
    } <br/>
    `
    function LinearProgramC(){
        return(
      <div>
          <h5>Linear Regression in C</h5>
        { <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(rawHTML) }} /> }
      </div>
      )
    }
    export default LinearProgramC;
  



    
    

