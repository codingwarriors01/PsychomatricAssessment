import React from 'react';
import './header.css';
import NavBar from './header';

import Footer from './footer';
import C1 from './c1.jpg';
import C2 from './c2.png';
import C3 from './c3.jpeg';
import Test4 from './test4.png';
import Test5 from './test5.jpg';
import Test6 from './test6.png';
import Path from './urls';
import {Router, Routes, Route, Link,  useParams,} from 'react-router-dom';
import SideNav from './sidenav';
import './exam_dashboard.css'
export default function ExamDashborad()
{
  
    return(
        
        <>
        <NavBar /><br/><br/><br/><br/>
        {/* <div class="container-fluid mt-5">
<div class="row">
    <div class="col-md-4">
<div class="card text-white bg-secondary mb-3" style={{maxWidth: "18rem", height: "400px"}}>
    <div class="card-header">Aptitude</div>
    <div class="card-body">
      <h5 class="card-title">Total Questions: 5</h5>
      <p class="card-text">To start the Test click on the Start Test Button</p>
      <p><strong>Topics:</strong> Percentage, Averages, Ratio & Proportion, Speed Distance & Time, Time & Work, Pipe & Cistern</p>
      <Link to="/test" class="btn btn-info">Start Test</Link>
    </div>
  </div>
  </div>

  <div class="col-md-4">
  <div class="card text-white bg-success mb-3" style={{maxWidth: "18rem", height: "400px"}}>
    <div class="card-header">Reasoning</div>
    <div class="card-body">
      <h5 class="card-title">Total Questions: 5</h5>
      <p class="card-text">To start the Test click on the Start Test Button</p>
      <p><strong>Topics:</strong> Number Series, Blood Relation, Age Based, Syllogs, Coding-Decoding, Seating Arrangements, Direction</p>
      <Link to="/test" class="btn btn-info">Start Test</Link>
    </div>
  </div>
  </div>

  <div class="col-md-4">
  <div class="card text-white bg-danger mb-3" style={{maxWidth: "18rem", height: "400px"}}>
    <div class="card-header">Verbal</div>
    <div class="card-body">
      <h5 class="card-title">Total Questions: 4</h5>
      <p class="card-text">To start the Test click on the Start Test Button</p>
      <p><strong>Topics:</strong> Antonym, Synonym, Reading Comprehension, Sentence Correction, One word Substitution, Change of Speech, Articles</p>
      <a class="btn btn-info" href="">Start Test</a>
    </div>
  </div>
</div>
</div>
</div> */}


{/* <div class="row pb-3">
<div class="card mb-3 col-md-6" style={{maxWidth: "540px"}}>
  <div class="row g-0">
    <div class="col-md-4">
      <img src={Test1} class="img-fluid rounded-start"/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Aptitude</h5>
        <p><strong>Topics:</strong> Percentage, Averages, Ratio & Proportion, Speed Distance & Time, Time & Work, Pipe & Cistern</p>
        <Link to="/test/aptitute" class="btn btn-info">Start Test</Link>
      </div>
    </div>
  </div>
</div>

<div class="card mb-3 col-md-6" style={{maxWidth: "540px"}}>
  <div class="row g-0">
    <div class="col-md-4">
      <img src={Test4} class="img-fluid rounded-start"/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Reasoning</h5>
        <p><strong>Topics:</strong> Number Series, Blood Relation, Age Based, Syllogs, Coding-Decoding, Seating Arrangements, Direction</p>
        <Link to="/test/reasoning" class="btn btn-info">Start Test</Link>
      </div>
    </div>
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
        <h5 class="card-title">Self Assesment</h5>
        <p><strong>Topics:</strong> Focuses on personal characteristics and behaviours that influence how an individuals perform in work settings.</p>
        <Link to="/test/self" class="btn btn-info">Start Test</Link>
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
        <h5 class="card-title">Verbal</h5>
        <p><strong>Topics:</strong> Antonym, Synonym, Reading Comprehension, Sentence Correction, One word Substitution, Change of Speech, Articles</p>
        <Link to="/test/verbal" class="btn btn-info">Start Test</Link>
      </div>
    </div>
  </div>
</div>
</div> */}



<SideNav/>

<section id="service" class="section-gap">
		<div class="container">
			<div class="heading-title">
				<h2>What We Do</h2>
				<span style={{color: "#0f90dcde"}}>---- <i class="fa fa-suitcase"></i> ---- </span>
				<p>Magnam dalores commodi suscipit conseqatur ex aliquid</p>
			</div>
			<div class="row">
			    <div class="col-sm-4 text-center">	
			    	<span class="service-icon"><i class="fa fa-globe"></i></span>
			      	<h5>Online Assesment</h5>
			      	<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
			    </div>
			    <div class="col-sm-4 text-center">
			    	<span class="service-icon"><i class="fa fa-mobile"></i></span>
			      	<h5>Training</h5>
			      	<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
			    </div>
			    <div class="col-sm-4 text-center">
			    	<span class="service-icon"><i class="fa fa-cloud"></i></span>
			      	<h5>Demo Test</h5>        
			      	<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
			    </div>
			</div>
		</div>	
	</section>

{/* 
<div id="carouselExampleIndicators" class="carousel slide container-fluid" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={C2} class="d-block mx-auto" />
    </div>
    <div class="carousel-item">
      <img src={C2} class="d-block mx-auto" />
    </div>
    <div class="carousel-item">
      <img src={C2} class="d-block mx-auto" />
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div> */}


</>
    )
    
}