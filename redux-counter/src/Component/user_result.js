import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';



export default function UserResult() {
    const {id}=useParams();
    const[user_name,setUser]=useState('')
    const[user_answer,setUserAnswer]=useState('')



    useEffect(() => {
        axios.get('http://127.0.0.1:8000/candidateshow/'+ id +'/')
        .then(res=>{
            const user_name=res.data.user_name;
            setUser(user_name);
            axios.get('http://localhost:8000/resultview')
            .then(res=>{
                const user_answer=res.data.user_cresult;
                // setUserAnswer(user_answer);
                console.log("result", res.data)
                setUserAnswer(res.data[0].user_cresult)
            })
         
        })
    
        .catch(err=>{
            })
        },[])



    return(
        <div className='container'>
             <table class="table table-bordered">
         <thead>
           <tr class="table-info">
           <th scope="col-2">ID</th>
           <th scope="col-2">User Name</th>
           <th scope="col-2">Aptitude Score</th>
           <th scope="col-2">Reasoning Score</th>
           <th scope="col-3">Verbal Score</th>
           <th scope="col-3">Self Assesment Score</th>
           </tr>
         </thead>
         <tbody>
               <tr>
                   <td>{id}</td>
                   <td>{user_name}</td>
                   <td>4</td>
                   <td>{user_answer}</td>
                   <td>7</td>
                   <td>3</td>
               </tr>
             </tbody>
             </table>
        </div>
    )
}