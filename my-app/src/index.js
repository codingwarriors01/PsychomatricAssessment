import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, Link, Switch ,BrowserRouter as Router } from 'react-router-dom';

// import ApptitudeQues from './component/Apptitude';
// import Quiz from './QuizMain';
// import Questionpaper from './Aptitude';

// import Gaurav1 from './component/user_tablle';
// import API from './component/user_creation';
// import Delete from './component/delete';
import reportWebVitals from './reportWebVitals';
import GraphApp from './piegraph';
// import Raj1 from './hook1'; 
// import Edit from './component/edit';
import { Component } from 'react';

// import Piegraph from './dynamicgraph'
import App from './urls';
// import Exam from './exam_page';
import Rating from './starfeedback';


ReactDOM.render(
  <React.StrictMode>
    {/* <Exam/> */}
    <App/>
    {/* <GraphApp/> */}

    {/* <Rating/> */}
    {/* <Graph/> */}
    {/* <Questionpaper/> */}
    {/* <Rajat /> */}
    {/* <Gaurav1/> */}
    {/* <API /> */}
    {/* <ApptitudeQues/> */}
    {/* <Delete/> */}
    {/* <Edit/> */}
    {/* <Raj1/> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
