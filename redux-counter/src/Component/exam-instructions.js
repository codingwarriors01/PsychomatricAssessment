import React, { useEffect, useState } from 'react';
import { Link,useLocation } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import '../ComponentStyle/exam-instruction.css'

export default function ExamInstruction() {
  const[url,setUrl]=useState('')
  const location = useLocation()
  const [isDisabled, setIsDisabled] = useState(true);
  const [checked, setChecked] = useState(false);
  console.log("location ",location.state.from)
 
  useEffect(()=>{
    if(location.state.from==='Aptitude'){
      setUrl('/test/aptitude')
    }else if(location.state.from==='Reasoning'){
      setUrl('/test/reasoning')
    }else if(location.state.from==='SelfdevelopmentQuestions'){
      setUrl('/test/self')
    }else if(location.state.from==='VerbalQuestionpaper'){
      setUrl('/test/verbal')
    }else if(location.state.from==='AIAssist'){
      setUrl('/test/assist')
    }
  },[])

  const canBeSubmitted = () => {
    return checked ? setIsDisabled(true) : setIsDisabled(false);
  };

  const onCheckboxClick = () => {
    setChecked(!checked);
    return canBeSubmitted();
  };
  
  return (
    <>
      <html>

        <head>

        </head>
        <body>
          <Card border="dark" style={{ width: '65rem', height: "auto", marginTop: "32px" }}>
            <Card.Header style={{ color: "blue", fontSize: "22px" }}><strong>Important Guidelines for Candidates:</strong></Card.Header>
            <Card.Body>
              <Card.Title style={{ fontSize: "20px", color: "brown" }}>

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
                  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" onClick={onCheckboxClick} />
                  <label class="form-check-label" for="flexCheckDefault">
                    I have read and understood the exam rules & requirements for this exam, I agree to Continue.
                  </label>
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
          <div className="text-center">
           <button class="btn btn-primary" type='button' disabled={isDisabled}><Link to={url} style={{color:"white"}}>I'm Ready to begin</Link></button>

          </div>
        </body>

      </html>

    </>
  )
}
