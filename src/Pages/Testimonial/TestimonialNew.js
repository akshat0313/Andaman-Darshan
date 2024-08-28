import React, { useState } from 'react';
import { FaUserCircle } from "react-icons/fa";
import img from '../../Assets/7.jpg';
import FooterNew from "../Footer/FooterNew";
import HeroAbout from '../Hero/Hero';
import Navbar from '../Navbar/Navbar';
import './Testimonial.css';

function TestimonialNew() {
  const shortTestimonials = [
    {
      name: "Riya S.",
      text: "Andaman Darshan made our trip unforgettable! From pristine beaches to thrilling water sports, they curated an amazing itinerary. Highly recommended!",
    },
    {
      name: "Amit P.",
      text: "The personalized service by Andaman Darshan exceeded our expectations. Their local guides were knowledgeable, and we discovered hidden gems we wouldn’t have found on our own.",
    },
    {
      name: "Priya M.",
      text: "Andaman Darshan’s attention to detail made our honeymoon magical. Sunset cruises, candlelit dinners—they thought of everything!",
    },
    {
      name: "Rajesh K.",
      text: "As a solo traveler, I felt safe and well taken care of during my Andaman trip. Andaman Darshan’s team was professional and friendly.",
    },
    {
      name: "Ananya B.",
      text: "Andaman Darshan’s eco-friendly approach impressed me. They promote responsible tourism and support local communities.",
    },
  ];

  const detailedTestimonials = [
    {
      name: "Sunita Sharma, New Delhi",
      text: "Our trip to Andaman with Andaman Darshan was nothing short of spectacular. From the moment we landed, everything was meticulously planned and executed. The team ensured we experienced the best of what Andaman has to offer – from the pristine beaches of Havelock Island to the historical Cellular Jail. The accommodations were top-notch, and the guides were knowledgeable and friendly. This was our dream vacation come true, thanks to Andaman Darshan!",
    },
    {
      name: "Rajesh and Anjali Mehta, Mumbai",
      text: "Andaman Darshan exceeded our expectations in every way. We were celebrating our anniversary and wanted a memorable experience. The team personalized our itinerary to include romantic beach dinners and sunset cruises. The snorkeling trip was a highlight, with vibrant marine life and clear waters. Their attention to detail and customer service were impeccable. We felt cared for every step of the way. Highly recommended for anyone looking to explore the Andaman Islands!",
    },
    {
      name: "Akash Gupta, Bengaluru",
      text: "As a solo traveler, I was a bit apprehensive about exploring the Andaman Islands on my own. However, Andaman Darshan made my trip seamless and enjoyable. The team provided excellent support and ensured I felt safe and comfortable throughout my journey. The island-hopping tours were fantastic, and I made some great friends along the way. The local cuisine and cultural experiences were a delightful addition. I can't wait to visit again and will definitely choose Andaman Darshan!",
    },
    {
      name: "Priya and Rohit Sen, Kolkata",
      text: "Our family vacation with Andaman Darshan was unforgettable. Traveling with kids can be challenging, but the team made it so easy for us. They arranged kid-friendly activities and ensured we had all the amenities we needed. The visits to Ross Island and Radhanagar Beach were thoroughly enjoyed by all of us. The highlight was the glass-bottom boat ride, where our kids were thrilled to see the underwater world. Thank you, Andaman Darshan, for a wonderful family holiday!",
    },
    {
      name: "Dr. Neha Kapoor, Pune",
      text: "I chose Andaman Darshan for a much-needed getaway, and it was the best decision. The entire trip was well-organized, and the team was very professional. The eco-tourism aspect was commendable, and I appreciated the efforts to preserve the natural beauty of the islands. Scuba diving at Neil Island was a dream come true, and the serene beaches provided the perfect relaxation. The local insights provided by the guides made the experience even richer. I returned home rejuvenated and full of beautiful memories.",
    },
    {
      name: "Ramesh and Lata Desai, Ahmedabad",
      text: "We had always heard about the beauty of the Andaman Islands, and Andaman Darshan helped us experience it firsthand. The travel arrangements were smooth, and the team was always available to assist us. The visits to Baratang Island and the Limestone Caves were adventurous and well-organized. The beach resorts we stayed at were luxurious and offered stunning views. We were impressed with the level of service and the personal touch added to our trip. We highly recommend Andaman Darshan to anyone planning a visit to the Andamans.",
    },
  ];

  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleReadMore = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <>
    <Navbar/>
    <HeroAbout img={img} text="Testimonial"/>
    <div className="testimonial-container">
      {shortTestimonials.map((testimonial, index) => (
        <div key={index} className="testimonial">
          <FaUserCircle className="user-icon" />
          <div>
            <h3>{testimonial.name}</h3>
            <p>{testimonial.text}</p>
          </div>
        </div>
      ))}
      {detailedTestimonials.map((testimonial, index) => (
        <div key={index} className="testimonial">
          <FaUserCircle className="user-icon" />
          <div>
            <h3>{testimonial.name}</h3>
            <p>
              {expandedIndex === index ? testimonial.text : `${testimonial.text.substring(0, 100)}...`}
              <button className="read-more" onClick={() => toggleReadMore(index)}>
                {expandedIndex === index ? "Read Less" : "Read More"}
              </button>
            </p>
          </div>
        </div>
      ))}
      
    </div>
    <FooterNew/>
    </>
  );
}

export default TestimonialNew;
