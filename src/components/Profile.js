import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Profile extends Component {
  state = {
    user: null
  }

  componentDidMount() {
    axios.get('http://localhost:5000/api/users/current')
    .then(res => this.setState({ user: res.data }))
    // .catch(err => console.log(err));
    .catch(err => this.setState({err: err}));
  }

  render() {
    
    let { user } = this.state;
    let userData = user
      ? <div>
          <h1>Profile</h1>
            <img src={user.avatar} alt={user.name} className="mb-4" />
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>email:</strong> {user.email}</p>
            <p><strong>ID:</strong> {user.id}</p>
        </div>
      : <h4>Loading...</h4>

      let error = <div className="text-center pt-4"><h3>Please <Link to='/login'>login</Link> to view this page</h3></div>

      return (
        <div>
          { this.state.err ? error : userData }
        </div>
      )
  }
  
}

export default Profile;
