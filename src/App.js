import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Welcome from './components/Welcome';
import About from './components/About';
import Signup from './components/Signup';
import Login from './components/Login';
import Profile from './components/Profile';
import './App.css';

class App extends Component {
  state = {
    currentUser: {},
    isAuthenticated: true,
  }

  componentDidMount() {
    let token;
    if(localStorage.getItem('jwtToken') === null) {
      this.setState({ isAuthenticated: false })
    } else {
      token = jwt_decode(localStorage.getItem('jwtToken'));
      setAuthToken(localStorage.jwtToken);
      this.setState({ currentUser: token, isAuthenticated: true });
    }
  }

  setCurrentUser = (userData) => {
    // console.log(userData);
    this.setState({ currentUser: userData, isAuthenticated: true })
  }

  render() {
    console.log('Current User = ', this.state.currentUser);
    console.log('Authenticated = ', this.state.isAuthenticated);

    const PrivateRoute = ({component: Component, ...rest}) => (
      <Route {...rest} render={(props) => (
        this.state.isAuthenticated === true
          ? <Component {...props} />
          : <Redirect to='/login' />
      )} />
    )

    return (
      <div>
        <Navbar isAuthed={this.state.isAuthenticated} />
        <div className="container mt-5">
          <Switch>
            <Route path='/signup' component={ Signup } />
            <Route path='/login' render={ (props) => <Login {...props} setCurrentUser={this.setCurrentUser} /> } />
            <Route path='/about' exact component={ About } />
            <PrivateRoute path='/profile' component={ Profile } />
            <Route path='/' exact component={ Welcome } />
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
