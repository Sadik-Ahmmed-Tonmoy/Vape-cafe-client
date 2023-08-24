import { useContext } from "react";
import { Fade } from "react-awesome-reveal";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";


const Card = ({ product}) => {
  const {image, name, price, _id}=product;

  const navigate = useNavigate();
  const location = useLocation();

  const {user} = useContext(AuthContext)
   // handle add to cart
   const handleAddToCart = (item) => {

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
<Fade>
<div className={`card w-auto bg-base-100 shadow-xl m-4 transition-transform duration-300 transform-gpu hover:scale-105 hover:text-blue-300`}>
      <figure className="px-5 pt-5">
        <img
          src={image}
          alt={name}
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p className="text-yellow-500"> BDT {price}</p>
        <div className="card-actions flex justify-between w-full">
          
        <button
            onClick={() => handleAddToCart(product)}
            className="btn btn-primary hover:bg-black "
          >
            Add To Cart
          </button>
          <button className="btn btn-primary hover:bg-black"><Link to={`/Dashboard/productDetails/${_id}`}>View Details</Link></button>
        </div>
      </div>
    </div>
</Fade>
  );
};

export default Card;
