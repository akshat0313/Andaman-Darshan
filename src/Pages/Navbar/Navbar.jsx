import React, { useState } from 'react';
import { BsFillHddStackFill } from "react-icons/bs";
import { NavLink } from 'react-router-dom';
import logo from '../../Assets/logo.jpg';
import './navbar.css';

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [showDropdown, setShowDropdown] = useState({ packages: false, ferries: false, destination: false,activity:false });

  const handleToggleNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  const handleMouseEnter = (menu) => {
    if (window.innerWidth > 768) {
      setShowDropdown({ ...showDropdown, [menu]: true });
    }
  };

  const handleMouseLeave = (menu) => {
    if (window.innerWidth > 768) {
      setShowDropdown({ ...showDropdown, [menu]: false });
    }
  };

  const handleTouchToggle = (menu,event) => {
   
    if (window.innerWidth <= 768) {
      setShowDropdown({ ...showDropdown,  packages: false,ferries:false,destination:false, [menu]: !showDropdown[menu] });
    }
  };

  return (
    <div className='nav-sticky'>
      <nav className="Navbar">
        <div className="Container">
          <div className="logo">
            <NavLink exact to="/">
              <img className='logo-img' src={logo} alt="Logo" />
            </NavLink>
            <div className="Nav-Name">Andman Darshan</div>          
          </div>
          <div className="menu-icon" onClick={handleToggleNavbar}>
            <BsFillHddStackFill />
          </div>
          <div className={`nav-elements ${showNavbar ? 'active' : ''}`}>
            <ul>
              <li className='hov'>
                <NavLink exact to="/" onClick={handleToggleNavbar}>Home</NavLink>
              </li>
              <li className='hov'>
                <NavLink to="/about" onClick={handleToggleNavbar}>About</NavLink>
              </li>
              <li 
                className={`hov ${showDropdown.destination ? 'active' : ''}`} 
                onMouseEnter={() => handleMouseEnter('destination')} 
                onMouseLeave={() => handleMouseLeave('destination')}
                
              >
                <p onTouchEnd={() => handleTouchToggle('destination')}>Destination</p>
                {showDropdown.destination && (
                <ul className='dropdownNav'>
                <li><NavLink to="/destination/place1" onClick={handleToggleNavbar}>Port Blair</NavLink></li>
                <li><NavLink to="/destination/place2" onClick={handleToggleNavbar}>Havelock Island</NavLink></li>
                <li><NavLink to="/destination/place3" onClick={handleToggleNavbar}>Neil Island</NavLink></li>
                <li><NavLink to="/destination/place4" onClick={handleToggleNavbar}>Baratang Island</NavLink></li>
                <li><NavLink to="/destination/place5" onClick={handleToggleNavbar}>Rangat</NavLink></li>
                <li><NavLink to="/destination/place6" onClick={handleToggleNavbar}>Mayabunder</NavLink></li>
                <li><NavLink to="/destination/place7" onClick={handleToggleNavbar}>Diglipur</NavLink></li>
            </ul>
            
                )}
              </li>
              {/* Activities Dropdown */}
        <li
          className={`hov ${showDropdown.activity ? 'active' : ''}`}
          onMouseEnter={() => handleMouseEnter('activity')}
          onMouseLeave={() => handleMouseLeave('activity')}
        >
          <p onTouchEnd={() => handleTouchToggle('activity')}>Activities</p>
          {showDropdown.activity && (
            <ul className="dropdownNav">
              <li><NavLink to="/activities/scuba-diving" onClick={handleToggleNavbar}>Scuba Diving</NavLink></li>
              <li><NavLink to="/activities/sea-walk" onClick={handleToggleNavbar}>Underwater Sea Walk</NavLink></li>
              <li><NavLink to="/activities/sea-kart" onClick={handleToggleNavbar}>Sea Kart</NavLink></li>
              <li><NavLink to="/activities/parasailing" onClick={handleToggleNavbar}>Parasailing</NavLink></li>
              <li><NavLink to="/activities/coral-safari" onClick={handleToggleNavbar}>Coral Safari</NavLink></li>
              <li><NavLink to="/activities/andaman-dolphin" onClick={handleToggleNavbar}>Andaman Dolphin</NavLink></li>
              <li><NavLink to="/activities/snorkeling" onClick={handleToggleNavbar}>Snorkeling</NavLink></li>
              <li><NavLink to="/activities/jet-ski-ride" onClick={handleToggleNavbar}>Jet Ski Ride</NavLink></li>
              <li><NavLink to="/activities/glassbottom-boat-ride" onClick={handleToggleNavbar}>Glassbottom Boat Ride</NavLink></li>
              <li><NavLink to="/activities/game-fishing" onClick={handleToggleNavbar}>Game Fishing</NavLink></li>
              <li><NavLink to="/activities/banana-ride" onClick={handleToggleNavbar}>Banana Ride</NavLink></li>
              <li><NavLink to="/activities/sofa-ride" onClick={handleToggleNavbar}>Sofa Ride</NavLink></li>
              <li><NavLink to="/activities/speed-boat-ride" onClick={handleToggleNavbar}>Speed Boat Ride</NavLink></li>
              {/* Add more activities as needed */}
            </ul>
          )}
        </li>
              <li 
                className={`hov ${showDropdown.packages ? 'active' : ''}`} 
                onMouseEnter={() => handleMouseEnter('packages')} 
                onMouseLeave={() => handleMouseLeave('packages')}
               
              >
                <p  onTouchEnd={() => handleTouchToggle('packages')}>Packages</p>
                {showDropdown.packages && (
                  <ul className='dropdownNav'>
                    <li><NavLink to="/packages/package1" onClick={handleToggleNavbar}>Family package</NavLink></li>
                    <li><NavLink to="/packages/package2" onClick={handleToggleNavbar}>HoneyMoon Package</NavLink></li>
                    <li><NavLink to="/packages/package3" onClick={handleToggleNavbar}>Group Package</NavLink></li>
                  </ul>
                )}
              </li>
              <li 
                className={`hov ${showDropdown.ferries ? 'active' : ''}`} 
                onMouseEnter={() => handleMouseEnter('ferries')} 
                onMouseLeave={() => handleMouseLeave('ferries')}
                
              >
                <p onTouchEnd={() => handleTouchToggle('ferries')}>Ferries</p>
                {showDropdown.ferries && (
                  <ul className='dropdownNav'>
                    <li><NavLink to="/ferries/nautika" onClick={handleToggleNavbar}>Nautika</NavLink></li>
                    <li><NavLink to="/ferries/mv-makruzz" onClick={handleToggleNavbar}>M V Makruzz</NavLink></li>
                    <li><NavLink to="/ferries/makruzz-gold" onClick={handleToggleNavbar}>Makruzz Gold</NavLink></li>
                    <li><NavLink to="/ferries/itt-majestic" onClick={handleToggleNavbar}>ITT Majestic</NavLink></li>
                    <li><NavLink to="/ferries/green-ocean-1" onClick={handleToggleNavbar}>Green Ocean 1</NavLink></li>
                    <li><NavLink to="/ferries/green-ocean-2" onClick={handleToggleNavbar}>Green Ocean 2</NavLink></li>
                    <li><NavLink to="/ferries/government-ferries" onClick={handleToggleNavbar}>Government Ferries</NavLink></li>
                  </ul>
                )}
              </li>
              <li className='hov'>
                <NavLink to="/testimonial" onClick={handleToggleNavbar}>Testimonial</NavLink>
              </li>
              <li className='hov'>
                <NavLink to="/contact" onClick={handleToggleNavbar}>Contact</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
