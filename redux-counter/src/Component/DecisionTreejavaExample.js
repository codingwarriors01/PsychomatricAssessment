import React from 'react';
import 'bootstrap'
import DOMPurify from 'dompurify';


   

    const rawHTML = `
    Let us consider you are planning to go out for dining , as your friends are visiting but you are hesitant in deciding on which restaurant to choose. Whenever you want to go out for dining you ask Bobby if he thinks you will like that place or not.<br/>
    You give him a list of restaurants that you have visited and tell him whether you liked each restaurant or not (giving a labelled training dataset). Bobby, ask you few questions like, whether you like roof top seating? Does restaurant serve Indian food ?, Is restaurant open till midnight ? Does restaurant have live music and so on to answer your question. It asks you several informative questions to give the reply whether you will like that restaurant or not. 
    In this Bobby is a decision tree for finding your restaurant preferences.<br/><br/>

    Types of Decision Trees:- <br/>
    1.Classification Trees<br/>
    2.Regression Trees<br/><br/>

    Classification trees:-<br/>
    It is the default kind of decision tree used to separate the dataset into different classes. The response variable is categorical in nature. (2 categories or multiple categories)<br/>

    Example: We have two variables age and weight .Based on this we are going to determine whether the person will join jym or not.<br/><br/>

    Regression Trees:-<br/>
    It is used when the response variable is continuous or numerical in nature. This is again classified into linear relationship and nonlinear relationship between the predictors and response.<br/>

    Example:Predicted price of a consumer good.<br/>


    `
    function DecisionTreeJavaExample(){
        return(
      <div>
          
        { <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(rawHTML) }} /> }
      </div>
      )
    }
    export default DecisionTreeJavaExample;
  



    
    

