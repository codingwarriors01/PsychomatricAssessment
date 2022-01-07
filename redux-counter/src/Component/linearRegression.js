import React from 'react';
import 'bootstrap'
import DOMPurify from 'dompurify';




    const rawHTML = `
    The task is to find a line that fits best in the above scatter plot so that we can predict the response for any new feature values. (i.e a value of x not present in a dataset)<br/>
    This line is called a regression line.<br/>
    The equation of regression line is represented as:<br/>
    <img src='https://www.geeksforgeeks.org/wp-content/ql-cache/quicklatex.com-a38fd0bdce0c76330a46e6d1647ae70c_l3.svg' ><br/>

    Here,  <br/>

    h(x_i) represents the predicted response value for ith observation.<br/>
    b_0 and b_1 are regression coefficients and represent y-intercept and slope of regression line respectively.<br/>
    To create our model, we must “learn” or estimate the values of regression coefficients b_0 and b_1. And once we’ve estimated these coefficients, we can use the model to predict responses!<br/>
    In this article, we are going to use the principle of  Least Squares.<br/>
    Now consider:<br/>
    <img src='https://www.geeksforgeeks.org/wp-content/ql-cache/quicklatex.com-73f418a3915bfc00b6e4fe9880786659_l3.svg'/>   <br/>
    Here, e_i is a residual error in ith observation. <br/>
    So, our aim is to minimize the total residual error.<br/>
    We define the squared error or cost function, J as: <br/>
   <img src='https://www.geeksforgeeks.org/wp-content/ql-cache/quicklatex.com-a329f08479caa60ef94ba505275715ff_l3.svg'/> <br/>
    and our task is to find the value of b_0 and b_1 for which J(b_0,b_1) is minimum!<br/>
    Without going into the mathematical details, we present the result here:<br/>
    <img src='https://www.geeksforgeeks.org/wp-content/ql-cache/quicklatex.com-a8042a4b68fa681ab871d4e4b4c72590_l3.svg'/ ><br/>
    <img src='https://www.geeksforgeeks.org/wp-content/ql-cache/quicklatex.com-ecdaf9fde3a0c8ccd43a1db610593707_l3.svg' /><br/>
    where SS_xy is the sum of cross-deviations of y and x: <br/>
    <img src='https://www.geeksforgeeks.org/wp-content/ql-cache/quicklatex.com-47058277207b9002da818c0c8ad7c6f0_l3.svg'/> <br/>
    and SS_xx is the sum of squared deviations of x: <br/>
   <img src='https://www.geeksforgeeks.org/wp-content/ql-cache/quicklatex.com-6e4f32ee1e8c4799e0f4dc14b8f81af6_l3.svg'/>   <br/>
    `
    function LinearRegression(){
        return(
      <div>
         
        { <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(rawHTML) }} /> }
      </div>
      )
    }
    export default LinearRegression;
  
