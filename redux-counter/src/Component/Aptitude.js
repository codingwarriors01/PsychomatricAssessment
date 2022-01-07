import React, { useEffect, useState } from 'react';
import '../ComponentStyle/Aptitude.css';
import Card from "react-bootstrap/Card";
import axios from 'axios';
import { useNavigate,Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useParams } from 'react-router';
// import aptitudequestions from '../Service/Reducers/aptireducer'

export default function Questionpaper(props) {
  
  const [uname,setUname]=useState('');
  const dispatch=useDispatch()
  const [q_id, setq_id] = useState(1);
  const [answer, setAnswer] = useState(null);
  const [displayQuestion, setDisplayQuestion] = useState({});
  const [options, setOptions] = useState([]);




  useEffect(() => {

    setUname(localStorage.getItem('username'));
    
    axios.get('http://127.0.0.1:8000/Aptitudeshow/' + props.id)
      .then(res => {

        setq_id(props.id);

       
        let options = [];
        options.push(res.data.q_option1);
        options.push(res.data.q_option2);
        options.push(res.data.q_option3);
        options.push(res.data.q_option4);
        setDisplayQuestion(res.data);
        setOptions(options);
      })

  }, [props.id]);

 
  const StoreResult = async () => {
    const data = {username:uname, q_id: q_id, user_answer: answer }
    

    await axios.post("http://127.0.0.1:8000/User_Aptitude_mapperAPI", JSON.stringify(data), {
      headers: {
        'Content-type': 'application/json'
      },
    })
  }

  const saveAndNext = () => {

    setOptions([]);
    StoreResult();
   

  }


  toast.configure()

  const notify = () => {
    toast.success('Answer successfully submited', {
      position: toast.POSITION.BOTTOM_RIGHT, autoClose: 3000
    })
  }

  const navigate = useNavigate();




  return (
    <>
      <html>
        <head>
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous" />
        </head>

        <Card id="card" border="dark" style={{ width: '45rem', marginTop: "100px", height: "auto" }}>

          <Card.Header><strong>Question{q_id}:- {displayQuestion.question}</strong></Card.Header>
          <Card.Body>
            <Card.Title></Card.Title>
            <Card.Text style={{ fontSize: "20px", color: "brown" }}>
              {options ? options.map((item, index) => <><input class="form-check-input" type="radio" value={item} name="flexRadioDefault" id={index} onChange={(e) => setAnswer(e.target.value)} /> {item}<br /><br /></>) : ""}

            </Card.Text>
          </Card.Body>
        </Card>

        <div class="card" style={{ width: "35rem", border: "none" }}>
          <div class="card-body">

            <button className="btn btn-dark" onClick={() => {dispatch({type:'PREVIOUS',payload:props.updateProps(Number(props.id) - 1 === 0 ? 1 : Number(props.id) - 1)})}}> &larr; Previous</button>
            <Link to='/exam_dashboard' className="btn btn-primary" style={{ visibility: q_id === 4 ? 'visible' : "hidden", marginLeft: "40px" }} onClick={() =>{saveAndNext();notify() }}>Submit</Link>
            <button className="btn btn-dark" style={{ visibility: q_id === 4 ? 'hidden':'visible', marginLeft: "40px" }} onClick={() => {dispatch({type:'NEXT',payload: props.updateProps(Number(props.id) + 1 < 11 ? Number(props.id) + 1 : 10)});saveAndNext();notify()}}>Save & Next &rarr; </button>

          </div>
        </div>
      </html>
    </>
  )
}

