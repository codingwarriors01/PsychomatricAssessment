import React, { useEffect, useState } from 'react';
import './Aptitude.css';
import './question_numbers.css';
import Exam from './exam_page';
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
   <html>
          <head>
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"/>
          </head>
        
                   <Card id="card" border="dark" style={{ width: '65rem', marginTop:"100px" ,height:"auto", marginLeft: "10px"}}>

                  <Card.Header style={{color:"blue", fontSize:"22px"}}><strong>Question {props.id}. {question?question:"" }</strong></Card.Header>
                  <Card.Body>
                    <Card.Title></Card.Title>
                    <Card.Text style={{fontSize:"20px", color:"brown"}}>
                     <br/>
                      <input class="form-check-input" type="radio" value={q_option1} onChange={(e)=>{setAnswer([...answer,e.target.value])}} name="flexRadioDefault" id="flexRadioDefault1" /> {q_option1?q_option1:""}<br/><br/>
                      <input class="form-check-input" type="radio" value={q_option2} onChange={(e)=>{setAnswer([...answer,e.target.value])}} name="flexRadioDefault" id="flexRadioDefault1" /> {q_option2?q_option2:""}<br/><br/>
                      <input class="form-check-input" type="radio" value={q_option3} onChange={(e)=>{setAnswer([...answer,e.target.value])}} name="flexRadioDefault" id="flexRadioDefault1" /> {q_option3?q_option3:""}<br/><br/>
                      <input class="form-check-input" type="radio" value={q_option4} onChange={(e)=>{setAnswer([...answer,e.target.value])}} name="flexRadioDefault" id="flexRadioDefault1" /> {q_option4?q_option4:""}<br/><br/>


                    </Card.Text>
                  </Card.Body>
            </Card>
            
     <div class="card" style={{width: "35rem", border: "none"}}>
        <div class="card-body">

            <button className="btn btn-dark" onClick={()=>{props.updateProps(Number(props.id)-1===0?1:Number(props.id)-1)}}> &larr; Previous</button>
            <button className="btn btn-primary" onClick={() => {StoreResult()}}>Submit</button>
            <button className="btn btn-dark" onClick={() => {props.updateProps(Number(props.id)+1<6?Number(props.id)+1:5)}}>Next &rarr;</button>
        </div>
     </div>
  </html>
        </>
    )
}
