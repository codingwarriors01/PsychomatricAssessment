import React,{useState} from 'react';
import 'bootstrap';
import DecisionTreePython from './DecisionTreePprogram';
import DecisionTreePythonExample from './DecisionTreePexample';
import DecisionTreeJavaExample from './DecisionTreejavaExample';
import DecisionTreeJava from './DecisionTreejavaprogram'


function DecisiomTreePrograms() {
    const [lang, setLang] = useState("Java");
    const onSubmit = () => {
        let val = document.getElementById("languages").value
        setLang(val)
    }
    const renderexample = () => {
        if (lang == "Java") {
            console.log(lang)
            return(<DecisionTreeJavaExample/>)
            
        } else if (lang == "Python") {
            console.log(lang);
            return(
                <DecisionTreePythonExample/>
            )
           
        }
    }

    const renderSwitch = () => {
       if (lang == "Java") {
            console.log(lang)
            return(<DecisionTreeJava/>)
        } else if (lang == "Python") {
            console.log(lang);
            return(<DecisionTreePython/>)
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
            <h1 class="text-center">Decision Tree Algorithm Working</h1>
                <div className='col-md-6'><br />
           
                    <div className="form-control " id="floatingTextarea1" style={{ height: "auto", maxHeight: "auto", minHeight: "auto", width: "650px", maxWidth: "650px", minWidth: "650px" }} disabled readOnly> 
                        {renderexample()}
                      
                    </div>
                </div>
                <div className='col-md-6'><br/>
                    <div className='row'>
                        <form onChange={onSubmit}>
                            <select name="languages" id="languages">
                                
                                <option value="Java">Java</option>
                                <option value="Python">Python</option>
                            </select>
                        </form>
                    </div><br/>

                    <div className='row' style={{ height: "auto", backgroundColor: "#E9ECEF", width: "auto" }}>
                        {renderSwitch()}
                    </div>
                </div>
            </div>
        </>
    );
}
export default DecisiomTreePrograms;