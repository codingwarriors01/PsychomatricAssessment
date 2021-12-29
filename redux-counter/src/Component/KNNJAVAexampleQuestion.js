import React from 'react';
import 'bootstrap'
import DOMPurify from 'dompurify';


   

    const rawHTML = `We will use a customer dataset to make a prediction for unknown data. The dataset to be used shows the age, income, and the product bought by a customer as shown below:<br/><br/>
    <img src='https://griddb-pro.azureedge.net/en/wp-content/uploads/2021/11/data-1.png'/><br/><br/>
    We will find the recommendations for a customer with an age of 58 years and an income of 51000.<br/>
    
    We will first calculate the distance and then depending on the k value, we will be able to get the nearest k neighbors.<br/>
    
    By default, the value of k is 1, but we can pass the value of k during the creation of the instance. If k is 1, it will show 1 product, that is, 1 nearest neighbor, while if k is 2, it will show 2 products, that is, 2 nearest neighbors.<br/>
      
    `
    function KNNJAVAExample(){
        return(
      <div>
          
        { <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(rawHTML) }} /> }
      </div>
      )
    }
    export default KNNJAVAExample;
  



    
    

