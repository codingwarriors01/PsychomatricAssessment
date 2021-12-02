import React from 'react';
import axios from 'axios';

export default class Delete extends React.Component {
  state = {
    id: '',
  }

  handleDelete =() => {

    axios.delete(`http://127.0.0.1:8000/user_details_operation/${this.props.id}/`)
      .then(res => {
      })
    this.props.onDelete();
  }

  render() {
    return (
    <>
          <button className="btn btn-danger" onClick={()=>this.handleDelete()}>Delete</button>
    </>
    );
  }
}