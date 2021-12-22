import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';

export default function AdminDisplay(){

    const history =  useNavigate();
    const [post, setPost] =useState([]);
    
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/candidateList/')
        .then(res=>{

            setPost(res.data)
            console.log("ppp",res.data[1].id)
        })

        .catch(err=>{
            // console.log(err)
        })
    },[])
    console.log("vaish",post.data)

    function Update(id){
      history('/update/'+id)
      // console.log(id)
    }
    function Delete(id){
      axios.delete('http://127.0.0.1:8000/delete/'+id)
      .then((res) => {
				history('/display')

			})
    }
    
  

 
    return(
        
        <html>
          <head>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous" ></link>
            
          </head>
          <body>
         <br/>
         <table class="table table-bordered">
         <thead>
           <tr class="table-info">
           <th scope="col-2">ID</th>    
           <th scope="col-2">User Name</th>
           <th scope="col-2">First Name</th>
           <th scope="col-2">Last Name</th>
           <th scope="col-3">Email</th>
          
           <th scope="col-3">Action</th>
           </tr>
         </thead>
         <tbody>
               {post.map(posts=> <tr>
                <td>{posts.id}</td>   
                <td>{posts.user_name}</td>
                <td>{posts.first_name}</td>
                 <td>{posts.last_name}</td>
                <td>{posts.email}</td>
               
                <td><button onClick={()=>Update(posts.id)} className="btn btn-primary" >Edit</button>
                <br/>
                <br/>
                <button  onClick={()=>Delete(posts.id)} className="btn btn-primary" >Delete</button></td>
               </tr>)  
}
             </tbody>
             </table>
             <button onClick={()=>{history('/logout')}}>LOGOUT</button>

       
        
        </body>
        </html>
        )
         
    }

   
    

