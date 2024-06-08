import React from 'react'
import doc from '../assets/doc_new.jpg'

const quote = () => {
  return (
    <div className='flex flex-col bg-sky-200 items-center'>

        <img src={doc} alt="doc" className='rounded-full my-4' width={100}  />
        <p className='font-semibold text-xl'>Dr. Victor Blane</p>
            <p className='text-lg'>Therapist</p>
        <div className='flex  items-center'>
            
        <span className='text-8xl font-serif'>"</span><p className='text-lg text-center'>The only zeros I care about are the ones in<br /> my Bank Acount</p><span className='text-8xl font-serif'>"</span>
        </div>
    </div>
  )
}

export default quote