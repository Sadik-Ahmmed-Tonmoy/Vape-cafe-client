// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

import swiperImage1 from "../../../assets/SwiperHomePhotos/img-1.jpg";
import swiperImage2 from "../../../assets/SwiperHomePhotos/img-2.jpg";
import swiperImage3 from "../../../assets/SwiperHomePhotos/img-3.jpg";
import swiperImage4 from "../../../assets/SwiperHomePhotos/img-4.jpg";
import swiperImage5 from "../../../assets/SwiperHomePhotos/img-5.jpg";
import swiperImage6 from "../../../assets/SwiperHomePhotos/img-6.jpg";
import { Link } from "react-router-dom";

const SwiperHome = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          "@1.50": {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Link to="/Dashboard/Box Mods">
            <img src={swiperImage1} alt="Image" />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/Dashboard/Rebuildables">
            <img src={swiperImage2} alt="Image" />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/Dashboard/Replacement Coils, Pod & RBA">
            <img src={swiperImage3} alt="Image" />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/Dashboard/Nicsalt">
            <img src={swiperImage4} alt="Image" />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/Dashboard/High End">
            <img src={swiperImage5} alt="Image" />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/Dashboard/Free Base">
            <img src={swiperImage6} alt="Image" />
          </Link>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default SwiperHome;
