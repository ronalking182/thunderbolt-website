import {useEffect} from "react";
import '../components/Styles/Gallery.css'


import A from '../assert/A.jpg'
import B from '../assert/B.jpg'
import C from '../assert/C.jpg'
import D from '../assert/D.jpg'
import E from '../assert/E.jpg'
import F from '../assert/F.jpg'
import I from '../assert/I.JPG'
import H from '../assert/H.JPG'
import J from '../assert/J.jpg'
import M from '../assert/M.JPG'
import N from '../assert/N.JPG'
import Q from '../assert/Q.JPG'
import G from '../assert/G.jpg'
import K from '../assert/K.JPG'
import P from '../assert/P.JPG'
import L from '../assert/L.JPG'
import O from '../assert/O.JPG'
import four from '../assert/four.JPG'
import hero from '../assert/HeroPic02.jpg'

import { NavLink} from 'react-router-dom'
import { motion } from 'framer-motion';


const Gallery = () => {

	useEffect(() => {
		window.scrollTo(0, 0)
	  }, [])


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

  return <motion.div 
  className="galleryX" 
  variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
  >

           	{/* Page Title */}
			   <section class="page-title" style={{backgroundImage: `url(${hero})`}}>
        <div class="auto-container">
        	<div class="inner-container clearfix">
	            <h1>Services</h1>
	            <ul class="bread-crumb clearfix">
	                <li><NavLink   to='/' 
            >Home </NavLink></li>
	                <li>Gallery</li>
	            </ul>
        	</div>
        </div>
    </section>
    {/* End Page Title */}
    <span className="Gal">
		<div class="child-con">
    <h4> <span className="OO">Our</span> Gallery</h4>
      <p>Tbw Consultant and instructor will evaluate the Human Resource development program of the organization including the identified weekness to design training course and program that will ensure the attainment of set objectives</p><br/>
      <p>We have over the year derived ingenious methods that has greatly enhanced leaning and practical application seamlessly</p>
		</div>
    </span>
  <div className="grid-wrapper">
	<div>
		<img src={A} alt="" />
	</div>
	<div>
		<img src={B} alt="" />
	</div>
	<div className="tall">
		<img src={C} alt=""/>
	</div>
	<div className="wide">
		<img src={D} alt="" />
	</div>
	<div>
		<img src={E} alt="" />
	</div>
	<div className="tall">
		<img src={F} alt="" />
	</div>
	<div className="big">
		<img src={G} alt="" />
	</div>
	<div>
		<img src={H} alt="" />
	</div>
	<div className="wide">
		<img src={I} alt="" />
	</div>
	<div className="big">
		<img src={J} alt="" />
	</div>
	<div className="tall">
		<img src={K} alt="" />
	</div>
	<div>
		<img src={L} alt="" />
	</div>
	<div>
		<img src={M} alt="" />
	</div>
	<div>
		<img src={N} alt="" />
	</div>
	<div className="wide">
		<img src={O} alt="" />
	</div>
	<div>
		<img src={Q} alt="" />
	</div>
	<div>
		<img src={P} alt="" />
	</div>
	<div className="wide">
		<img src={four} alt="" />
	</div>
</div>
</motion.div>
};

export default Gallery;
