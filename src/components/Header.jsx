import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import logo from "../assets/logo.png"

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const isOnline = useOnlineStatus();
  return (
    <div className="flex justify-between items-center shadow-sm shadow-slate-200">
      <div id="logo-container">
        <img className="w-28 mx-10 my-3 " src={logo} alt="logo" />
      </div>
      <div className="flex mx-10 my-3 ">
        <ul className="flex gap-9 text-lg font-medium ">
          <li className="cursor-pointer hover:text-orange-500 ease-in-out duration-300">
            <Link to="/">Home</Link>
          </li>
          <li className="cursor-pointer hover:text-orange-500 ease-in-out duration-300">
            <Link to="/about">About Us</Link>
          </li>
          <li className="cursor-pointer hover:text-orange-500 ease-in-out duration-300">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/cart">
              <FaShoppingCart className="h-7 w-6 text-slate-700 cursor-pointer hover:text-orange-500 ease-in-out duration-300" />
            </Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <button
            className="cursor-pointer hover:text-orange-600 ease-in-out duration-300"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
          <li>{isOnline ? "🟢" : "🔴"}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
