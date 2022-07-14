import React from "react";
import './Offer.css'

import building from '../../assert/building.png'
import surveillance from '../../assert/surveillance.png'
import resort from '../../assert/resort.png'
import runer from '../../assert/runer-silhouette-running-fast.png'



const Offer = () => {
  return <div className="offer">
    <span className="offer-text">
    <h4>What We <span>Offer</span> Here</h4>
    <p>We strive to be highly reputable in other words we offer a wide range of services regarding securing life and properties, maintaining safe atmospheric conditions to the satisfaction of our client.</p>
    </span>
    <span className="offer-icons">

       <div className="text-icon">
           <span><img src={building} alt={building} /></span>
           <span className='span'>
             <h5>Office Security</h5>
             <p className="text-des">
             We offer Security guard services for various legal offices and institutions 
             </p>
           </span>
       </div>

       <div className="text-icon">
           <span><img src={surveillance} alt={surveillance} /></span>
           <span className='span'>
             <h5>Surveillance</h5>
             <p className="text-des">
              We procure and  supply security gadget in and outside Nigeria with the installation and maintenance of the gadget
             </p>
           </span>
       </div>
       <div className="text-icon">
           <span><img src={runer} alt={runer} /></span>
           <span className='span'>
             <h5>Man Security</h5>
             <p className="text-des">
             In addition to our other services, we provide executive protection team that are highly trained and knowledgeable in various security issues/context
             </p>
           </span>
       </div>
       <div className="text-icon">
           <span><img src={resort} alt={resort} /></span>
           <span className='span'>
             <h5>Home Security</h5>
             <p className="text-des">
             We provide highly trained experienced and well-able men and women, to prevent or mitigate existing threat and also provide safety for our client and their properties
             </p>
           </span>
       </div>

    </span>
  </div>;
};

export default Offer;
