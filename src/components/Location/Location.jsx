import React from "react";
import './Location.css'

const Location = () => {
  return <div className="location">
    <div className="location-grid">
      <span>
        <h4>HEAD OFFICE:</h4>
        <p>
            Bassan Plaza, Plot 759, Independent Avenue, Central Business District, FCT Abuja-Nigeria
        </p>
        
      </span>
      <span>
          <h4>TRAINING CENTER:</h4>
          <p>
            KI 22 Off Agric Show Junction, Angwa Shuwari Abuja-Keffi Express Way Karu, Nassarawa State.
          </p>
      </span>
      <span>
        <span>Tel:</span>
        <span>
        <p>+234 906 7077 000,</p>  
        <p>+234 705 6560 766,</p>
        <p>+234 703 9750 210</p>
        </span>
      </span>
      <span>
        <p>Email: support@company.com</p>
      </span>
    </div>
    <p className='phrase'>"...Stay connected to Remain protected"</p>
  </div>;
};

export default Location;
