import React from 'react';
import axios from 'axios';

export default class Edit extends React.Component {
  state = {
      person:this.props.person
  }
  handleChange = e => {
      const {person}=this.state;
      person[e.target.name]=e.target.value;
      this.setState({person});
  }

  handleEdit =() => {
    axios.put(`http://127.0.0.1:8000/user_details_operation/${this.props.person.id}/`,this.state.person)
      .then(res => {
      });
    this.props.onUpdate();
  }

  render() {
      const {person}=this.state;
    return (
    <>

          <label>
            Username:
            <input type="text" name='username' value={person.username}  onChange={(e)=>this.handleChange(e)} />
          </label>
          <label>
            First Name:
            <input type="text" name='first_name' value={person.first_name} onChange={(e)=>this.handleChange(e)} />
          </label>
          <label>
            Last Name:
            <input type="text" name='last_name' value={person.last_name} onChange={(e)=>this.handleChange(e)} />
          </label>
          
          <label>
            Email:
            <input type="text" name='email' value={person.email}  onChange={(e)=>this.handleChange(e)} />
          </label>
         
          <label>
            Mobile:
            <input type="text" name='mob' value={person.contact_no} onChange={(e)=>this.handleChange(e)} />
          </label>
          <button className="btn btn-primary" onClick={()=>this.handleEdit()}>Update</button>
    </>
    );
  }
}