import { NavLink } from "react-router-dom";
import Searchbar from "./Searchbar";

export default function Navbar() {
  return (
    <nav className="bg-green-500 p-6">
      <div className="flex justify-between items-center">
        <ul className="flex space-x-4">
          <li>
            <NavLink
              to="/"
              end
              className="text-white hover:text-brown-500 active:text-yellow-500"
            >
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/liked"
              className="text-white hover:text-brown-500 active:text-yellow-500"
            >
              Liked Products
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/cart"
              className="text-white hover:text-brown-500 active:text-yellow-500"
            >
              Cart
            </NavLink>
          </li>
          <li>
            <Searchbar />
          </li>
        </ul>
      </div>
    </nav>
  );
}
