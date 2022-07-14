import {useEffect} from "react";
import AboutUs from "../components/AboutUs/AboutUs";
import '../components/Styles/About.css'


import hero from '../assert/I.JPG'

import { NavLink } from 'react-router-dom'

const About = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return <div className="about">

        	{/* Page Title */}
          <section class="page-title" style={{backgroundImage: `url(${hero})`}}>
        <div class="auto-container">
        	<div class="inner-container clearfix">
	            <h1>Services</h1>
	            <ul class="bread-crumb clearfix">
	                <li><NavLink   to='/' 
            >Home </NavLink></li>
	                <li>About</li>
	            </ul>
        	</div>
        </div>
    </section>
    {/* End Page Title */}
<div className="FF">
    <AboutUs/>
       <h4>Our performance is sacrosanct with our vision and mission statements as we are
       certainly a bespoke reference point with our guards and services being compared to be the best in the world.</h4>
       <div className="statement">

        <span>
          <h5>Our Vision</h5>
          <p>
          Striving to be a highly reputable, top class and versatile/international Security
          Organization that is the ultimate master and one stop shop for solutions to all
          contemporary security challenges.
</p>
        </span>

        <span>
          <h5>Our Mission</h5>
          <p>
            At Thunder Bolt Watch Nig. Ltd., we create, maintain and envisage a secure and safe atmosphere to the satisfaction of our clients
</p>
        </span>
        

        <span>
          <h5>Core Principles</h5>
          <p>
          TBW'S core principle is to ensure your peace of mind by giving the highest quality
          security service possible. To achieve this, we carefully select our staff to suite the
          company's culture and international best practices; that way putting our client's
          security first.
</p>
        </span>
        
        
       </div>
       </div>
  </div>;
};

export default About;




