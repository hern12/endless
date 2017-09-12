import React, { Component } from 'react';
class Navbar extends Component {
	render() {
	  return (
		<div className="header">
			<nav className="navbar is-warning" role="navigation" aria-label="main navigation">
				<div className="navbar-brand">
					<a className="navbar-item" href="http://bulma.io">
						<img src="http://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28"/>
					</a>
					<a className="navbar-item " href="http://bulma.io/expo/">
						<span className="bd-emoji"><i className="fa fa-home"></i> </span>
						Home
					</a>
					<button className="button navbar-burger">
						<span></span>
						<span></span>
						<span></span>
					</button>
				</div>
			</nav>
		</div>
	  );
	}
  }
  
  export default Navbar;