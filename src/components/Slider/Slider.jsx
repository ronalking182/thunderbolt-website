import { useState, useEffect } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import "./Slider.css";

const Slider = ({data}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideLength = data.length;

  const autoScroll = true;
  let slideInterval;
  let intervalTime = 7000;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
    console.log("next");
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
    console.log("prev");
  };

  function auto() {
    slideInterval = setTimeout(nextSlide, intervalTime);
  }

  useEffect(() => {
    setCurrentSlide(0);
  }, []);

  useEffect(() => {
    if (autoScroll) {
      auto();
    }
    return () => clearInterval(slideInterval);
  }, [currentSlide]);

  return (
    <div className="slider">
      <AiOutlineArrowLeft className="arrow prev" onClick={prevSlide} />
      <AiOutlineArrowRight className="arrow next" onClick={nextSlide} />
      {data.map((slide, index) => {
        return (
          <div
            className={index === currentSlide ? "slideXX current" : "slideXX"}
            key={index}
          >
            {index === currentSlide && (
              <div className="works">
                <img src={slide.image} alt="slide" className="image" />
                <div className="content">
                  <h2>{slide.heading}</h2>
                  <p>{slide.desc}</p>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Slider;