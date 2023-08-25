import Banner from "../Banner/Banner";
import SwiperHome from "../SwiperHome/SwiperHome";
import Title from "../../../Shared/Title/Title";
import BoxMods from "../BoxMods/BoxMods";
import Card from "../../../Components/Card/Card";
import "./Home.css";
import { Fade, Slide } from "react-awesome-reveal";
import useAllProduct from "../../../Hooks/useAllProduct";
import { Parallax } from "react-parallax";
import { Link, ScrollRestoration } from "react-router-dom";
import Marquee from "react-fast-marquee";
import Lottie from "lottie-react";
import fireLottie from "../../../assets/Lottie/animation_llp8uoxr.json";
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
// footer image
import footerImg1 from "../../../assets/photos/footer-img (1).png";
import footerImg2 from "../../../assets/photos/footer-img (2).png";

const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9];

const Home = () => {
  const [allProducts] = useAllProduct();

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
        <div className="divider lg:divider-horizontal text-yellow-50">OR</div>
        <Parallax
          blur={{ min: -25, max: 20 }}
          bgImage={img}
          bgImageAlt="Vape"
          className="rounded-3xl bg-cover"
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
        <div className="my-4 py-2 bg-gradient-to-r from-indigo-800 rounded-2xl text-yellow-50 ">
          <p className="text-center mt-4">
            --------------------------------------------------------
          </p>
          <h3 className="text-center text-4xl my-4 font-semibold">
            Our Partners
          </h3>
          <p className="text-center mb-2">
            --------------------------------------------------------
          </p>
          <Marquee speed="100">
            {logos.map((logo, i) => (
              <img className="h-28" key={i} src={logo} alt="" />
            ))}
          </Marquee>
        </div>
      </Slide>
      <div data-aos="zoom-out">
        <Parallax
          blur={{ min: -15, max: 25 }}
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



      <div className="md:flex gap-3 my-4">
        <div className="md:w-7/12">
          <Slide>
          <div className="stats shadow flex flex-col md:flex-row">
            <div className="stat">
              <div className="stat-figure text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-8 h-8 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  ></path>
                </svg>
              </div>
              <div className="stat-title">Total Likes On Facebook</div>
              <div className="stat-value text-primary">25.6K</div>
              <div className="stat-desc">21% more than last month</div>
            </div>

            <div className="stat">
              <div className="stat-figure text-secondary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-8 h-8 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  ></path>
                </svg>
              </div>
              <div className="stat-title">Page Views</div>
              <div className="stat-value text-secondary">2.6M</div>
              <div className="stat-desc">21% more than last month</div>
            </div>

            <div className="stat">
              <div className="stat-figure text-secondary">
                <Lottie
                  className="h-36 "
                  animationData={fireLottie}
                  loop={true}
                />
              </div>
              <div className="stat-value">96%</div>
              <div className="stat-title">positive reviews</div>
              <div className="stat-desc text-secondary">
                31 tasks done today
              </div>
            </div>
          </div>
          </Slide>
        </div>
        <div className="md:w-5/12">
          <Slide direction="right">
            <div className=" bg-gradient-to-r from-green-400 to-blue-500 rounded-2xl md:h-44">
              <img src={footerImg1} alt="" />
              <img src={footerImg2} alt="" />
            </div>
          </Slide>
        </div>
      </div>
      <ScrollRestoration />
    </>
  );
};

export default Home;
