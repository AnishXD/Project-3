import React from 'react'
import Ayush from "../assets/ayush_bg.jpg"

const ayush = () => {
  return (
    <div>
    <h1 className='text-6xl font-semibold text-center my-4 '>Ministry of Ayush</h1>
    <div className='flex justify-center  min-h-[70vh] mx-4'>

    <div className='w-1/2 flex items-center justify-center'>
            <img src={Ayush} alt="ayush" width={600}/>
        </div>
        
        <div className='w-1/2  text-lg flex flex-col justify-evenly'>        
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum fugiat omnis molestiae architecto tempore ea labore dolorum incidunt velit nisi? Quis doloribus quae accusamus qui sapiente culpa magnam ratione facilis.ipisicing elit. Ipsum fugiat omnis molestiae architecto tempore ea labore dolorum incidunt velit nisi? Quis doloribus quae accusamus qui sapiente culpa magnam ratione facilis.ipisicing elit. Ipsum fugiat omnis molestiae architecto tempore ea labore dolorum incidunt velit nisi? Quis doloribus quae accusamus qui sapiente culpa magnam ratione facilis.</p>
        <p>us qui sapiente culpa magnam ratione facilis.ipisicing elit. Ipsum fugiat omnis molestiae architecto tempore ea labore dolorum incidunt velit nisi? Quis doloribus quae accusamus qui sapiente culpa magnam ratione facilis.ipisicing elit. Ipsum fugiat omnis molestiae architecto tempore ea labore dolorum incidunt velit nisi? Quis </p>
        </div>
        
    </div>
    </div>
  )
}

export default ayush