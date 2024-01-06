import Image from "next/image"
import Button from "./Button"

const Hero = () => {
  return (
    <section className='mx-auto max-w-[1440px] px-6 lg:px-20 3xl:px-0 flex flex-col lg:mt-5  '>
      <div className="">
        <div className="flex flex-col gap-2">
        <h1 className="text-2xl md:text-4xl font-extrabold">DELIVERIES START HERE!</h1>
        <p className="text-xl">Logistics is our passion! Our purpose is to satisfy all of our customers delivery demands.</p>
        <img className="w-40" src="rate.png" alt="" /> <p>(157k Reviews)</p>

        <div className="">
          <Button type="button" title="Download App"></Button>
        </div>
      </div>
        
        <img className="" src="hero.jpg" alt="" />
      </div>
    </section>
  )
}

export default Hero