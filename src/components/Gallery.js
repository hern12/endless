import React, { Component } from 'react';

import ImageItems from './imageItems.js'


class Gallery extends Component{

	myCallback = (dataFromChild) => {
		console.log(dataFromChild);
	}

	render(){
		var imageUrl = [
			{
				imgUrl : process.env.PUBLIC_URL +'/images/gallery/1.jpg',
			},
			{
				imgUrl : process.env.PUBLIC_URL +'/images/gallery/2.jpg',
			},
		]
		return(
			<div className='galleryBox'>
				<h2>-- Endless Memory --</h2>
				<div className='imageGalBox'>
					<div className='columns'>
						<ImageItems itemImgUrl={imageUrl[0].imgUrl} imgCurrent={0}/>
						<ImageItems itemImgUrl={imageUrl[1].imgUrl} imgCurrent={1}/>
					</div>
				</div>
			</div>
		);
	}
}

export default Gallery;