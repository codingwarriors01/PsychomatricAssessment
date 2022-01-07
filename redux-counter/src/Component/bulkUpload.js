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
      'http://localhost:8000/candidate/upload_data/', 
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
    let role=post.map((n,ind)=>postmodify(n,ind,index,e.target.value));
    console.log("role",role);
    setStaff(role);
    console.log("type of role", typeof(role));
    
  } 

  const handleRole = async () => {
    console.log("staff", staff)
    console.log("type", typeof(JSON.stringify(staff)));
    try{
    await axios.post('http://localhost:8000/register/',staff,
    { headers: { 'Content-Type':'application/json' } }
    );
    }catch(err){
             console.log("error",err);
    }
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
    <button className="btn btn-primary" onClick={handleRole}>Submit</button>
    </div>
    </div>
    </>


    );
  }


export default BulkUpload;