import React from 'react';
import WBbg from "../assets/wb.jpg";
import Verified from '../assets/verified.jpg';

const aim = () => {
    const containerStyle = {
        backgroundImage: `url(${WBbg})`,
      };
  return (
    <div className="flex items-center justify-center bg-gray-100 ">
      <div className="container rounded-xl my-4 px-8 py-6 bg-white bg-cover bg-center shadow-lg h-screen" style={containerStyle}>
        <div className='flex'>
        <h1 className="text-6xl w-1/2 font-bold mb-2 text-white">Our Aim </h1>
        <h1 className="text-6xl w-1/2 font-bold mb-2 text-sky-400">Our Reviews </h1>
        </div>
      <div className='flex items-center'>
      <div className='w-1/2 h-full text-white'>
        <p className='py-4 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores laboriosam illo  voluptates magni autem asperiores libero iure odio.
        </p>
        <p className='py-4 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores laboriosam illo  voluptates magni autem asperiores libero iure odio.
        </p>
        <p className='py-4 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores laboriosam illo  voluptates magni autem asperiores libero iure odio.
        </p>
        <p className='py-4 text-xl'>Lorem ipsuiti voluptates magni autem asperiores libero iure odio.
        </p>
        <p className='py-4 text-xl'>Lorem niti voluptates magni autem asperiores libero iure odio.
        </p>
        <p className='py-4 text-xl'>Lorem ipsum oluptates magni autem asperiores libero iure odio.
        </p>
        <p className='py-4 text-xl'>Lorem ipeniti voluptates magni autem asperiores libero iure odio.
        </p>
        </div>
        <div className='w-1/2 h-fit'>
            <div className="flex flex-col mt-2 ">
            {/* First Square */}
            <div className="bg-blue-100 p-4 rounded-lg flex flex-col mb-4">
              <div className="flex items-center">
                <img
                  src={Verified}
                  alt=""
                  width={50}
                  height={50}
                  className="rounded-full"
                />
              </div>
              <p className="text-lg font-semibold py-2">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima
                aliquid dis?
              </p>
            </div>
            {/* Second Square */}
            <div className="bg-blue-100 p-4 rounded-lg flex flex-col mb-4">
              <div className="flex items-center">
                <img
                  src={Verified}
                  alt=""
                  width={50}
                  height={50}
                  className="rounded-full"
                />
              </div>
              <p className="text-lg font-semibold py-2">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima
                aliquid esse saepe repellat ani
              </p>
            </div>
            {/* Third Square */}
            <div className="bg-blue-100 p-4 rounded-lg flex flex-col mb-4">
              <div className="flex items-center ">
                <img
                  src={Verified}
                  alt=""
                  width={50}
                  height={50}
                  className="rounded-full"
                />
              </div>
              <p className="text-lg font-semibold py-2">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima
                aliquid esse saepe repellat animi odio exercitationem. 
              </p>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default aim