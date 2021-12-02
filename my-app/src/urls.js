import React from 'react'
import Questionpaper from './Aptitude';
import SelfdevelopmentQuestions from './Self_development';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
import API from './component/user_creation';
import Exam from './exam_page';
import ThankYou from './Thankyou';
import ExamDashborad from './exam_dashboard';
import Login from './login';
import Register from './register';
import Result from './result';
import Home from './homepage';
import VerbalQuestionpaper from './verbalquestion'




function App(){
    return (
        <Router>
        <Routes>
        <Route exact path="" element={<Home/>}/>
        <Route exact path="/signin" element={<Login/>}/>
        <Route exact path="/test/:type" element={<Exam/>}/>
        <Route exact path="/SelfdevelopmentQuestions" element={<SelfdevelopmentQuestions/>}/>
        <Route exact path="/exam_dashboard" element={<ExamDashborad/>}/>

        <Route exact path="/VerbalQuestionpaper" element={<VerbalQuestionpaper/>}/>
        <Route exact path="/signup" element={<Register/>}/>
        <Route exact path="/show"  element={<API/>}/>
        <Route exact path="/thankyou"  element={<ThankYou/>}/>
        <Route exact path="/self_development"  element={<SelfdevelopmentQuestions/>}/>
        <Route exact path="/final"  element={<Questionpaper/>}/>
        {/* <Route exact path=""  element={<Exam/>}/> */}




        </Routes>
        </Router>);
    }


export default App;    
