import { NavLink, Outlet, ScrollRestoration } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import PathName from "../../Components/PathName/PathName";
import Navbar from "../../Shared/Navbar/Navbar";
import { Slide } from "react-awesome-reveal";

const Dashboard = () => {
  const Devices = ["High End", "Box Mods", "Starter Kits", "Pod System"];
  const Atomizers = ["Rebuildables", "SUB-OHM Tanks"];
  const E_Liquids = ["Nicsalt", "Free Base"];
  const Accessories = [
    "Replacement Coils, Pod & RBA",
    "Vape Accessories",
    "Rebuildable Materials",
    "Batteries & Chargers",
  ];

  return (
    <div>
      <Navbar />
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden mt-5 ms-5"
          >
            <GiHamburgerMenu />
            Category
          </label>
          <Outlet />
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 bg-base-200 text-base-content min-h-screen w-52 md:w-80 mt-16 md:mt-0">
            {/* Sidebar content here */}
            <>
              <Slide direction="left">
                <PathName heading="Devices" titles={Devices} />
              </Slide>
              
              <Slide direction="left" duration="1500">
              <PathName heading="Atomizers" titles={Atomizers} />
              </Slide>
              <Slide direction="left" duration="2000">
              <PathName heading="E-Liquids" titles={E_Liquids} />
              </Slide>
              <Slide direction="left" duration="2500">
              <PathName heading="Accessories" titles={Accessories} />
              </Slide>
              <Slide direction="left" duration="3000">
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-blue-600 font-bold" : ""
                  }
                  to="/Dashboard/Disposables"
                >
                  Disposables
                </NavLink>
              </li>
              </Slide>
            </>
            <div className="divider"></div>
          </ul>
        </div>
      </div>
      <ScrollRestoration />
    </div>
  );
};

export default Dashboard;
