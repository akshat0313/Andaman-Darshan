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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4647.253806681037!2d92.70965497637775!3d11.633402538173446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3088943e8bbb551b%3A0x1015638fe2d50e42!2sDollygunj%2C%20Port%20Blair%2C%20Andaman%20and%20Nicobar%20Islands%20744103!5e0!3m2!1sen!2sin!4v1725870444000!5m2!1sen!2sin"
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
