import React from 'react';
import './header.css';
import NavBar from './header'
import {Router, Routes, Route, Link} from 'react-router-dom';
import './footer.css';
export default function Footer()
{
    return(
        
        <>
        <section id="footer">
		<div class="container">
			
			<footer class="page-footer font-small blue">

			  
			  <div class="footer-copyright text-center py-3">© 2021 Copyright
			  </div>
			 

			</footer>
			
		</div>
	</section>
</>
    )
    
}