import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import { useNavigate } from "react-router-dom";
import first from '../../Assets/1.jpg';
import second from '../../Assets/2.jpg';
import third from '../../Assets/3.jpg';
import Amenities from "../Amenities/Amenities";
import FooterNew from "../Footer/FooterNew";
import Gallery from "../Gallery/Gallery";
import Navbar from "../Navbar/Navbar";
import "../Navbar/navbar.css";
import PackageHome from "../Package/PackageHome";
import Snorkeling from "./snorkeling.jpg";
import ScubaDiving from "./ScubaDiving.jpg";
import Trekking from "./Trekking.jpg";
import Beach from "./Beach.jpg";
import "./Home.css";

function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  const navigate=useNavigate()
  return (
    <div>
      <Navbar />
      <header className="App-header">
        <div className="body">
          <section className="contain">
            <div className="slide">
              <Carousel 
                className="carousel"
                controls={true}
                keyboard={true}
                touch={true}
                interval={3000}
              >
                <Carousel.Item>
                  <img
                    className="d-block w-100 home-im"
                    src={first}
                    alt="First slide"
                  />
                  <div className="Carousel-caption">
                    <h3>Welcome to our Tourist Destination</h3>
                    <p>Explore beautiful landscapes and rich culture</p>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100 home-im"
                    src={second}
                    alt="Second slide"
                  />
                  <div className="Carousel-caption">
                    <h3>Discover Adventure and Serenity</h3>
                    <p>Escape to nature's wonders and tranquil retreats</p>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100 home-im"
                    src={third}
                    alt="Third slide"
                  />
                  <div className="Carousel-caption">
                    <h3>Plan Your Dream Vacation</h3>
                    <p>Unforgettable experiences await you</p>
                  </div>
                </Carousel.Item>
              </Carousel>
            </div>
          </section>
        </div>
      </header>
      {/* Additional sections/components */}
      <section className="activity-section">
        <h2 data-aos="fade-up">Activities</h2>
        <div className="activities">
          <div className="activity" data-aos="fade-up">
          <img src={Snorkeling} alt="Snorkeling" />
            <h3>Snorkeling</h3>
            <p>Experience the underwater world with vibrant marine life.</p>
          </div>
          <div className="activity" data-aos="fade-up" data-aos-delay="200">
          <img src={ScubaDiving} alt="Scuba Diving" />
            <h3>Scuba Diving</h3>
            <p>Dive deep and explore the coral reefs of Andaman.</p>
          </div>
          <div className="activity" data-aos="fade-up" data-aos-delay="400">
          <img src={Trekking} alt="Trekking" />
            <h3>Trekking</h3>
            <p>Explore the lush green trails and enjoy the scenic beauty.</p>
          </div>
          <div className="activity" data-aos="fade-up" data-aos-delay="600">
          <img src={Beach} alt="Beach" />
            <h3>Beach Relaxation</h3>
            <p>Relax and unwind on the serene beaches of Andaman.</p>
          </div>
        </div>
      </section>
      <div className="welcome">
      <div className="welcome-text">
        <h1>Welcome to Our Site</h1>
        <p>Discover amazing resources and articles curated just for you.</p>
        <button className="view-more-button" onClick={()=>{
          navigate('/about')
        }}>View More</button>
      </div>


      </div>
<div className="amenities">
        <h2 data-aos="fade-left">Why Choose Us?</h2>
      <Amenities/>
      </div>
      <PackageHome/>
      <Gallery/>
      <div className="ContactDetails" data-aos="fade-right">
        <div className="contact-box" data-aos="zoom-in">
          <h2>      Contact Us</h2>
          <p>Have any questions or need further information? We are here to help you!</p>
          <button className="contact-button" onClick={() => navigate('/contact')}>
            Get in Touch
          </button>
        </div>
      </div>
      <div className="Footer">
        <FooterNew />
      </div>
    </div>
  );
}

export default Home;
