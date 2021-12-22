import React, { useState, useEffect} from 'react';
import axios from 'axios';

function BulkUpload() {
  let j=0;
    const[selectedFile, setSelectedFile] = useState(null);
    var[staff, setStaff] = useState(null);
    
    const ar=[];

    const[post,setPost]=useState([]);
    useEffect(()=>{
        axios.get('http://127.0.0.1:8000/candidateList/')
        .then(res=>{
            setPost(res.data)

            
            
        })
        
    },[])

    

  const handleSubmit = async () => {
    let formData = new FormData();
    formData.append('file', selectedFile);
    await axios.post(
      'http://localhost:8000/users/upload_data/', 
      formData,
      { headers: { 'Content-Type': 'multipart/form-data' } }
    )

  }
  // console.log(selectedFile)

  const onFileChange = event => {
    setSelectedFile(event.target.files[0]);
  };

  const postmodify=(n,ind,index,val)=>{
    if(ind===index&&val==='user')
    {
      n.is_staff=false;
      return n;
    }
    else
    {return n;}
  }
  const roleChange = (e,index) => {
    
    let x=post.map((n,ind)=>postmodify(n,ind,index,e.target.value));
    console.log("x",x);
    // axios.get('http://localhost:8000/candidateList/')
    // .then(res=>{
      
    //   console.log("admin", res.data)
    //   for(let i=0; i<res.data.length; i++) {
    //     if(e.target.value==='user'){
        
          
    //       res.data[i].is_staff=false;
        
    //     }
    //     else{
    //       res.data[i].is_staff=true;
    //     }
    //     console.log("is staff", res.data[i]);
    //   }

    // })
   
    
  } 
    return (
        <>
        <div className='container-fluid'>
      <form onSubmit={handleSubmit}>
        <div className='text-center'>
          <h4>Choose a file to Register</h4>
        </div> <br/>

        <div className='row'>
          <div className='col-md-3'></div>
          <div className='col-md-2' style={{border: "1px solid grey", padding: "10px"}}>
          <fieldset>
            <input type="file" accept=".csv" onChange={onFileChange} />
          </fieldset>
          </div>
          <div className='col-md-2'><br/>
          <input className='btn btn-primary' type="submit" value="Submit" />
          </div>
        </div>
        
      </form> <br/><br/>

<table class="table table-bordered">
<thead>
  <tr class="table-info text-center">
  <th scope="col-2">Email</th>
  <th scope="col-2">Username</th>
  <th scope="col-2">First Name</th>
  <th scope="col-2">Last Name</th>
  <th scope="col-3">Password</th>
  <th scope="col-3">Roles</th>
  </tr>
</thead>
<tbody>
      {post.map((posts,index)=> <tr className='text-center'> 
       <td>{posts.email}</td>
       <td>{posts.user_name}</td>
       <td>{posts.first_name}</td>   
       <td>{posts.last_name}</td>
       <td>{posts.password}</td>
       <td>
       <form action="">
  <select name="roles" id="roles" onChange={e=>roleChange(e,index)}>
    <option value="role">--Select Role--</option>
    <option value='user'>User</option>
    <option value='admin'>Admin</option>
  </select>
</form>
       </td>
    
       <br/>
       <br/>
      </tr>)  
}
    </tbody>
    </table>
    <div className="text-center">
    <button className="btn btn-primary" onClick={(event)=>{
      console.log(ar)
      
    }}>Submit</button>
    </div>
    </div>
    </>


    );
  }


export default BulkUpload;