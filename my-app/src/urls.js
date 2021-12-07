import React from 'react'
import Questionpaper from './Aptitude';
import SelfdevelopmentQuestions from './Self_development';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import API from './component/user_creation';
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

function App() {
    return (
        <Router>
            <Routes>

                <Route exact path="" element={<Home />} />
                <Route exact path="/test/:type" element={<Exam />} />
                <Route exact path="/SelfdevelopmentQuestions" element={<SelfdevelopmentQuestions />} />
                <Route exact path="/exam_dashboard" element={<ExamDashborad />} />
                <Route exact path="/questions" element={<Questions />} />
                <Route exact path="/VerbalQuestionpaper" element={<VerbalQuestionpaper />} />
                <Route exact path="/show" element={<API />} />
                <Route exact path="/self_development" element={<SelfdevelopmentQuestions />} />
                <Route exact path="/final" element={<Questionpaper />} />
                <Route exact path="/demo" element={<Demo />} />
                <Route exact path="/instruction" element={<ExamInstruction />} />
                <Route exact path="/loader" element={<PageLoader />} />
                <Route exact path="/result" element={<Result />} />
                <Route exact path="/feedback" element={<Rating />} />
                <Route exact path="/assist" element={<AI_Assist />} />
                <Route exact path="/signin" element={<SignIn />} />
                <Route exact path="/signup" element={<SignUp />} />
                <Route exact path="/logout" element={<LogOut />} />

            </Routes>
        </Router>);
}

export default App;


