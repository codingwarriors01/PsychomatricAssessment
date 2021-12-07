import React from 'react'
import axios from 'axios'

export default class Update extends React.Component {
    constructor() {

        super();
        this.state = {
            username: '',
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            contact_no: '',
        }

    }


    render() {

        return (
            <html>
                <head>
                    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"></link>
                    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css" rel="stylesheet"></link>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

                </head>

                <form method='PUT' onSubmit={(e) => {
                    e.preventDefault();
                    const data = { username: this.state.username, first_name: this.state.first_name, last_name: this.state.last_name, email: this.state.email, password: this.state.password, contact_no: this.state.contact_no }
                    console.log(data)
                    axios.put(`http://127.0.0.1:8000/user_details_operation/${this.state.id}/`, data)
                }}>
                    <div>
                        <label >Username</label>
                        <input type="text" name="username" id="user" value={this.state.username} onChange={(e) => { this.setState({ username: e.target.value }) }}></input>
                    </div>
                    <div>
                        <label >First Name</label>
                        <input type="text" name="first_name" id="first" value={this.state.first_name} onChange={(e) => { this.setState({ first_name: e.target.value }) }}></input>
                    </div>
                    <div>
                        <label >Last Name</label>
                        <input type="text" name="last_name" id="last" value={this.state.last_name} onChange={(e) => { this.setState({ last_name: e.target.value }) }}></input>
                    </div>
                    <div>
                        <label >Email</label>
                        <input type="email" name="email" id="email" value={this.state.email} onChange={(e) => { this.setState({ email: e.target.value }) }}></input>
                    </div>
                    <div>
                        <label >Password</label>
                        <input type="text" name="password" id="pass" value={this.state.password} onChange={(e) => { this.setState({ password: e.target.value }) }}></input>
                    </div>
                    <div>
                        <label >Contact</label>
                        <input type="number" name="contact_no" id="contact" value={this.state.contact_no} onChange={(e) => { this.setState({ contact_no: e.target.value }) }}></input>
                    </div>
                    <button type="submit" class="submit btn btn-primary" >Update</button>


                </form>

            </html>
        )



    }
}
