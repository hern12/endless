import React, { Component } from 'react';
import PopularMenuItem from './PopularMenuItem.js'


class PopularMenu extends Component{

	render(){
		var MenuItem = [	
			{
				imgUrl : process.env.PUBLIC_URL + '/images/popular1.png',
				menuTitle : 'Thai Gangster',
				like:"20"
			},
			{
				imgUrl : process.env.PUBLIC_URL + '/images/popular1.png',
				menuTitle : 'Thai Gangster',
				like:"35"
			},
			{
				imgUrl : process.env.PUBLIC_URL + '/images/popular1.png',
				menuTitle : 'Thai Gangster',
				like:"46"
			},	
			{
				imgUrl : process.env.PUBLIC_URL + '/images/popular1.png',
				menuTitle : 'Thai Gangster',
				like:"22"
			},	
			{
				imgUrl : process.env.PUBLIC_URL + '/images/popular1.png',
				menuTitle : 'Thai Gangster',
				like:"41"
			},			
		];
		var MenuItemList = MenuItem.map(function(object,index){
			return <PopularMenuItem key={index} itemImgUrl={object.imgUrl} MenuName={object.menuTitle} Like={object.like}/>
		})
		return ( 
			<div className="MenuBox">
				<h2>-- Popular Menu --</h2>
				<div className="ItemBox columns">
					{MenuItemList}
				</div>
			</div>
		);
	}
}
export default PopularMenu;