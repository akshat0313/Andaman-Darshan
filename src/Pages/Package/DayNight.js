import React from 'react';
import { useParams } from 'react-router-dom';
import HeroAbout from '../Hero/Hero';
import Navbar from '../Navbar/Navbar';
import './DayNight.css'; // Import the CSS file

const pdfDetails = {
  'package1-4N5D': {
    title: "Family Package - 4 Nights 5 Days",
    pdfUrl: '/documents/package1-4N5D.pdf', // Local path from public folder
  },
  'package3-4N5D': {
    title: "Group Package - 4 Nights 5 Days",
    pdfUrl: '/documents/package1-4N5D.pdf', // Local path from public folder
  },
  'package2-4N5D': {
    title: "Honeymoon Package - 4 Nights 5 Days",
    pdfUrl: '/documents/package1-4N5D.pdf', // Local path from public folder
  },
  'package1-5N6D': {
    title: "Family Package - 5 Nights 6 Days",
    pdfUrl: '/documents/package1-5N6D.pdf', // Local path from public folder
  },
  'package1-6N7D': {
    title: "Family Package - 6 Nights 7 Days",
    pdfUrl: '/documents/package2-6N7D.pdf', // Local path from public folder
  },
  'package1-7N8D': {
    title: "Family Package - 7 Nights 8 Days",
    pdfUrl: '/documents/package2-7N8D.pdf', // Local path from public folder
  },
  // Add other package PDF details here
};

const DayNight = () => {
  const { packageId, dayNightId } = useParams();
  const detailKey = `${packageId}-${dayNightId}`;
  const details = pdfDetails[detailKey];

  if (!details) {
    return <h2>Details not found</h2>;
  }

  return (
    <>
      <Navbar />
      <HeroAbout img={"https://res.cloudinary.com/demo/image/upload/sample.jpg"} text={dayNightId} />
      <div className="daynight-container">
        <h1 className="daynight-title">{details.title}</h1>
        <div className="pdf-container">
          {/* Embedded PDF Viewer */}
          <iframe
            src={details.pdfUrl}
            className="pdf-viewer"
            title="PDF Viewer"
            width="100%"
            height="600px"
          ></iframe>
          
          {/* Download Button */}
          <a href={details.pdfUrl} download className="download-button">
            Download PDF
          </a>
        </div>
      </div>
    </>
  );
};

export default DayNight;
