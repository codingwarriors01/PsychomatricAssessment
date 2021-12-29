import React from 'react';



function KMeansApplication() {

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
                <h1 className='text-center'>Application of K-Means</h1><br/>

                <div className='row'>
                    <div className='col-md-4'>
                        <div class="card" style={{ width: '32rem' }}>
                            <div class="card-body">
                                <h5 class="card-title" >Delivery Store Optimization</h5>
                                <p class="card-text">
                                Optimize the process of good delivery using truck drones by using a combination of k-means to find the optimal number of launch locations and a genetic algorithm to solve the truck route as a traveling salesman problem.<br/>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div class="card" style={{ width: '32rem' }}>
                            <div class="card-body">
                                <h5 class="card-title" >Identifying Crime Localities  </h5>
                                <p class="card-text">
                                With data related to crimes available in specific localities in a city, the category of crime, the area of the crime, and the association between the two can give quality insight into crime-prone areas within a city or a locality.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div class="card" style={{ width: '32rem' }}>
                            <div class="card-body">
                                <h5 class="card-title" >Fantasy League Stat Analysis </h5>
                                <p class="card-text">
                                Analyzing player stats has always been a critical element of the sporting world, and with increasing competition, machine learning has a critical role to play here. as an interesting exercise, if you would like to create a fantasy draft team and like to identify similar players based on player stats, k-means can be a useful option
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4'><br/>
                        <div class="card" style={{ width: '32rem' }}>
                            <div class="card-body">
                                <h5 class="card-title" >Insurance Fraud Detection  </h5>
                                <p class="card-text">
                                Machine learning has a critical role to play in fraud detection and has numerous applications in automobile, healthcare, and insurance fraud detection. utilizing past historical data on fraudulent claims, it is possible to isolate new claims based on its proximity to clusters that indicate fraudulent patterns. since insurance fraud can potentially have a multi-million dollar impact on a company, the ability to detect frauds is crucial.<br/>
                                </p>
                            </div>
                        </div>
                    </div>
               
                </div>
            </body>
        </html>
    );
}

export default KMeansApplication;
