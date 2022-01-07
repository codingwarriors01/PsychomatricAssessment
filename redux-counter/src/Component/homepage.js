import React from 'react';
import NavBar from './header';
import '../ComponentStyle/homepage.css';
import Chatbot from './Chatbot';

export default function Home() {

    return (
        <>
            <NavBar />
			
            <section id="home">
                <div class="jumbotron text-center home-img">
                    <h1 class="banner-title">Welcome to Assesment</h1>
                    <p class="banner-desc">We are team of talented and experience trainers to making you perfect.</p>
                    <button class="btn btn-primary">GET STARTED</button>
                </div>
            </section>

            <section id="features" class="section-gap">
		<div class="container">
			<div class="heading-title" style={{paddingBottom: "0px"}}>
				<h2>Services</h2>
				<span style={{color:"#0f90dcde"}}>---- <i class="fa fa-suitcase"></i> ---- </span>
				<p>Assess talent holistically and automate your hiring using our digital tools.</p>
			</div>
			<div class="row">
				<div class="col-sm-6">
				    <div class="card features-details">
				      	<div class="card-body">
				      		<div class="d-flex bd-highlight">
				      			<div class="p-2 flex-shrink-1 bd-highlight">
				      				<span class="feature-icon"><i class="fa fa-suitcase"></i></span>
				      			</div>
							  	<div class="p-2 w-100 bd-highlight">
							  		<h5 class="card-title">Training</h5>
				        			<p class="card-text">Groom leaders from employees today, to ensure the creation of a solid leadership pipeline for the future.</p>
							  	</div>
							</div>
				      	</div>
				    </div>
				</div>
				<div class="col-sm-6">
				    <div class="card features-details">
				      	<div class="card-body">
				      		<div class="d-flex bd-highlight">
				      			<div class="p-2 flex-shrink-1 bd-highlight">
				      				<span class="feature-icon"><i class="fa fa-newspaper-o"></i></span>
				      			</div>
							  	<div class="p-2 w-100 bd-highlight">
							  		<h5 class="card-title">News Feed</h5>
				        			<p class="card-text">Our goal with News Feed is to show you the stories that matter most to you. It is a long established fact that a reader.</p>
							  	</div>
							</div>
				      	</div>
				    </div>
				</div>
				<div class="col-sm-6">
				    <div class="card features-details">
				      	<div class="card-body">
				      		<div class="d-flex bd-highlight">
				      			<div class="p-2 flex-shrink-1 bd-highlight">
				      				<span class="feature-icon"><i class="fa fa-signal"></i></span>
				      			</div>
							  	<div class="p-2 w-100 bd-highlight">
							  		<h5 class="card-title"i>People Connect</h5>
				        			<p class="card-text">Connecting People is an evidence-informed approach to supporting people to connect with others. Positive social connections are important for our physical and mental wellbeing.</p>
							  	</div>
							</div>
				      	</div>
				    </div>
				</div>
				<div class="col-sm-6">
				    <div class="card features-details">
				      	<div class="card-body">
				      		<div class="d-flex bd-highlight">
				      			<div class="p-2 flex-shrink-1 bd-highlight">
				      				<span class="feature-icon"><i class="fa fa-binoculars"></i></span>
				      			</div>
							  	<div class="p-2 w-100 bd-highlight">
							  		<h5 class="card-title">Demo</h5>
				        			<p class="card-text">Discover the success stories of our clients around the globe that follow the best practices .</p>
							  	</div>
							</div>
				      	</div>
				    </div>
				</div>
				<div class="col-sm-6">
				    <div class="card features-details">
				      	<div class="card-body">
				      		<div class="d-flex bd-highlight">
				      			<div class="p-2 flex-shrink-1 bd-highlight">
				      				<span class="feature-icon"><i class="fas fa-user-cog"></i></span>
				      			</div>
							  	<div class="p-2 w-100 bd-highlight">
							  		<h5 class="card-title">Configurations</h5>
				        			<p class="card-text">Configuration file information specifies, where log files from an application are stored via the storage path, which plug-ins are allowed in a given program.</p>
							  	</div>
							</div>
				      	</div>
				    </div>
				</div>
				<div class="col-sm-6">
				    <div class="card features-details">
				      	<div class="card-body">
				      		<div class="d-flex bd-highlight">
				      			<div class="p-2 flex-shrink-1 bd-highlight">
				      				<span class="feature-icon"><i class="fas fa-headset"></i></span>
				      			</div>
							  	<div class="p-2 w-100 bd-highlight">
							  		<h5 class="card-title">Support Desk</h5>
				        			<p class="card-text">Get the Best Admin, Examiner and Candidate Experience with Our 24*7 Support, Easy Workflows and Automated Credibility Reports.</p>
							  	</div>
							</div>
				      	</div>
				    </div>
				</div>
			</div>
		</div>
	</section>

	<div style={{marginLeft: "75%", marginTop: "-64.5%", position:"fixed"}}>
	<Chatbot/>
	</div>

        </>
    )
}