import AOS from "aos";
import React, { useEffect } from 'react';
import './Recognition.css'; // Import the CSS file
import googleReviews from "./googleReviews.jpg";
import ANAdmin from "./ANAdmin.jpg";
import tripAdvisor from "./tripAdvisor.jpg";

const brandLogos = [
  googleReviews,
  ANAdmin,
  tripAdvisor,
  // Add more logo paths as needed
];

function Recognition() {
    useEffect(() => {
        AOS.init({
          duration: 1000,
        });
      }, []);
  return (
    <div className="recognition-container">
      {brandLogos.map((logo, index) => (
        <img key={index} src={logo} alt={`Brand ${index + 1}`} className="brand-logo" data-aos='zoom-in' />
      ))}
    </div>
  );
}

export default Recognition;
