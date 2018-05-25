import React, { Component } from 'react';
import axios from 'axios';

class Signup extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    password2: '',
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
    }

    axios.post('http://localhost:5000/api/users/register', newUser)
      // .then(res => console.log(res.data))
      .then(res => {
        this.props.history.push('/login');
      })
      .catch(err => console.log(err.response.data));
  }

  render() {
    return (
      <div className="row mt-4">
        <div className="col-md-7 offset-md-3">
          <div className="card card-body">
            <h2 className="py-2">Signup</h2>
            <form action="/ideas" method="post" onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" value={this.state.name} onInput={this.handleChange} className="form-control" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" value={this.state.email} onInput={this.handleChange} className="form-control" />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" value={this.state.password} onInput={this.handleChange} className="form-control" />
              </div>
              <div className="form-group">
                <label htmlFor="password2">Confirm Password</label>
                <input type="password" name="password2" value={this.state.password2} onInput={this.handleChange} className="form-control" />
              </div>
              <button type="submit" className="btn btn-primary float-right">Submit</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Signup;
