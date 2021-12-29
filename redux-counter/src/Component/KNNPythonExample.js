import React from 'react';
import 'bootstrap'
import DOMPurify from 'dompurify';


   

    const rawHTML = `
    Let’s go through an example problem for getting a clear intuition on the K -Nearest Neighbor classification. We are using the Social network ad dataset (Download). The dataset contains the details of users in a social networking site to find whether a user buys a product by clicking the ad on the site based on their salary, age, and gender.<br/>
    <img src='https://editor.analyticsvidhya.com/uploads/93102Screenshot%20(602).png' style='width:500px'/><br/>
    We are using 3 parameters in the model creation. n_neighbors is setting as 5, which means 5 neighborhood points are required for classifying a given point. The distance metric we are using is Minkowski, the equation for it is given below<br/>
    <img src='https://editor.analyticsvidhya.com/uploads/961341_boqym__Ai1n-WxaR1X6Dhw.png'/><br/>
    As per the equation, we have to select the p-value also.<br/>
    p = 1 , Manhattan Distance<br/>
    p = 2 , Euclidean Distance<br/>
    p = infinity , Cheybchev Distance<br/>
    In our problem, we are choosing the p as 2 (also u can choose the metric as “euclidean”)<br/>
    
         
    `
    function KNNpythonexample(){
        return(
      <div>
          
        { <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(rawHTML) }} /> }
      </div>
      )
    }
    export default KNNpythonexample;
  



    
    

