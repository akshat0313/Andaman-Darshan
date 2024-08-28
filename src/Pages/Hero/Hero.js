import React from 'react'
import './Hero.css'
function HeroAbout({img,text}) {
  return (
    <div className="hero-container">
    <div className="background-image1">
        <img src={img} alt="" srcset="" />
    <div className="hero-text">
      <h1>{text}</h1>
      
      
    </div>
    </div>
  </div>
  )
}

export default HeroAbout
