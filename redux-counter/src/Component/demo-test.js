import React from 'react';
import { Link,useLocation } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Footer from './footer';

export default function Demo() {
    const location = useLocation()
    const { from } = location.state
function getState(){
return from;
}   
   
   
    return (
        <>

            <html>
                <head>
                    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous" />
                </head>
                <body>
                    <Card border="dark" style={{ width: '65rem', height: "auto", marginTop: "32px" }}>
                        <Card.Header style={{ color: "blue", fontSize: "22px" }}><strong>Question:- A: B: C is in the ratio of 3: 2: 5. How much money will C get out of Rs 1260?</strong></Card.Header>
                        <Card.Body>
                            <Card.Title style={{ fontSize: "20px", color: "brown" }}>
                                <input class="form-check-input" type="radio" value="252" name="flexRadioDefault" id="flexRadioDefault1" />252<br /><br />
                                <input class="form-check-input" type="radio" value="125" name="flexRadioDefault" id="flexRadioDefault1" />125<br /><br />
                                <input class="form-check-input" type="radio" value="530" name="flexRadioDefault" id="flexRadioDefault1" />530<br /><br />
                                <input class="form-check-input" type="radio" value="630" name="flexRadioDefault" id="flexRadioDefault1" />630<br /><br />
                            </Card.Title>
                            <Card.Text>
                                <strong>Solution: </strong><br />
                                <p>C's share = [C's ratio/ sum of ratios] * total amount <br />
                                    C's share = (5/10) * 1260 <br />
                                    C's share = 630 <br /><br />
                                    So, the correct answer is 630.
                                </p>



                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <div className="text-center">
                        <Link to="/instruction"  state={{ from: getState() }} class="btn btn-primary">Start Test</Link>
                    </div>
                </body>
            </html>
            <Footer />
        </>

    )
}