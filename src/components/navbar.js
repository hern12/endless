import React, { Component } from 'react';
import logo from '../images/logo.png';
import {
	BrowserRouter as Router,
	Route,
	Link
  } from 'react-router-dom'


class Navbar extends Component {
	render() {
	  return (
		<Router>
			<div className="header">
				<nav className="navbar is-" role="navigation" aria-label="main navigation">
					<div className="navbar-brand">
						<Link className="navbar-item" to="/">
							<img src={logo}  width="112" height="28"/>
						</Link>
						<Link className="navbar-item " to="/">
							<span className="bd-emoji"><i className="fa fa-home"></i> </span>
							Home
						</Link>
						<Link className="navbar-item " to="/Menu">
							<span className="bd-emoji"><i className="fa fa-book"></i> </span>
							Menu
						</Link>
						<a className="navbar-item " href="">
							<span className="bd-emoji"><i className="fa fa-picture-o"></i> </span>
							Gallery
						</a>
						<a className="navbar-item " href="">
							<span className="bd-emoji"><i className="fa fa-users"></i> </span>
							About
						</a>
						<a className="navbar-item " href="">
							<span className="bd-emoji"><i className="fa fa-phone"></i> </span>
							Contact
						</a>
						<button className="button navbar-burger">
							<span></span>
							<span></span>
							<span></span>
						</button>
					</div>
				</nav>
			</div>
		</Router>
	  );
	}
}
  
export default Navbar;