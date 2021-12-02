import React from 'react';
import {Router, Routes, Route, Link,  useParams,} from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import './exam-instruction.css'

export default function ExamInstruction()
{
    return(
        <>
            <html>

                <head>
                    
                </head>
                <body>
                <Card border="dark" style={{ width: '65rem', height:"auto", marginTop:"32px"}}>
    <Card.Header style={{color:"blue", fontSize:"22px"}}><strong>Important Guidelines for Candidates:</strong></Card.Header>
    <Card.Body>
      <Card.Title style={{fontSize:"20px", color:"brown"}}>
     
      </Card.Title>
      <Card.Text>
      <ul>
        <li id="list">There are 10 questions in this exam and will be presented one at a time.</li>
        <li id="list">There are 4 option for each questions.</li>
        <li id="list">Only one option is correct.</li>
        <li id="list">There is <strong>No Negative Marking</strong> for incorrect answer.</li>
        <li id="list">Each question having same marks.</li>
        <li id="list">During this exam you will be permitted to review previous questions.</li>
        <li id="list">You are not permitted to obtain assistance by improper means or ask for help from or give help to any other person.</li>
        <li id="list">Test will be Submitted automatically when the time is over.</li>
        <li id="list">If you breach any examination rules, you will be disqualified.</li>
     </ul>
     <div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label class="form-check-label" for="flexCheckDefault">
  I have read and understood the exam rules & requirements for this exam, I agree to Continue. 
  </label>
</div>
      </Card.Text>
    </Card.Body>
  </Card>
  <div className="text-center">
  <Link to="/test/reasoning" class="btn btn-primary">I'm Ready to begin</Link>

  </div>
                </body>

            </html>

        </>
    )
}
