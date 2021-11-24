import React from 'react'
import axios from 'axios';
import Delete from './delete';
import Edit from './edit';
export default class Gaurav1 extends React.Component
{
    state = {
        persons: [],
        person:"",
        status:0,
      }
    constructor(){
        
        super();
       
        
    }
  

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/candidateList')
          .then(res => {
            const persons = res.data;
            this.setState({ persons });
          })
      }
    updateList = () => {
      axios.get('http://127.0.0.1:8000/candidateList')
      .then(res => {
        let persons = res.data;
        this.setState({ persons:persons,status:0 });
      })
          }
    handleEdit = person => {
        this.setState({ status:1,person:person });
          }
   
    render()
    {
      
        return(
        
            <html>
              <head>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous" ></link>
                
              </head>
              <body>
             <br/>
             {this.state.status===0?<table class="table table-bordered">
             <thead>
               <tr class="table-info">
               <th scope="col-2">User Name</th>
               <th scope="col-2">First Name</th>
               <th scope="col-2">Last Name</th>
               <th scope="col-3">Email</th>
               <th scope="col-3">Contact</th>
               <th scope="col-2">Action</th>
               
               </tr>
             </thead>
             <tbody>
               {this.state.persons.map(person=> <tr>
                <td>{person.username}</td> 
                <td>{person.first_name}</td>
                <td>{person.last_name}</td>
                <td> {person.email}</td>
                <td>{person.contact_no}</td>
                <td><Delete id={person.id} onDelete={()=>this.updateList()}/> <button className="btn btn-primary" onClick={()=>this.handleEdit(person)}>Edit</button></td>
               </tr>)
               }
             </tbody>
        </table>:<Edit onUpdate={()=>this.updateList()} person={this.state.person}/>}
        
        </body>
        </html>
            
        
        
        

        )
    }
    
}

