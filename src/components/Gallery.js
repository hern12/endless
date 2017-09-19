import React, { Component } from 'react';
import axios from 'axios';
import ImageItems from './imageItems.js'


class Gallery extends Component{

	myCallback = (dataFromChild) => {
		console.log(dataFromChild);
	}

	componentDidMount() {
		return fetch("https://api.instagram.com/v1/users/self/media/recent/?access_token=307416303.a8158f6.5b7d01cd928d49b49cfce4a9b044cc8c")
		.then((response) => console.log(response.json()))
		.catch((error) => {
			console.error(error);
		});
	}

	render(){
		var imageUrl = [
			{
				imgUrl : process.env.PUBLIC_URL +'/images/gallery/1.jpg',
			},
			{
				imgUrl : process.env.PUBLIC_URL +'/images/gallery/2.jpg',
			},
			{
				imgUrl : process.env.PUBLIC_URL +'/images/gallery/3.jpg',
			},
			{
				imgUrl : process.env.PUBLIC_URL +'/images/gallery/4.jpg',
			},
			{
				imgUrl : process.env.PUBLIC_URL +'/images/gallery/5.jpg',
			},
			{
				imgUrl : process.env.PUBLIC_URL +'/images/gallery/6.jpg',
			},
			{
				imgUrl : process.env.PUBLIC_URL +'/images/gallery/7.jpg',
			},
			{
				imgUrl : process.env.PUBLIC_URL +'/images/gallery/8.jpg',
			},
		]
		return(
			<section className='galBox'>
				 {/* <video autoPlay loop poster="polina.jpg" id="vid">
					<source src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.webm" type="video/webm"/>
					<source src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4" type="video/mp4"/>
				</video> */}
				<div className="section">
					<div className='galleryBox container'>
						<h2>-- Endless Memory --</h2>
						<div className='imageGalBox'>
							<div className='columns is-multiline'>
								<ImageItems itemImgUrl={imageUrl[0].imgUrl} imgCurrent={0}/>
								<ImageItems itemImgUrl={imageUrl[1].imgUrl} imgCurrent={1}/>
								<ImageItems itemImgUrl={imageUrl[2].imgUrl} imgCurrent={2}/>
								<ImageItems itemImgUrl={imageUrl[3].imgUrl} imgCurrent={3}/>
								<ImageItems itemImgUrl={imageUrl[4].imgUrl} imgCurrent={4}/>
								<ImageItems itemImgUrl={imageUrl[5].imgUrl} imgCurrent={5}/>
								<ImageItems itemImgUrl={imageUrl[6].imgUrl} imgCurrent={6}/>
								<ImageItems itemImgUrl={imageUrl[7].imgUrl} imgCurrent={7}/>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default Gallery;