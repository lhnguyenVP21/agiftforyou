import React, { useState, useEffect } from 'react'
import herImg1 from '../images/her-img-1.png';
import Headers from '../components/Headers';
import Footer from '../components/Footer';
import food1 from '../images/food1.jpg';
import food2 from '../images/food2.jpg';
import food3 from '../images/food3.jpg';

import food5 from '../images/food5.jpg';
import food6 from '../images/food6.jpg';
import { TypeAnimation } from 'react-type-animation'
const images = [food1, food2, food3, food5, food6];
const AboutHer = () => {

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3600);

    return () => clearInterval(interval);
  }, []);
  return (
    <>
    <div><Headers/></div>
    <div className=' max-w-full bg-gradient-to-bl  from-[#64c3c5] to-[#00AFB9]'>
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

    <div className='max-w-full bg-gradient-to-br from-[#00AFB9] to-[#FED9B7]'>
      <div className='md:grid md:grid-cols-2 sm:py-16'>
        <img className='ml-40 rounded-3xl py-8 md:py-0 w-[650px] h-[650px]' src={images[currentImageIndex]} alt={`food ${currentImageIndex + 1}`} />
        <div className='mt-4 md:mt-0 text-left flex'>
            <div className='my-auto w-[900px]'>
                <h2 className='text-6xl font-bold mb-4 ml-8 text-center text-rose-500'>She loves cooking</h2>
                <br/>
                <h1 className='text-white text-7xl font-extrabold text-center pl-14'>
                    <TypeAnimation sequence={["Grilled chicken",2000,"Banhmi full topping",1600,"Soup with pork paste",1500,"Purple yam soup,... ",500,"Other delicious dishes",1000]} wrapper='span' speed={50} repeat={Infinity}/>
                </h1>
            </div>
        </div>
      </div>
    </div>

    <div className=' max-w-full bg-gradient-to-bl from-[#FED9B7] to-[#F07167]'>
      <div className='md:grid md:grid-cols-2 sm:py-16'>
          <div className='mt-4 md:mt-0 text-left flex'>
              <div className='my-auto w-[1500px]'>
                  <h2 className='text-7xl font-bold mb-4 ml-20 text-center text-rose-500'>She loves</h2>
                    <h1 className='text-white text-7xl font-extrabold text-center pl-24'>
                      <TypeAnimation sequence={["Tiramisu",1500,"Kimbab",1500,"Balloons",1500,"Going to the beach",1500]}wrapper='span' speed={50} repeat={Infinity}/>
                    </h1>
              </div>
          </div>
          <img className='ml-56 rounded-3xl py-8 md:py-0 w-[550px] h-[650px]' src={herImg1} alt='/' />
      </div>
    </div>
    <div><Footer/></div>
    </>
  
  )
}

export default AboutHer
