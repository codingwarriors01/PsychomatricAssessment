import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Test1 from './test1.png';
import Test4 from './test4.png';
import Test5 from './test5.jpg';
import Test6 from './test6.png';
import {Router, Routes, Route, Link,  useParams,} from 'react-router-dom';

export default function SideNav()
{
  const [Apticolor, setAptiColor] = useState("orange");
  const [Reasoningcolor, setReasoningColor] = useState("white");
  const [Firocolor, setFiroColor] = useState("white");
  const [Verbalcolor, setVerbalColor] = useState("white");
  const [Aicolor, setAIColor] = useState("white");
    return(
        <>
        <html>
            <head>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"/>
            
            </head>
            <body>
<div class="d-flex align-items-start">
  <div class="nav flex-column  me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical" style={{backgroundColor: "black"}}>
    <button class="nav-link active btn btn-link" style={{color:Apticolor}} onClick={()=>{setAptiColor("orange"); setAIColor("white"); setVerbalColor("white"); setReasoningColor("white"); setFiroColor("white")}} id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true"><strong>Aptitude</strong></button>
    <button class="nav-link btn btn-link" style={{color:Reasoningcolor}} onClick={()=>{setReasoningColor("orange"); setAIColor("white"); setAptiColor("white"); setVerbalColor("white"); setFiroColor("white")}}  id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false"><strong>Reasoning</strong></button>
    <button class="nav-link btn btn-link" style={{color:Firocolor}} onClick={()=>{setFiroColor("orange"); setAIColor("white"); setAptiColor("white"); setReasoningColor("white"); setVerbalColor("white")}} id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false"><strong>FIRO B</strong></button>
    <button class="nav-link btn btn-link" style={{color:Verbalcolor}} onClick={()=>{setVerbalColor("orange"); setAIColor("white"); setAptiColor("white"); setReasoningColor("white"); setFiroColor("white")}} id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false"><strong>Verbal</strong></button>
    <button class="nav-link btn btn-link" style={{color:Aicolor}} onClick={()=>{setAIColor("orange"); setAptiColor("white"); setVerbalColor("white"); setReasoningColor("white"); setFiroColor("white")}} id="v-pills-assist-tab" data-bs-toggle="pill" data-bs-target="#v-pills-assist" type="button" role="tab" aria-controls="v-pills-assist" aria-selected="false"><strong>AI Assist</strong></button>
  </div>
  <div class="tab-content" id="v-pills-tabContent">
    <div class="tab-pane fade show active" id="v-pills-home"  role="tabpanel" aria-labelledby="v-pills-home-tab">
    <div class="card mb-3 col-md-6">
  <div class="row g-0">
    <div class="col-md-4">
      <img src={Test1} class="img-fluid rounded-start"/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Aptitude</h5>
        <p><strong>Topics:</strong> Percentage, Averages, Ratio & Proportion, Speed Distance & Time, Time & Work, Pipe & Cistern</p>
        <Link to="/demo" class="btn btn-info">Take a Tour Test</Link>
      </div>
    </div>
  </div>
</div>
    </div>
    <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
    <div class="card mb-3 col-md-6">
  <div class="row g-0">
    <div class="col-md-4">
      <img src={Test4} class="img-fluid rounded-start"/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Reasoning</h5>
        <p><strong>Topics:</strong> Number Series, Blood Relation, Age Based, Syllogs, Coding-Decoding, Seating Arrangements, Direction</p>
        <Link to="/demo" class="btn btn-info">Take a Tour Test</Link>
      </div>
    </div>
  </div>
</div>
    </div>
    <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
    <div class="card mb-3 col-md-6">
  <div class="row g-0">
    <div class="col-md-4">
      <img src={Test6} class="img-fluid rounded-start"/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">FIRO B</h5>
        <p><strong>Topics:</strong> Focuses on personal characteristics and behaviours that influence how an individuals perform in work settings.</p>
        <Link to="/demo" class="btn btn-info">Take a Tour Test</Link>
      </div>
    </div>
  </div>
</div>
    </div>
    <div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">
    <div class="card mb-3 col-md-6">
  <div class="row g-0">
    <div class="col-md-4">
      <img src={Test5} class="img-fluid rounded-start"/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Verbal</h5>
        <p><strong>Topics:</strong> Antonym, Synonym, Reading Comprehension, Sentence Correction, One word Substitution, Change of Speech, Articles</p>
        <Link to="/demo" class="btn btn-info">Take a Tour Test</Link>
      </div>
    </div>
  </div>
</div>
    </div>

    <div class="tab-pane fade" id="v-pills-assist" role="tabpanel" aria-labelledby="v-pills-assist-tab">
    <div class="card mb-3 col-md-6">
  <div class="row g-0">
    <div class="col-md-4">
      <img src={Test5} class="img-fluid rounded-start"/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">AI Assist</h5>
        <p><strong></strong> Click on the below button to see your performance in each section and get best possible career assistant according to your performance. </p>
        <Link to="/assist" class="btn btn-info">Go to Assistant</Link>
      </div>
    </div>
  </div>
</div>
    </div>

  </div>
</div>
</body>
</html>
        </>
    )
}