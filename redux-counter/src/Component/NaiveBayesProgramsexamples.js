import React,{useState} from 'react';
import 'bootstrap';
import NaiveByesJavaQuestion from './NaiveBayesJavaexample';
import NaiveByesJavaPrograms from './NaiveByesJavaPrograms';
import NaiveByesPythonExample from './NaiveBayesPythonexample';
import NaiveByesPythonProgram from './NaiveBayesPythonProgram';
          


function NaiveBayesPrograms() {
    const [lang, setLang] = useState("Java");
    const onSubmit = () => {
        let val = document.getElementById("languages").value
        setLang(val)
    }
    const renderexample = () => {
        if (lang == "Java") {
            console.log(lang)
            return(<NaiveByesJavaQuestion/>)
            
        } else if (lang == "Python") {
            console.log(lang);
            return(<NaiveByesPythonExample/>)
           
        }
    }

    const renderSwitch = () => {
       if (lang == "Java") {
         return(<NaiveByesJavaPrograms/>)
            
        } else if (lang == "Python") {
            console.log(lang);
            return(<NaiveByesPythonProgram/>)
            
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
            <h1 class="text-center">Naive Bayes Algorithm Working</h1>
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
export default NaiveBayesPrograms;