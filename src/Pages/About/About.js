import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
import first from '../../Assets/4.jpg';
import FooterNew from '../Footer/FooterNew';
import HeroAbout from '../Hero/Hero';
import Navbar from "../Navbar/Navbar";
import Recognition from '../Recognition/Recognition';
import './About.css'; // Assuming you're adding CSS to this file

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div>
      <Navbar />
      <HeroAbout img={first} text="Get To Know Us"/>
      <div className="about-container">
        <h1 data-aos="fade-up">About Us</h1>
        <p data-aos="fade-up">Welcome to Andaman Darshan Travels, your premier travel partner for exploring the enchanting Andaman and Nicobar Islands. Established with a passion for showcasing the natural beauty and rich cultural heritage of this unique archipelago, we are committed to providing exceptional travel experiences that create lasting memories.</p>
        
        <h2 data-aos="fade-up">Who We Are</h2>
        <p data-aos="fade-up">At Andaman Darshan Travels, we are a team of dedicated travel enthusiasts who believe in the transformative power of travel. Our deep-rooted love for the Andaman Islands drives us to curate bespoke travel packages that cater to the diverse interests and preferences of our clients. Whether you are seeking adventure, relaxation, or a cultural immersion, we have something special for you.</p>
        
        <h2 data-aos="fade-up">Our Mission</h2>
        <p data-aos="fade-up">Our mission is to deliver unparalleled travel experiences that exceed our clients' expectations. We strive to offer personalized services, ensuring that every aspect of your journey is meticulously planned and executed. From the moment you contact us to the time you return home, we are here to make your travel dreams a reality.</p>
        
        <h2 data-aos="fade-up">What We Offer</h2>
        <ul data-aos="fade-up">
          <li><strong>Tailored Travel Packages:</strong> We specialize in creating customized travel itineraries that align with your interests, preferences, and budget. Our packages include everything from adventure tours and honeymoon getaways to family vacations and solo excursions.</li>
          <li><strong>Expert Guidance:</strong> Our team of experienced travel consultants provides insightful advice and recommendations to help you make the most of your trip. We offer comprehensive information on the best places to visit, activities to enjoy, and local customs to observe.</li>
          <li><strong>Seamless Logistics:</strong> We take care of all your travel needs, including transportation, accommodation, and guided tours. Our extensive network of trusted partners ensures that you receive top-notch services at every step of your journey.</li>
          <li><strong>Exclusive Experiences:</strong> Discover the hidden gems of the Andaman Islands with our exclusive tours and activities. From scuba diving in pristine coral reefs to exploring ancient tribal cultures, we offer experiences that are both unique and unforgettable.</li>
        </ul>
        
        <h2 data-aos="fade-up">Why Choose Us</h2>
        <ul data-aos="fade-up">
          <li><strong>Local Expertise:</strong> As a locally-owned travel agency, we possess in-depth knowledge of the Andaman Islands and its many wonders. Our insights and connections enable us to provide authentic and immersive travel experiences.</li>
          <li><strong>Customer-Centric Approach:</strong> Your satisfaction is our top priority. We listen to your needs and preferences, ensuring that every detail of your trip is tailored to your liking.</li>
          <li><strong>Commitment to Quality:</strong> We are dedicated to maintaining the highest standards of service and professionalism. Our team works tirelessly to ensure that you have a safe, enjoyable, and memorable journey.</li>
        </ul>
        
        <h2 data-aos="fade-up">Our Values</h2>
        <ul data-aos="fade-up">
          <li><strong>Integrity:</strong> We operate with honesty and transparency, building trust with our clients through ethical practices and reliable services.</li>
          <li><strong>Excellence:</strong> We strive for excellence in everything we do, continually improving our services to meet and exceed your expectations.</li>
          <li><strong>Sustainability:</strong> We are committed to promoting sustainable tourism practices that protect and preserve the natural beauty and cultural heritage of the Andaman Islands.</li>
        </ul>
        
        <h2 data-aos="fade-up">Contact Us</h2>
        <p data-aos="fade-up">Ready to embark on your Andaman adventure? Contact us today to start planning your dream vacation. We look forward to welcoming you to the paradise that is the Andaman and Nicobar Islands.</p>
        <p data-aos="fade-up"><strong>Partha Mondal</strong><br/>
        Near Durga Mandir, Dollygunj, Port Blair, S Andaman, 744103<br/>
        9734476497 /9531894002</p>
        <p data-aos="fade-up"><strong>Kolkata office Address:</strong><br/>
        Mangalik Co Operative Housing Society Limited<br/>
        Baghajatin , Hiland Park, Kolkata-700094<br/>
        Phone No. 9433350299/7980617959</p>
      </div>
      <div className='gapz'></div>
      <div className="recog">
        <h2 style={{fontSize:"2.5em",textAlign:"center"}} data-aos="fade-up">Approved By:</h2>
        <Recognition />
      </div>
      <FooterNew />
    </div>
  )
}

export default About;
