import React from "react";
import Searchbar from "./searchbar";
import { Link } from "react-router-dom";
import { hospitals } from "./hosdata";


const dochos = () => {
  
  const pediatricHospitals = hospitals.filter((hospital) =>
    hospital.specialties.includes("Pediatrics")
  );

  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 min-h-screen">
      <div className="my-4 mx-8 py-6 w-4/6">
        <h1 className="text-center text-6xl font-bold mb-4">Top Hospitals</h1>
        <Searchbar />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {pediatricHospitals.map((hospital) => (
          <div
            key={hospital.id}
            className="max-w-sm bg-black border border-gray-200 rounded-lg shadow dark:bg-white"
          >
            <Link to={`/hospital/${hospital.id}`}>
              <img
                className="rounded-t-lg"
                src={hospital.imageUrl}
                alt={hospital.name}
              />
            </Link>
            <div className="p-5">
              <Link to={`/hospital/${hospital.id}`}>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">
                  {hospital.name}
                </h5>
              </Link>
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
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default dochos;
