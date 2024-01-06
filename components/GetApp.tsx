import React from 'react'
import Button from './Button'

const GetApp = () => {
  return (
    <div className='drop-shadow-2xl rounded-3xl  text-white mx-auto mt-20 max-w-[1440px] px-6 lg:px-20 flex flex-col lg:mt-9 bg-black'>
        <h1 className='mt-5 text-2xl md:text-4xl font-extrabold'>Get our app for free NOW!</h1>
        <p className='mt-5 sm:text-md md:text-xl'>Available on iOS and Android</p>

          <div className='m-4'>
          <Button
            type="button"
            title='Download App'
            icon='/apple.svg'
            />
            </div>
          <div className='m-4'>
          <Button
            type="button"
            title='Download App'
            icon='/google-play.svg'
            />
            </div>
            <div className='m-5 flex lg:flex-row flex-col justify-evenly'>
        <img className='w-[230px]' src="android.png" alt="" />
        <img className='w-[230px]' src="apple.png" alt="" />
            </div>

    </div>
  )
}

export default GetApp