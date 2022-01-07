import React, { useState } from 'react';
import 'bootstrap';
import LinearRegression from './linearRegression'
import LinearProgramCplus from './linearRegressionCplus';
import LinearProgramC from './linearRegressionC';
import LinearProgramP from './linearRegressionPython';
import img1 from '../Images/python-linear-regression-1.png';
function Programs() {
    const [lang, setLang] = useState("C");

    
    
    const onSubmit = () => {
        let val = document.getElementById("languages").value
        setLang(val)
    }
    const renderSwitch = () => {
        if (lang == "C") {
            console.log(lang);
            return (
                <LinearProgramC />)
        } else if (lang == "Cplus") {
            return(<LinearProgramCplus/>)
        } else if (lang == "Python") {
            console.log(lang);
            return (
                <LinearProgramP />

            )
        }
    }

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
            <h1 class="text-center"> Linear Regression Algorithm Working</h1>
                <div className='col-md-6'>
                    <div className=''>
                         <img src={img1} /> <br/>
                    </div>
                    <div className="form-control " id="floatingTextarea1" style={{ height: "auto", maxHeight: "auto", minHeight: "auto", width: "650px", maxWidth: "650px", minWidth: "650px" }} disabled readOnly> 
                    
                        <LinearRegression/><br/>
                        Algorithm: <br />
                        Step 1.  Read n <br />
                        Step 2.  sumx = 0 <br />
                        Step 3.  sumxsq = 0<br />
                        Step 4.  sumy = 0<br />
                        Step 5.  sumxy = 0<br />
                        Step 6.  for i = 1 to n do <br />
                        Step 7.  Read x, y<br />
                        Step 8.  sumx = sumx + x <br />
                        Step 9.  sumxsq = Sumxsq + x2 <br />
                        Step 10. sumy = Sumy + y<br />
                        Step 11. sumxy = sumxy + x * y end for<br />
                        Step 12. denom = n * sumxsq – sumx * sumx<br />
                        Step 13. a0 = (sumy * sumxsq – sumx * sumxy) / denom<br />
                        Step 14. a1 = (n * sumxy - sumx * sumy) / denonm<br />
                        Step 15. Write a1, a0<br />
                        Step 16. Stop<br />
                    
                    </div>
                </div>
                <div className='col-md-6'><br/><br/>
                    <div className='row'>
                        <form onChange={onSubmit}>
                            <select name="languages" id="languages">
                                <option value="C">C</option>
                                <option value="Cplus">C++</option>
                                <option value="Python">Python</option>
                            </select>
                        </form>
                    </div> <br />

                    <div className='row' style={{ height: "auto", backgroundColor: "#E9ECEF", width: "auto" }}>
                        {renderSwitch()}

                    </div>
                </div>
            </div>
        </>
    );
}
export default Programs;