import React, { useEffect, useState } from 'react';
import './Aptitude.css';
import './question_numbers.css';

import Card from "react-bootstrap/Card";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';


export default function Questionpaper(props) {

 const [q_id,setq_id] = useState(1);
 const [question,setquestion] = useState("");
 const [q_option1,setq_option1] = useState("");
 const [q_option2,setq_option2] = useState("");
 const [q_option3,setq_option3] = useState("");
 const [q_option4,setq_option4] = useState("");
 const [answer,setAnswer] = useState([]);



  
  useEffect(()=>{

      
      axios.get('http://127.0.0.1:8000/Aptitudeshow/'+props.id)
    .then(res => {
      const question = res.data.question;
      const q_option1 = res.data.q_option1;
      const q_option2 = res.data.q_option2;
      const q_option3 = res.data.q_option3;
      const q_option4 = res.data.q_option4;
      setq_id(props.id);
      setquestion(question );
      setq_option1(q_option1 );
      setq_option2(q_option2 );
      setq_option3(q_option3 );
      setq_option4(q_option4 );
  
    })
    
  },[props.id]);  
  
    

    
    const StoreResult = () =>{
      const data=[{ q_id:q_id ,user_answer:answer[answer.length-1]}]
      console.log("data",data);

      axios.post("http://127.0.0.1:8000/User_Aptitude_mapperAPI",JSON.stringify(data),{
        headers:{
          'Content-type':'application/json'
      },
      })
    }
    
      const navigate= useNavigate();
     
     
    
 
    return(
        <>
        
            <Card border="dark" style={{ width: '40rem', height:'20rem', marginTop:"100px" }}>
                  <Card.Header><strong>Question {props.id}.</strong></Card.Header>
                  <Card.Body>
                    <Card.Title></Card.Title>
                    <Card.Text>
                      {question?question:"" }<br/>
                      <input class="form-check-input" type="radio" value={q_option1} onChange={(e)=>{setAnswer([...answer,e.target.value])}} name="flexRadioDefault" id="flexRadioDefault1" /> {q_option1?q_option1:""}<br/>
                      <input class="form-check-input" type="radio" value={q_option2} onChange={(e)=>{setAnswer([...answer,e.target.value])}} name="flexRadioDefault" id="flexRadioDefault1" /> {q_option2?q_option2:""}<br/>
                      <input class="form-check-input" type="radio" value={q_option3} onChange={(e)=>{setAnswer([...answer,e.target.value])}} name="flexRadioDefault" id="flexRadioDefault1" /> {q_option3?q_option3:""}<br/>
                      <input class="form-check-input" type="radio" value={q_option4} onChange={(e)=>{setAnswer([...answer,e.target.value])}} name="flexRadioDefault" id="flexRadioDefault1" /> {q_option4?q_option4:""}<br/>


                    </Card.Text>
                  </Card.Body>
            </Card>
            

  <div className="container d-flex justify-content-between col-md-5">
    <button className="btn btn-dark" onClick={()=>{props.updateProps(Number(props.id)-1===0?1:Number(props.id)-1)}}> &larr; Previous</button>
    <button className="btn btn-primary" onClick={() => {StoreResult()}}   >Save</button>
    <button className="btn btn-dark" onClick={() => {props.updateProps(Number(props.id)+1<6?Number(props.id)+1:5)}}   >Next  &rarr; </button>
  </div>
        </>
    )
}
