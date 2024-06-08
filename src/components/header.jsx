import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <header className="bg-white px-4 py-4 sm:px-8 flex justify-between items-center sticky top-0 z-50">
      {/* Logo */}
      <Link to="/">
        <img
          src={logo}
          alt="My Logo"
          className="w-28 object-contain mx-4 sm:mx-10"
        />
      </Link>

      {/* Navigation Links */}
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="font-medium px-4">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="font-medium px-4">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="font-medium px-4">
              Contact
            </Link>
          </li>
          <li>
            <Link to="/department" className="font-medium px-4">
              Department
            </Link>
          </li>
        </ul>
      </nav>

      {/* Action Buttons */}
      <div className="flex space-x-4">
        <Link
          to="/login"
          className="border border-blue-500 px-4 py-2 rounded-lg text-blue-500 hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out"
        >
          Login
        </Link>
        <Link
          to="/signup"
          className="bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out text-white"
        >
          Sign-up
        </Link>
      </div>
    </header>
  );
};

export default Header;
