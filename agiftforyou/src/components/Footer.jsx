import React from "react";
import { Link } from "react-router-dom";
import fb_pic from '../images/facebook.png'
import ig_pic from '../images/instagram.png'

export default function Footer() {
    return (
    <>
    <div className="flex bg-rose-quartz justify-evenly items-center h-96 w-full ">
      <div className="container mx-auto grid grid-cols-3 gap-4 py-3 justify-items-center p-6">
      <div className=" flex flex-col gap-7 ">
        <div className="flex flex-row">
        <div><img
              src={fb_pic}
              alt="Facebook"
              className=" w-12 h-12 cursor-pointer "
            />
        </div>
            <p className=" ml-2 flex items-center text-2xl text-red-400 font-extrabold" >A Gift for Meow</p>
        </div>
          <div className="flex flex-col gap-4">
            <p className=" ml-1 text-red-400 text-xl font-semibold">Follow me on:</p>

          <div className="flex gap-7 items-center ml-1">
            <a href="https://www.facebook.com/le.hoangnguyen.39142">
              <img src={fb_pic} alt="Facebook" className="w-8 h-8 cursor-pointer"/>
            </a>
            <a href="https://www.instagram.com/le_hnguyenn03/">
              <img src={ig_pic} alt="Instagram" className="w-8 h-8 cursor-pointer"/>
            </a>
            
          </div>
          </div>
          
          <div className="text-red-400 ">
                <h2>©AGiftForMeow 2024. All Rights Reserved</h2>
            </div>
        </div>
        <div className=" flex flex-col gap-5 text-red-400 pt-4 text-xl">
          <h1 className="flex justify-center font-extrabold pl-2">QUICK LINKS</h1>
          <Link to="/contact-us" className=" cursor-pointer ml-2 hover:underline hover:text-senerity hover:font-bold">Contact Us</Link>
          <p className=" cursor-pointer ml-2 hover:underline hover:text-senerity hover:font-bold">FAQs</p>
        </div>

        <div className=" flex flex-col gap-3 justify-center text-xl">
          <h1 className="font-extrabold text-red-400 pl-2">CONTACT & INFORMATION</h1>
          <div className="flex flex-row items-center gap-1">
            <div className="flex flex-col ">
                <p className="  ml-2 text-red-400">Phone number</p>
                <p className="  ml-2 text-red-400 text-xl">0989 123 456</p>
            </div>
          </div>
          
          <div className="flex flex-row items-center gap-1 ">
            <div className="flex flex-col ">
                <p className="  ml-2 text-red-400">Opening Hour</p>
                <p className="  ml-2 text-red-400 text-xl">06:30 AM - 23:59 PM</p>
            </div>
          </div>

        </div>
        <p className="text-center text-4xl text-red-500 w-[1000px] ml-[1000px] mt-6">Ngoăn Hoàng Nê loves Meow Meow with all his heart</p>
        
      </div>
    </div>
    
    </>);
}