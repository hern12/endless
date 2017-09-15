import React, { Component } from 'react';
import Lightbox from 'react-images';

class Gallery extends Component{
	render(){
		return(
			<div className="galleryBox">
				<h2>-- Endless Memory --</h2>
				<Lightbox
					images={[{ src:'https://www.whizlabs.com/wp-content/uploads/2013/09/free_test.jpg' }]}
					isOpen={this.state.lightboxIsOpen}
					onClickPrev={this.gotoPrevious}
					onClickNext={this.gotoNext}
					onClose={this.closeLightbox}
				/>
			</div>
		);
	}
}

export default Gallery;