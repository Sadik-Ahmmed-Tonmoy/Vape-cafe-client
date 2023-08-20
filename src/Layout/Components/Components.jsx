import { NavLink, Outlet } from "react-router-dom";
import { FaHome } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';

const Components = () => {
  const devicesCategory = ["High End", "Box Mods", "Starter Kits", "Pod System"]
  const Atomizers = ["Rebuildables", "SUB-OHM Tanks"]
  const E_Liquids = ["Nicsalt", "Free Base"]
  const Accessories = ["Replacement Coils, Pod & RBA", "Vape Accessories", "Rebuildable Materials", "Batteries & Chargers"]
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden mt-5"
        >
          <GiHamburgerMenu />
        </label>
        <Outlet />
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 bg-base-200 text-base-content min-h-screen md:w-64">
          {/* Sidebar content here */}
          <>
          <li tabIndex={0}>
        <details>
          <summary>Devices</summary>
          <ul className="p-2 md:w-32">
            {
              devicesCategory.map((device, i) => <li key={i} className="mb-1">
              <NavLink  className={({ isActive }) =>
                isActive
                  ? "text-blue-600 font-bold"
                  : ""
              } to={`/components/${device}`}>{device}</NavLink>
            </li>)
            }
          </ul>
        </details>
      </li>
            <li tabIndex={0}>
              <details>
                <summary>Atomizers</summary>
                <ul className="p-2">
                {
              Atomizers.map((Atomizer, i) => <li key={i} className="mb-1">
              <NavLink  className={({ isActive }) =>
                isActive
                  ? "text-blue-600 font-bold"
                  : ""
              } to={`/components/${Atomizer}`}>{Atomizer}</NavLink>
            </li>)
            }
                </ul>
              </details>
            </li>
            <li tabIndex={0}>
              <details>
                <summary>E-Liquids</summary>
                <ul className="p-2">
                {
              E_Liquids.map((Liquid, i) => <li key={i} className="mb-1">
              <NavLink  className={({ isActive }) =>
                isActive
                  ? "text-blue-600 font-bold"
                  : ""
              } to={`/components/${Liquid}`}>{Liquid}</NavLink>
            </li>)
            }
                </ul>
              </details>
            </li>

            <li tabIndex={0}>
              <details>
                <summary>Accessories</summary>
                <ul className="p-2">
                {
              Accessories.map((Accessory, i) => <li key={i} className="mb-1">
              <NavLink  className={({ isActive }) =>
                isActive
                  ? "text-blue-600 font-bold"
                  : ""
              } to={`/components/${Accessory}`}>{Accessory}</NavLink>
            </li>)
            }
                </ul>
              </details>
            </li>
            <li>
              <NavLink  className={({ isActive }) =>
                isActive
                  ? "text-blue-600 font-bold"
                  : ""
              }  to="/components/disposables">Disposables</NavLink>
            </li>
          </>
          <div className="divider"></div>
        
              
               
                  <li className="mb-1">
                    <NavLink to="/"><FaHome/> Home</NavLink>
                  </li>
                  <li className="mb-1">
                    <NavLink>Vape Accessories</NavLink>
                  </li>
                  <li className="mb-1">
                    <NavLink>Rebuildable Materials</NavLink>
                  </li>
                  <li className="mb-1">
                    <NavLink>Batteries & Chargers</NavLink>
                  </li>
            
        </ul>
      </div>
    </div>
  );
};

export default Components;
