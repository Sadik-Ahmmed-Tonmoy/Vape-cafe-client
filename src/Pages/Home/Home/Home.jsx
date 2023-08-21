
import Banner from "../Banner/Banner";
import SwiperHome from "../SwiperHome/SwiperHome";
import Title from "../../../Shared/Title/Title";
import BoxMods from "../BoxMods/BoxMods";
import Card from "../../../Components/Card/Card";
import './Home.css'
import { Fade } from "react-awesome-reveal";
import useAllProduct from "../../../Hooks/useAllProduct";
import { Parallax } from 'react-parallax';
import img from "../../../assets/photos/paralluxPhoto.jpg"
import { Link } from "react-router-dom";



const Home = () => {

const [allProducts] = useAllProduct()
console.log(allProducts);

  return (
    <>
        
    
      {/* Carousel */}
      <Fade> <Banner /></Fade>
      {/* swiper */}
      <Fade> <SwiperHome /></Fade>
     
      <Title Heading={"All Devices"} SubHeading={"View All"} />

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
            {
              allProducts.slice(0,6).map((product )=> <Card key={product._id} product={product}/>)
            }  
          </div>
          <div className="text-center">
            <Link to="/Dashboard/High End"><button className="btn btn-warning mx-auto my-4">View All</button></Link>
          </div>
        </div>
       </Parallax>
      </div>
    </>
  );
};

export default Home;
