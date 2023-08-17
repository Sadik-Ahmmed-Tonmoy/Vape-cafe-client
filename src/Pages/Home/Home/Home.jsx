
import Banner from "../Banner/Banner";
import SwiperHome from "../SwiperHome/SwiperHome";
import Title from "../../../Shared/Title/Title";
import BoxMods from "../BoxMods/BoxMods";
import Card from "../../../Components/Card/Card";

import './Home.css'

import img1 from "../../../assets/BoxModsPhotos/G-Class-V2.jpeg";
import { Helmet } from 'react-helmet-async';

const Home = () => {
  return (
    <>
        <Helmet>
        <title>Vape Cafe | Home</title>
      </Helmet>
      <Banner />
      <SwiperHome />
      <Title Heading={"All Devices"} SubHeading={"View All"} />

      <div className="flex">
        <div className="md:w-3/12 mx-14 my-auto">
          <BoxMods />
        </div>
        <div className="divider lg:divider-horizontal">OR</div>
        <div className="w-full bg-Parallax bg-fixed ">
          <div className="mx-auto grid grid-cols-3">
            <Card
              w={"w-64"}
              productImage={img1}
              productName={"YIHI SXMINI G CLASS V2 200W"}
              price={"16,500.00"}
            />
            <Card
              w={"w-64"}
              productImage={img1}
              productName={"YIHI SXMINI G CLASS V2 200W"}
              price={"16,500.00"}
            />
            <Card
              w={"w-64"}
              productImage={img1}
              productName={"YIHI SXMINI G CLASS V2 200W"}
              price={"16,500.00"}
            />
            <Card
              w={"w-64"}
              productImage={img1}
              productName={"YIHI SXMINI G CLASS V2 200W"}
              price={"16,500.00"}
            />
            <Card
              w={"w-64"}
              productImage={img1}
              productName={"YIHI SXMINI G CLASS V2 200W"}
              price={"16,500.00"}
            />
            <Card
              w={"w-64"}
              productImage={img1}
              productName={"YIHI SXMINI G CLASS V2 200W"}
              price={"16,500.00"}
            />
            
          </div>
          <div className="text-center">
            <button className="btn btn-warning mx-auto my-4">View All</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
