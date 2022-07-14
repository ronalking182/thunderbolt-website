import {useEffect} from "react";
import '../components/Styles/Services.css'

import {BsBuilding} from 'react-icons/bs'
import {MdOutlineGppGood} from 'react-icons/md'
import OtherServices from "../components/OtherServices/OtherServices";
import hero from '../assert/HeroPic01.jpg'

import { NavLink } from 'react-router-dom'
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

const Services = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

 


  return <motion.div 
  className="services"
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
	                <li>Services</li>
	            </ul>
        	</div>
        </div>
    </section>
    {/* End Page Title */}

         <div className="work-icon">
          <BsBuilding className="gr"/>
         </div>
         <div className="work-detail">
          <div className="ser">
            <span className="service-heading">
              <MdOutlineGppGood className="md"/>
              <h5>Specialize Security</h5>
            </span>
            <span className="service-body">
              <p>Tbw’s reputation as a quality security service provider relies on the calibre and professionalism of the people we recruit and employ. We pride ourselves in providing a progressive working environment for our employees resulting in nationally recognized training tailored to the client’s needs.. </p>
            </span>
            </div>

            <div className="ser">
            <span className="service-heading">
              <MdOutlineGppGood className="md"/>
              <h5>Protocol and Armed Shuttle</h5>
            </span>
            <span className="service-body">
              <p> We are specialized in protection of lives and properties with highly qualified specialists in the field of executive protection and escort to any part of the world </p>
            </span>
            </div>

            <div className="ser">
            <span className="service-heading">
              <MdOutlineGppGood className="md"/>
              <h5>Event Security</h5>
            </span>
            <span className="service-body">
              <p>Tbw's Security consulting services offers a range of event security management services that are tailored towards the business and/or operational needs of our clients. Thus, we provide security and protective services during special event</p>
            </span>
            </div>

            <div className="ser">
            <span className="service-heading">
              <MdOutlineGppGood className="md"/>
              <h5>Bodyguard</h5>
            </span>
            <span className="service-body">
              <p> We offer a range of comprehensive and customized executive protection or bodyguard services that are designed to suit the needs and expectations of our clients </p>
            </span>
            </div>
         </div>
         <h1 className="ph">"...Stay connected to Remain protected"</h1>
        <div className="mid-pic">
            <div className="CC">
            {/* <h4>Consultancy Services</h4>
         <p>Our Management Team is Comprised of Consultant in the following areas:</p> */}
            </div>
        </div>
         <p className="other">Other Security Courses We Provide On Contractual Security Training Includes:</p>
         <OtherServices/>
  </motion.div>;
};

export default Services;
