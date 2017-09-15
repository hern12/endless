import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import './App.css';
import 'font-awesome/css/font-awesome.min.css';
import Navbar from '../components/navbar.js';
import Ads from '../components/Ads.js';
import PopularMenu from '../components/PopularMenu.js'
import Gallery from '../components/Gallery.js'


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Navbar/>
          <Ads />
          <PopularMenu />
          <Gallery isOpen="true"/>
        </div>
      </div>
    );
  }
}

export default App;
