import React from 'react';



function LogisticApplication() {

    return (
        <html>
            <head>
                <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
                    integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
                    crossorigin="anonymous"
                />
            </head>
            <body>
                <h1 className='text-center'>Application of Logistic Regression</h1><br/>

                <div className='row'>
                    <div className='col-md-4'>
                        <div class="card" style={{ width: '32rem' }}>
                            <div class="card-body">
                                <h5 class="card-title" >Low Precision/High Recall</h5>
                                <p class="card-text">
                                In applications where we want to reduce the number of false negatives without necessarily reducing the number of false positives, we choose a decision value which has a low value of Precision or high value of Recall.<br/>
                                 For example, in a cancer diagnosis application, we do not want any affected patient to be classified as not affected without giving much heed to if the patient is being wrongfully diagnosed with cancer.<br/> 
                                 This is because, the absence of cancer can be detected by further medical diseases but the presence of the disease cannot be detected in an already rejected candidate.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div class="card" style={{ width: '32rem' }}>
                            <div class="card-body">
                                <h5 class="card-title" >High Precision/Low Recall</h5>
                                <p class="card-text">
                                In applications where we want to reduce the number of false positives without necessarily reducing the number of false negatives, we choose a decision value which has a high value of Precision or low value of Recall. <br/>
                                For example, if we are classifying customers whether they will react positively or negatively to a personalised advertisement, we want to be absolutely sure that the customer will react positively to the advertisement because otherwise, a negative reaction can cause a loss of potential sales from the customer.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div class="card" style={{ width: '32rem' }}>
                            <div class="card-body">
                                <h5 class="card-title" >Credit scoring</h5>
                                <p class="card-text">
                                ID Finance is a financial company that makes predictive models for credit scoring. They need their models to be easily interpretable. They can be asked by a regulator about a certain decision at any moment.
                                Data preprocessing for credit scoring modeling includes such a step like reducing correlated variables. It’s difficult if you have more than 15 variables in your model. For logistic regression, it is easy to find out which variables affect the final result of the predictions more and which ones less. 
                                It is also possible to find the optimal number of features and eliminate redundant variables with methods like recursive feature elimination.
                                At the final step, they can export prediction results to an Excel file, and analytic even without technical skills can get insights from this data. 
                                At some point, ID finance refused the use of third-party statistical applications and rewrote their algorithms for building models in Python. This has led to a significant increase in the speed of model development. But they did not abandon logistic regression in favor of more complex algorithms. Logistic regression is widely used in credit scoring and it shows remarkable results.
                                </p>
                            </div>
                        </div>
                    </div>
               
                </div>
            </body>
        </html>
    );
}

export default LogisticApplication;