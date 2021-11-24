import React from 'react';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
// import { withRouter } from "react-router-dom";
import { withRouter } from "react-router";

// import { Button } from 'semantic-ui-react'


import {useNavigate} from 'react-router-dom';

import axios from 'axios'
// import { useNavigation } from '@react-navigation/native';

import TextField from "@material-ui/core/TextField";




export default class API extends React.Component{

    

    
    constructor(props)
    {

        super(props);
        this.state={username:'',
        first_name:'',
        last_name:'',
        email:'',
        password:'',
        contact_no:'',
        errors:{},

        

    }


 

                 
    }
    onSubmit=(e)=>{
        e.preventDefault();
    }
    formvalidation=()=>{
        const {username,first_name,last_name,email,password,contact_no}=this.state; 
        let isValid=true;
        const errors={};
        if (username.trim().length<5){
            errors.usernameLength="username length must be 6 or higher "
            isValid=false;
        }
        if (first_name.trim().length<5){
            errors.firstnameLength=" firstName must be 5 or higher "
            isValid=false;
        }
        if (last_name.trim().length<5){
            errors.lastnameLength=" LastName must be 5 or higher "
            isValid=false;
        }
        if (!email.includes("@")){
            errors.emailLength=" email must contain @ "
            isValid=false;
        }
        if (password.trim().length<5){
            errors.passLength=" password must be 5 or higher "
            isValid=false;
        }
        if (contact_no.trim().length>10){
            errors.contactLength=" contact no must be equal to 10 "
            isValid=false;
        }

        this.setState({errors});
        return isValid;

    }
    // errors =validate();

    


        render(){
            const {errors}=this.state;
            
    
            
            return(
                
                <div className="text-center">
            
               <html>
                   <head>
                   <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
 integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></link>
                    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
                    integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
                    crossorigin="anonymous"></script>
                            <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
                            integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
                            crossorigin="anonymous"></script>
                        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
                        integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
                        crossorigin="anonymous"></script>
           <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"></link>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"></link>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></link>
            <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
        integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
        crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
        integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
        crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
        integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
        crossorigin="anonymous"></script>
        <link
  rel="stylesheet"
href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
crossorigin="anonymous"
/>

  

        <title> user Registration Form</title>


                   </head>
                   <body>
                   <div class="container"></div>
        <div class="row"></div>
            <div class="col-md-3"></div>
            <div class="col-md-6"> </div>
            <h5>Registration Form</h5>
                
                <form method='POST' class="myform" onSubmit={(e)=>{e.preventDefault(); const isvalid=this.formvalidation();
                const data={username:this.state.username,first_name:this.state.first_name,last_name:this.state.last_name,email:this.state.email,password:this.state.password,contact_no:this.state.contact_no}
                console.log(data)
                axios.post('http://127.0.0.1:8000/api/create/',data)
                }}>
                    
                    <TextField
                    id="user"
                    label="UserName"
                    value={this.state.username}
                    onChange={(e)=>{this.setState({username:e.target.value})}}
                    />
                    <br/>
                    <br/>
                    <TextField
                    id="first"
                    label="First Name"
                    value={this.state.first_name}
                    onChange={(e)=>{this.setState({first_name:e.target.value})}}
                    />
                    <br/>
                    <br/>
                    <TextField
                    id="last"
                    label="Last Name"
                    value={this.state.last_name}
                    onChange={(e)=>{this.setState({last_name:e.target.value})}}
                    />
                     <br/>
                    <br/>
                    <TextField
                    id="email"
                    label="Email"
                    value={this.state.email}
                    onChange={(e)=>{this.setState({email:e.target.value})}}
                    />
                    <br/>
                    <br/>
                    <TextField
                    id="pass"
                    label="Password"
                    value={this.state.password}
                    onChange={(e)=>{this.setState({password:e.target.value})}}
                    />
                    <br/>
                    <br/>
                    <TextField
                    id="contact"
                    label="contact"
                    value={this.state.contact_no}
                    onChange={(e)=>{this.setState({contact_no:e.target.value})}}
                    />
                    
                    <br/>
                    <br/>
                    {/* <button type="submit"  class="submit btn btn-primary" onClick={()=>{navigation.navigate('/show')}}>Submit</button> */}
                    {/* <button  type="submit"  class="submit btn btn-primary" >Submit</button> */}

                    <Link type="submit" to="/show" class="submit btn btn-primary" >Submit</Link>
                    {Object.keys(errors).map((key)=>{
                        return <div key={key}>{errors[key]}</div>
                    })}
  


                    
                </form>
                </body>

                </html>
                </div>
            )
 
 
     
}

}




