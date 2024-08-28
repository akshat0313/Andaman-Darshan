import React from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Autoplay, Keyboard, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import './PackageHome.css';

// Import images for each package if needed
import FamilyPackageImage from '../../Assets/11.jpg';
import GroupPackageImage from '../../Assets/2.jpg';
import HoneymoonPackageImage from '../../Assets/7.jpg';

const PackageHome = () => {
  return (
    <div className="package-home">
      <h2 style={{fontSize:"2.3rem",marginBottom:"20px"}}>Explore Our Packages</h2>
      <Swiper
        modules={[Navigation, Pagination, Autoplay, Keyboard]}
        spaceBetween={30}
        slidesPerView={1} // Default to 1 slide per view for mobile
        navigation
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        breakpoints={{
          500: { // Adjust for larger screens (768px and above)
            slidesPerView: 2,
            spaceBetween: 30,
          },
        }}
        keyboard={{ enabled: true }}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="package-item">
            <img src={FamilyPackageImage} alt="Family Package" />
            <h3>Family Package</h3>
            <p>Description of the Family Package goes here...</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="package-item">
            <img src={HoneymoonPackageImage} alt="Honeymoon Package" />
            <h3>Honeymoon Package</h3>
            <p>Description of the Honeymoon Package goes here...</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="package-item">
            <img src={GroupPackageImage} alt="Group Package" />
            <h3>Group Package</h3>
            <p>Description of the Group Package goes here...</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default PackageHome;
