import Banner from "../Banner/Banner";
import SwiperHome from "../SwiperHome/SwiperHome";
import Title from "../../../Shared/Title/Title";
import BoxMods from "../BoxMods/BoxMods";
import Card from "../../../Components/Card/Card";
import "./Home.css";
import { Fade, Slide } from "react-awesome-reveal";
import useAllProduct from "../../../Hooks/useAllProduct";
import { Parallax } from "react-parallax";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

import img from "../../../assets/photos/paralluxPhoto.jpg";
import img2 from "../../../assets/photos/Screenshot 2023-08-24 191022.png";
// brand Logo
import logo1 from "../../../assets/photos/image-1000x500__1_-removebg-preview.png";
import logo2 from "../../../assets/photos/image-1000x500__2_-removebg-preview.png";
import logo3 from "../../../assets/photos/image-1000x500__3_-removebg-preview.png";
import logo4 from "../../../assets/photos/image-1000x500__4_-removebg-preview.png";
import logo5 from "../../../assets/photos/image-1000x500__5_-removebg-preview.png";
import logo6 from "../../../assets/photos/image-1000x500__6_-removebg-preview.png";
import logo7 from "../../../assets/photos/image-1000x500__7_-removebg-preview.png";
import logo8 from "../../../assets/photos/image-1000x500__8_-removebg-preview.png";
import logo9 from "../../../assets/photos/image-1000x500__9_-removebg-preview.png";

const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9];

const Home = () => {
  const [allProducts] = useAllProduct();
  console.log(allProducts);

  return (
    <>
      {/* Carousel */}
      <Fade>
        {" "}
        <Banner />
      </Fade>
      {/* swiper */}
      <Fade>
        {" "}
        <SwiperHome />
      </Fade>

      <Title Heading={"Our Devices"} />

      <div className="md:flex">
        <div className="md:w-3/12 mx-14 my-auto">
          <BoxMods />
        </div>
        <div className="divider lg:divider-horizontal">OR</div>
        <Parallax
          blur={{ min: -15, max: 15 }}
          bgImage={img}
          bgImageAlt="Vape"
          className="rounded-3xl"
        >
          <div className="w-full bg-fixed ">
            <div className="mx-auto md:grid grid-cols-3">
              {allProducts.slice(0, 6).map((product) => (
                <Card key={product._id} product={product} />
              ))}
            </div>
            <div className="text-center">
              <Link to="/Dashboard/High End">
                <button className="btn btn-warning mx-auto my-4">
                  View All
                </button>
              </Link>
            </div>
          </div>
        </Parallax>
      </div>
     <Slide direction="right">
     <div className="my-4 py-2 bg-gradient-to-r from-indigo-800 rounded-2xl">
        <p className="text-center mt-4">--------------------------------------------------------</p>
        <h3 className="text-center text-4xl my-4 font-semibold">Our Partners</h3>
        <p className="text-center mb-2">--------------------------------------------------------</p>
        <Marquee speed="100">
          {logos.map((logo, i) => (
            <img className="h-28" key={i} src={logo} alt="" />
          ))}
        </Marquee>
      </div>
     </Slide>
      <div data-aos="flip-up">
        <Parallax
          blur={{ min: -15, max: 15 }}
          bgImage={img2}
          bgImageAlt="Vape"
          className="rounded-3xl my-3"
        >
          <div className="hero">
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                <Fade duration="2500">
                  <p className="my-5">
                    Vaping has gained popularity as a modern alternative to
                    traditional smoking, attracting a diverse range of
                    individuals seeking a smoke-free alternative. While the
                    long-term effects of vaping are still being studied, there
                    are several potential benefits associated with vaping that
                    are worth considering. This article will highlight some of
                    these benefits, providing a comprehensive overview for those
                    interested in exploring the world of vaping.
                  </p>
                </Fade>
              </div>
            </div>
          </div>
        </Parallax>
      </div>
    </>
  );
};

export default Home;
