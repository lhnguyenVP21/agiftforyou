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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
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
                  <h2 className='text-4xl font-bold mb-4 ml-20 text-center text-rose-500'>This is Little Meow Meow</h2>
                    <h1 className='text-white text-5xl font-extrabold text-center pl-14'>
                      <h2 className='text-center pr-6'>She is</h2>
                      <TypeAnimation sequence={["18 + 4 years old",1500,"cute and pretty",1500,"energetic and lovely",1500]}wrapper='span' speed={50} repeat={Infinity}/>
                    </h1>
              </div>
          </div>
          <img className='ml-44 rounded-3xl py-8 md:py-0 w-[400px] h-[450px]' src={herImg1} alt='/' />
      </div>
    </div>

    <div className='max-w-full bg-gradient-to-br from-[#00AFB9] to-[#FED9B7]'>
      <div className='md:grid md:grid-cols-2 sm:py-16'>
        <img className='ml-20 rounded-3xl py-8 md:py-0 w-[450px] h-[450px]' src={images[currentImageIndex]} alt={`food ${currentImageIndex + 1}`} />
        <div className='mt-4 md:mt-0 text-left flex'>
            <div className='my-auto w-[900px]'>
                <h2 className='text-5xl font-bold mb-4 text-center text-rose-500'>She really loves cooking</h2>
                <br/>
                <h1 className='text-white font-semibold text-2xl text-center'>
                  She can cook lots of tasty dishes which I really love <FontAwesomeIcon icon={faHeart} className='text-red-400' />
                </h1>
                <div className='text-2xl text-white py-5 pl-44'>
                  <p>- Grilled Chicken</p>
                  <p>- Banhmi full topping</p>
                  <p>- Soup with pork paste</p>
                  <p>- etc...</p>
                </div>
                <p className='text-rose-400 text-center text-2xl font-semibold'>Just hoping that one day that we can cook together <FontAwesomeIcon icon={faHeart} /></p>
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
          <img className='ml-56 rounded-3xl py-8 md:py-0 w-[400px] h-[650px]' src={herImg1} alt='/' />
      </div>
    </div>
    <div><Footer/></div>
    </>
  
  )
}

export default AboutHer
