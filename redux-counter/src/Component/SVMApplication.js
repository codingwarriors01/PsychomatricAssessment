import React from 'react';



function SvmApplication() {

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
                <h1 className='text-center'>Application of SVM</h1><br/>

                <div className='row'>
                    <div className='col-md-4'>
                        <div class="card" style={{ width: '32rem' }}>
                            <div class="card-body">
                                <h5 class="card-title" >Face Detection</h5>
                                <p class="card-text">
                                It classifies the parts of the image as face and non-face. It contains training data of n x n pixels with a two-class face (+1) and non-face (-1). Then it extracts features from each pixel as face or non-face. Creates a square boundary around faces on the basis of pixel brightness and classifies each image by using the same process.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div class="card" style={{ width: '32rem' }}>
                            <div class="card-body">
                                <h5 class="card-title" >Bioinformatics</h5>
                                <p class="card-text">
                                In the field of computational biology, the protein remote homology detection is a common problem. The most effective method to solve this problem is using SVM. In last few years, SVM algorithms have been extensively applied for protein remote homology detection. These algorithms have been widely used for identifying among biological sequences. For example classification of genes, patients on the basis of their genes, and many other biological problems.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div class="card" style={{ width: '32rem' }}>
                            <div class="card-body">
                                <h5 class="card-title" > Protein Fold and Remote Homology Detection</h5>
                                <p class="card-text">
                                Protein remote homology detection is a key problem in computational biology. Supervised learning algorithms on SVMs are one of the most effective methods for remote homology detection. The performance of these methods depends on how the protein sequences modeled. The method used to compute the kernel function between them.
                                </p>
                            </div>
                        </div>
                    </div>
              
               
                </div>
            </body>
        </html>
    );
}

export default SvmApplication;