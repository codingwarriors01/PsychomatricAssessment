import React, { useState, useEffect } from 'react';
// import TextField from "@material-ui/core/TextField";
import axios from 'axios';
import { useParams } from 'react-router';



export default function Update(props) {
    const {id}=useParams();
    // const[id,setId]=useState('')
    const[user_name,setUser]=useState('')
    const[first_name,setFirst]=useState('')
    const[last_name,setLast]=useState('')
    const[email,setEmail]=useState('')
    



useEffect(() => {
   
    axios.get('http://127.0.0.1:8000/candidateshow/'+ id)
    .then(res=>{
        const user_name=res.data.user_name;
        console.log("ppppp",res.data.user_name)
        const first_name=res.data.first_name;
        const last_name=res.data.last_name;
        const email=res.data.email;
        
        setUser(user_name);
        setFirst(first_name);
        setLast(last_name);
        setEmail(email);
       
   

    })
}, [])

function Submit(e){
    e.preventDefault();
const data={
     username:user_name,
  first_name:first_name,
    last_name:last_name,
    email:email,


}
console.log(data)
    axios.put('http://127.0.0.1:8000/update/'+id,data)
        .then(res=>{
           console.log(res.data)
    }).catch(err=>console.error(err))
}


    function Userhandle(e){
        setUser(e.target.value)
    }
    function Firsthandle(e){
        setFirst(e.target.value)
    }
    function Lasthandle(e){
        setLast(e.target.value)
    }
    function Emailhandle(e){
        setEmail(e.target.value)
    }


return(
    <form  class="myform" onSubmit={(e)=>Submit(e)}
    >
    <div>
       
        <input type="text"  defaultValue={user_name}  onChange={(e)=>Userhandle(e)} />
        <input type="text" defaultValue={first_name}  onChange={(e)=>Firsthandle(e)}/>
        <input type="text"  defaultValue={last_name}  onChange={(e)=>Lasthandle(e)}/>
        <input type="text"  defaultValue={email}  onChange={(e)=>Emailhandle(e)}/>
       
     
        <button type="submit"  class="submit btn btn-primary"  >Submit</button>

    </div>
    </form>

   )

}





