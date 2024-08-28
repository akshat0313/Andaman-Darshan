import React from 'react';
import FooterNew from '../Footer/FooterNew';
import Navbar from '../Navbar/Navbar';
import './privacy.css';

function PrivacyPolicy() {
  return (
    <>
    <Navbar/>
    <div className="privacy-policy" style={{position:"relative",top:"3rem",paddingTop:"2rem"}}>
      <h1>Privacy Policy</h1>
      <p>At Andaman Darshan, we respect and protect the privacy of our users. This Privacy Policy outlines how we collect, use, and safeguard your information when you use our services. Please read it carefully.</p>
      <h2>1. Cookies</h2>
      <ul>
        <li>When you visit our website for the first time, we send a “cookie” to your computer. A cookie is a piece of data that identifies you as a unique user.</li>
        <li>We use cookies to improve service quality and understand user behavior. This helps us enhance our offerings and tailor them to your preferences.</li>
        <li>We do not disclose our cookies to third parties unless legally required (e.g., by a search warrant or court order).</li>
        <li>Most browsers are initially set to accept cookies, but you can adjust your settings to refuse them. Note that some features may not work properly if you disable cookies.</li>
      </ul>
      <h2>2. Information Collection</h2>
      <ul>
        <li>Except when you explicitly provide information (such as your name or email address), we do not collect unique details about you.</li>
        <li>We log general information like location, time of day, operating system, browser type, language, and IP address to verify records and improve services.</li>
      </ul>
      <h2>3. Links to Other Sites</h2>
      <ul>
        <li>Our website may link to external sites developed by parties over whom we have no control.</li>
        <li>These third-party sites may collect data or solicit personal information. Users provide such information at their discretion.</li>
      </ul>
      <h2>4. Sharing Information</h2>
      <ul>
        <li>We do not share your personal data with advertisers, business partners, or sponsors without your consent.</li>
        <li>However, we may disclose specific information if legally required (e.g., due to a search warrant or court order).</li>
      </ul>
      <h2>5. Consent and Changes</h2>
      <ul>
        <li>By using our website, you consent to the collection and use of your information as outlined in this policy and our Terms & Conditions.</li>
        <li>We may update this Privacy Policy periodically, and any changes will be posted on this page.</li>
      </ul>
    </div>
    <FooterNew/>
    </>
  );
}

export default PrivacyPolicy;
