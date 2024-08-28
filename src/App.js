import { Route, Routes } from "react-router-dom";
import './App.css';
import About from './Pages/About/About';
import Activities from "./Pages/Activity/Activities";
import AddBlog from './Pages/AddBlog/AddBlog';
import Agreement from "./Pages/Agreement/Agreement";
import Blog from './Pages/Blog/Blog';
import BookingForm from "./Pages/Bookings/BookingForm";
import Call from './Pages/Call/Call';
import DestinationPage from "./Pages/Destinations/DestinationPage";
import FerryDetails from "./Pages/Ferry/Ferry";
import Home from './Pages/Home/Home';
import Member from './Pages/Member/Member';
import DayNight from "./Pages/Package/DayNight";
import Package from "./Pages/Package/Package";
import Payment from "./Pages/Payment/Payment";
import { default as Privacy, default as PrivacyPolicy } from './Pages/privacyPolicy/Privacy';

import TestimonialNew from "./Pages/Testimonial/TestimonialNew";
import WorkPlaces from './Pages/WorkPlaces/WorkPlaces';
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Call />
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/workplaces" element={<WorkPlaces />}/>
            <Route path="/blog" element={<Blog />}/>
            <Route path="/AddBlog" element={<AddBlog />}/>
            <Route path="/8176b96f25d06067bec0d88d69e2aa721fe92bf61b17b459eb17beae11aca1b3" element={<Member/>}/>
            <Route path='/t&c' element={<Privacy />} />
            <Route path='/About' element={<About />} />
           
            <Route path='/destination/:placeId' element={<DestinationPage />} /> {/* Dynamic route */}
            <Route path='/contact' element={<BookingForm />} />
            <Route path="/packages/:packageId" element={<Package/>} />
            <Route path="/packages/:packageId/:dayNightId" element={<DayNight/>} />
            <Route path='/payment' element={<Payment/>}/>
            <Route path="/ferries/:ferryId" element={<FerryDetails/>} />
            <Route path="/activities/:activityId" element={<Activities/>} />
            <Route path="/privacy-policy" element={<PrivacyPolicy/>} />
            <Route path="/agreement" element={<Agreement/>} />
            <Route path="/testimonial" element={<TestimonialNew/>} />
        </Routes>
      </header>
    </div>
  );
}

export default App;