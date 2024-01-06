import React from 'react'

const Local = () => {
  return (
    <div className='rounded-3xl drop-shadow-2xl mx-auto mt-20 max-w-[1440px] px-6 lg:px-20 flex flex-col lg:mt-9 bg-orange-200'>
        <h1 className='mt-5 text-2xl md:text-4xl font-extrabold'>Personal Deliveries</h1>
        
        <div className='mt-5 z-30 sm:text-md md:text-xl'>
        <p className='font-extrabold'>Need to send a package to a friend?</p>
        <p className='font-extrabold'>Moving to a new house?</p>
        <p className='font-extrabold'>We are here for you!</p>
        </div>
        <div className='flex justify-center'>
        <img className='w-[650px]' src="dtruck.png" alt="" />
        </div>
    </div>
  )
}

export default Local