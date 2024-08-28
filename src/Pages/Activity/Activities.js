import React from 'react';
import { useParams } from 'react-router-dom';
import image from '../../Assets/9.jpg';
import activity1 from '../../Assets/Activity1.jpg';
import activity2 from '../../Assets/activity2.jpg';
import activity3 from '../../Assets/activity3.jpg';
import activity4 from '../../Assets/activity4.jpg';
import activity5 from '../../Assets/activity5.jpg';
import seaKart from '../../Assets/Seakart1.jpg';
import seaWalk from '../../Assets/underwater1.jpg';
import FooterNew from '../Footer/FooterNew.js';
import HeroAbout from '../Hero/Hero';
import Navbar from '../Navbar/Navbar.jsx';
import Parasailing from "./parasailing.jpg";
import sofa from "./sofa.jpg";
import safari from "./safari.jpg";
import dolphin from "./dolphin.jpg";
import jet from "./jet.jpg";
import glass from "./glass.jpg";
import game from "./game.jpg";
import banana from "./banana.jpg";
import speed from "./speed.jpg";
import cinque from "./cinque.jpg";
import PB from "../Destinations/PBtapu.jpg";
import Havelock from "../Destinations/Havelock.jpg";
import Neil from "../Destinations/Neil.jpg";
import snorkeling from "./snorkeling.jpg";
import './Activities.css';

