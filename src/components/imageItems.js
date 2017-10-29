import React, { Component } from 'react';
import axios from 'axios';
import Lightbox from 'react-images';

let LIGHTBOX_IMAGE_SET = []
axios.get('http://localhost:8080/')
.then(res => {
  var newMap = []
  res.data.data.map(function(d,i){
      newMap.push({'src' : d.images.standard_resolution.url });
  })
  LIGHTBOX_IMAGE_SET = newMap;
});

class ImageItems extends Component{
    constructor() {
        super();
            this.state = {
                  lightboxIsOpen: false,
                  curImg:0,
                  itemLight:[]
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
            this.setState(prevState => ({
                lightboxIsOpen: !prevState.lightboxIsOpen,
                curImg: this.props.imgCurrent
            }));
        }
        

        componentDidMount() {
            //LIGHTBOX_IMAGE_SET.push({src:this.props.itemImgUrl});
        }

        render(){
            return(
                <div className='column is-3' onClick={this.handleClick}>
                    <img src={this.props.itemImgUrl} className='imgItem'/>
                    <Lightbox
                        images={LIGHTBOX_IMAGE_SET}
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