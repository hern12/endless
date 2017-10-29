import React, { Component } from 'react';
import axios from 'axios';
import ImageItems from './imageItems.js'

var lis = [];

class Gallery extends Component{
	constructor() {
        super();
            this.state = {
				  imageUrl: [],
				  count:0
            }
    }
	componentDidMount() {
		axios.get('http://localhost:8080/')
		  .then(res => {
			var newMap = []
			var imageUrl = res.data.data.map(function(d,i){
				newMap.push({'imgUrl' : d.images.standard_resolution.url });
			}.bind(this))
			this.setState({imageUrl: newMap});
		  });
	}

	render(){		
		return(
			<section className='galBox'>
				<div className="section">
					<div className='galleryBox container'>
						<h2>-- Endless Memory --</h2>
						<div className='imageGalBox'>
							<div className='columns is-multiline'>
							{this.state.imageUrl.map((img12,i) =>
								<ImageItems itemImgUrl={img12.imgUrl} imgCurrent={i} key={i}/>
							)}
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default Gallery;