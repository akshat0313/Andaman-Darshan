import Aos from 'aos';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import FooterNew from '../Footer/FooterNew';
import HeroAbout from '../Hero/Hero';
import Navbar from '../Navbar/Navbar';
import destinations from './DestinationData';
import './DestinationTemplate.css';

const DestinationPage = () => {
  const { placeId } = useParams();
  const destination = destinations[placeId];
  
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  if (!destination) {
    return <p>Destination not found</p>;
  }

  return (
    <>
      <Navbar />
      <div className="destination-container">
        <HeroAbout text={destination.title} img={destination.heroImageUrl} />
        <p style={{ textAlign: "center" }}>{destination.description}</p>

        {destination.sections.map((section, index) => (
          <div key={index} className="section-and-images" style={{ display: "flex" }}>
            <div className="section-content">
              <h2>{section.title}</h2>
              <p>{section.content}</p>
            </div>

            <div className="image-content">
              {section.images.map((imageUrl, idx) => (
                <img
                  key={idx}
                  src={imageUrl}
                  alt={`${section.title} ${idx + 1}`}
                  className="section-image"
                  data-aos="fade-left"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
      <FooterNew />
    </>
  );
};

export default DestinationPage;
