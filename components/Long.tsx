import React from 'react'

const Long = () => {
  return (
    <div className='rounded-3xl drop-shadow-2xl mx-auto mt-20 max-w-[1440px] px-6 lg:px-20 flex flex-col lg:mt-9 bg-stone-300'>
        <h1 className='mt-5 text-2xl md:text-4xl font-extrabold'>Long-range Deliveries</h1>
        
        <div className='mt-5 sm:text-md md:text-xl'>
        <p className='font-extrabold'>Wanna send a present to your loved ones in a neighboring town?</p>
        <p className='font-extrabold'>Or a special delivery to your bussiness partner (b2b)?</p>
        <p className='font-extrabold'>We've got you covered!</p>
        </div>
        <img src="truck.png" alt="" />
    </div>
  )
}

export default Long