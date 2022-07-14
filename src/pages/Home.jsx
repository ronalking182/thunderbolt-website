import {useEffect} from "react";
import Gallery from "../components/Gallery/Gallery";
import Hero from "../components/Hero/Hero";
import Offer from "../components/Offer/Offer";
import Slider from "../components/Slider/Slider";
import '../components/Styles/Home.css'
import WhyChooseUse from "../components/WhyChooseUse/WhyChooseUse";
import {sliderData} from '../sliderData'

import { motion } from 'framer-motion';




const containerVariants = {
	hidden: { 
	  opacity: 0, 
	  x: '100vw',
	  transition: {
		staggerChildren: 0.5,
	  } 
	},
	visible: { 
	  opacity: 1, 
	  x: 0,
	  transition: { 
		type: 'spring',
		mass: 0.4,
		damping: 8,
		staggerChildren: 0.4,
		when: "beforeChildren",
	  }
	},
  };

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return <motion.div className="home"
  variants={containerVariants}
  initial="hidden"
  animate="visible"
  exit="exit">
    <Slider data={sliderData} />
    <Hero/>
    <WhyChooseUse/>
    <Offer/>
    <Gallery/>
  </motion.div>;
};

export default Home;
