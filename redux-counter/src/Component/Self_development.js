import React, { useEffect, useState } from 'react';
// import './Self_development.css';
// import './question_numbers.css';
import Timer from './timer';
import Exam from './exam_page';
import Card from "react-bootstrap/Card";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function SelfdevelopmentQues(props) {
  const dispatch=useDispatch()
  const [self_qid, setself_qid] = useState(1);
  const [displayQuestion, setDisplayQuestion] = useState({});
  const [options, setOptions] = useState([]);
  const [q_answer, setAnswer] = useState(null);
  
  
  
  
  
  useEffect(() => {
    axios.get('http://127.0.0.1:8000/displayself_dev/' + props.id)
      .then(res => {
        setself_qid(props.id);
        console.log("respppppp", res.data);
        let options = [];
        options.push(res.data.self_option1);
        options.push(res.data.self_option2);
        options.push(res.data.self_option3);
        options.push(res.data.self_option4);
        options.push(res.data.self_option5);
        options.push(res.data.self_option6);
        setDisplayQuestion(res.data);
        setOptions(options);
      });
  }, [props.id]);
  
  
  const StoreResult = async () => {
    const data = [{ Self_qid: self_qid, selfuser_ans: q_answer }]
    console.log("data", data);
    await axios.post("http://127.0.0.1:8000/SelfdevelopeUser", JSON.stringify(data), {
      headers: {
        'Content-type': 'application/json'
      },
    })
  }
  const saveAndNext = () => {
    setOptions([]);
    StoreResult();
    props.updateProps(Number(props.id) + 1 < 11 ? Number(props.id) + 1 : 10)
  }
  toast.configure()
  const notify = () => {
    toast.success('Answer successfully submited', {
      position: toast.POSITION.BOTTOM_RIGHT, autoClose: 3000
    })
  }
  
  return (
    <>
      <html>
        <head>
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous" />
        </head>
        <Card border="dark" style={{ width: '45rem', marginTop: "100px", height: "auto" }}>
          <Card.Header><strong>Question {self_qid}.{displayQuestion.question}</strong></Card.Header>
          <Card.Body>
            <Card.Title></Card.Title>
            <Card.Text style={{ fontSize: "20px", color: "brown" }}>
              {options ? options.map((item, index) => <><input class="form-check-input" type="radio"
                value={item} name="flexRadioDefault" id={index} onChange={(e) => setAnswer(e.target.value)} /> {item}<br /><br /></>) : ""}
            </Card.Text>
          </Card.Body>
        </Card>
        <div class="card" style={{ width: "35rem", border: "none" }}>
          <div class="card-body">
            <button className="btn btn-dark" onClick={() => {dispatch({type:'PREVIOUS',payload:props.updateProps(Number(props.id) - 1 === 0 ? 1 : Number(props.id) - 1)})}}> &larr; Previous</button>
            <Link to='/exam_dashboard' className="btn btn-primary" style={{ visibility: self_qid === 10 ? 'visible' : "hidden", marginLeft: "40px" }} onClick={() =>{saveAndNext();notify() }}>Submit</Link>
            <button className="btn btn-dark" style={{ marginLeft: "40px" }} onClick={() => {dispatch({type:'NEXT',payload: props.updateProps(Number(props.id) + 1 < 11 ? Number(props.id) + 1 : 10)});saveAndNext();notify()}}>Save & Next &rarr; </button>
          </div>
        </div>
      </html>
    </>
  )
}