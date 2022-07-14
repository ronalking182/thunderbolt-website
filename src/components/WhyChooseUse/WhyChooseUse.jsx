import React from "react";
import './WhyChooseUs.css'
import customer from '../../assert/customer.png'
import lock from '../../assert/lock.png'
import employee from '../../assert/employee.png'
import locked from '../../assert/locked.png'

import fig from '../../assert/fig.JPG'

const WhyChooseUse = () => {
  return <div className="choose">
       <div className='pic'>
        <img src={fig} alt="guard" className="Img"/>
       </div>
       <div className="text">
        <h4><span className="why">Why</span> Choose Us</h4>
        <span className="cards">
             <div className="card-one">
                <img src={customer} alt="support" className="support"/>
                <h3>24/7 Support</h3>
                <p>We provide top tire 24/7 services to our employees and our client to facilitate an ease going working environment.</p>
             </div>
             
             <div className="card-one">
                <img src={employee} alt="employee" className="employee"/>
                <h3>Expert Employees</h3>
                <p>TBW Board of Directors and Management are carefully and consciously selected team of highly competent intellectuals with experience in diverse security operation and general management with requisite experience and track record of service .</p>
             </div>
             <div className="card-one">
                <img src={locked} alt="locked" className="locked"/>
                <h3>Verified Service</h3>
                <p>Within the span of 8 years TBW has been able to seamlessly cut into virtually, all sector of economy, today we operate in the Oil and & Gas (downstream), Tertiary institutions, reputable government hospital and facilities, church and private premises.</p>
             </div>
             <div className="card-one">
                <img src={lock} alt="lock" className="lock"/>
                <h3>Secured Service</h3>
                <p>Our  guard are highly motivated, well trained & experienced  men and women, solving existing threat  client properties, existing threat and safety.</p>
             </div>
             </span>
       </div>
  </div>;
};

export default WhyChooseUse;
