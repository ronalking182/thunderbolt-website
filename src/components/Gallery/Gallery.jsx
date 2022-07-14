import React from "react";
import './Gallery.css'
import one from '../../assert/one.jpg'
import two from '../../assert/two.JPG'
import three from '../../assert/three.JPG'
import four from '../../assert/four.JPG'
import five from '../../assert/five.jpg'

const Gallery = () => {
  return <div className="gallery">
      <span>
        <h4> <span>Our Gallery</span> Photo</h4>
        <p>Below are pictures of our men currently in service/action, training and carrying out other security function.</p>
      </span>
      <span className='main-gallery'>
        <div class="on-e"><img src={one} alt='pic'/></div>
        <div className="tw-o"><img src={two} alt='pic'/></div>
        <div className="three"><img src={three} alt='pic'/></div>
        <div className="four"><img src={four} alt='pic'/></div>
        <div className="five"><img src={five} alt='pic'/></div>
      </span>
  </div>;
};

export default Gallery;
