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
				<p>Magnam dalores commodi suscipit conseqatur ex aliquid</p>
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
							  		<h5 class="card-title">Special Title Treatment</h5>
				        			<p class="card-text">With supporting text below as a natural lead-in to additional content. It is a long established fact that a reader.</p>
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
							  		<h5 class="card-title">Lorem Lpsum</h5>
				        			<p class="card-text">With supporting text below as a natural lead-in to additional content. It is a long established fact that a reader.</p>
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
							  		<h5 class="card-title"i>Title Treatment</h5>
				        			<p class="card-text">With supporting text below as a natural lead-in to additional content. It is a long established fact that a reader.</p>
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
							  		<h5 class="card-title">Sitemap</h5>
				        			<p class="card-text">With supporting text below as a natural lead-in to additional content. It is a long established fact that a reader.</p>
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
				      				<span class="feature-icon"><i class="fa fa-cog"></i></span>
				      			</div>
							  	<div class="p-2 w-100 bd-highlight">
							  		<h5 class="card-title">Settings</h5>
				        			<p class="card-text">With supporting text below as a natural lead-in to additional content. It is a long established fact that a reader.</p>
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
				      				<span class="feature-icon"><i class="fa fa-envelope-o"></i></span>
				      			</div>
							  	<div class="p-2 w-100 bd-highlight">
							  		<h5 class="card-title">Gmail</h5>
				        			<p class="card-text">With supporting text below as a natural lead-in to additional content. It is a long established fact that a reader.</p>
							  	</div>
							</div>
				      	</div>
				    </div>
				</div>
			</div>
		</div>
	</section>

	<div style={{marginLeft: "72%", marginTop: "-76.5%"}}>
	<Chatbot/>
	</div>

        </>
    )
}