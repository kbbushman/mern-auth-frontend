import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Welcome from './components/Welcome';
import About from './components/About';
import Signup from './components/Signup';
import Login from './components/Login';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
          <Switch>
            <Route path='/signup' component={ Signup } />
            <Route path='/login' component={ Login } />
            <Route path='/about' exact component={ About } />
            <Route path='/' exact component={ Welcome } />
          </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
