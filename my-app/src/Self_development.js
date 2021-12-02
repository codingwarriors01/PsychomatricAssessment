import React, { useEffect, useState } from 'react';
import './Self_development.css';
import './question_numbers.css';
import Card from "react-bootstrap/Card";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';


export default function  (props) {

 const [self_qid,setself_qid] = useState(1);
 const [self_question,setself_question] = useState("");
 const [self_option1,setself_option1] = useState("");
 const [self_option2,setself_option2] = useState("");
 const [self_option3,setself_option3] = useState("");
 const [self_option4,setself_option4] = useState("");
 const [self_option5,setself_option5] = useState("");
 const [self_option6,setself_option6] = useState("");
 const [answer,setAnswer] = useState([]);



  
useEffect(()=>{
    axios.get('http://127.0.0.1:8000/displayself_dev/'+props.id)
    .then(res => {
      const self_question = res.data.self_question;
      const self_option1 = res.data.self_option1;
      const self_option2 = res.data.self_option2;
      const self_option3 = res.data.self_option3;
      const self_option4 = res.data.self_option4;
      const self_option5 = res.data.self_option5;
      const self_option6 = res.data.self_option6;
      setself_qid(props.id);
      setself_question(self_question );
      setself_option1(self_option1 );
      setself_option2(self_option2);
      setself_option3(self_option3 );
      setself_option4(self_option4 );
      setself_option5(self_option5);
      setself_option6(self_option6);


  
    })

},[props.id]);

    
const StoreResult = () =>{
  const data=[{ Sq_id:self_qid ,Suser_answer:answer[answer.length-1]}]
  console.log("data",data);

  axios.post("http://127.0.0.1:8000/SelfdevelopeUser",JSON.stringify(data),{
    headers:{
      'Content-type':'application/json'
  },
  })
}

 
    return(
        <>
        
            <Card border="dark" style={{ width: '40rem', height:'20rem', marginTop:"100px" }}>
                  <Card.Header><strong>Question {props.id}.</strong></Card.Header>
                  <Card.Body>
                    <Card.Title></Card.Title>
                    <Card.Text>
                      {self_question?self_question:"" }<br/>
                      <input class="form-check-input" type="radio" value={self_option1} onChange={(e)=>{setAnswer([...answer,e.target.value])}} name="flexRadioDefault" id="flexRadioDefault1" /> {self_option1?self_option1:""}<br/>
                      <input class="form-check-input" type="radio" value={self_option2} onChange={(e)=>{setAnswer([...answer,e.target.value])}} name="flexRadioDefault" id="flexRadioDefault1" /> {self_option2?self_option2:""}<br/>
                      <input class="form-check-input" type="radio" value={self_option3} onChange={(e)=>{setAnswer([...answer,e.target.value])}} name="flexRadioDefault" id="flexRadioDefault1" /> {self_option3?self_option3:""}<br/>
                      <input class="form-check-input" type="radio" value={self_option4} onChange={(e)=>{setAnswer([...answer,e.target.value])}} name="flexRadioDefault" id="flexRadioDefault1" /> {self_option4?self_option4:""}<br/>
                      <input class="form-check-input" type="radio" value={self_option5} onChange={(e)=>{setAnswer([...answer,e.target.value])}} name="flexRadioDefault" id="flexRadioDefault1" /> {self_option5?self_option5:""}<br/>
                      <input class="form-check-input" type="radio" value={self_option6} onChange={(e)=>{setAnswer([...answer,e.target.value])}} name="flexRadioDefault" id="flexRadioDefault1" /> {self_option6?self_option6:""}<br/>


                    </Card.Text>
                  </Card.Body>
            </Card>
            

  <div className="container d-flex justify-content-between col-md-5">
    <button className="btn btn-dark" onClick={()=>{props.updateProps(Number(props.id)-1===0?1:Number(props.id)-1)}}> &larr; Previous</button>
    <button className="btn btn-primary" onClick={() => {StoreResult()}}>Save</button>
    <button className="btn btn-dark" onClick={() => {props.updateProps(Number(props.id)+1<6?Number(props.id)+1:5)}}   >Next  &rarr; </button>
  </div>
        </>
    )
    }
