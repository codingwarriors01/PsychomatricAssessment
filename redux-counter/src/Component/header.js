import React from 'react';
import { Button, Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import '../ComponentStyle/header.css';
import {Router, Routes, Route, Link} from 'react-router-dom';
import ExamDashborad from './exam_dashboard';
// import QuestionNumber from './question_numbers';
import  { useEffect,useState } from 'react';
import Path from './urls';
import Login from './login';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {useNavigate} from 'react-router-dom';
export default function NavBar(props)
{
       const [img,setimg]=useState();
       const [uid,setUid]=useState('');
       const history=useNavigate();  
       useEffect(()=>{
        console.log("uidddd222222222",localStorage.getItem('uid'));
        setUid(localStorage.getItem('username'));
        setimg(localStorage.getItem('image'));
    },[]);   
    
    const cid=localStorage.getItem('username')
    const imd=localStorage.getItem('image')

    let imgs = [
      
        'http://127.0.0.1:8000'
    
      ];
    
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
                    {localStorage.getItem('access_token')?
                    <li class="nav-item">
                        <a class="nav-link" onClick={()=>{history('/logout')}} >LOGOUT</a>
                    </li>
                    : null}


                    {/* <li class="nav-item">
                        <a class="nav-link" href="#">Services</a>
                    </li> */}
                    {!localStorage.getItem('access_token')? 
                    <li class="nav-item">
                        <div class="row social-network" style={{marginLeft: "20px"}}>
                        <a class="nav-link" href="#"><i class="fab fa-google"></i></a>
                  
                    </div>						        
                    </li>
                    :null}
                    {!localStorage.getItem('access_token')? 
                   <li class="nav-item" style={{marginLeft: "20px"}}>
                        <Link to="/signin" class="btn btn-primary">Sign in</Link>

                                </li>
                                : <div>
                               <img src={imd} style={{height:"100px", width:"100px", borderRadius:"50%"}} className='img-rounded'/>
                                      <p className="fw-bold" >{cid}</p>
                                      </div>}
                    {!localStorage.getItem('access_token')?             
                    <li class="nav-item" style={{marginLeft: "20px"}}>
                        <Link to="/admin" class="btn btn-primary">Admin</Link>

                                </li>  
                                 :null}    
                    {!localStorage.getItem('access_token')?                   
                   <li class="nav-item" style={{marginLeft: "20px"}}>
                   <Link to="/signup" class="btn btn-info">Register</Link>
               </li>
                :null}    

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
