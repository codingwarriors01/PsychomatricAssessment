import React,{useState} from 'react';
import 'bootstrap';
import SvmPython from './svmpythonprogram';

function Svm() {
    
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
            <h1 class="text-center">Support Vector Machine Algorithm(SVM)</h1>
                <div className='col-md-6'><br />
           
                    <div className="form-control " id="floatingTextarea1" style={{ height: "auto", maxHeight: "auto", minHeight: "auto", width: "650px", maxWidth: "650px", minWidth: "650px" }} disabled readOnly> 
                        {/* {renderexample()} */}
                        <h4>Problem Statement</h4><br/>

                        Dream Housing Finance company deals in all home loans. They have a presence across all urban, semi-urban and rural areas.<br/> A customer first applies for a home loan, after that the company validates the customer’s eligibility for a loan.

                        Company wants to automate the loan eligibility process (real-time) based on customer details provided while filling an online application form. These details are Gender, Marital Status, Education, Number of Dependents, Income, Loan Amount, Credit History and others. To automate this process, they have given a problem to identify the customers’ segments, those are eligible for loan amount so that they can specifically target these customers. Here they have provided a partial data set.<br/>
                                            
                    </div>
                </div>
                <div className='col-md-6'><br/>
                 

                    <div className='row' style={{ height: "auto", backgroundColor: "#E9ECEF", width: "auto" }}>
                        {SvmPython()}
                    </div>
                </div>
            </div>
        </>
    );
}
export default Svm;