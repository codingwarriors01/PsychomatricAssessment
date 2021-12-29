import React from 'react';



function DecisionTreeApplication() {

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
                <h1 className='text-center'>Application of Decision Tree</h1><br/>

                <div className='row'>
                    <div className='col-md-4'>
                        <div class="card" style={{ width: '32rem' }}>
                            <div class="card-body">
                                <h5 class="card-title" >Marketing</h5>
                                <p class="card-text">
                                Businesses can use decision trees to enhance the accuracy of their promotional campaigns by observing the performance of their competitors’ products and services.<br/> Decision trees can help in audience segmentation and support businesses in producing better-targeted advertisements that have higher conversion rates.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div class="card" style={{ width: '32rem' }}>
                            <div class="card-body">
                                <h5 class="card-title" >Retention of Customers</h5>
                                <p class="card-text">
                                Companies use decision trees for customer retention through analyzing their behaviors and releasing new offers or products to suit those behaviors. By using decision tree models, companies can figure out the satisfaction levels of their customers as well. 
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div class="card" style={{ width: '32rem' }}>
                            <div class="card-body">
                                <h5 class="card-title" >Diagnosis of Diseases and Ailments</h5>
                                <p class="card-text">
                                Decision trees can help physicians and medical professionals in identifying patients that are at a higher risk of developing serious ( or preventable) conditions such as diabetes or dementia.<br/> The ability of decision trees to narrow down possibilities according to specific variables is quite helpful in such cases. 
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4'><br/>
                        <div class="card" style={{ width: '32rem' }}>
                            <div class="card-body">
                                <h5 class="card-title" >Detection of Frauds</h5>
                                <p class="card-text">
                                Companies can prevent fraud by using decision trees to identify fraudulent behavior beforehand.
                                It can save companies a lot of resources, including time and money. 
                                </p>
                            </div>
                        </div>
                    </div>
               
                </div>
            </body>
        </html>
    );
}

export default DecisionTreeApplication;