import React from 'react';
import './header.css';
import NavBar from './header';
import SideNav from './sidenav';
import './exam_dashboard.css'
export default function ExamDashborad() {

  return (

    <>
      <NavBar /><br /><br /><br /><br />

      <SideNav />

      <section id="service" class="section-gap">
        <div class="container">
          <div class="heading-title">
            <h2>What We Do</h2>
            <span style={{ color: "#0f90dcde" }}>---- <i class="fa fa-suitcase"></i> ---- </span>
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

    </>
  )

}