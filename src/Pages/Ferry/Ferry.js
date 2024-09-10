import React from 'react';
import { useParams } from 'react-router-dom';
import first from '../../Assets/5.jpg';
import scnd from '../../Assets/6.jpg';
import third from '../../Assets/7.jpg';
import fourth from '../../Assets/8.jpg';
import fifth from '../../Assets/9.jpg';
import FooterNew from '../Footer/FooterNew';
import HeroAbout from '../Hero/Hero';
import Navbar from '../Navbar/Navbar';
import nautika from './nautika.jpg';
import go1 from './go1.jpg';
import go2 from './go2.jpg';
import gold from './gold.jpg';
import gov from './gov.jpg';
import majestic from './majestic.jpg';
import makruzz from './makruzz.jpg';
import './Ferry.css';
const ferryData = {
  nautika: {
    name: "Nautika",
    description: "Nautika is a high-speed ferry offering comfortable travel.",
    Heroimg: first,
    image: nautika,
    timings: [
      { from: "Port Blair", to: "Havelock", departure: "07:30 AM", arrival: "09:00 PM" },
      { from: "Havelock", to: "Neil Island", departure: "09:30 PM", arrival: "10:15 PM" },
      { from: "Neil Island", to: "Port Blair", departure: "10:45 AM", arrival: "12:00 PM" },
      { from: "Port Blair", to: "Havelock", departure: "12:45 AM", arrival: "02:15 PM" },
      { from: "Havelock", to: "Neil Island", departure: "03:15 PM", arrival: "04:00 PM" },
      { from: "Neil Island", to: "Port Blair", departure: "04:15 AM", arrival: "05:30 PM" },
    ],
  },
  'green-ocean-1': {
    name: "Green Ocean 1",
    description: "Green Ocean is the largest and the oNeil Islandy all weather private ferry operating between Port Blair and Havelock Island. This mighty vessel offers the most comfortable and enjoyable onboard experience. With unrestricted space onboard the guest enjoy the scenic beauty of the islands as it unfolds on the voyage to Havelock Island. Onboard the ship, guest can stroll to its unique open deck cafeteria with best music and dance arena to relax and unwind in open air.",
    Heroimg: first,
    image: go2,
    timings: [
      { from: "Port Blair", to: "Havelock", departure: "06:30 AM", arrival: "08:35 PM" },
      { from: "Havelock", to: "Neil Island", departure: "09:15 PM", arrival: "10:30 PM" },
      { from: "Neil Island", to: "Port Blair", departure: "11:00 AM", arrival: "12:45 PM" },
      { from: "Port Blair", to: "Havelock", departure: "13:30 AM", arrival: "15:30 PM" },
      { from: "Havelock", to: "Port Blair", departure: "15:45 PM", arrival: "18:00 PM" },
    ],
    fares: [
      { route: "Port Blair to Havelock Island", details: [
        { class: "Executive", fare: 900 },
        { class: "Luxury", fare: 1000 },
        { class: "Royal", fare: 1250 },
      ]},
      { route: "Havelock Island to Port Blair", details: [
        { class: "Executive", fare: 900 },
        { class: "Luxury", fare: 1000 },
        { class: "Royal", fare: 1250 },
      ]},
    ]
  },
  'makruzz': {
    name: "Makruzz",
    description: "M.V. Makruzz is a Private high-speed Catamaran Passenger Ferry. Catamaran is a twin hull vessel and the advantage is that it offers high speed, better stability and more space. The craft is owned by MAK LOGISTICS Pvt. Ltd. The vessel has 2 decks with passenger capacity of 280. It presents three classes for its guests with 208 seats in Premium, 64 seats in Deluxe and 8 seats in Royal. For the comfort of the passengers, the vessel is fully air-conditioned.",
    Heroimg: scnd,
    image: makruzz,
    timings: [
      { from: "Port Blair", to: "Havelock", departure: "06:00/08:00/08:30/11:30/14:00" },
      { from: "Havelock", to: "Neil Island", departure: "10:00/10:30/14:00" },
      { from: "Neil Island", to: "Port Blair", departure: "11:20/12:00/16:00" },
      { from: "Havelock", to: "Port Blair", departure: "08:00/12:00/16:00" },
      { from: "Port Blair", to: "Neil Island", departure: "09:00" },
      { from: "Neil Island", to: "Havelock", departure: "10:30" },
    ],
    fares: [
      { route: "Port Blair to Havelock Island", details: [
        { class: "Premium", fare: 1000 },
        { class: "Premium +", fare: 1200 },
        { class: "Deluxe", fare: 1300 },
        { class: "Royal", fare: 2000 },
        { class: "Infant (2 yrs. and below)", fare: 105 },
      ]},
      { route: "Havelock Island to Port Blair", details: [
        { class: "Premium", fare: 1000 },
        { class: "Premium +", fare: 1200 },
        { class: "Deluxe", fare: 1300 },
        { class: "Royal", fare: 2000 },
        { class: "Infant (2 yrs. and below)", fare: 105 },
      ]},
      { route: "Havelock Island to Neil Island", details: [
        { class: "Premium", fare: 800 },
        { class: "Premium +", fare: 900 },
        { class: "Deluxe", fare: 1100 },
        { class: "Royal", fare: 1600 },
        { class: "Infant (2 yrs. and below)", fare: 105 },
      ]},
      { route: "Neil Island to Port Blair", details: [
        { class: "Premium", fare: 900 },
        { class: "Premium +", fare: 1000 },
        { class: "Deluxe", fare: 1200 },
        { class: "Royal", fare: 1700 },
        { class: "Infant (2 yrs. and below)", fare: 105 },
      ]},
    ]
  },
  // 'makruzz-gold': {
  //   name: "Makruzz Gold",
  //   description: "Makruzz Gold is a Private high-speed Catamaran Passenger Ferry. Catamaran is a twin hull vessel and the advantage is that it offers high speed, better stability and more space. The craft is owned by MAK LOGISTICS Pvt. Ltd. The state-of-the-art craft services between Port Blair and Havelock Island.",
  //   Heroimg: third,
  //   image: gold,
  //   timings: [
  //     { from: "Port Blair", to: "Havelock Island", departure: "08:45 AM", arrival: "10:30 AM", duration: "01 Hour 45 Minutes" },
  //     { from: "Havelock Island", to: "Port Blair", departure: "11:30 AM", arrival: "01:15 PM", duration: "01 Hour 45 Minutes" },
  //   ],
  //   fares: [
  //     { route: "Port Blair to Havelock Island", details: [
  //       { class: "Premium", fare: 1000 },
  //       { class: "Premium +", fare: 1100 },
  //       { class: "Deluxe", fare: 1300 },
  //       { class: "Royal", fare: 2000 },
  //       { class: "Infant (2 yrs. and below)", fare: 105 },
  //     ]},
  //     { route: "Havelock Island to Port Blair", details: [
  //       { class: "Premium", fare: 1000 },
  //       { class: "Premium +", fare: 1100 },
  //       { class: "Deluxe", fare: 1300 },
  //       { class: "Royal", fare: 2000 },
  //       { class: "Infant (2 yrs. and below)", fare: 105 },
  //     ]},
  //   ]
  // },
  // 'itt-majestic': {
  //   name: "ITT Majestic",
  //   description: "ITT Majestic has launched just recently in 2019. This cruise is fast and offers a rich experience to travelers going from one island to the other. ITT Majestic operates from Port Blair to Havelock Island. This cruise does not allow you to come to the deck and see the sea. The cruise is 33 meters long and has 200 seating.",
  //   Heroimg: fourth,
  //   image: majestic,
  //   timings: [
  //     { from: "Havelock (Swaraj Dweep)", to: "Port Blair", departure: "10:15 AM", arrival: "12:30 PM", duration: "2 Hours 15 Minutes" },
  //     { from: "Havelock (Swaraj Dweep)", to: "Port Blair", departure: "02:45 PM", arrival: "04:00 PM", duration: "1 Hour 15 Minutes" },
  //     { from: "Havelock", to: "Neil Island (Shaheed Dweep)", departure: "10:15 AM", arrival: "11:15 AM", duration: "1 Hour" },
  //     { from: "Port Blair", to: "Havelock Island (Swaraj Dweep)", departure: "08:30 AM", arrival: "09:45 AM", duration: "1 Hour 15 Minutes" },
  //   ],
  //   fares: [
  //     { route: "Havelock (Swaraj Dweep) to Port Blair", details: [
  //       { class: "Silver", adultCost: 1564.00, childCost: 105.00 },
  //       { class: "Majesty", adultCost: 1800.00, childCost: 105.00 },
  //     ]},
  //     { route: "Havelock (Swaraj Dweep) to Port Blair", details: [
  //       { class: "Silver", adultCost: 1564.00, childCost: 105.00 },
  //       { class: "Majesty", adultCost: 1800.00, childCost: 105.00 },
  //     ]},
  //     { route: "Havelock to Neil Island (Shaheed Dweep)", details: [
  //       { class: "Silver", adultCost: 1328.00, childCost: 105.00 },
  //       { class: "Majesty", adultCost: 1564.00, childCost: 105.00 },
  //     ]},
  //     { route: "Port Blair to Havelock Island (Swaraj Dweep)", details: [
  //       { class: "Silver", adultCost: 1564.00, childCost: 105.00 },
  //       { class: "Majesty", adultCost: 1799.00, childCost: 105.00 },
  //     ]},
  //   ]
  // },
  'green-ocean-2': {
    name: "Green Ocean 2",
    description: "Green Ocean is the largest and the oNeil Islandy all weather private ferry operating between Port Blair and Havelock Island. This mighty vessel offers the most comfortable and enjoyable onboard experience. With unrestricted space onboard the guest enjoy the scenic beauty of the islands as it unfolds on the voyage to Havelock Island. Onboard the ship, guest can stroll to its unique open deck cafeteria with best music and dance arena to relax and unwind in open air.",
    Heroimg: fifth,
    image: go1,
    timings: [
      { from: "Port Blair", to: "Havelock", departure: "07:00 AM", arrival: "09:00 PM" },
      { from: "Havelock", to: "Port Blair", departure: "09:30 PM", arrival: "11:30 PM" },
      { from: "Port Blair", to: "Havelock", departure: "11:45 AM", arrival: "13:45 PM" },
      { from: "Havelock", to: "Neil Island", departure: "14:15 AM", arrival: "15:30 PM" },
      { from: "Neil Island", to: "Port Blair", departure: "15:45 PM", arrival: "18:00 PM" },
    ],
    fares: [
      { route: "Port Blair to Havelock Island", details: [
        { class: "Executive", fare: 900 },
        { class: "Luxury", fare: 1000 },
        { class: "Royal", fare: 1250 },
      ]},
      { route: "Havelock Island to Port Blair", details: [
        { class: "Executive", fare: 900 },
        { class: "Luxury", fare: 1000 },
        { class: "Royal", fare: 1250 },
      ]},
    ]
  },
  // 'government-ferries': {
  //   name: "Government Ferries",
  //   description: "Government Ferries in Andaman Islands is the lifeline of the people living around Port Blair. The Directorate of Shipping Services, A & N Administration operates regular ferry services in the inter-island sectors connecting all populated islands and tourist places. These ferries cater to thousands of passengers (Islands & Tourists) daily to the remotest of Islands and hot tourist destinations. Though the seating in govt. ferries is not as good as private cruises, however, the view from the deck is just amazing. You may get the chance to go to the captain's deck. Govt. ferries have been the most punctual when it comes to timing and services.",
  //   Heroimg: scnd,
  //   image: gov,
  //   timings: [
  //     { from: "Port Blair", to: "Havelock Island", departure: "06:15 AM", arrival: "09:35 AM", duration: "03 Hours 20 Minutes", operates: "Monday, Wednesday, Saturday" },
  //     { from: "Port Blair", to: "Havelock Island", departure: "06:20 AM", arrival: "08:30 AM", duration: "02 Hours 10 Minutes", operates: "Daily" },
  //     { from: "Port Blair", to: "Havelock Island", departure: "11:00 AM", arrival: "02:20 PM", duration: "03 Hours 20 Minutes", operates: "Daily" },
  //     { from: "Port Blair", to: "Havelock Island", departure: "02:00 PM", arrival: "04:10 PM", duration: "02 Hours 10 Minutes", operates: "Daily" },

  //     { from: "Havelock Island", to: "Port Blair", departure: "09:00 AM", arrival: "11:20 AM", duration: "02 Hours 20 Minutes", operates: "Daily" },
  //     { from: "Havelock Island", to: "Port Blair", departure: "09:30 AM", arrival: "01:00 PM", duration: "03 Hours 30 Minutes", operates: "Tuesday, Thursday, Sunday" },
  //     { from: "Havelock Island", to: "Port Blair", departure: "02:45 PM", arrival: "06:00 PM", duration: "03 Hours 15 Minutes", operates: "Daily" },
  //     { from: "Havelock Island", to: "Port Blair", departure: "04:00 PM", arrival: "06:15 PM", duration: "02 Hours 15 Minutes", operates: "Friday" },
  //     { from: "Havelock Island", to: "Port Blair", departure: "04:30 PM", arrival: "06:45 PM", duration: "02 Hours 15 Minutes", operates: "Daily" },

  //     { from: "Port Blair", to: "Neil Island", departure: "06:15 AM", arrival: "08:15 AM", duration: "02 Hours", operates: "Monday, Wednesday, Saturday" },
  //     { from: "Port Blair", to: "Neil Island", departure: "06:30 AM", arrival: "08:30 AM", duration: "02 Hours", operates: "Daily" },
  //     { from: "Port Blair", to: "Neil Island", departure: "11:00 AM", arrival: "01:00 PM", duration: "02 Hours", operates: "Daily" },

  //     { from: "Neil Island", to: "Port Blair", departure: "08:45 AM", arrival: "10:45 AM", duration: "02 Hours", operates: "Daily" },
  //     { from: "Neil Island", to: "Port Blair", departure: "11:00 AM", arrival: "01:00 PM", duration: "02 Hours", operates: "Tuesday, Thursday, Sunday" },
  //     { from: "Neil Island", to: "Port Blair", departure: "04:00 PM", arrival: "06:15 PM", duration: "02 Hours 15 Minutes", operates: "Daily" },

  //     { from: "Havelock Island", to: "Neil Island", departure: "02:45 PM", arrival: "", duration: "", operates: "" },

  //     { from: "Neil Island", to: "Havelock Island", departure: "01:00 PM", arrival: "", duration: "", operates: "" },

  //     { from: "Rangat", to: "Havelock Island", departure: "01:00 PM", arrival: "", duration: "", operates: "(via Long Island)" },
  //     { from: "Rangat", to: "Havelock Island", departure: "06:15 AM", arrival: "", duration: "", operates: "(via Long Island, Strait Island/Kadamtala)" },

  //     { from: "Rangat", to: "Neil Island", departure: "06:15 AM", arrival: "", duration: "", operates: "(via Long Island, Strait Island/Kadamtala, Havelock Island)" }
  //   ],
  // },
};

