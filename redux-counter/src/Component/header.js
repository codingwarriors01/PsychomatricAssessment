import React from 'react';
import '../ComponentStyle/header.css';
import {Link} from 'react-router-dom';
import  { useEffect,useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap';
import 'bootstrap/dist/js/bootstrap.js';
import {useNavigate} from 'react-router-dom';
export default function NavBar(props)
{
       const [img,setimg]=useState();
       const [uid,setUid]=useState('');
       const history=useNavigate();  
       useEffect(()=>{
        setUid(localStorage.getItem('username'));
    
        setimg(localStorage.getItem('image'));
    },[]);   
    
    const cid=localStorage.getItem('username')
    const imd=localStorage.getItem('image')

    let imgs = [
      
        'http://127.0.0.1:8000'
    
      ];
    
    return(


        <>
        <html>
            <head>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous" />
            
    
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css" rel="stylesheet" />
     
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>

            </head>
            <body>
        <section>
    <nav class="navbar navbar-expand-lg navbar-light fixed-top">
        <div class="container">
            <a class="navbar-brand" href="#" style={{color:"blue"}}><strong>Assesment Test</strong></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                <ul class="navbar-nav  ml-auto">
                 <li class="nav-item active">
                     <a class="nav-link" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#about">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Contact</a>
                    </li>
                    
                    {!localStorage.getItem('access_token')? 
                    <li class="nav-item">
                        <div class="row social-network" style={{marginLeft: "20px"}}>
                        <a class="nav-link" href="#"><i class="fab fa-google"></i></a>
                  
                    </div>						        
                    </li>
                    :null}
                    {!localStorage.getItem('access_token')? 

<li class="nav-item dropdown" style={{marginLeft: "20px"}}>
<a class="nav-link" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
  Sign In
</a>
<ul class="dropdown-menu" aria-labelledby="navbarDropdown">
<li><p className="dropdown-header fw-bold">Sign In as</p></li>
  <li><Link to="/signin" class="dropdown-item" href="#">User</Link></li>
  <li><Link to="/admin" class="dropdown-item" href="#">Admin</Link></li>
</ul>
</li>

                //    <li class="nav-item" style={{marginLeft: "20px"}}>
                //         <Link to="/signin" class="nav-link">Sign in</Link>

                //                 </li>

: <div style={{ marginLeft: "110px"}} className="text-center">
<li class="nav-item dropdown">
    <a class="nav-link dropdown-toggle" style={{color:"white"}} href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    <img src={imd} style={{height:"30px", width:"30px", borderRadius:"50%"}} className='img-rounded'/>
    </a>
    <ul class="dropdown-menu" style={{marginLeft:"-70px"}} aria-labelledby="navbarDropdown">
        <li><p className="dropdown-header fw-bold">{cid}</p></li>
        <li><a class="dropdown-item" href="#">Manage Your Account</a></li>
        <li><hr class="dropdown-divider"/></li>
        <li><a class="dropdown-item" href="#">{localStorage.getItem('access_token') ?
            <li class="nav-item">  
                <a class="nav-link" onClick={() => { history('/logout') }} ><i class="fas fa-power-off"></i> &nbsp; LOGOUT</a>
            </li>
        : null}
                </a>
        </li>
    </ul>
</li>
</div>}

                    {/* {!localStorage.getItem('access_token')?             
                    <li class="nav-item">
                        <Link to="/admin" class="nav-link">Admin</Link>

                                </li>  
                                 :null}     */}
                    {!localStorage.getItem('access_token')?                   
                   <li class="nav-item" style={{marginLeft: "20px"}}>
                   <Link to="/signup" class="btn btn-info">Register</Link>
               </li>
                :null}    

            </ul>
            </div>
        </div>
</nav>
</section>

</body>
</html>

        </>
        
    )
  
}
