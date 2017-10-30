import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import './App.css';
import 'font-awesome/css/font-awesome.min.css';
import Ads from '../components/Ads.js';
import PopularMenu from '../components/PopularMenu.js'
import Gallery from '../components/Gallery.js'

class Home extends Component {
    render() {
        return (
              <div className="App-header">
                <Ads />
                <PopularMenu />
                <Gallery isOpen="true"/>
              </div>
        );
      }
    }
    
    export default Home;
    