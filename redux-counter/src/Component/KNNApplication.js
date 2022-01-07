import React from 'react';



function KNNApplication() {

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
                <h1 className='text-center'>Application of k- Nearest Neighbors(KNN)</h1><br/>

                <div className='row'>
                    <div className='col-md-4'>
                        <div class="card" style={{ width: '32rem' }}>
                            <div class="card-body">
                                <h5 class="card-title" >Text mining</h5>
                                <p class="card-text">
                                The KNN algorithm is one of the most popular
                                algorithms for text categorization or text mining.
                                Some of the most recent works on this topic are for
                                instance. Different numbers of nearest neighbors are
                                used for different classes in this approach, rather than
                                a fixed number across all classes. In this way, the
                                only parameter that needs to be chosen by the user
                                when using KNN, the K value, becomes less sensible
                                and hence it does not need to be carefully chosen as
                                in the standard algorithm. Indeed, the probability that
                                an unknown sample belongs to a class is computed
                                by using only some top Kn nearest neighbors for that
                                class. The Kn value is derived from K according to
                                the size of the corresponding class in the training set.
                                This modified KNN was efficient and less sensible to
                                the K values when applied to text mining problems. 
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div class="card" style={{ width: '32rem' }}>
                            <div class="card-body">
                                <h5 class="card-title" >Agriculture</h5>
                                <p class="card-text">
                                In general, KNN is applied less than other data
                                mining techniques in agriculture related fields. It has
                                been applied, for instance, for simulating daily
                                precipitations and other weather variables. Another
                                interesting application is the evaluation of forest
                                inventories and for estimating forest variables. In
                                these applications, satellite imagery is used, with the
                                aim of mapping the land cover and land use with few
                                discrete classes. The other applications of the k-NN
                                method in agriculture include climate forecasting and
                                estimating soil water parameters.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div class="card" style={{ width: '32rem' }}>
                            <div class="card-body">
                                <h5 class="card-title" >Medicine</h5>
                                <p class="card-text">
                  
                                i. Predict whether a patient, hospitalized due to a
                                heart attack, will have a second heart attack. The
                                prediction is to be based on demographic, diet
                                and clinical measurements for that patient.<br/>
                                ii. Estimate the amount of glucose in the blood of a
                                diabetic person, from the infrared absorption
                                spectrum of that person’s blood.<br/>
                                iii. Identify the risk factors for prostate cancer,
                                based on clinical and demographic variables. <br/>
                                </p>
                            </div>
                        </div>
                    </div>
                  
               
                </div>
            </body>
        </html>
    );
}

export default KNNApplication;