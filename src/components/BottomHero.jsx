import React from 'react'

const BottomHero = () => {
  return (
    <div className='bg-purple-100 py-10'>
        <div className='flex max-w-7xl px-3 mx-auto flex-col md:flex-row gap-4  justify-around items-center'>
            <div>
                <h2 data-aos="fade-down" className='text-4xl font-bold'>If you want to become an <br /> <span className='text-green-600 text-5xl'>Successfull freelancer</span></h2>
                <button data-aos="fade-up-right" className='bg-orange-500 py-2 px-4 mt-3 rounded-md font-bold text-white'>Stay with us</button>
            </div>
            <div className='flex justify-center items-center'>
                <img data-aos="fade-left"  className='w-1/2' src="https://i.ibb.co/yW6rpMN/418-4184671-website-design-and-website-development-services-web-developer-removebg-preview.png" alt="" />
            </div>
        </div>
    </div>
  )
}

export default BottomHero