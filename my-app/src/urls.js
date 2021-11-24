import React from 'react'
import Questionpaper from './Aptitude';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
import API from './component/user_creation';
import Exam from './exam_page';
import ThankYou from './Thankyou';



function App(){
    return (
        <Router>
        <Routes>
        <Route exact path="/show"  element={<API/>}/>
        <Route exact path="/thankyou"  element={<ThankYou/>}/>

        <Route exact path="/final"  element={<Questionpaper/>}/>
        <Route exact path=""  element={<Exam/>}/>




        </Routes>
        </Router>);
    }


export default App;    
