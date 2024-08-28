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
    { url: attraction1, name: 'Trenquil' },
    { url: attraction2, name: 'Neil Island' },
    { url: attraction3, name: 'Viper Island' },
    { url: attraction4, name: 'Marine Park' },
    { url: attraction5, name: 'Havelock' },
    { url: attraction6, name: 'Cellular Jail' },
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
                alt={attraction.name}
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
