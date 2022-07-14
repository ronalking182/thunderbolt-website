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
                <img src={locked} alt="locked" className="locked"/>
                <h3>Verified Service</h3>
                <p>Over the years TBW has been able to seamlessly cut into virtually, all sector of economy Successfully.</p>
             </div>
             <div className="card-one">
                <img src={employee} alt="employee" className="employee"/>
                <h3>Expert Employees</h3>
                <p>TBW  Directors and Management are meticulously selected team of highly competent intellectuals with experience.</p>
             </div>
             <div className="card-one">
                <img src={lock} alt="lock" className="lock"/>
                <h3>Secured Service</h3>
                <p>Our  guard are highly motivated, well trained & experienced  individuals, solving existing threat  and protecting client properties.</p>
             </div>
             </span>
       </div>
  </div>;
};

export default WhyChooseUse;
