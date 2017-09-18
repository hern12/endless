import React, { Component } from 'react';
import Lightbox from 'react-images';
class ImageItems extends Component{
    constructor() {
        super();
            this.state = {
                  lightboxIsOpen: false,
                  curImg:0
            }
            this.gotoPrevious = this.gotoPrevious.bind(this);
            this.gotoNext = this.gotoNext.bind(this);
            this.closeLightbox = this.closeLightbox.bind(this);
            this.handleClick = this.handleClick.bind(this);
        }
        gotoPrevious() {
            this.setState(prevState => ({
                curImg: prevState.curImg - 1
            }));
        }
        gotoNext() {
            this.setState(prevState => ({
                curImg: prevState.curImg + 1
            }));
        }
        closeLightbox() {
            this.setState(prevState => ({
                lightboxIsOpen: !prevState.lightboxIsOpen
            }));
        }
    
        handleClick() {
            console.log(this.props.imgCurrent)
            this.setState(prevState => ({
                lightboxIsOpen: !prevState.lightboxIsOpen,
                curImg: this.props.imgCurrent
            }));
        }
    
        render(){
            return(
                <div className='column is-3' onClick={this.handleClick}>
                    <img src={this.props.itemImgUrl} className='imgItem'/>
                    <Lightbox
                        images={[{ src: process.env.PUBLIC_URL +'/images/gallery/1.jpg' },{ src: process.env.PUBLIC_URL +'/images/gallery/2.jpg' }
                        ,{ src: process.env.PUBLIC_URL +'/images/gallery/3.jpg' },{ src: process.env.PUBLIC_URL +'/images/gallery/4.jpg' },
                        { src: process.env.PUBLIC_URL +'/images/gallery/5.jpg' },{ src: process.env.PUBLIC_URL +'/images/gallery/6.jpg' },
                        { src: process.env.PUBLIC_URL +'/images/gallery/7.jpg' },{ src: process.env.PUBLIC_URL +'/images/gallery/8.jpg' }]}
                        isOpen={this.state.lightboxIsOpen}
                        onClickPrev={this.gotoPrevious}
                        onClickNext={this.gotoNext}
                        onClose={this.closeLightbox}
                        currentImage={this.state.curImg}
                    />
                </div>
            );
        }

}

export default ImageItems;