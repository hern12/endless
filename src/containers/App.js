import React, { Component } from 'react';
import logo from '../images/logo.svg';
import 'bulma/css/bulma.css';
import 'font-awesome/css/font-awesome.min.css';
import Navbar from '../components/navbar.js';
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Navbar/>
        </div>
      </div>
    );
  }
}

export default App;
