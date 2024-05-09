import React from 'react'
import herImg1 from '../images/her-img-1.png';
import Headers from '../components/Headers';
import { TypeAnimation } from 'react-type-animation'
const AboutHer = () => {
  return (
    <>
    <div><Headers/></div>
    <div className=' max-w-full bg-gradient-to-br from-[#E3BFC3] to-[#DD7A83]'>
      <div className='md:grid md:grid-cols-2 sm:py-16'>
          <div className='mt-4 md:mt-0 text-left flex'>
              <div className='my-auto w-[1500px]'>
                  <h2 className='text-7xl font-bold mb-4 ml-20 text-center text-rose-500'>This is Meow Meow</h2>
                    <h1 className='text-white text-7xl font-extrabold text-center pl-14'>
                      <h2 className='text-center pr-4'>She is</h2>
                      <TypeAnimation sequence={["18 + 4 years old",1500,"cute and pretty",1500,"energetic and lovely",1500]}wrapper='span' speed={50} repeat={Infinity}/>
                    </h1>
              </div>
          </div>
          <img className='ml-56 rounded-3xl py-8 md:py-0 w-[550px] h-[650px]' src={herImg1} alt='/' />
      </div>
    </div>

    <div className='max-w-full bg-gradient-to-bl from-[#DD7A83] to-[#BF9DCD]'>
      <div className='md:grid md:grid-cols-2 sm:py-16'>
        <img className='ml-40 rounded-3xl py-8 md:py-0 w-[550px] h-[650px]' src={herImg1} alt='/' />
        <div className='mt-4 md:mt-0 text-left flex'>
            <div className='my-auto w-[1500px]'>
                <h2 className='text-7xl font-bold mb-4 ml-20 text-center text-rose-500'>This is Meow Meow</h2>
                <h1 className='text-white text-7xl font-extrabold text-center pl-14'>
                    <h2 className='text-center pr-4'>She is</h2>
                    <TypeAnimation sequence={["18 + 4 years old",1500,"cute and pretty",1500,"energetic and lovely",1500]} wrapper='span' speed={50} repeat={Infinity}/>
                </h1>
            </div>
        </div>
      </div>
    </div>

    {/* <div className=' max-w-full bg-gradient-to-br from-[#BF9DCD] to-[#E1B79F]'>
      <div className='md:grid md:grid-cols-2 sm:py-16'>
          <div className='mt-4 md:mt-0 text-left flex'>
              <div className='my-auto w-[1500px]'>
                  <h2 className='text-7xl font-bold mb-4 ml-20 text-center text-rose-500'>This is Meow Meow</h2>
                    <h1 className='text-white text-7xl font-extrabold text-center pl-14'>
                      <h2 className='text-center pr-4'>She is</h2>
                      <TypeAnimation sequence={["18 + 4 years old",1500,"cute and pretty",1500,"energetic and lovely",1500]}wrapper='span' speed={50} repeat={Infinity}/>
                    </h1>
              </div>
          </div>
          <img className='ml-56 rounded-3xl py-8 md:py-0 w-[550px] h-[650px]' src={herImg1} alt='/' />
      </div>
    </div> */}
    </>
  
  )
}

export default AboutHer
