// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper/modules";
import Card from "../../../Components/Card/Card";

import "./boxStyles.css";

import img1 from "../../../assets/BoxModsPhotos/G-Class-V2.jpeg";
import img2 from "../../../assets/BoxModsPhotos/SL-Class-V2.jpeg";
import img3 from "../../../assets/BoxModsPhotos/Thelema-Solo-Dna100c-TVC.jpg";
import img4 from "../../../assets/BoxModsPhotos/Tomahawk-SBS.jpg";
import useAllProduct from "../../../Hooks/useAllProduct";

const BoxMods = () => {
  const [allProducts] = useAllProduct();
  return (
    <div>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        {allProducts.map((product) => (
          <SwiperSlide key={product._id}>
            <Card product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="text-center">
        <button className="btn btn-warning mx-auto">View All</button>
      </div>
    </div>
  );
};

export default BoxMods;
