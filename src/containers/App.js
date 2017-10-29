import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import './App.css';
import 'font-awesome/css/font-awesome.min.css';
import Home from './Home';
import Menu from './Menu';

import {
	BrowserRouter as Router,
	Route,
	Link
  } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
         <Route exact path="/" component={Home}/>
         <Route path="/Menu" component={Menu}/>
        </div>
      </Router>
    );
  }
}

export default App;
