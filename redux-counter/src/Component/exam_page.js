import React, { useEffect, useState } from 'react';
import '../ComponentStyle/exam_page.css';
import {Nav, Navbar, NavDropdown, MenuItem,  Tabs, ButtonToolbar, Button, Table, ButtonGroup, Row, Col, Grid, Panel, FormGroup, FormControl, Container} from 'react-bootstrap';
import Footer from './footer';
import VerbalQuestionpaper from './verbalquestion';
import store from './store';
import Questionpaper from './Aptitude';
import StoreResult from './Aptitude';
import Questions from './questions';
import App from './urls';
import uid from './login';
import Timer from './timer';
import SelfdevelopmentQuestions from './Self_development';
// import { propTypes } from 'react-bootstrap/esm/Image';
// import { queryAllByDisplayValue } from '@testing-library/dom';
import {Router, Routes, Route, Link,  useParams,} from 'react-router-dom';
import Loader from 'react-loader-spinner';
import PageLoader from './loader';
// import { data } from 'jquery';
import { useSelector } from 'react-redux';
// import s3 from 'C:\Users\dell\Desktop\practiceset\django assesment\media\profile_pics'
 export default function Exam(props){
   

let data={}
data=store.getState().SignInReducer.username.username
console.log("state",store.getState().SignInReducer)

console.log("sun",data) 
 let { type } = useParams();
 const [id,setId]=useState(1);
 const [uid,setUid]=useState('');
 const [img,setimg]=useState();
 const[loading,setLoading]=useState(true);
console.log("sssshhhh",data)
 function updateProps(e){
     if(e.target){
        setId(e.target.value);
        return;
     }
     setId(e);
     
 }

 useEffect(()=>{
    
    setTimeout(()=>{setLoading(false)},2000);
    console.log("uidddd222222222",localStorage.getItem('uid'));
    setUid(localStorage.getItem('username'));
    setimg(localStorage.getItem('image'));
},[]);
console.log("00000",img)
const cid=localStorage.getItem('username')
const imd=localStorage.getItem('image')
console.log("0013",imd)
console.log("user",cid)

let imgs = [

    'http://127.0.0.1:8000'

  ];
  console.log("2323",imgs+imd)

if(loading)
{
    return(<PageLoader/>);
}
else
     return(
     <>
     
     <html>
         <head>
         <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
         <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css" rel="stylesheet"/>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"/>
         </head>
  <body>

  <nav class="navbar navbar-light bg-color d-flex justify-content-between" style={{height:"100px"}} >
      <div></div>
      <Timer/>
  <div className="user_style text-center">
  {/* <i class="fas fa-user-tie fa-3x" style={{marginLeft:"10px"}}></i> */}
        {/* <p className="fw-bold" >{data}</p> */}
        {/* <p className="fw-bold" >{cid}</p> */}
        {/* <img src={s3} style={{height:"100px", width:"100px", borderRadius:"50%"}} className='img-rounded' /> */}
        <img src={imd} style={{height:"100px", width:"100px", borderRadius:"50%"}} className='img-rounded'/>
        
        <p className="fw-bold" >{cid}</p>
 
        </div>
  </nav>

  </body>
</html>

{type=='aptitude'&& <Questionpaper id={id} updateProps={updateProps} />}
{type=='self'&&<SelfdevelopmentQuestions id={id} updateProps={updateProps} />}
{type=='reasoning'&&<Questions id={id} updateProps={updateProps} />}
{type=='verbal'&&<VerbalQuestionpaper id={id} updateProps={updateProps} />}

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
 