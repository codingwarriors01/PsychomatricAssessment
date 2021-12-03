import React from 'react'
import  {useState}  from "react";

import Signup from "./Register";

import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
import AdminDisplay from './display';
import Updated from './updated';
import CandidateDelete from './delete1';
import Home from './homepage';
import Show from './show';
import Result from './result';
import SignIn from './components/login';
import SignUp from './components/register';
import LogOut from './components/logout';
import VerbalQuestionpaper from './verbalquestion'
import Demo from './demo-test';
import ExamInstruction from './exam-instructions';
import Questions from './questions';
import PageLoader from './loader';
import Rating from './starfeedback';
import Questionpaper from './Aptitude';
import SelfdevelopmentQuestions from './Self_development';

import Exam from './exam_page';
import ThankYou from './Thankyou';
import ExamDashborad from './exam_dashboard';





function App(){
    return (
        <Router>
        <Routes>
        <Route exact path="" element={<Home/>}/>   
        <Route exact path="/display"  element={<AdminDisplay/>}/>
        <Route exact path="/update/:id"  element={<Updated/>}/>
        <Route exact path="/Delete/:id"  element={<CandidateDelete/>}/>
        <Route exact path="/signin"  element={<SignIn/>}/>
        <Route exact path="/signup"  element={<SignUp/>}/>
        <Route exact path="/logout"  element={<LogOut/>}/>
        <Route exact path="/test/:type" element={<Exam/>}/>
        <Route exact path="/SelfdevelopmentQuestions" element={<SelfdevelopmentQuestions/>}/>
        <Route exact path="/exam_dashboard" element={<ExamDashborad/>}/>
        <Route exact path="/questions" element={<Questions/>}/>
        <Route exact path="/VerbalQuestionpaper" element={<VerbalQuestionpaper/>}/>
        {/* <Route exact path="/show"  element={<API/>}/> */}
        <Route exact path="/self_development"  element={<SelfdevelopmentQuestions/>}/>
        <Route exact path="/final"  element={<Questionpaper/>}/>
        <Route exact path="/demo"  element={<Demo/>}/>
        <Route exact path="/instruction"  element={<ExamInstruction/>}/>
        <Route exact path="/loader"  element={<PageLoader/>}/>
        <Route exact path="/result"  element={<Result/>}/>
        <Route exact path="/feedback"  element={<Rating/>}/>


     
        </Routes>
        </Router>);
    }


export default App;    


