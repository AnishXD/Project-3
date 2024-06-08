import React from "react";
import location from "../assets/location.png";
import other from "../assets/other.png";

const Functions = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="my-4 mx-8 py-6 min-h-screen">
        <h1 className="text-center text-6xl font-bold mb-4">Functions</h1>
        <div className="flex items-center justify-center lg:justify-between ">
          <div className="w-full lg:w-1/2 px-4 lg:text-left mb-8 lg:mb-0 flex flex-col items-center">
            <img src={location} alt="location" className="mb-4 inline-block" width={300} height={300} />
            <h2 className="text-4xl font-bold mb-6">Hospital Locator</h2>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
              labore incidunt totam. Quaerat aliquam explicabo totam impedit id,
              eius doloribus animi commodi unde error similique, ex architecto
              sapiente consequatur cumque?
            </p>
          </div>
          <div className="lg:block border-l border-dotted border-orange-800 mx-8 h-screen border-4"></div>
          <div className="w-full lg:w-1/2 px-4 lg:text-left mb-8 lg:mb-0 flex flex-col items-center">
            <img src={other} alt="other" className="mb-4 inline-block" width={300} height={300} />
            <h2 className="text-4xl font-bold mb-6">Hospital Data</h2>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
              labore incidunt totam. Quaerat aliquam explicabo totam impedit id,
              eius doloribus animi commodi unde error similique, ex architecto
              sapiente consequatur cumque?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Functions;
