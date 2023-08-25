import { Fade } from "react-awesome-reveal";
import { NavLink } from "react-router-dom";


const PathName = ({titles, heading}) => {

    return (
        <li tabIndex={0}>
          <details>
            <summary className="md:hover:bg-white rounded-md">{heading}</summary>
            <ul className="p-2 bg-slate-800 rounded-md">
              {
                titles.map((title, i) => <Fade key={i} duration="1500"> <li  className="mb-1 md:w-28 hover:bg-white rounded-md">
                <NavLink  className={({ isActive }) =>
                  isActive
                    ? "text-blue-600 font-bold"
                    : ""
                } to={`/Dashboard/${title}`}>{title}</NavLink>
              </li>  </Fade>)
              }
            </ul>
          </details>
        </li>
    );
};

export default PathName;