import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Test1 from './test1.png';
import Test4 from './test4.png';
import Test5 from './test5.jpg';
import Test6 from './test6.png';

export default function Section_Result()
{
  const[cresult, setCresult] = useState([]);

  useEffect(()=>{
    axios.get('http://localhost:8000/resultview')
    .then(res => {
      console.log(res.data)
      setCresult(res.data)
      
    });
  },[])
    return(
        <>

<div class="row pb-3 mt-5">
<div class="card mb-3 col-md-6" style={{maxWidth: "540px"}}>
  <div class="row g-0">
    <div class="col-md-4">
      <img src={Test1} class="img-fluid rounded-start"/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Aptitude Marks</h5>
        <p><strong>Total Question:</strong> 10 </p>
        
        <p><strong>Correct Answer:</strong>  </p>
        <p><strong>Incorrect Answer:</strong>  </p>
        
      </div>
    </div>
  </div>
</div>

<div class="card mb-3 col-md-6" style={{maxWidth: "540px"}}>
  <div class="row g-0">
    <div class="col-md-4">
      <img src={Test4} class="img-fluid rounded-start"/>
    </div>
    {cresult.map(results=>
    <div class="col-md-8">
      <div class="card-body">
      <h5 class="card-title">Reasoning Marks</h5>
        <p><strong>Total Question:</strong> 10 </p>
        <p><strong>Correct Answer:</strong> {results.user_cresult} </p>
        <p><strong>Incorrect Answer:</strong> {results.user_wresult} </p>
      </div>
    </div>
    )};
  </div>
</div>
</div>

<div class="row">
<div class="card mb-3 col-md-6" style={{maxWidth: "540px"}}>
  <div class="row g-0">
    <div class="col-md-4">
      <img src={Test6} class="img-fluid rounded-start"/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
      <h5 class="card-title">Verbal Marks</h5>
        <p><strong>Total Question:</strong> 10 </p>
        <p><strong>Correct Answer:</strong>  </p>
        <p><strong>Incorrect Answer:</strong>  </p>
      </div>
    </div>
  </div>
</div>

<div class="card mb-3 col-md-6" style={{maxWidth: "540px"}}>
  <div class="row g-0">
    <div class="col-md-4">
      <img src={Test5} class="img-fluid rounded-start"/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">FIRO-B Marks</h5>
        <p><strong>Total Question:</strong> 10 </p>
        <p><strong>Correct Answer:</strong>  </p>
        <p><strong>Incorrect Answer:</strong>  </p>
      </div>
    </div>
  </div>
</div>
</div>
        </>
    )
}