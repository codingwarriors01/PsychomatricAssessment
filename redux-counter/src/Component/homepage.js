import React from 'react';
import NavBar from './header';
import '../ComponentStyle/homepage.css';

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

        </>
    )
}