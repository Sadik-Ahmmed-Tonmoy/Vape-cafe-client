// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper/modules";
import Card from "../../../Components/Card/Card";

import "./boxStyles.css";

import useAllProduct from "../../../Hooks/useAllProduct";
import { Link } from "react-router-dom";

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
        {allProducts.slice(7 ,18).map((product) => (
          <SwiperSlide key={product._id}>
            <Card product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="text-center">
      <Link to="/Dashboard/Box Mods"><button className="btn btn-warning mx-auto my-2">View All</button></Link>
      </div>
    </div>
  );
};

export default BoxMods;