// Define your activities data array
const activitiesData = [
  {
    title: 'Scuba Diving',
    HeroImg: image,
    description: 'Discover an Underwater Paradise...',
    topSpots: [
      {
        location: 'Havelock Island',
        description: ': Renowned for its stunning dive sites like Elephant Beach, Barracuda City, and Seduction Point, Havelock Island offers rich marine biodiversity and excellent visibility',
        image:activity1
      },
      {
        location: 'Neil Island',
        description: 'Dive into the clear waters and explore its colorful coral gardens...',
        image: activity2
      },
      {
        location: 'North Bay Island',
        description: 'Perfect spot for beginners with shallow reefs teeming with vibrant fish...',
        image: activity3
      },
      {
        location: 'Cinque Island',
        description: 'Known for its clear waters and rich marine life, offers deep dive sites...',
        image: cinque
      }
    ],
    whatToExpect: [
      {
        expectation: 'Diverse Marine Life',
        description: 'Encounter a variety of marine species including vibrant corals, exotic fish...',
        image: 'url_to_diverse_marine_life_scuba_image'
      },
      {
        expectation: 'Professional Guidance',
        description: 'Certified dive instructors ensure a safe and enjoyable experience...',
        image: 'url_to_professional_guidance_scuba_image'
      },
      {
        expectation: 'State-of-the-Art Equipment',
        description: 'Dive with confidence using high-quality gear and equipment...',
        image: 'url_to_state_of_the_art_equipment_scuba_image'
      }
    ]
  },
  {
    title: 'Sea Walk',
    HeroImg: seaWalk,
    description: 'Experience the magic of underwater sea walking in the Andaman Islands, an activity that lets you explore the ocean floor without any diving experience. Stroll along the seabed and marvel at the vibrant coral reefs and diverse marine life surrounding you in this unforgettable adventure.',
    topSpots: [
        {
            location: 'North Bay Island',
            description: 'Known for its clear waters and rich marine ecosystem, North Bay Island offers a perfect environment for underwater sea walking. Witness the stunning coral gardens and colorful fish up close.',
            image: activity5
        },
        {
            location: 'Havelock Island',
            description: 'Explore the underwater wonders of Havelock Island at sites like Elephant Beach, where you can enjoy an up-close encounter with the vibrant marine life and pristine coral reefs.',
            image: activity4
        }
    ],
    whatToExpect: [
        {
            expectation: 'Unique Experience',
            description: 'Walk on the ocean floor and breathe freely with a specially designed helmet, allowing you to see and interact with the marine world in a natural setting.',
           
        },
        {
            expectation: 'Diverse Marine Life',
            description: 'Get up close with a variety of marine species including colorful corals, playful fish, and other fascinating sea creatures.',
           
        },
        {
            expectation: 'Safety and Comfort',
            description: 'Our experienced guides ensure a safe and enjoyable sea walking experience, providing comprehensive instructions and support throughout the activity.',
            
        },
        {
            expectation: 'No Swimming Skills Required',
            description: 'Perfect for non-swimmers and those with no prior diving experience, underwater sea walking is accessible to everyone.',
           
        }
    ]
},
{
  title: 'sea kart',
  HeroImg: seaKart,
  description: 'Experience the exhilarating adventure of sea karting in the Andaman Islands, where you can ride the waves and feel the wind in your hair. Sea karting offers a unique and thrilling way to explore the stunning coastal waters, combining the excitement of speed with the beauty of the Andaman Sea.',
  topSpots: [
    {
      location: 'Port Blair',
      image: PB,
      description: 'The capital city offers excellent sea karting opportunities with routes that provide breathtaking views of the coastline and nearby islands.'
    },
    {
      location: 'Havelock Island',
      image: Havelock,
      description: 'Enjoy the thrill of sea karting around the picturesque beaches of Havelock Island, with its crystal-clear waters and vibrant marine life.'
    }
  ],
  whatToExpect: [
    {
      expectation: 'Exciting Adventure',
      description: 'Drive your own sea kart and experience the rush of navigating the open waters at high speed. It\'s a perfect mix of adventure and sightseeing.'
    },
    {
      expectation: 'Safety First',
      description: 'Our professional instructors provide thorough safety briefings and guidance, ensuring a safe and enjoyable ride for all participants.'
    },
    {
      expectation: 'No Experience Needed',
      description: 'Sea karting is easy to learn and suitable for everyone, including beginners and families looking for a fun water activity.'
    },
    {
      expectation: 'Spectacular Scenery',
      description: 'Enjoy panoramic views of the Andaman coastline, pristine beaches, and vibrant marine life as you ride the waves.'
    }
  ]
},
{
  title: 'Parasailing',
  HeroImg: Parasailing,
  description: 'Embark on an exhilarating parasailing adventure in the Andaman Islands, where you can soar high above the azure waters and enjoy panoramic views of the stunning coastline. Parasailing offers a unique blend of adrenaline-pumping excitement and breathtaking scenery, making it a must-do activity for thrill-seekers and nature lovers alike.',
  topSpots: [
    {
      location: 'Port Blair',
      image: PB,
      description: 'Parasail over the scenic coastline of Port Blair, with views of historic landmarks and picturesque islands dotting the horizon.'
    },
    {
      location: 'Havelock Island',
      image: Havelock,
      description: 'Experience parasailing from the pristine beaches of Havelock Island, surrounded by crystal-clear waters and lush greenery.'
    }
  ],
  whatToExpect: [
    {
      expectation: 'Aerial Adventure',
      description: 'Enjoy the thrill of flying as you are lifted into the air by a parachute attached to a speedboat. Feel the rush of wind and the freedom of soaring above the ocean.'
    },
    {
      expectation: 'Spectacular Views',
      description: 'Marvel at panoramic views of the Andaman Sea, coral reefs, and sandy beaches from your vantage point high in the sky.'
    },
    {
      expectation: 'Safe and Guided Experience',
      description: 'Our experienced guides and operators ensure your safety throughout the parasailing adventure, providing expert instruction and assistance.'
    },
    {
      expectation: 'No Experience Required',
      description: 'Parasailing is suitable for all skill levels, including beginners. You\'ll receive a thorough briefing before takeoff to ensure a comfortable and enjoyable experience.'
    }
  ]
},
{
  title: 'Coral Safari',
  HeroImg: safari,
  description: 'Embark on an enchanting coral safari in the Andaman Islands, where you can explore the vibrant coral reefs and marine life without getting wet. Coral safari offers a unique and educational way to witness the underwater beauty of the Andaman Sea, making it an ideal activity for families, nature enthusiasts, and adventure seekers alike.',
  topSpots: [
    {
      location: 'North Bay Island',
      image: PB,
      description: 'Discover the colorful coral gardens and diverse marine life around North Bay Island, known for its clear waters and rich underwater biodiversity.'
    },
    {
      location: 'Havelock Island',
      image: Havelock,
      description: 'Explore the stunning coral reefs near Havelock Island, home to a variety of coral species and exotic fish.'
    }
  ],
  whatToExpect: [
    {
      expectation: 'Submersible Experience',
      description: 'Board a semi-submersible vessel with large viewing windows that offer panoramic views of the underwater world. See coral formations, tropical fish, and maybe even sea turtles from a comfortable and dry environment.'
    },
    {
      expectation: 'Educational Insights',
      description: 'Learn about the delicate ecosystem of coral reefs and marine conservation efforts from knowledgeable guides onboard.'
    },
    {
      expectation: 'Perfect for All Ages',
      description: 'Coral safari is suitable for everyone, including young children and non-swimmers, providing an accessible and enjoyable way to experience marine life up close.'
    }
  ]
},
{
  title: 'andaman dolphin',
  HeroImg: dolphin,
  description: 'Embark on an unforgettable dolphin watching experience in the pristine waters of the Andaman Islands, where you can witness these graceful creatures in their natural habitat. Dolphin watching offers a serene and awe-inspiring adventure, perfect for nature enthusiasts, families, and anyone seeking a peaceful encounter with marine life.',
  topSpots: [
    {
      location: 'Havelock Island',
      image: Havelock,
      description: 'Explore the waters around Havelock Island, known for its dolphin populations. Spot dolphins playing in the waves and jumping alongside your boat.'
    },
    {
      location: 'Neil Island',
      image: Neil,
      description: 'Enjoy dolphin watching near Neil Island, where you can observe these majestic creatures in their natural environment.'
    }
  ],
  whatToExpect: [
    {
      expectation: 'Up-Close Encounters',
      description: 'Cruise along the Andaman Sea on a specially equipped boat with experienced guides who know the best spots for dolphin sightings. Watch as dolphins swim gracefully near your boat, sometimes leaping out of the water in playful displays.'
    },
    {
      expectation: 'Educational Insights',
      description: 'Learn about dolphin behavior, habitat, and conservation efforts from knowledgeable guides onboard.'
    },
    {
      expectation: 'Photography Opportunities',
      description: 'Capture stunning photos and videos of dolphins in action, creating lasting memories of your Andaman Islands adventure.'
    }
  ]
},
{
  title: 'Snorkeling',
  HeroImg: snorkeling,
  description: 'Discover the vibrant underwater world of the Andaman Islands through snorkeling, an activity that allows you to explore coral reefs, colorful fish, and other marine life up close. Snorkeling is perfect for both beginners and experienced swimmers, offering a fun and immersive way to experience the beauty of the Andaman Sea.',
  topSpots: [
    {
      location: 'Elephant Beach, Havelock Island',
      image: PB,
      description: 'Known for its clear waters and rich marine life, Elephant Beach is a prime snorkeling spot where you can see a variety of corals and fish.'
    },
    {
      location: 'North Bay Island',
      image: Neil,
      description: 'Explore the underwater world around North Bay Island, where vibrant coral gardens and diverse marine species await.'
    }
  ],
  whatToExpect: [
    {
      expectation: 'Close-Up Marine Encounters',
      description: 'Swim alongside colorful fish, observe intricate coral formations, and maybe even spot a sea turtle or two. Snorkeling provides an intimate look at the marine ecosystem of the Andaman Sea.'
    },
    {
      expectation: 'Easy and Accessible',
      description: 'Snorkeling requires minimal equipment and training, making it an accessible activity for all ages and skill levels. Our guides provide basic instruction and safety tips to ensure a fun and safe experience.'
    },
    {
      expectation: 'Breathtaking Scenery',
      description: 'Enjoy the stunning underwater landscapes of the Andaman Sea, with its crystal-clear waters and abundant marine life. Snorkeling offers a unique perspective on the natural beauty of the islands.'
    }
  ]
},
{
  title: 'Jet Ski Ride',
  HeroImg: jet,
  description: 'Experience the adrenaline rush of jet skiing in the scenic waters of the Andaman Islands, where you can zoom across the waves and feel the wind in your hair. Jet skiing offers an exhilarating and memorable water adventure, perfect for thrill-seekers and water sports enthusiasts.',
  topSpots: [
    {
      location: 'Port Blair',
      image: PB,
      description: 'Enjoy jet skiing along the picturesque coastline of Port Blair, with views of historic landmarks and vibrant marine life.',
    
    },
    {
      location: 'Havelock Island',
      image: Havelock,
      description: 'Race across the azure waters surrounding Havelock Island, known for its pristine beaches and clear visibility.',
     
    }
  ],
  whatToExpect: [
    {
      expectation: 'High-Speed Thrills',
      description: 'Ride your own jet ski and feel the excitement as you navigate the open waters at thrilling speeds.'
    },
    {
      expectation: 'Scenic Views',
      description: 'Experience breathtaking views of the Andaman Sea and nearby islands as you cruise along the coastline.'
    },
    {
      expectation: 'Safety and Guidance',
      description: 'Our experienced instructors provide safety briefings and guidance, ensuring a safe and enjoyable ride for all participants.'
    },
    {
      expectation: 'Suitable for All Skill Levels',
      description: 'Whether you\'re a novice or an experienced rider, jet skiing in the Andaman Islands offers excitement and adventure for everyone.'
    }
  ]
},
{
  title: 'glassbottom boat ride',
  HeroImg: glass,
  description: 'Embark on a captivating glass bottom boat ride in the Andaman Islands, where you can witness the wonders of the ocean without getting wet. This unique experience allows you to peer through the glass bottom of the boat and observe colorful coral reefs, exotic fish, and other marine creatures in their natural habitat.',
  topSpots: [
    {
      location: 'North Bay Island',
      image: Neil,
      description: 'Cruise over the vibrant coral gardens and marine life around North Bay Island, known for its clear waters and diverse underwater ecosystem.',
    },
    {
      location: 'Havelock Island',
      image: Havelock,
      description: 'Explore the underwater beauty near Havelock Island, home to stunning coral formations and a variety of tropical fish species.'
    }
  ],
  whatToExpect: [
    {
      expectation: 'Panoramic Views',
      description: 'Enjoy 360-degree views of the underwater world through the glass bottom of the boat, providing a clear and mesmerizing perspective of marine life and coral reefs.'
    },
    {
      expectation: 'Educational Experience',
      description: 'Learn about the marine biodiversity and coral conservation efforts from knowledgeable guides onboard, enhancing your understanding of the delicate underwater ecosystem.'
    },
    {
      expectation: 'Comfort and Safety',
      description: 'Relax in a comfortable and stable boat environment, suitable for all ages and accessible to non-swimmers and families.'
    }
  ]
},
{
  title: 'Game Fishing',
  HeroImg: game,
  description: 'Embark on an exhilarating game fishing adventure in the Andaman Islands, where you can test your skills and reel in some of the most sought-after fish in the world. Game fishing offers a perfect blend of excitement and relaxation, making it an ideal activity for fishing enthusiasts and nature lovers alike.',
  topSpots: [
    {
      location: 'Havelock Island',
      image: Havelock,
      description: 'Known for its rich marine biodiversity, Havelock Island is a prime spot for game fishing, offering the chance to catch species like marlin, tuna, and giant trevally.',
      
    },
    {
      location: 'Neil Island',
      image: Neil,
      description: 'Enjoy game fishing in the clear, deep waters around Neil Island, home to a variety of large and exciting fish species.',
      
    },
    {
      location: 'Port Blair',
      image: PB,
      description: 'The waters surrounding the capital city provide excellent opportunities for game fishing, with experienced guides and well-equipped boats available for hire.',
      
    }
  ],
  whatToExpect: [
    {
      expectation: 'Exciting Catches',
      description: 'Target a range of species such as barracuda, sailfish, king mackerel, and snapper. Whether you\'re a seasoned angler or a beginner, the Andaman Islands offer thrilling fishing opportunities.'
    },
    {
      expectation: 'Expert Guidance',
      description: 'Benefit from the expertise of our experienced fishing guides, who provide tips, techniques, and support to enhance your fishing experience.'
    },
    {
      expectation: 'High-Quality Equipment',
      description: 'Use top-of-the-line fishing gear and well-maintained boats to ensure a successful and enjoyable fishing trip.'
    },
    {
      expectation: 'Stunning Scenery',
      description: 'Enjoy the breathtaking views of the Andaman Sea and its lush surroundings while waiting for your next big catch.'
    }
  ]
},
{
  title: 'Banana Ride',
  HeroImg: banana,
  description: 'Experience the exhilarating banana ride in the Andaman Islands, a fun-filled water activity that promises laughter and excitement for all ages. Hold on tight as you glide across the waves on an inflatable banana-shaped boat, pulled by a speedboat along the stunning coastline.',
  topSpots: [
    {
      location: 'Havelock Island',
      image: Havelock,
      description: 'Enjoy the thrill of banana riding along the picturesque beaches of Havelock Island, surrounded by clear waters and scenic views.',
      
    },
    {
      location: 'Port Blair',
      image: PB,
      description: 'Experience banana riding near Port Blair, offering a blend of adventure and scenic beauty along the capital city\'s coastline.',
      
    }
  ],
  whatToExpect: [
    {
      expectation: 'Thrilling Adventure',
      description: 'Hold on as the speedboat pulls the banana boat through the water, providing an exhilarating ride with twists, turns, and splashes.'
    },
    {
      expectation: 'Group Fun',
      description: 'Perfect for families and groups of friends, banana riding offers a shared experience of laughter and excitement on the water.'
    },
    {
      expectation: 'Safety First',
      description: 'Our experienced guides ensure a safe and enjoyable ride, providing safety instructions and ensuring everyone wears life jackets.'
    },
    {
      expectation: 'Scenic Views',
      description: 'Enjoy panoramic views of the Andaman Sea and coastline as you glide across the waves, creating memorable moments and photo opportunities.'
    }
  ]
},
{
  title: 'Sofa Ride',
  HeroImg: sofa,
  description: 'Embark on a thrilling sofa ride in the Andaman Islands, a unique water activity that combines speed and comfort for an exhilarating adventure on the waves. Hop aboard a specially designed inflatable sofa-shaped boat and enjoy a smooth and exciting ride pulled by a speedboat across the stunning coastal waters.',
  topSpots: [
    {
      location: 'Havelock Island',
      image: Havelock,
      description: 'Enjoy the smooth waters and scenic views of Havelock Island during your sofa ride adventure, perfect for families and groups seeking a fun-filled water activity.',
      
    },
    {
      location: 'Neil Island',
      image: Neil,
      description: 'Experience the excitement of sofa riding near Neil Island, where clear waters and serene surroundings enhance your adventure on the water.',
    
    }
  ],
  whatToExpect: [
    {
      expectation: 'Comfort and Stability',
      description: 'Relax and enjoy the ride on the stable and comfortable sofa boat, designed for a smooth glide over the waves.'
    },
    {
      expectation: 'Adventurous Thrills',
      description: 'Feel the rush of adrenaline as the speedboat pulls the sofa boat, providing twists, turns, and exhilarating speeds.'
    },
    {
      expectation: 'Safe and Guided Experience',
      description: 'Our experienced guides ensure your safety throughout the sofa ride adventure, providing instructions and ensuring everyone wears life jackets.'
    },
    {
      expectation: 'Group Fun',
      description: 'Ideal for families and groups of friends, sofa riding offers a shared experience of laughter and excitement on the water, creating lasting memories.'
    }
  ]
},
{
  title: 'Speed Boat Ride',
  HeroImg: speed,
  description: 'Embark on an exhilarating speed boat ride in the Andaman Islands, where you can experience the rush of cruising through the turquoise waters at high speeds. Speed boat rides offer an adrenaline-pumping adventure with scenic views of the islands\' coastline and crystal-clear waters.',
  topSpots: [
    {
      location: 'Port Blair',
      image: PB,
      description: 'Enjoy the thrill of speed boating along the scenic coastline of Port Blair, passing by historic landmarks and picturesque islands.',
      
    },
    {
      location: 'Havelock Island',
      image: Havelock,
      description: 'Race across the azure waters surrounding Havelock Island, known for its stunning beaches and vibrant marine life.',
     
    }
  ],
  whatToExpect: [
    {
      expectation: 'High-Speed Adventure',
      description: 'Feel the wind in your hair as you zoom across the waves on a powerful speed boat, offering an exciting and thrilling ride.'
    },
    {
      expectation: 'Spectacular Scenery',
      description: 'Experience panoramic views of the Andaman Sea and its surrounding islands as you navigate through the waters.'
    },
    {
      expectation: 'Safety and Comfort',
      description: 'Our experienced captains and crew ensure a safe and enjoyable ride, with adherence to strict safety protocols and use of high-quality safety equipment.'
    },
    {
      expectation: 'Customizable Tours',
      description: 'Choose from various speed boat tour options, including short rides for a quick adrenaline rush or longer tours exploring multiple islands and beaches.'
    }
  ]
},

  // Add more activities similarly
];

