import React, {useEffect, useState } from 'react';
import './card.css';
import './timer'
import Card from "react-bootstrap/Card";
import axios from 'axios';


 export default function VerbalQuestionpaper(props) {
 console.log(props.id)
 const [q_id,setq_id] = useState(1);
 const [question,setquestion] = useState("");
 const [q_option_1,setq_option_1] = useState("");
 const [q_option_2,setq_option_2] = useState("");

 const [q_option_3,setq_option_3] = useState("");
 const [q_option_4,setq_option_4] = useState("");
 const [q_answer,setAnswer] = useState([]);
 



  
  useEffect(()=>{
    axios.get('http://127.0.0.1:8000/showverbal/'+props.id)
    .then(res => {
      const question = res.data.question;
      const q_option_1 = res.data.q_option_1;
      const q_option_2 = res.data.q_option_2;
      const q_option_3 = res.data.q_option_3;
      const q_option_4 = res.data.q_option_4;
      setq_id(props.id);
      setquestion(question );
      setq_option_1(q_option_1 );
      setq_option_2(q_option_2 );
      setq_option_3(q_option_3 );
      setq_option_4(q_option_4 );
  
    });
  },[props.id]); 


 
    return(
        <>
        <html><head>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"/>
        </head>
        
        <Card id="card" border="dark" style={{ width: '65rem', marginTop:"100px" ,height:"auto", marginLeft: "10px"}}>
    <Card.Header style={{color:"blue", fontSize:"22px"}}><strong>Question {q_id}. {question?question:"" }</strong></Card.Header>
    <Card.Body>
      <Card.Title></Card.Title>
      <Card.Text style={{fontSize:"20px", color:"brown"}}>
       <br/>
       <input class="form-check-input" type="radio" value={q_option_1} onChange={(e)=>{setAnswer([q_answer,e.target.value])}} name="flexRadioDefault" id="flexRadioDefault1" /> {q_option_1?q_option_1:""}<br/><br/>
       <input class="form-check-input" type="radio" value={q_option_2} onChange={(e)=>{setAnswer([q_answer,e.target.value])}} name="flexRadioDefault" id="flexRadioDefault1" /> {q_option_2?q_option_2:""}<br/><br/>
       <input class="form-check-input" type="radio" value={q_option_3} onChange={(e)=>{setAnswer([q_answer,e.target.value])}} name="flexRadioDefault" id="flexRadioDefault1" /> {q_option_3?q_option_3:""}<br/><br/>
       <input class="form-check-input" type="radio" value={q_option_4} onChange={(e)=>{setAnswer([q_answer,e.target.value])}} name="flexRadioDefault" id="flexRadioDefault1" /> {q_option_4?q_option_4:""}<br/><br/>


      </Card.Text>
    </Card.Body>
  </Card>
        
  <div className="container d-flex justify-content-between col-md-4">
  <button className="btn btn-dark" onClick={()=>{props.updateProps(Number(props.id)-1===0?1:Number(props.id)-1)}}> &larr; Previous</button>

  <button className="btn btn-dark" onClick={() => {props.updateProps(Number(props.id)+1<6?Number(props.id)+1:5)}}>Next  &rarr; </button>
  </div>
  
  </html>
        </>
    )
    
}