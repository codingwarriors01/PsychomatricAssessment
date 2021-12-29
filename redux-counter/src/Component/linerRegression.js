import React from 'react';



function LinearApplication() {

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
                <h1 className='text-center'>Application of Linear Regression</h1><br/>

                <div className='row'>
                    <div className='col-md-4'>
                        <div class="card" style={{ width: '25rem' }}>
                            <div class="card-body">
                                <h5 class="card-title" >Forecasting</h5>
                                <p class="card-text">A top advantage of using a linear regression model in machine learning is the ability to forecast trends and make predictions that are feasible.<br />
                                    Data scientists can use these predictions and make further deductions based on machine learning. <br />
                                    It is quick, efficient, and accurate. <br />
                                    This is predominantly since machines process large volumes of data and there is minimum human intervention. <br />
                                    Once the algorithm is established, the process of learning becomes simplified.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div class="card" style={{ width: '25rem' }}>
                            <div class="card-body">
                                <h5 class="card-title" >Beneficial to small businesses</h5>
                                <p class="card-text">By altering one or two variables, machines can understand the impact on sales.<br />
                                    Since deploying linear regression is cost-effective, it is greatly advantageous to small businesses since short- and long-term forecasts can be made when it comes to sales.<br />
                                    This means that small businesses can plan their resources well and create a growth trajectory for themselves.<br />
                                    They will also be to understand the market and its preferences and learn about supply and demand.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div class="card" style={{ width: '25rem' }}>
                            <div class="card-body">
                                <h5 class="card-title" >Preparing Strategies </h5>
                                <p class="card-text">Since machine learning enables prediction, one of the biggest advantages of a linear regression model in it is the ability to prepare a strategy for a given situation, well in advance, and analyze various outcomes.<br />
                                    Meaningful information can be derived from the regression model of forecasting thereby helping companies plan strategically and make executive decisions.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </body>
        </html>
    );
}

export default LinearApplication;