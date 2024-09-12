// src/components/Package.js
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import HeroAbout from '../Hero/Hero';
import Navbar from '../Navbar/Navbar';
import './Package.css'; // Import the CSS file
import Family34 from "./FamilyPackage34.jpg";
import Family56 from "./FamilyPackage56.jpg";
import Family67 from "./FamilyPackage67.jpg";
import Family78 from "./FamilyPackage78.jpg";
import honeymoon34 from "./honeymoon34.jpg";
import honeymoon56 from "./honeymoon56.jpg";
import group34 from "./group34.jpg";
import group45 from "./group45.jpg";
import FamilyM from "./familyM.jpg";
import honeymoonM from "./honeymoonM.jpg";
import groupM from "./groupM.jpg";

const packageDetails = {
  package1: {
    title: "Family Package",
    src: FamilyM,
    description: "Enjoy a wonderful family vacation...",
    daysNights: [
      { id: '4N5D', label: '4 Nights 5 Days', image: Family34 },
      { id: '5N6D', label: '5 Nights 6 Days', image: Family56 },
      { id: '6N7D', label: '6 Nights 7 Days', image: Family67 },
      { id: '7N8D', label: '7 Nights 8 Days', image: Family78 },

    ],
  },
  package2: {
    title: "Honeymoon Package",
    src: honeymoonM,
    description: "Experience a romantic getaway...",
    daysNights: [
      { id: '3N4D', label: '3 Nights 4 Days', image: honeymoon34 },
      { id: '4N5D', label: '4 Nights 5 Days', image: honeymoon56 },
    ],
  },
  package3: {
    title: "Group Package",
    src: groupM,
    description: "Perfect for groups and friends...",
    daysNights: [
      { id: '3N4D', label: '3 Nights 4 Days', image: group34 },
      { id: '4N5D', label: '4 Nights 5 Days', image: group45 },
    ],
  },
};

const Package = () => {
  const { packageId } = useParams();
  const packageInfo = packageDetails[packageId];

  if (!packageInfo) {
    return <h2>Package not found</h2>;
  }

  return (
    <>
    <Navbar/>
    <HeroAbout text={packageInfo.title} img={packageInfo.src} />
    <div className="package-container">
      
      
      
      <p style={{textAlign:"center",marginBottom:"2rem",fontSize:"1.5em"}}>{packageInfo.description}</p>
      <div className="days-nights-container">
        {packageInfo.daysNights.map((dn) => (
          <div className="days-nights-box" key={dn.id}>
            <img src={dn.image} alt={dn.label} className="package-image" />
            <h2>{dn.label}</h2>
            {dn.id !== "3N4D" && <Link to={`/packages/${packageId}/${dn.id}`} className="view-more-button">View More</Link>}
            {dn.id === "3N4D" && <Link to={`/contact`} className="view-more-button">View More</Link>}
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Package;
