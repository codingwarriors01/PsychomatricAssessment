import React from 'react';
import 'bootstrap'
import DOMPurify from 'dompurify';




    const rawHTML = `
    The logistic regression model takes real-valued inputs and makes a prediction as to the probability of the input belonging to the default class (class 0). If the probability is > 0.5 we can take the output as a prediction for the default class (class 0), otherwise, the prediction is for the other class (class 1).
    <img src='https://cdn.analyticsvidhya.com/wp-content/uploads/2020/04/logistic.png' style="width:500px"/><br/>
    Gradient Descent for Logistic Regression:- <br/><br/>
    We can apply stochastic gradient descent to the problem of finding the coefficients for the logistic regression model as follows:<br/>

    Let us suppose for the example dataset, the logistic regression has three coefficients just like linear regression:<br/>

    output = b0 + b1*x1 + b2*x2<br/>
    The job of the learning algorithm will be to discover the best values for the coefficients (b0, b1, and b2) based on the training data.<br/><br/>

    Given each training instance:<br/>

    Calculate a prediction using the current values of the coefficients.<br/>
                                prediction = 1 / (1 + e^(-(b0 + b1*x1 + b2*x2)).<br/><br/>
    Calculate new coefficient values based on the error in the prediction. The values are updated according to the below equation:<br/>
                    b = b + alpha * (y – prediction) * prediction * (1 – prediction) * x<br/><br/>
    Where b is the coefficient we are updating and prediction is the output of making a prediction using the model. Alpha is a parameter that you must specify at the beginning of the training run.<br/> This is the learning rate and controls how much the coefficients (and therefore the model) changes or learns each time it is updated.<br/>

    Like we saw earlier when talking about linear regression, B0 does not have any input.<br/> This coefficient is called the bias or the intercept and we can assume it always has an input value of 1.0. So while updating, we’ll multiply with 1.0.<br/>

    The process is repeated until the model is accurate enough (e.g. error drops to some desirable level) or for a fixed number of iterations.<br/>
    We’ll start by defining the dataset:<br/>
    <img src='https://cdn.analyticsvidhya.com/wp-content/uploads/2020/04/data2.png'/> <br/>     

    
    `
    function Logisticregressioncplusexample(){
        return(
      <div>
        
        { <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(rawHTML) }} /> }
      </div>
      )
    }
    export default Logisticregressioncplusexample;
  
