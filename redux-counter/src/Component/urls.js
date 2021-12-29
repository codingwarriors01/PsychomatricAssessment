import React from 'react'
import Questionpaper from './Aptitude';
import SelfdevelopmentQuestions from './Self_development';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Exam from './exam_page';
import ExamDashborad from './exam_dashboard';
import Result from './result';
import Home from './homepage';
import VerbalQuestionpaper from './verbalquestion'
import Demo from './demo-test';
import ExamInstruction from './exam-instructions';
import Questions from './questions';
import PageLoader from './loader';
import Rating from './starfeedback';
import AI_Assist from './ai_assist';
import SignIn from './login';
import SignUp from './register';
import LogOut from './logout';
import AdminSignIn from './Adminlogin';
import AdminDisplay from './display';
import Update from './updated';
import BulkUpload from './bulkUpload';
import AlgoPage from './Algorithm';
import App from './App';
import LogisticPrograms from './logisticRegression'
import Programs from './Linearprogram'
import LinearApplication from './linerRegression';
import LogisticApplication from './logisticeRegressionAppl';
import DecisionTreeApplication from './DecisiontreeApplication';
import DecisiomTreePrograms from './DecisionTreeExamples';
import SvmApplication from  './SVMApplication';
import Svm from './SVMexamples';
import SvmPython from './svmpythonprogram';
import NaiveBayesApplication from './Naive BayesApplication';
import NaiveBayesPrograms from './NaiveBayesProgramsexamples';
import KNNApplication from './KNNApplication';
import KNNPrograms from './KNN_Programingexamples';
import KMeansApplication from './K_MeansApplication';
import Kmeanspythonexample from './KMeansPrograms';
import Randomforestapplication from './RandomForestApplication';
import Forget_Password from './forget-password';
import ResetPassword from './setpass';

function Path() {
    return (
        <Router>
            <Routes>
                <Route exact path="" element={<Home />} />
                <Route exact path="/admin" element={<AdminSignIn />} />
                <Route exact path="/display" element={<AdminDisplay />} />
                <Route exact path="/update/:id" element={<Update />} />
                <Route exact path="/upload_list" element={<BulkUpload />} />
                <Route exact path="/signin" element={<SignIn />} />
                <Route exact path="/exam_dashboard" element={<ExamDashborad />} />
                <Route exact path="/instruction" element={<ExamInstruction />} />
                <Route exact path="/demo" element={<Demo />} />
                <Route exact path="/questions" element={<Questions />} />
                <Route exact path="/test/:type" element={<Exam />} />
                <Route exact path="/final" element={<Questionpaper />} />
                <Route exact path="/VerbalQuestionpaper" element={<VerbalQuestionpaper />} />
                <Route exact path="/self_development" element={<SelfdevelopmentQuestions />} />
                <Route exact path="/SelfdevelopmentQuestions" element={<SelfdevelopmentQuestions />} />
                <Route exact path="/logout" element={<LogOut />} />
                <Route exact path="/signup" element={<SignUp />} />
                <Route exact path="/assist" element={<AI_Assist />} />
                <Route exact path="/feedback" element={<Rating />} />
                <Route exact path="/result" element={<Result />} />
                <Route exact path="/loader" element={<PageLoader />} />
                <Route exact path="AlgoPage" element={<AlgoPage />} />
                <Route exact path="/App" element={<App />} />
                <Route exact path="/programs" element={<Programs />} />
                <Route exact path="/LogisticPrograms" element={<LogisticPrograms />} />
                <Route exact path="/LogisticApplication" element={<LogisticApplication />} />
                <Route exact path="/DecisionTreeApplication" element={<DecisionTreeApplication />} />
                <Route exact path="/DecisiomTreePrograms" element={<DecisiomTreePrograms />} />
                <Route exact path="/SVMApplication" element={<SvmApplication />} />
                <Route exact path="/Svm" element={<Svm />} />
                <Route exact path="/SvmPython" element={<SvmPython />} />
                <Route exact path="/NaiveBayesApplication" element={<NaiveBayesApplication />}/>
                <Route exact path="/NaiveBayesPrograms" element={<NaiveBayesPrograms />}/>
                <Route exact path="/KNNApplication" element={<KNNApplication />}/>
                <Route exact path="/KNNPrograms" element={<KNNPrograms />}/>
                <Route exact path="/LinearApplication" element={<LinearApplication />} />
                <Route exact path="/KMeansApplication" element={<KMeansApplication />} />
                <Route exact path="/Kmeanspythonexample" element={<Kmeanspythonexample />} />
                <Route exact path="/Randomforestapplication" element={<Randomforestapplication />} />
                <Route exact path="/forget_password" element={<Forget_Password/>}/>

                <Route path="password-reset/:uidb64/:token/" element={<ResetPassword/>} />
            
            </Routes>
        </Router>);
}

export default Path;


