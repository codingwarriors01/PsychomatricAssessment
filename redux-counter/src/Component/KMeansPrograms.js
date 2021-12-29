import React,{useState} from 'react';
import 'bootstrap';
import Kmeanpython from './KmeansPython';


function Kmeanspythonexample() {
 
    return (

        <>
            <head>
                <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
                    integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
                    crossorigin="anonymous"
                />
            </head>

            <div className='row'>
                <h1 class="text-center">K-Means Algorithm Working</h1>
                <div className='col-md-6'><br />

                    <div className="form-control " id="floatingTextarea1" style={{ height: "auto", maxHeight: "auto", minHeight: "auto", width: "650px", maxWidth: "650px", minWidth: "650px" }} disabled readOnly>
                        This is a simple example of how k-means works. In this example, we will first construct a 2D dataset with four distinct blobs and then use the k-means algorithm to observe the results.<br />

                    </div>
                
                </div>
                    <br/>
                    <div className='col-md-6'><br />    
                    <div className='row' style={{ height: "auto", backgroundColor: "#E9ECEF", width: "auto" }}>
                        <Kmeanpython />
                    </div>
                </div>
            </div>
        </>
    );
}
export default Kmeanspythonexample;