import React, { useEffect, useState } from 'react';
import './Aptitude.css';
import './question_numbers.css';
import Exam from './exam_page';
import Card from "react-bootstrap/Card";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Questionpaper(props) {

 const [q_id,setq_id] = useState(1);
//  const [question,setquestion] = useState("");
//  const [q_option1,setq_option1] = useState("");
//  const [q_option2,setq_option2] = useState("");
//  const [q_option3,setq_option3] = useState("");
//  const [q_option4,setq_option4] = useState("");
 const [answer,setAnswer] = useState(null);
//  const [result, setResult] = useState(0);
 const [displayQuestion,setDisplayQuestion]=useState({});
 const [options,setOptions]=useState([]);



  
  useEffect(()=>{

      
      axios.get('http://127.0.0.1:8000/Aptitudeshow/'+props.id)
    .then(res => {
      // const question = res.data.question;
      // const q_option1 = res.data.q_option1;
      // const q_option2 = res.data.q_option2;
      // const q_option3 = res.data.q_option3;
      // const q_option4 = res.data.q_option4;
      setq_id(props.id);
      // setquestion(question );
      // setq_option1(q_option1 );
      // setq_option2(q_option2 );
      // setq_option3(q_option3 );
      // setq_option4(q_option4 );
      console.log("respppppp",res.data);
      let options=[];
      options.push(res.data.q_option1);
      options.push(res.data.q_option2);
      options.push(res.data.q_option3);
      options.push(res.data.q_option4);
         setDisplayQuestion(res.data);
         setOptions(options);
    })
    
  },[props.id]);  
  
     
    const StoreResult =async () =>{
      const data=[{ q_id:q_id ,user_answer:answer}]
      console.log("data",data);

      await axios.post("http://127.0.0.1:8000/User_Aptitude_mapperAPI",JSON.stringify(data),{
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
    
      const navigate= useNavigate();
     
     
    
 
    return(
        <>
   <html>
          <head>
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"/>
          </head>
        
                <Card id="card" border="dark" style={{ width: '45rem', marginTop:"100px" ,height:"auto"}}>

                  <Card.Header><strong>Question{q_id}:- {displayQuestion.question}</strong></Card.Header>
                  <Card.Body>
                    <Card.Title></Card.Title>
                      <Card.Text style={{fontSize:"20px", color:"brown"}}>
                         {options?options.map((item,index)=><><input class="form-check-input" type="radio" value={item}  name="flexRadioDefault" id={index} onChange={(e)=>setAnswer(e.target.value)} /> {item}<br/><br/></>):""}
                     {/* <br/>
                      <input class="form-check-input" type="radio" value={q_option1} onChange={(e)=>{setAnswer([...answer,e.target.value])}} name="flexRadioDefault" id="flexRadioDefault1" /> {q_option1?q_option1:""}<br/>
                      <input class="form-check-input" type="radio" value={q_option2} onChange={(e)=>{setAnswer([...answer,e.target.value])}} name="flexRadioDefault" id="flexRadioDefault1" /> {q_option2?q_option2:""}<br/>
                      <input class="form-check-input" type="radio" value={q_option3} onChange={(e)=>{setAnswer([...answer,e.target.value])}} name="flexRadioDefault" id="flexRadioDefault1" /> {q_option3?q_option3:""}<br/>
                      <input class="form-check-input" type="radio" value={q_option4} onChange={(e)=>{setAnswer([...answer,e.target.value])}} name="flexRadioDefault" id="flexRadioDefault1" /> {q_option4?q_option4:""}<br/> */}


                    </Card.Text>
                  </Card.Body>
                </Card>
            
     <div class="card" style={{width: "35rem", border: "none"}}>
        <div class="card-body">

            <button className="btn btn-dark" onClick={()=>{props.updateProps(Number(props.id)-1===0?1:Number(props.id)-1)}}> &larr; Previous</button>
            <button className="btn btn-primary" style={{visibility:q_id===10? 'visible':"hidden", marginLeft:"40px"}}>Submit</button>
            <button className="btn btn-dark" style={{marginLeft:"40px"}} onClick={()=>{saveAndNext();notify()}}>Save & Next &rarr; </button>


            {/* <button className="btn btn-dark" onClick={()=>{props.updateProps(Number(props.id)-1===0?1:Number(props.id)-1)}}> &larr; Previous</button>
            <button className="btn btn-primary" onClick={() => {StoreResult();notify()}}>Submit</button>
            <button className="btn btn-dark" onClick={() => {props.updateProps(Number(props.id)+1<6?Number(props.id)+1:5)}}>Next &rarr;</button> */}
        </div>
     </div>
  </html>
        </>
    )
}
