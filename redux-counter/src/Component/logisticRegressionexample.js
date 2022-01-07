import React from 'react';
import 'bootstrap'
import DOMPurify from 'dompurify';




    const rawHTML = `
    <p>  This dataset contains information of users from a companies database. <br/>
    It contains information about UserID, Gender, Age, EstimatedSalary, Purchased.
     We are using this dataset for predicting that a user will purchase the company’s newly launched product or not.  </p>
    <img src='https://media.geeksforgeeks.org/wp-content/uploads/20190429053110/purchase-data.jpg'/><br/>
    Let’s make the Logistic Regression model, predicting whether a user will purchase the product or not.

    

    
    `
    function Logisticregression(){
        return(
      <div>
        
        { <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(rawHTML) }} /> }
      </div>
      )
    }
    export default Logisticregression;
  
