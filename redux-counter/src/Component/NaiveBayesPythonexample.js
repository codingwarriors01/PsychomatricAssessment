import React from 'react';
import 'bootstrap'
import DOMPurify from 'dompurify';




    const rawHTML = `
    In this  we are using the Social network ad dataset. The dataset contains the details of users in a social networking site to find whether a user buys a product by clicking the ad on the site based on their salary, age, and gender.
    <img src='https://editor.analyticsvidhya.com/uploads/38175nv11.png'/><br/>
    Let’s predict the test results<br/>
    y_pred  =  classifier.predict(X_test)<br/>
    Predicted and actual value – <br/>
    y_pred:-  <br/>
    <img src='https://editor.analyticsvidhya.com/uploads/49630nv12.png'/><br/>
    y_test:-<br/>
    <img src='https://editor.analyticsvidhya.com/uploads/41661nv13.png'/><br/>    
    
    `
    function NaiveByesPythonExample(){
        return(
            
      <div>
         
                  { <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(rawHTML) }} /> }
      </div>
      )
    }
    export default NaiveByesPythonExample;
       
  
