import { useContext } from "react";
import { Fade } from "react-awesome-reveal";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";

const Card = ({ product }) => {
  const { image, name, price, _id } = product;

  const navigate = useNavigate();
  const location = useLocation();

  const { user } = useContext(AuthContext);
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
        .post("https://vape-cafe-server.vercel.app/addToCart", cartData)
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
    } else {
      Swal.fire({
        title: "Please login to order the product",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login Now!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/userLogin", { state: { from: location } });
        }
      });
    }
  };

  return (
    <Fade>
      <div
        className={`card w-auto bg-slate-900 text-white shadow-xl m-3 transition-transform duration-300 transform-gpu hover:scale-105 hover:text-blue-300`}
      >
        <figure className="px-5 pt-5">
          <img src={image} alt={name} className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title md:h-20">{name}</h2>
          <p className="text-yellow-500"> BDT {price}</p>
          <div className="card-actions flex justify-between w-full min-w">
            <button
              onClick={() => handleAddToCart(product)}
              className="btn btn-primary p-2 bg-gradient-to-r from-primary to-blue-900 hover:from-black hover:to-slate-800"
            >
              Add To Cart
            </button>
            <Link to={`/Dashboard/productDetails/${_id}`}>
              <button className="btn btn-primary p-2 bg-gradient-to-r from-blue-900 to-primary hover:from-black hover:to-slate-800">
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default Card;
