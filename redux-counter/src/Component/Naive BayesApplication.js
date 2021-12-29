import React from 'react';



function  NaiveBayesApplication() {

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
                <h1 className='text-center'>Application of Naive Bayes </h1><br/>
                <div className='row'>
                    <div className='col-md-4'>
                        <div class="card" style={{ width: '32rem' }}>
                            <div class="card-body">
                                <h5 class="card-title" >Medical Diagnosis </h5>
                                <p class="card-text">
                                    Doctors can diagnose patients by using the information that the classifier provides. Healthcare professionals can use Naive Bayes to indicate if a patient is at high risk for certain diseases and conditions, such as heart disease, cancer, and other ailments. 
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div class="card" style={{ width: '32rem' }}>
                            <div class="card-body">
                                <h5 class="card-title" >News Classification</h5>
                                <p class="card-text">
                                    With the help of a Naive Bayes classifier, Google News recognizes whether the news is political, world news, and so on. 
                                    As the Naive Bayes Classifier has so many applications, it’s worth learning more about how it works.        
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div class="card" style={{ width: '32rem' }}>
                            <div class="card-body">
                                <h5 class="card-title" >Face Recognition</h5>
                                <p class="card-text">
                                    As a classifier, it is used to identify the faces or its other features, like nose, mouth, eyes, etc.         
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </body>
        </html>
    );
}

export default NaiveBayesApplication;