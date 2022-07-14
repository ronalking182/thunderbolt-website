import React from "react";
import './Footer.css'
import logo from '../../assert/Logo-T-PNG - 1.png'


import {
    AiFillFacebook, 
    AiFillInstagram,
    AiFillMail,
} from 'react-icons/ai'
import {GoLocation} from 'react-icons/go'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {Link} from 'react-router-dom'

const Footer = () => {
  return <footer class="footer-distributed">

  <div className="footer-left">

    <span className='logoX'><img src={logo} alt="logo" /></span>

    <p className="footer-links">
      <Link to="/" className="link-1">Home</Link>
      
      <Link to="services">Services</Link>
    
      <Link to="gallery">Gallery</Link>
    
      <Link to="contact">Contact</Link>
      
      <Link to="about">About</Link>
    </p>

    <p className="footer-company-name"> All Rights Reserved © 2020</p>
  </div>

  <div className="footer-center">

    <div >
      <i className="fa fa-map-marker"><GoLocation/></i>
      <p>Bassan Plaza Plot 759, Independent Avenue Central Area District, FCT Abuja-Nigeria</p>
    </div>

    <div >
    <i class="fa fa-phone"><BsFillTelephoneFill/></i>
     <span ><p>+234 906 7077 000,</p>  <p>+234 705 6560 766,</p> <p>+234 703 9750 210</p> </span>
    
    </div>

    <div>
      <i className="fa fa-envelope"><AiFillMail/></i>
      <p><a href="mailto:support@company.com">support@company.com</a></p>
    </div>

  </div>

  <div className="footer-right">

    <p className="footer-company-about">
      <span>About Us</span>
      THUNDER BOLT WATCH NIGERIA
         LIMITED is a limited liability, security.
         oriented
         company
         being in 2014...
    </p>

    <div className="footer-icons">

      <a href="https://www.facebook.com/ThunderBolt-Nigeria-Ltd-106946961977247/"><i className="fa fa-facebook"><AiFillFacebook/></i></a>
      <a href="#"><i className="fa fa-twitter"><AiFillInstagram/></i></a>

    </div>

  </div>

</footer>

};

export default Footer;

