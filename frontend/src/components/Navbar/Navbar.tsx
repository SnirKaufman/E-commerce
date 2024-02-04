import { Link } from "react-router-dom";
import { NAV_SECTIONS } from "./data";
import Drawer from "./Drawer";

function Navbar() {
  return (
    <div className="navbar_container">
      <h1>
        <Link className="link" to={"/"}>
          Ecommerce
        </Link>
      </h1>
      <ul>
        {NAV_SECTIONS.map(({ nameToDisplay, path }) => {
          return (
            <li className="nav-list" key={nameToDisplay}>
              <Link className="link" to={path}>
                {nameToDisplay}
              </Link>
            </li>
          );
        })}
      </ul>
      <div className="icons-container">
        <button className="login-btn">
          <Link className="link" to={"/auth/login"}>
            Login
          </Link>
        </button>
        <Drawer />
      </div>
    </div>
  );
}

export default Navbar;
