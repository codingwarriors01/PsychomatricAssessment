import React from 'react';



function Randomforestapplication() {

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
                <h1 className='text-center'>Application of Random Forest</h1><br/>

                <div className='row'>
                    <div className='col-md-4'>
                        <div class="card" style={{ width: '32rem' }}>
                            <div class="card-body">
                                <h5 class="card-title" >Stock market</h5>
                                <p class="card-text">
                                In the stock market, a random forest algorithm can be used to check about the stock trends and contemplate loss and profit.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div class="card" style={{ width: '32rem' }}>
                            <div class="card-body">
                                <h5 class="card-title" >Banking</h5>
                                <p class="card-text">
                                In banking, the random forest can be used to compute the loyal customers that means which customer will default and which will not. Fraud customers or customers having a bad record with the bank.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div class="card" style={{ width: '32rem' }}>
                            <div class="card-body">
                                <h5 class="card-title" > In Medicine</h5>
                                <p class="card-text">
                                Calculations of the correct mixture of compounds in medicine or whether identifying any sort of disease using the patient's medical records.
                                </p>
                            </div>
                        </div>
                    </div>
             
                </div>
            </body>
        </html>
    );
}

export default Randomforestapplication;