import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Assets/logo.jpg';
import './FooterNew.css';

function FooterNew() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="subscribe">
          <div className="footer-subscribe">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3907.8252369725333!2d92.7121!3d11.6358!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa7807a37ffc8e241%3A0x20e901e2826f557d!2sAndaman%20Darshan%20Tours%20%26%20Travels!5e0!3m2!1sen!2sin!4v1722414559124!5m2!1sen!2sin"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps"
            ></iframe>
          </div>
          <div className="footer-social-media">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>

        <div className="footer-links">
          <div className="footer-column">
          <div className="logo">
              <img className='logo-img' src={logo} alt="Logo" />
            <div className="Nav-Name">Andman Darshan</div>          
          </div>
            <div>Discover the breathtaking beauty of the Andaman & Nicobar Islands, a tropical paradise offering a perfect blend of nature, adventure, and culture. Plan your journey to explore pristine beaches, coral reefs, and the rich history of these magnificent islands</div>
          </div>
          <div className="footer-column">
            <h4 className="footer-label">Contact Information</h4>
            <div>Office Address:</div>
            <div>Near Dollygaunge Post Office, Dollygaunge</div>
            <div>Port Blair, S Andaman, India</div>
            <div>Pin - 744103</div>
          </div>
        </div>
      </div>
      <div className="footer-rights">
        &copy; {new Date().getFullYear()} Andaman Darshan Travels. All rights reserved.{' '}
        <Link to="/privacy-policy" className="footer-link">Privacy Policy | Terms & Conditions</Link>
      </div>
    </footer>
  );
}

export default FooterNew;
