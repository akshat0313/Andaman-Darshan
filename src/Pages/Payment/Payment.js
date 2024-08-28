import React from 'react';
import FooterNew from '../Footer/FooterNew';
import HeroAbout from '../Hero/Hero';
import Navbar from '../Navbar/Navbar';
import Recognition from '../Recognition/Recognition';
import './Payment.css';

function Payment() {
  return (
    <div>
      <Navbar/>
      <HeroAbout text="Payment Details" img={"https://res.cloudinary.com/demo/image/upload/sample.jpg"}/>
      <div className="payment">
        <div className="section">
          <h2>Cancellation Policies</h2>
          <p>
            <span className="highlight">Important:</span> Cancellations made within 24 hours of the purchase will be fully refunded.
          </p>
          <p>
            Cancellations made after 24 hours but before 7 days of the event will incur a 20% fee.
          </p>
          <p>
            <span className="highlight">No refunds</span> for cancellations made within 7 days of the event.
          </p>
        </div>

        <div className="section">
          <h2>Payment Options</h2>
          <ul>
            <li>Credit/Debit Card</li>
            <li>Net Banking</li>
            <li>UPI (Unified Payments Interface)</li>
            <li>Wallets (Paytm, Google Pay, etc.)</li>
          </ul>
        </div>

        <div className="section">
          <h2>Bank Details</h2>
          <div className="bank-details">
            <div className="bank-box">
              <h3>Bank A</h3>
              <p><strong>Account Number:</strong> 123456789</p>
              <p><strong>IFSC Code:</strong> ABCD0123456</p>
              <p><strong>Branch:</strong> XYZ Branch</p>
            </div>
            <div className="bank-box">
              <h3>Bank B</h3>
              <p><strong>Account Number:</strong> 987654321</p>
              <p><strong>IFSC Code:</strong> WXYZ0987654</p>
              <p><strong>Branch:</strong> ABC Branch</p>
            </div>
            <div className="bank-box">
              <h3>Bank C</h3>
              <p><strong>Account Number:</strong> 112233445</p>
              <p><strong>IFSC Code:</strong> MNOP1122334</p>
              <p><strong>Branch:</strong> PQR Branch</p>
            </div>
          </div>
        </div>
      </div>
      <Recognition/>
      <FooterNew/>
    </div>
  );
}

export default Payment;
