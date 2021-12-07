import React, { useState, useEffect } from 'react';
import './question.css';
import Card from "react-bootstrap/Card";
import axios from 'axios';

export default function Questions(props) {

  const [id, setid] = useState(1);
  const [answer, setAnswer] = useState(null);
  const [displayQuestion, setDisplayQuestion] = useState({});
  const [options, setOptions] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/show/' + props.id)
      .then(res => {

        setid(props.id);
        console.log("respppppp", res.data);
        let options = [];
        options.push(res.data.option_1);
        options.push(res.data.option_2);
        options.push(res.data.option_3);
        options.push(res.data.option_4);
        setDisplayQuestion(res.data);
        setOptions(options);

      });
  }, [props.id])

  const StoreResult = async () => {

    const data = { question_id: id, user_answer: answer };
    console.log("data", data);
    await axios.post(`http://localhost:8000/User_Reasoning_mapperAPI`, JSON.stringify(data), {
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

  return (
    <>
      <html>
        <head>
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous" />
        </head>

        <Card border="dark" style={{ width: '65rem', height: "auto", marginTop: "32px", marginLeft: "10px" }}>
          <Card.Header style={{ color: "blue", fontSize: "22px" }}><strong>Question {id}:- {displayQuestion.question}</strong></Card.Header>
          <Card.Body>
            <Card.Title></Card.Title>
            <Card.Text style={{ fontSize: "20px", color: "brown" }}>

              {options ? options.map((item, index) => <><input class="form-check-input" type="radio" value={item} name="flexRadioDefault" id={index} onChange={(e) => setAnswer(e.target.value)} /> {item}<br /><br /></>) : ""}

            </Card.Text>
          </Card.Body>
        </Card>

        <div class="card" style={{ width: "35rem", border: "none" }}>
          <div class="card-body">

            <button className="btn btn-dark" onClick={() => { props.updateProps(Number(props.id) - 1 === 0 ? 1 : Number(props.id) - 1) }}> &larr; Previous</button>
            <button className="btn btn-primary" style={{ visibility: id === 10 ? 'visible' : "hidden", marginLeft: "40px" }}>Submit</button>
            <button className="btn btn-dark" style={{ marginLeft: "40px" }} onClick={() => saveAndNext()}>Save & Next &rarr; </button>
          </div>
        </div>

      </html>
    </>
  )
}