import React from 'react'
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
import axios from 'axios'
import TextField from "@material-ui/core/TextField";
import NavBar from './header';


export default class Login extends React.Component{

    constructor(props)
    {

        super(props);
        this.state={username:'',
        password:'',
 
    }
                
    }

        render(){
            const {errors}=this.state;
 
            return(
            
               <html>
                   <head>
                   <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></link>
                   <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
                   <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
                   <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
                   <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"></link>
                   <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"></link>
                   <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></link>
                   <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
                   <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
                   <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
                   <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"/>
                   <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css" rel="stylesheet" />
                   <title> user Login Form</title>

                   </head>

                   <body>
                       <NavBar/> <br/><br/><br/><br/><br/>

<div class="card" style={{width: "18rem", boxShadow:"3px 3px 3px 3px gray"}}>
  {/* <img src="..." class="card-img-top" alt="..."> */}
  <i class="fas fa-user fa-7x text-info text-center"></i>
  <div class="card-body">
    <h5 class="card-title text-danger">Login to Proceed</h5>
    <p class="card-text">Please Login with Registered/Valid Username and Password.</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item"><TextField id="user" label="UserName" onChange={(e)=>{this.setState({username:e.target.value})}}/></li>
    <li class="list-group-item"><TextField id="pass" label="Password" onChange={(e)=>{this.setState({password:e.target.value})}}/></li>
    {/* <li class="list-group-item">A third item</li> */}
  </ul>
  <div class="card-body">
  <Link type="submit" to="/exam_dashboard" class="submit btn btn-primary" id="liveToastBtn">Submit</Link>
  &nbsp;&nbsp;&nbsp;&nbsp; <a href="#" class="btn btn-primary">Cancel</a>
  
  </div>
</div>


                </body>

                </html>
            
            )
   
}

}
