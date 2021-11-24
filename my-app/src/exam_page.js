import React, { useEffect, useState } from 'react';
import './exam_page.css';
// import NavBar from './header'
import {Nav, Navbar, NavDropdown, MenuItem,  Tabs, ButtonToolbar, Button, Table, ButtonGroup, Row, Col, Grid, Panel, FormGroup, FormControl, Container} from 'react-bootstrap';
import QuestionNumber from './question_numbers';
// import Footer from './footer';
import Questionpaper from './Aptitude';
import StoreResult from './Aptitude';
import App from './urls';
import Timer from './timer';
import { propTypes } from 'react-bootstrap/esm/Image';
import { queryAllByDisplayValue } from '@testing-library/dom';
 export default function Exam(props){
 const [id,setId]=useState(1);
 function updateProps(e){
     if(e.target){
        setId(e.target.value);
        return;
     }
     setId(e);
 }
     return(
     <>
     
     <html>
         <head>
         <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
         <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css" rel="stylesheet"/>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"/>
         </head>
  <body>

  <nav class="navbar navbar-light bg-color d-flex justify-content-center" ><Timer/></nav>



    <div class="area"></div><nav class="main-menu">
            <ul>
                <li>
                    <a href="http://justinfarrow.com">
                        <i class="fa fa-home fa-2x"></i>
                        <span class="nav-text">
                            Dashboard
                        </span>
                    </a>
                  
                </li>
                <li class="has-subnav">
                    <a href="#">
                        <i class="fa fa-laptop fa-2x"></i>
                        <span class="nav-text">
                            Stars Components
                        </span>
                    </a>
                    
                </li>
                <li class="has-subnav">
                    <a href="#">
                       <i class="fa fa-list fa-2x"></i>
                        <span class="nav-text">
                            Forms
                        </span>
                    </a>
                    
                </li>
                <li class="has-subnav">
                    <a href="#">
                       <i class="fa fa-folder-open fa-2x"></i>
                        <span class="nav-text">
                            Pages
                        </span>
                    </a>
                   
                </li>
                <li>
                    <a href="#">
                        <i class="fa fa-bar-chart-o fa-2x"></i>
                        <span class="nav-text">
                            Graphs and Statistics
                        </span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i class="fa fa-font fa-2x"></i>
                        <span class="nav-text">
                           Quotes
                        </span>
                    </a>
                </li>
                <li>
                   <a href="#">
                       <i class="fa fa-table fa-2x"></i>
                        <span class="nav-text">
                            Tables
                        </span>
                    </a>
                </li>
                <li>
                   <a href="#">
                        <i class="fa fa-map-marker fa-2x"></i>
                        <span class="nav-text">
                            Maps
                        </span>
                    </a>
                </li>
                <li>
                    <a href="#">
                       <i class="fa fa-info fa-2x"></i>
                        <span class="nav-text">
                            Documentation
                        </span>
                    </a>
                </li>
            </ul>

            <ul class="logout">
                <li>
                   <a href="#">
                         <i class="fa fa-power-off fa-2x"></i>
                        <span class="nav-text">
                            Logout
                        </span>
                    </a>
                </li>  
            </ul>
        </nav>

        
  </body>
</html>
<Questionpaper id={id} updateProps={updateProps} />
{/* <QuestionNumber  /> */}
<div class="container-fluid" style={{marginTop:"-300px"}}>
      <div class="row">
          <div class="col-md-3 ms-auto div-bg">
            <button class="button button3" value="1"  onClick={(e)=>{updateProps(e)}}>01</button>
            <button class="button button3" value="2"  onClick={(e)=>{updateProps(e)}}>02</button>
            <button class="button button3" value="3"  onClick={(e)=>{updateProps(e)}}>03</button>
            <button class="button button4" value="4"  onClick={(e)=>{updateProps(e)}}>04</button>
            <button class="button button5" value="5"  onClick={(e)=>{updateProps(e)}}>05</button>
            <button class="button button1" value="6"  onClick={(e)=>{updateProps(e)}}>06</button>
            <button class="button button2" value="7"  onClick={(e)=>{updateProps(e)}}>07</button>
            <button class="button button3" value="8"  onClick={(e)=>{updateProps(e)}}>08</button>
            <button class="button button4" value="9"  onClick={(e)=>{updateProps(e)}}>09</button>
            <button class="button button5" value="10" onClick={(e)=>{updateProps(e)}}>10</button>
          

    </div>
    </div>
    </div>

{/* <Footer /> */}

     </>)
 }