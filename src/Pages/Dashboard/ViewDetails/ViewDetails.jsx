import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";
import RotationCarousel from "../RotationCarousel/RotationCarousel";
AOS.init();

const ViewDetails = () => {
  const { id } = useParams();
  const [productDetails, setProductDetails] = useState([]);
  console.log(productDetails);
  const { image, name, price, description, features, packageIncludes } =
    productDetails;
  useEffect(() => {
    axios.get(`http://localhost:5000/productDetails/${id}`).then((response) => {
      setProductDetails(response.data);
    });
  }, [id]);
  return (
    <div data-aos="fade-up">
        <RotationCarousel/>
      <div className="md:flex">
        <div
          data-aos="fade-right"
          data-aos-duration="3000"
          className="md:w-5/12 m-3"
        >
          <img data-aos="fade-up" data-aos-duration="3000" src={image} alt="" />
      

          <button className="btn btn-primary mt-3 w-full">Add To Cart</button>
        </div>
        <div className="p-5 md:w-6/12">
          <p
            data-aos="fade-left"
            data-aos-duration="3000"
            className="font-bold text-3xl"
          >
            {name}
          </p>
          <p
            data-aos="flip-right"
            data-aos-duration="3000"
            className="font-bold text-3xl my-4 text-yellow-600"
          >
            BDT {price}
          </p>
          <div className="divider my-5"></div>
          <p data-aos="zoom-in-up" data-aos-duration="3000">
            {description}
          </p>
        </div>
      </div>
      <div className="divider"></div>
      <section className="m-4">
        <div data-aos="zoom-out-down" data-aos-duration="3000">
          <p className="font-bold">Feature:</p>
          <p>{features}</p>
        </div>
        <div data-aos="zoom-out-up" data-aos-duration="3000">
          <p className="font-bold mt-5">Package Includes:</p>
          <p>{packageIncludes}</p>
        </div>
      </section>
    </div>
  );
};

export default ViewDetails;
