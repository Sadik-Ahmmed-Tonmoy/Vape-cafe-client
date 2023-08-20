import { NavLink } from "react-router-dom";


const PathName = ({titles, heading}) => {

    return (
        <li tabIndex={0}>
          <details>
            <summary>{heading}</summary>
            <ul className="p-2 ">
              {
                titles.map((title, i) => <li key={i} className="mb-1 md:w-28">
                <NavLink  className={({ isActive }) =>
                  isActive
                    ? "text-blue-600 font-bold"
                    : ""
                } to={`/Dashboard/${title}`}>{title}</NavLink>
              </li>)
              }
            </ul>
          </details>
        </li>
    );
};

export default PathName;