import React from "react";
import axios  from "axios";
export default class Dpost extends React.Component{
   constructor(){
       super();
       this.state={
        firstname:'',
        lastname:'',
        username:'',
        email:'',
        password:'',
        contact:'',
    }
    this.formHandler=this.formHandler.bind(this);
    this.fhandler=this.fhandler.bind(this);
    this.lhandler=this.lhandler.bind(this);
    this.uhandler=this.uhandler.bind(this);
    this.ehandler=this.ehandler.bind(this);
    this.phandler=this.phandler.bind(this);
    this.chandler=this.chandler.bind(this);


   }
   formHandler(event){
       const data= {
           username:this.state.username,
           first_name:this.state.firstname,
           last_name:this.state.lastname,
           email=this.state.email,
           password=this.state.password,
           contact_no=this.state.contactnumber}
           axios.post('http://localhost:8000/projectuser',data)
   }
   
   fhandler(event)
   {
       this.setState({firstname:event.target.value})
   }
   lhandler(event)
   {
       this.setState({lastname:event.target.value})
   }
   uhandler(event)
   {
       this.setState({username:event.target.value})
   }
   ehandler(event)
   {
       this.setState({email:event.target.value})
   }
   phandler(event)
   {
       this.setState({password:event.target.value})

   }
   chandler(event)
   {
       this.setState({password:event.target.value})
   }




return(){
    <div>
        <form omSubmit ={formHandler}>
            First Name:<input type="text" onChange={fhandler}/>
            Last Name:<input type="text" onChange={lhandler}/>
            username:<input type="text" onChange={uhandler}/>
            email:<input type="text" onChange={ehandler}/>
            Password:<input type="text" onchange={phandler}/>
            contactnumber:<input type="text" onchange={chandler}/>

        </form>
    </div>
}
}