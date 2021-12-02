import React from 'react';
import './header.css';
import {Router, Routes, Route, Link} from 'react-router-dom';
import ExamDashborad from './exam_dashboard';
import QuestionNumber from './question_numbers';
import Path from './urls';
import Login from './login';
export default function NavBar()
{
    
                
    return(


        <>
        <html>
            <head>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous" />
    
    {/* <link rel="stylesheet" href="{% static 'style/style.css' %}" /> */}
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css" rel="stylesheet" />
     
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>

            </head>
            <body>
        <section>
    <nav class="navbar navbar-expand-lg navbar-light fixed-top">
        <div class="container">
            <a class="navbar-brand" href="#" style={{color:"blue"}}><strong>Assesment Test</strong></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                <ul class="navbar-nav  ml-auto">
                 <li class="nav-item active">
                     <a class="nav-link" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#about">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Contact</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Services</a>
                    </li>
                    <li class="nav-item">
                        <div class="row social-network" style={{marginLeft: "20px"}}>
                        <a class="nav-link" href="#"><i class="fab fa-google"></i></a>
                        {/* <a class="nav-link" href="#"><i class="fab fa-github"></i></a> */}
                    </div>						        
                    </li>
                   <li class="nav-item" style={{marginLeft: "20px"}}>
                        <Link to="/signin" class="btn btn-primary">Sign in</Link>
                   </li>
                   <li class="nav-item" style={{marginLeft: "20px"}}>
                   <Link to="/signup" class="btn btn-info">Register</Link>
               </li>
            </ul>
            </div>
        </div>
</nav>
</section>

</body>
</html>

        </>
        
    )
  
}
