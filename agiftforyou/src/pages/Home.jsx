import React from 'react'
import '../index.css';
import Headers from '../components/Headers';
import Footer from '../components/Footer';
import maldives from '../images/maldives.png';

const Home = () => {
  return (
    <div>
        
        <div className="relative">
          <div>
            <div><Headers/></div>
            <img src={maldives} className="w-full h-auto" alt="beach background" />
          </div>
          <div className="absolute top-1/2 left-[540px] transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
            <p className='font-bold text-9xl'>Welcome to</p>
            <br></br>
            <p className='font-bold text-8xl'>A Gift For Meow</p>
          </div>
    </div>
        <div><Footer/></div>
    </div>
  )
}

export default Home