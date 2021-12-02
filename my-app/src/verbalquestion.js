import React, {useEffect, useState } from 'react';
import './card.css';
import './timer'
import Card from "react-bootstrap/Card";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Timer from './timer';
import Exam from './exam_page';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


 export default function VerbalQuestionpaper(props) {


 const [q_id,setq_id] = useState(1);
 const [question,setquestion] = useState("");
 const [q_option_1,setq_option_1] = useState("");
 const [q_option_2,setq_option_2] = useState("");

 const [q_option_3,setq_option_3] = useState("");
 const [q_option_4,setq_option_4] = useState("");
 const [q_answer,setAnswer] = useState([]);
 const [result, setResult] = useState(0);
 const [displayQuestion,setDisplayQuestion]=useState({});
 const [options,setOptions]=useState([]);



  
  useEffect(()=>{
    axios.get('http://127.0.0.1:8000/showverbal/'+props.id)
    .then(res => {
      // const question = res.data.question;
      // const q_option_1 = res.data.q_option_1;
      // const q_option_2 = res.data.q_option_2;
      // const q_option_3 = res.data.q_option_3;
      // const q_option_4 = res.data.q_option_4;
      setq_id(props.id);
      // setquestion(question );
      // setq_option_1(q_option_1 );
      // setq_option_2(q_option_2 );
      // setq_option_3(q_option_3 );
      // setq_option_4(q_option_4 );
      console.log("respppppp",res.data);
      let options=[];
      options.push(res.data.q_option_1);
      options.push(res.data.q_option_2);
      options.push(res.data.q_option_3);
      options.push(res.data.q_option_4);
         setDisplayQuestion(res.data);
         setOptions(options);
  
    });
  },[props.id]); 

  const StoreResult = () =>{
    const data=[{ q_id:q_id ,user_answer:q_answer[q_answer.length-1]}]
    console.log("data",data);

    axios.post("http://127.0.0.1:8000/User_Verbal_mapperAPI",JSON.stringify(data),{
      headers:{
        'Content-type':'application/json'
    },
    })
  }

  const saveAndNext=()=>{
    
    setOptions([]);
    StoreResult();
    props.updateProps(Number(props.id)+1<11?Number(props.id)+1:10)
    
}
 
      
  toast.configure()

    const notify = ()=>{    
        toast.success('Answer successfully submited', {
         position: toast.POSITION.BOTTOM_RIGHT, autoClose:3000})       
       }
  
 
    return(
        <>
        <html><head>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"/>
        </head>
        
        <Card border="dark" style={{ width: '45rem', marginTop:"100px" ,height:"auto"}}>
    <Card.Header><strong>Question {q_id}:- {displayQuestion.question}</strong></Card.Header>
    <Card.Body>
      <Card.Title></Card.Title>
        <Card.Text style={{fontSize:"20px", color:"brown"}}>
          {options?options.map((item,index)=><><input class="form-check-input" type="radio" value={item}  name="flexRadioDefault" id={index} onChange={(e)=>setAnswer(e.target.value)} /> {item}<br/><br/></>):""}
       {/* <br/>
       <input class="form-check-input" type="radio" value={q_option_1} onChange={(e)=>{setAnswer([q_answer,e.target.value])}} name="flexRadioDefault" id="flexRadioDefault1" /> {q_option_1?q_option_1:""}<br/><br/>
       <input class="form-check-input" type="radio" value={q_option_2} onChange={(e)=>{setAnswer([q_answer,e.target.value])}} name="flexRadioDefault" id="flexRadioDefault1" /> {q_option_2?q_option_2:""}<br/><br/>
       <input class="form-check-input" type="radio" value={q_option_3} onChange={(e)=>{setAnswer([q_answer,e.target.value])}} name="flexRadioDefault" id="flexRadioDefault1" /> {q_option_3?q_option_3:""}<br/><br/>
       <input class="form-check-input" type="radio" value={q_option_4} onChange={(e)=>{setAnswer([q_answer,e.target.value])}} name="flexRadioDefault" id="flexRadioDefault1" /> {q_option_4?q_option_4:""}<br/><br/> */}


      </Card.Text>
    </Card.Body>
  </Card>
        
  {/* <div className="container d-flex justify-content-between col-md-4"> */}
  <div class="card" style={{width: "35rem", border: "none"}}>
  <div class="card-body">
  
  <button className="btn btn-dark" onClick={()=>{props.updateProps(Number(props.id)-1===0?1:Number(props.id)-1)}}> &larr; Previous</button>
  <button className="btn btn-primary" style={{visibility:q_id===10? 'visible':"hidden", marginLeft:"40px"}}>Submit</button>
  {/* <button className="btn btn-dark" style={{marginLeft:"40px"}} onClick={() => {setAnswer("");setOptions([]);props.updateProps(Number(props.id)+1<11?Number(props.id)+1:10);StoreResult();notify()}}>Next Save  &rarr; </button> */}
  <button className="btn btn-dark" style={{marginLeft:"40px"}} onClick={()=>{saveAndNext();notify()}}>Save & Next &rarr; </button>
  </div>
 </div> 
  </html>
        </>
    )
    
}