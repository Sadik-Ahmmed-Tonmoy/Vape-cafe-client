import { useContext } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import PathName from "../../Components/PathName/PathName";
import { FaCartArrowDown, FaHome } from "react-icons/fa";
// import { MdOutlinePayments } from "react-icons/md";
import navImg from "../../assets/photos/NavLogo.png";
import useCart from "../../Hooks/useCart";

const Navbar = () => {
  // nav Titles
  const Devices = ["High End", "Box Mods", "Starter Kits", "Pod System"];
  const Atomizers = ["Rebuildables", "SUB-OHM Tanks"];
  const E_Liquids = ["Nicsalt", "Free Base"];
  const Accessories = [
    "Replacement Coils, Pod & RBA",
    "Vape Accessories",
    "Rebuildable Materials",
    "Batteries & Chargers",
  ];

  const location = useLocation();
  const isDashboard = location.pathname.includes("/Dashboard");
  const { user, logOut } = useContext(AuthContext);
  

  // logout user
  const handleLogout = () => {
    logOut()
      .then(() => {
        Swal.fire({
          position: "top",
          icon: "success",
          title: "Logged Out",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };

  // link to directions page
  const HomeNavItems = (
    <>
      <PathName heading="Devices" titles={Devices} />
      <PathName heading="Atomizers" titles={Atomizers} />
      <PathName heading="E-Liquids" titles={E_Liquids} />
      <PathName heading="Accessories" titles={Accessories} />
      <li className="hover:bg-white rounded-md">
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-blue-600 font-bold" : ""
          }
          to="/Dashboard/Disposables"
        >
          Disposables
        </NavLink>
      </li>
    </>
  );

  // cart data
  // axios.get(`https://vape-cafe-server.vercel.app/cart/data/${user?.email}`).then(res => {
  //   console.log(res.data);
  // })
  const [cartData] = useCart();
  console.log(cartData);

  const DashboardNavItems = (
    <>
      {user ? (
        <button
          onClick={handleLogout}
          className="btn btn-outline btn-primary md:hidden block"
        >
          Logout
        </button>
      ) : (
        <Link to="/userLogin">
          <button className="btn btn-outline btn-primary md:hidden block">
            Login
          </button>
        </Link>
      )}
      <li className="hover:bg-yellow-50 rounded-md">
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-blue-600 font-bold" : ""
          }
          to="/"
        >
          <FaHome />
          Home
        </NavLink>
      </li>
      {/* <li className="hover:bg-yellow-50 rounded-md">
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-blue-600 font-bold" : ""
          }
          to="/"
        >
          <MdOutlinePayments />
          Payment History
        </NavLink>
      </li> */}
    </>
  );

  return (
    <div className="navbar bg-slate-900 text-white">
      <div className="navbar-start">
        <div className="dropdown z-10">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          {/* mobile */}
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-slate-800  rounded-box w-52"
          >
            {isDashboard ? DashboardNavItems : HomeNavItems}
          </ul>
        </div>
        <Link to="/">
          <img className="h-20 md:ms-6" src={navImg} alt="Logo" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex z-10">
        <ul className="menu menu-horizontal px-1 ">
         
          {isDashboard ? DashboardNavItems : HomeNavItems}
        </ul>
      </div>
      <div className="navbar-end">
        {/* cart */}

        {user && cartData ? (
          <Link to="/Dashboard/cart">
            <span className="badge badge-primary md:p-4 btn hover:text-black">
              {" "}
              <FaCartArrowDown className="me-1" /> +{cartData?.length || 0}
            </span>
          </Link>
        ) : (
          ""
        )}

        {user?.photoURL && (
          <img
            referrerPolicy="no-referrer"
            className="rounded-full h-12 w-12 mx-2 hidden md:block"
            title={user?.displayName}
            src={user?.photoURL}
            alt=""
          />
        )}
        {user ? (
          <button
            onClick={handleLogout}
            className="btn btn-outline btn-primary hidden md:block"
          >
            Logout
          </button>
        ) : ( <NavLink to="/userLogin">
          <button className="btn btn-outline btn-primary hidden md:block">
           Login
          </button></NavLink>
        )}
      </div>
    </div>
  );
};

export default Navbar;
