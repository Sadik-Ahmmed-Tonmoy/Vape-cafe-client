import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import RotationCarousel from "../RotationCarousel/RotationCarousel";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "../../../Redux/CounterSlice/CounterSlice";
import { AuthContext } from "./../../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
AOS.init();



const ViewDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const [productDetails, setProductDetails] = useState([]);
  const { image, name, price, description, features, packageIncludes } =
    productDetails;

  useEffect(() => {
    axios.get(`http://localhost:5000/productDetails/${id}`).then((response) => {
      setProductDetails(response.data);
    });
  }, [id]);

  const count = useSelector((state) => state.counter.value);
  console.log(count);
  const dispatch = useDispatch();

  
  // handle add to cart
  const handleAddToCart = (item) => {
    dispatch(increment());

    if (user?.email) {
      const cartData = {
        productId: item._id,
        name,
        price,
        image,
        email: user.email,
      };

      axios
        .post("http://localhost:5000/addToCart", cartData)
        .then((response) => {
          if (response.data.insertedId) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Product added on the cart",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } 
    
    else {
      Swal.fire({
        title: "Please login to order the product",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login Now!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/userLogin", { state: { from: location } })
        }
      })
    }
  };

  return (
    <div data-aos="fade-up">
      <div className="md:flex">
        <div
          data-aos="fade-right"
          data-aos-duration="3000"
          className="md:w-5/12 m-3"
        >
          <img data-aos="fade-up" data-aos-duration="3000" src={image} alt="" />

          <button
            onClick={() => handleAddToCart(productDetails)}
            className="btn btn-primary mt-3 w-full"
          >
            Add To Cart
          </button>
        </div>
        <div className="p-5 md:w-6/12">
          <p
            data-aos="fade-left"
            data-aos-duration="2000"
            className="font-bold text-3xl"
          >
            {name}
          </p>
          <p
            data-aos="fade-left"
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
      <div className="my-5 w-36">
        <RotationCarousel />
      </div>
    </div>
  );
};

export default ViewDetails;
