import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Search from "../assets/search.png";

const SearchBar = () => {
  useEffect(() => {
    const myDiv = document.getElementById("myDiv");
    if (myDiv) {
      const toggleBorder = () => {
        myDiv.classList.toggle("border-black");
      };
      myDiv.addEventListener("click", toggleBorder);

      return () => {
        myDiv.removeEventListener("click", toggleBorder);
      };
    }
  }, []); // Empty dependency array ensures effect runs only once on mount

  return (
    <div className="w-1/2 mx-auto">
      {/* Center the search bar horizontally */}
      <div className="w-full flex items-center bg-white focus:outline-none border border-gray-300 rounded py-1 px-4">
        {/* Search Icon */}
        <div className="mr-3">
          <img src={Search} alt="Search" height={30} width={30} />
        </div>

        {/* Input Field */}
        <input
          type="text"
          className="flex-1 text-lg leading-normal focus:outline-none"
          placeholder="Search"
        />

        {/* Search Button */}
        <Link
          to="/searchpage"
          className="ml-3 px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white text-lg rounded"
        >
          Search
        </Link>
      </div>
    </div>
  );
};

export default SearchBar;
