import React from 'react';
import ModalImage from 'react-modal-image';
import './Gallery.css';
import attraction1 from "./attraction1.jpg";
import attraction2 from "./attraction2.jpg";
import attraction3 from "./attraction3.jpg";
import attraction4 from "./attraction4.jpg";
import attraction5 from "./attraction5.jpg";
import attraction6 from "./attraction6.jpg";

const Gallery = () => {
  const attractions = [
    { url: attraction1, name: 'Attraction 1' },
    { url: attraction2, name: 'Attraction 2' },
    { url: attraction3, name: 'Attraction 3' },
    { url: attraction4, name: 'Attraction 4' },
    { url: attraction5, name: 'Attraction 5' },
    { url: attraction6, name: 'Attraction 6' },
    // Add more Cloudinary image URLs and names here
  ];

  return (
    <div className="gallery">
      <h1>Attractions in Andaman</h1>
      <div className="gallery-grid">
        {attractions.map((attraction, index) => (
          <div key={index} className="gallery-item">
            <div className="image-container">
              <ModalImage
                small={attraction.url}
                large={attraction.url}
                alt={`Attraction ${index + 1}`}
                className="gallery-image"
              />
              <div className="overlay">
                <div className="overlay-text">{attraction.name}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
