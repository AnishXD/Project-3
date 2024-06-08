import React from "react";
import SearchBar from "../components/searchbar";
import { hospitals } from "../components/hosdata";
import { Link } from "react-router-dom";

const SearchPage = () => {
  const allHos = hospitals;

  return (
    <div>
      <div className="py-4">
        <SearchBar />
      </div>
      <hr />
      <div className="flex h-full">
        {/* 20% div */}
        <div className="w-1/5">
          <h2 className="text-2xl font-semibold p-2">Filters</h2>
          </div>

        {/* 80% div */}
        <div className="flex-1 ">
          <h2 className="text-2xl font-semibold p-2">Results</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 p-2">
            {allHos.map((hospital) => (
              <div
                key={hospital.id}
                className="max-w-sm bg-black border border-gray-200 rounded shadow dark:bg-white"
              >
                <Link to={`/hospital/${hospital.id}`}>
                  <img
                    className="rounded-t"
                    src={hospital.imageUrl}
                    alt={hospital.name}
                  />
                </Link>
                <div className="p-2">
                  
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">
                    <Link to={`/hospital/${hospital.id}`}>{hospital.name}</Link>
                    </h5>
                  
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Location: {hospital.location}
                  </p>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Specialties: {hospital.specialties.join(", ")}
                  </p>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Rating: {hospital.rating}
                  </p>
                  <Link
                    to={`/hospital/${hospital.id}`}
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
