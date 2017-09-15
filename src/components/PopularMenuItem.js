import React, { Component } from 'react';

class PopularMenuItem extends Component{
	render(){
		return ( 
			<div className="column menu-item">
				<img className="popImg" src={this.props.itemImgUrl} width="70" height="130"/>
				<h3 className="popTitile">{this.props.MenuName}</h3>
				<div className="likeBox">
					<span className="likeBtn">
						<i className="fa fa-thumbs-up" aria-hidden="true"></i>
					</span>
					<span className="countLike">
						{this.props.Like}
					</span>
				</div>
			</div>
		);
	}
}
export default PopularMenuItem;