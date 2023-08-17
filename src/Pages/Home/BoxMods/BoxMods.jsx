// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper/modules";
import Card from "../../../Components/Card/Card";

import './boxStyles.css';

import img1 from "../../../assets/BoxModsPhotos/G-Class-V2.jpeg";
import img2 from "../../../assets/BoxModsPhotos/SL-Class-V2.jpeg";
import img3 from "../../../assets/BoxModsPhotos/Thelema-Solo-Dna100c-TVC.jpg";
import img4 from "../../../assets/BoxModsPhotos/Tomahawk-SBS.jpg";

const BoxMods = () => {
  return (
    <div>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Card
            productImage={img1}
            productName={"YIHI SXMINI G CLASS V2 200W"}
            price={"16,500.00"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            productImage={img2}
            productName={"YIHI SXMINI SL CLASS V2 100W BOX MOD"}
            price={"8,500.00"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            productImage={img3}
            productName={"LOST VAPE THELEMA SOLO DNA100C BOX MOD"}
            price={"15,000.00"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            productImage={img4}
            productName={"BP MODS TOMAHAWK SBS 60W BOX MOD"}
            price={"6,500.00"}
          />
        </SwiperSlide>
      </Swiper>
      <div className="text-center">
        <button className="btn btn-warning mx-auto">View All</button>
      </div>
    </div>
  );
};

export default BoxMods;