// Activities component to render each activity
const Activities = () => {
  // Get the activityId parameter from the URL
  const { activityId } = useParams();

  // Find the activity data based on activityId
  const activity = activitiesData.find(activity => activity.title.toLowerCase().replace(/\s/g, '-') === activityId);

  // If activity not found, you can handle it as per your application logic
  if (!activity) {
    return <div>Activity not found</div>;
  }

  return (
    <>
    <Navbar/>
    <HeroAbout img={activity.HeroImg} text={activity.title}/>
    <div className="Activities">
      <div className="Activity">
        <h2>{activity.title}</h2>
        <p>{activity.description}</p>
        
        <h3>Top Spots</h3>
        <ul style={{ display: "flex", flexWrap: "wrap", gap: "2rem" }}>
  {activity.topSpots.map((spot, i) => (
    <li
      key={i}
      style={{
        flex: "0 0 calc(50% - 2rem)", // Each li takes 50% width minus the gap
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        // marginBottom: "2rem",
      }}
    >
      <img
        src={spot.image}
        alt={spot.location}
        style={{
          width: "100%", // Set a fixed width
          height: "70%", // Set a fixed height
          objectFit: "cover", // Ensures the image covers the box while maintaining aspect ratio
          borderRadius: "10px",
        }}
      />
      <p style={{ width: "100%", textAlign: "center", marginTop: "1rem" }}>
        {spot.location}: {spot.description}
      </p>
    </li>
  ))}
</ul>

        
        <h3>What to Expect</h3>
        <ul>
          {activity.whatToExpect.map((expectation, i) => (
            <li key={i}>
            
              {expectation.expectation}: {expectation.description}
            </li>
          ))}
        </ul>
      </div>
    </div>
    <FooterNew/>
    </>
  );
};

export default Activities;
