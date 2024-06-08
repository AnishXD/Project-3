import React from 'react'
import logo from '../assets/logo.png'

const cura = () => {
  return (
    <div>
    <div className='flex justify-center  min-h-[70vh] mx-4 my-6'>
        
        <div className='w-1/2  text-lg flex flex-col justify-evenly'>        
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum fugiat omnis molestiae architecto tempore ea labore dolorum incidunt velit nisi? Quis doloribus quae accusamus qui sapiente culpa magnam ratione facilis.ipisicing elit. Ipsum fugiat omnis molestiae architecto tempore ea labore dolorum incidunt velit nisi? Quis doloribus quae accusamus qui sapiente culpa magnam ratione facilis.ipisicing elit. Ipsum fugiat omnis molestiae architecto tempore ea labore dolorum incidunt velit nisi? Quis doloribus quae accusamus qui sapiente culpa magnam ratione facilis.</p>
        <p>us qui sapiente culpa magnam ratione facilis.ipisicing elit. Ipsum fugiat omnis molestiae architecto tempore ea labore dolorum incidunt velit nisi? Quis doloribus quae accusamus qui sapiente culpa magnam ratione facilis.ipisicing elit. Ipsum fugiat omnis molestiae architecto tempore ea labore dolorum incidunt velit nisi? Quis </p>
        </div>
        <div className='w-1/2 flex items-center justify-center'>
            <img src={logo} alt="cura" width={600}/>
        </div>
    </div>
    </div>
  )
}

export default cura