const FerryDetails = () => {
  const { ferryId } = useParams();
  const ferry = ferryData[ferryId];

  if (!ferry) {
    return <div>Ferry not found</div>;
  }

  return (
    <>
      <Navbar />
      <HeroAbout text={ferry.name} img={ferry.Heroimg || 'default-hero-image-url'} />
      <div className="ferry-details">
        <h1>{ferry.name}</h1>
        {ferry.name !== 'Nautika' && <img src={ferry.image || 'default-image-url'} alt={ferry.name} />}
        <p>{ferry.description}</p>
        {ferry.img && <img src={ferry.image || 'default-image-url'} alt={ferry.name} />}
        <h2>Timings</h2>
        <table className="ferry-timetable">
          <thead>
            <tr>
              <th>From</th>
              <th>To</th>
              <th>Departure</th>
              {ferry.name !== 'Makruzz' && <th>Arrival</th>}
              {/* <th>Duration</th> */}
            </tr>
          </thead>
          <tbody>
            {ferry.timings.map((time, index) => (
              <tr key={index}>
                <td>{time.from}</td>
                <td>{time.to || 'N/A'}</td>
                <td>{time.departure}</td>
                {ferry.name !== 'Makruzz' &&<td>{time.arrival || 'N/A'}</td>}
                {/* <td>{time.duration || 'N/A'}</td> */}
              </tr>
            ))}
          </tbody>
        </table>

        {/* {ferry.fares && (
          <>
            <h2>Fare Details</h2>
            {ferry.fares.map((fare, index) => (
              <div key={index}>
                <h3 className='Route'>{fare.route}</h3>
                <table className="ferry-fares">
                  <thead>
                    <tr>
                      <th>Class</th>
                      <th>Fare (in Rs.)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {fare.details.map((detail, idx) => (
                      <tr key={idx}>
                        <td>{detail.class}</td>
                        <td>{detail.fare}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}
          </>
        )} */}
      </div>
      <FooterNew />
    </>
  );
};

export default FerryDetails;
