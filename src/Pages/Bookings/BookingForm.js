import AOS from "aos";
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import toastify CSS
import FooterNew from "../Footer/FooterNew";
import HeroAbout from '../Hero/Hero';
import Navbar from "../Navbar/Navbar";
import Recognition from "../Recognition/Recognition";
import './BookingForm.css';

function BookingForm() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  const toastOptions = {
    position: 'top-right',
    draggable: true,
    autoClose: 8000,
    pauseOnHover: true,
    theme: 'colored',
  };

  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    numPersons: 1, // Default to 1
    travelDate: '',
    flightBooked: '',
    package: '',
    nightsDays: '',
    hotelType: '',
    transport: '',
    activities: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: name === 'numPersons' ? parseInt(value) : value // Ensure numPersons is a number
    }));
    console.log(`Field changed: ${name} = ${value}`);
  };

  const validateForm = () => {
    const errors = {};
    const { name, mobile, email, travelDate, package: selectedPackage, nightsDays, hotelType, transport } = formData;
  
    if (!name) errors.name = "Name is required";
    if (!mobile) errors.mobile = "Mobile number is required";
    if (!email) errors.email = "Email is required";
    if (!travelDate) errors.travelDate = "Travel date is required";
    if (!selectedPackage) errors.package = "Package selection is required";
    if (!nightsDays) errors.nightsDays = "Number of nights and days is required";
    if (!hotelType) errors.hotelType = "Hotel type selection is required";
    if (!transport) errors.transport = "Transport selection is required";
  
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submission started"); // Add a console log at the start
    const errors = validateForm();
    console.log("Validation errors:", errors); // Log validation errors
    if (Object.keys(errors).length > 0) {
      Object.values(errors).forEach(error => {
        console.log("Displaying toast error:", error); // Log each error before displaying
        toast.error(error, toastOptions);
      });
      return;
    }
    console.log('Form submitted with data:', formData);
    try {
      const response = await axios.post('http://localhost:8080/booking', formData);
      console.log('Success:', response.data);
      toast.success('Booking form submitted successfully!', toastOptions);
      // Optionally reset the form here
      setFormData({
        name: '',
        mobile: '',
        email: '',
        numPersons: 1, // Default to 1
        travelDate: '',
        flightBooked: '',
        package: '',
        nightsDays: '',
        hotelType: '',
        transport: '',
        activities: ''
      });
    } catch (error) {
      console.error('Error:', error.response ? error.response.data : error.message);
      toast.error('Failed to submit the booking form.', toastOptions);
    }
  };

  return (
    <div>
      <ToastContainer /> {/* Ensure ToastContainer is here */}
      <Navbar />
      <HeroAbout img="https://res.cloudinary.com/demo/image/upload/flower.jpg" text="Contact Us" />
      <div className="contact" style={{ display: "flex", justifyContent: "center", margin: "4rem" }}>
        {/* <div>
          <h1 style={{ fontSize: "2.5em", marginBottom: "30px", textAlign: "initial", marginLeft: "2rem" }}>Contact Us</h1>
          <div className="booking-form-container" data-aos="fade-right">
            <form onSubmit={handleSubmit} className="booking-form" noValidate>
              <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label htmlFor="mobile">Mobile Number *</label>
                <input type="tel" id="mobile" name="mobile" value={formData.mobile} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label htmlFor="numPersons">No. of Persons</label>
                <input type="number" id="numPersons" name="numPersons" value={formData.numPersons} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label htmlFor="travelDate">Travel Date *</label>
                <input type="date" id="travelDate" name="travelDate" value={formData.travelDate} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label htmlFor="flightBooked">Already Booked Your Flight Tickets?</label>
                <select id="flightBooked" name="flightBooked" value={formData.flightBooked} onChange={handleChange}>
                  <option value="">--Select--</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="package">Packages *</label>
                <select id="package" name="package" value={formData.package} onChange={handleChange}>
                  <option value="">--Select--</option>
                  <option value="Family package">Family package</option>
                  <option value="Honeymoon package">Honeymoon package</option>
                  <option value="Group package">Group package</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="nightsDays">No. of Nights & Days *</label>
                <select id="nightsDays" name="nightsDays" value={formData.nightsDays} onChange={handleChange}>
                  <option value="">--Select--</option>
                  <option value="4N 5D">4N 5D package</option>
                  <option value="5N 6D">5N 6D package</option>
                  <option value="6N 7D">6N 7D package</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="hotelType">Type of Hotel / Resort *</label>
                <select id="hotelType" name="hotelType" value={formData.hotelType} onChange={handleChange}>
                  <option value="">--Select--</option>
                  <option value="Budget Hotel">Budget Hotel</option>
                  <option value="Standard Hotel">Standard Hotel</option>
                  <option value="Premium Hotel">Premium Hotel</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="transport">Preferred Mode of Inter-Island Transport *</label>
                <select id="transport" name="transport" value={formData.transport} onChange={handleChange}>
                  <option value="">--Select--</option>
                  <option value="Ferry">Ferry</option>
                  <option value="Speed Boat">Speed Boat</option>
                  <option value="Helicopter">Helicopter</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="activities">Adventures Activities</label>
                <select id="activities" name="activities" value={formData.activities} onChange={handleChange}>
                  <option value="">--Select--</option>
                  <option value="Scuba">Scuba Diving</option>
                  <option value="Sea Kart">Sea Kart</option>
                  <option value="Snorkling">Snorkling</option>
                </select>
              </div>
              <button type="submit" className="submit-btn">Submit</button>
            </form>
          </div>
        </div> */}
        <div className="know">
          <h1 style={{ fontSize: "2.5em", marginBottom: "30px", textAlign: "initial", marginLeft: "2rem" }}>Get To Know Us</h1>
          <div className="info-container">
            <div className="info-block" data-aos="fade-up">
              <h2>Our Address</h2>
              <div>Near Dollygaunge Post Office, Dollygaunge</div>
              <div>Port Blair, S Andaman, India</div>
              <div>Pin - 744103</div>
            </div>
            <div className="info-block" data-aos="fade-up">
              <h2>Contact Information</h2>
              <p>Phone: 9734476497</p>
              <p>Email: andamantdarshan@gmail.com</p>
              <p>Working Hours: 24x7</p>
            </div>
          </div>
          {/* Add Email Button */}
          <div className="email-button" style={{ marginTop: '20px', textAlign: 'center' }}>
            <a href="mailto:andamantdarshan@gmail.com" className="mail-button" style={{ padding: '10px 20px', background: '#007BFF', color: 'white', textDecoration: 'none', borderRadius: '5px' }}>
              Contact Us
            </a>
          </div>
        </div>
      </div>
      
      <h1 style={{ fontSize: "2.5em", marginBottom: "30px", textAlign: "center" }}>Approved By</h1>
      <Recognition />
      <FooterNew />
    </div>
  );
}

export default BookingForm;



