import React from "react";
import './Hero.css'
import { cardData } from "../../sliderData";

const Hero = () => {
  return <div className="hero">
           <div className="hero-container">
              {
                cardData.map((items, index) => {
                    return <div className="grid-item" key={index}>
                         <span><img src={items.image} alt="slide" className="image" /></span>
                         <span className="heading"><h4>{items.heading}</h4></span>
                         <span className="desc"><p>{items.desc}</p></span>
                    </div>
                })
              }
           </div>
  </div>;
};

export default Hero;
