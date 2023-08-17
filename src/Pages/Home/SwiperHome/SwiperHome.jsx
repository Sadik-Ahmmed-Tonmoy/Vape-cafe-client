// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

import swiperImage1 from "../../../assets/SwiperHomePhotos/img-1.jpg"
import swiperImage2 from "../../../assets/SwiperHomePhotos/img-2.jpg"
import swiperImage3 from "../../../assets/SwiperHomePhotos/img-3.jpg"
import swiperImage4 from "../../../assets/SwiperHomePhotos/img-4.jpg"
import swiperImage5 from "../../../assets/SwiperHomePhotos/img-5.jpg"
import swiperImage6 from "../../../assets/SwiperHomePhotos/img-6.jpg"

const SwiperHome = () => {
    return (
        <>
        <Swiper
          loop="true"
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            '@0.00': {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            '@0.75': {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            '@1.00': {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            '@1.50': {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={swiperImage1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={swiperImage2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={swiperImage3} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={swiperImage4} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={swiperImage5} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={swiperImage6} alt="" />
          </SwiperSlide>
        </Swiper>
      </>
    );
};

export default SwiperHome;