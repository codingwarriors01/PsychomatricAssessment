import React,{useState,useEffect} from "react";
import axios from "axios";
import './Customer.css'
export default function Customer_query()
{
    
    const [post, setPost] =useState([]);
    
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/Customer_support')
        .then(res=>{

            setPost(res.data)
            console.log("ppp",res.data[1].id)
        })

        .catch(err=>{
        })
    },[])
    console.log("vaish",post.data)



    return(
        <html>
            <head>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous" ></link>
            </head>
            <h1 className="text-center">Customer Support Desk</h1>
            <body>
            <br/>
            <div class="container row">
                <div class='col-md-3'></div>
             <table class="table table-bordered  text-center">
             {/* <col style="width:40%"> <col style="width:30%"> <col style="width:30%"> */}
             <thead>
                <tr class="table-info">
                <th>Index No</th>   
                <th style={{fontSize:'20px',fontWeight:'bold'}}>Customer Email ID</th>
                <th>Query resolved</th>
                </tr>
         </thead>
         <tbody>
            {post.map(posts=> 
             <tr class="row2">
                 <td className="sn">
                 
                 </td>
                 <td className="mail">
                     {posts.email_fetch}
                     </td>
                 <td className="status"><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/></td>
             </tr>
             )}
         </tbody>
         </table>
         </div>
            </body>
        </html>
    )
}