import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import NavBar from './header';

export default function AdminDisplay(){

    const history =  useNavigate();
    const [post, setPost] =useState([]);
    
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/candidateList/')
        .then(res=>{

            setPost(res.data)
            
        })

        .catch(err=>{
            // console.log(err)
        })
    },[])
  

    function Update(id){
      history('/update/'+id)
      // console.log(id)
    }
    function UserResult(id){
      history('/view_result/'+id)
      
    }
    
    function Delete(id){
      axios.delete('http://127.0.0.1:8000/delete/'+id)
      .then((res) => {
				history('/display')

			})
    }
    
  

 
    return(
      <>
      <NavBar />
        <br/><br/><br/>
        <html>
          <head>
          <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css" rel="stylesheet" />
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous" ></link>
            
          </head>
          <body>
         <br/>
         <div className='container'>
         <table class="table table-bordered">
         <thead>
           <tr class="table-info">
           <th scope="col-2">ID</th>    
           <th scope="col-2">User Name</th>
           <th scope="col-2">First Name</th>
           <th scope="col-2">Last Name</th>
           <th scope="col-3">Email</th>
           <th scope="col-3">Image</th>
           <th scope="col-3">Action</th>
           <th scope="col-3">Result</th>
           </tr>
         </thead>
         <tbody>
               {post.map(posts=> <tr>
                <td>{posts.id}</td>   
                <td>{posts.user_name}</td>
                <td>{posts.first_name}</td>
                 <td>{posts.last_name}</td>
                <td>{posts.email}</td>
                <td>
                <img src={posts.image} style={{height:"70px", width:"70px", borderRadius:"50%"}} />
                </td>
               
                <td><button onClick={()=>Update(posts.id)} className="btn" ><i class="fas fa-edit"></i></button>
                
                <button  onClick={()=>Delete(posts.id)} className="btn" ><i class="fas fa-trash-alt"></i></button></td>
                <td><button className='btn btn-link' onClick={()=>UserResult(posts.id)} >View Result</button></td>
               </tr>)  
}
             </tbody>
             </table>
             </div>
       
        
        </body>
        </html>
        </>
        )
         
    }