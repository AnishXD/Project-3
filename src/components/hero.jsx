import React from 'react'
import hero_bg from '../assets/hero_bg.jpg';
import { Link } from 'react-router-dom';

const hero = () => {
  return (
    <div className="h-screen flex bg-cover" style={{ backgroundImage: `url(${hero_bg})` }}>

      {/* Text Div */}
      <div className=" text-white w-1/2 px-6" style={{ paddingTop: '6rem'}}>
      <div>
        <h2 className="text-6xl font-bold mb-4 changa-one-regular">Discover India's Vibrant Ayush Hospitals 📍</h2>
        <p className="text-xl py-6">Find the nearest Hospital from a network of over 4000 Ayush hospitals offering holistic healthcare services.</p>
        
      </div>
      <div className=''>
      <Link to="/searchpage" className="bg-blue-500 px-6 py-4 hover:bg-blue-700 transition duration-300 ease-in-out text-white text-xl font-semibold">Get Started <span className="text-2xl">&gt;</span></Link>
      </div>
      </div>
    </div>
  )
}

export default hero