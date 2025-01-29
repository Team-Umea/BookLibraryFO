import { NavLink } from "react-router";
import logo from "../assets/book-library-logo.svg";

export default function Navbar() {
  return (
    <nav className="flex w-full p-2 bg-gray-800">
      <ul className="flex justify-between items-center w-full pr-6">
        <li>
          <NavLink to="/">
            <img src={logo} className="w-[50px]" />
          </NavLink>
        </li>
        <li>
          <NavLink to="/addbook">Add Book</NavLink>
        </li>
      </ul>
    </nav>
  );
}
