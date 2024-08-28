import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import HeroAbout from '../Hero/Hero';
import Navbar from '../Navbar/Navbar';
import './DayNight.css'; // Import the CSS file

const dayNightDetails = {
  'package1-4N5D': {
    title: "Family Package - 4 Nights 5 Days",
    days: [
      {
        id: 'day1',
        title: 'Day 1',
        description: 'Day 1 details...',
        additionalDetails: 'Additional details for Day 1...',
      },
      {
        id: 'day2',
        title: 'Day 2',
        description: 'Day 2 details...',
        additionalDetails: 'Additional details for Day 2...',
      },
    ],
  },
  'package1-5N6D': {
    title: "Family Package - 5 Nights 6 Days",
    days: [
      {
        id: 'day1',
        title: 'Day 1',
        description: 'Day 1 details...',
        additionalDetails: 'Additional details for Day 1...',
      },
      {
        id: 'day2',
        title: 'Day 2',
        description: 'Day 2 details...',
        additionalDetails: 'Additional details for Day 2...',
      },
    ],
  },
  'package2-3N4D': {
    title: "Honeymoon Package - 3 Nights 4 Days",
    days: [
      {
        id: 'day1',
        title: 'Day 1',
        description: 'Day 1 details...',
        additionalDetails: 'Additional details for Day 1...',
      },
      {
        id: 'day2',
        title: 'Day 2',
        description: 'Day 2 details...',
        additionalDetails: 'Additional details for Day 2...',
      },
    ],
  },
  // Add other package day/night details here
};

const DayNight = () => {
    const [openDay, setOpenDay] = useState(null);
  const { packageId, dayNightId } = useParams();
  const detailKey = `${packageId}-${dayNightId}`;
  const details = dayNightDetails[detailKey];

  if (!details) {
    return <h2>Details not found</h2>;
  }

 

  const toggleDetails = (dayId) => {
    if (openDay === dayId) {
      setOpenDay(null); // Collapse if already expanded
    } else {
      setOpenDay(dayId); // Expand if not already expanded
    }
  };

  return (
    <>
      <Navbar />
      <HeroAbout img={"https://res.cloudinary.com/demo/image/upload/sample.jpg"} text={dayNightId}/>
      <div className="daynight-container">
        <h1 className="daynight-title">{details.title}</h1>
        <ul className="days-list">
          {details.days.map((day) => (
            <li key={day.id} className={`day-item ${openDay === day.id ? 'open' : ''}`}>
              <div className="day-header" onClick={() => toggleDetails(day.id)}>
                <h2>{day.title}</h2>
                <p>{day.description}</p>
              </div>
              <div className="additional-details">
                <p>{day.additionalDetails}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default DayNight;
