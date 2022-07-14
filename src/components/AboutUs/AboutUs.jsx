import React from "react";
import './AboutUs.css'
import M from '../../assert/M.JPG'

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

const AboutUs = () => {
  return <motion.div className="aboutUs"
  variants={containerVariants}
  initial="hidden"
  animate="visible"
  exit="exit"
  >
     <span>
        <h3><span>About </span> Our Company</h3>
        <p>THUNDER BOLT WATCH NIGERIA
         LIMITED is a limited liability, security.
         oriented
         company
         being in 2014.
         which came into
         The steady growth of TBW is essentially
         as a result of sustained research and
         planning activities which has enabled us
         with
         pin-point precision to locate
         market place demands and advance
         tailor suit solutions.</p>
        <p>
      We are not surprised at the rapid spread
      of our clientele base cutting across all
      sectors of the economy, given the level of
      competent,
      motivated,
      skilled and
      committed workforce which is the
      greatest asset of the organization.
        </p>
        <p>Within the span of four years, TBW has
            been able
            to
            seamlessly cut into
            virtually, all sectors of the economy,
            today we operate in the Oil & gas
            (downstream),
            Tertiary
            institutions,
            reputable government hospitals and
            facilities,
            Churches
            and
            private
            premises.</p>
     </span>
     <span className="image-Conn">
     <img src={M} alt="pic" className="com"/>
     </span>
  </motion.div>;
};

export default AboutUs;
