'use client';

import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Image from 'next/image';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};



const Slider = () => {
  return (
    <div className='drop-shadow-2xl mx-auto max-w-[1440px] mt-7'>
      <h1 className='text-center text-3xl font-extrabold'>Looking for a delivery service for your business? SEARCH NO MORE!</h1>
      <h1 className='text-center text-2xl mb-7 mt-5'>A short list of companies that already work with us:</h1>
      <Carousel 
      swipeable={true}
      draggable={true}
      showDots={false}
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={3000}
      keyBoardControl={true}
      customTransition="transform 300ms ease-in-out"
      transitionDuration={2000}
      containerClass="carousel-container"
      centerMode={true}
      arrows={true}
      >
        <div><img className='h-30 drop-shadow-lg p-4' src="slide1.jpg" alt="" /></div>
        <div><img className='h-30 drop-shadow-lg p-4' src="slide2.jpg" alt="" /></div>
        <div><img className='h-30 drop-shadow-lg p-4' src="slide3.jpg" alt="" /></div>
        <div><img className='h-30 drop-shadow-lg p-4' src="slide4.jpg" alt="" /></div>
        <div><img className='h-30 drop-shadow-lg p-4' src="slide5.jpg" alt="" /></div>
        <div><img className='h-30 drop-shadow-lg p-4' src="slide6.jpg" alt="" /></div>
        <div><img className='h-30 drop-shadow-lg p-4' src="slide7.jpg" alt="" /></div> 
        <div><img className='h-30 drop-shadow-lg p-4' src="slide8.jpg" alt="" /></div>
        <div><img className='h-30 drop-shadow-lg p-4' src="slide9.jpg" alt="" /></div>       
        <div><img className='h-30 drop-shadow-lg p-4' src="slide10.jpg" alt="" /></div>
        <div><img className='h-30 drop-shadow-lg p-4' src="slide11.jpg" alt="" /></div>
        <div><img className='h-30 drop-shadow-lg p-4' src="slide12.jpg" alt="" /></div>
        <div><img className='h-30 drop-shadow-lg p-4' src="slide13.jpg" alt="" /></div>
        <div><img className='h-30 drop-shadow-lg p-4' src="slide14.jpg" alt="" /></div>

      </Carousel>
    </div>
  )
}

export default Slider