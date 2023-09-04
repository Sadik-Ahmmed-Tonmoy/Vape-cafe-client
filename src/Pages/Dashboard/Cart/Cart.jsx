import { Link } from "react-router-dom";
import useCart from "../../../Hooks/useCart";
import axios from "axios";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";

const Cart = () => {
  const [cart, refetch] = useCart();
  const { user } = useContext(AuthContext);
  const handleDelete = (id) => {
    axios
      .delete(`https://vape-cafe-server.vercel.app/cart/delete/${id}`)
      .then((res) => {
        console.log(res.data);
        if (res.data.deletedCount === 1) {
          refetch();
          Swal.fire({
            position: "bottom",
            icon: "success",
            title: "Product has been deleted",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  const total = cart.reduce((sum, item) => sum + parseInt(item.price), 0);
  const paymentDetails = {
    total,
    name: user?.displayName,
    email: user?.email,
  };

  const handlePayment = () => {
    axios
      .post("https://vape-cafe-server.vercel.app/order", paymentDetails)
      .then((result) => {
        console.log(result.data);
        window.location.replace(result.data.url);
      });
  };

  return (
    <div className="flex flex-col items-center ">
      <div className="flex justify-around my-7 w-full">
        <p className="text-2xl font-semibold">Quantity: {cart.length}</p>
        <p className="text-2xl font-semibold">Total Price:BDT <span className="text-yellow-500"> ${total}</span></p>
     
      </div>
      <button
        onClick={() => handlePayment()}
        className="btn text-center btn-primary my-5"
      >
        Pay Now
      </button>
      {cart.map((item, i) => (
        <div
          key={i}
          className="flex gap-3 m-2 border p-1 md:w-6/12 rounded-md items-center justify-between bg-gradient-to-b from-indigo-900 via-slate-950 to-black"
        >
          <div className="flex">
            <div className="avatar">
              <div className="w-20 m-2 rounded">
                <img src={item.image} />
              </div>
            </div>
            <div className="mt-3">
              <p>Name: {item.name}</p>
              <p>
                Price:<span className="text-yellow-600"> BDT {item.price}</span>
              </p>
              <button className="btn btn-primary btn-sm">
                <Link to={`/Dashboard/productDetails/${item.productId}`}>
                  View Details
                </Link>
              </button>
            </div>
          </div>
          <button
            onClick={() => handleDelete(item._id)}
            className="btn btn-square btn-outline me-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
