"use client"
import React from "react";
import Select from "../components/select";
import { useRouter } from "next/navigation";
export default function Navbar(props) {
   const router = useRouter();
  return (
    <div>
      <div className="bg-gray-900 h-13 w-full justify-between flex flex-row  ">
        <div className="md:text-3xl text-xl text-amber-500 font-bold m-2 flex flex-row">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvu_NocAGYCF3RvpGXf9IpJQkuVX4M7gzZPA&s"
            className="h-24 w-24 rounded-full -mt-5"
          ></img>
          Sahyadri Cafe
        </div>
        <button className="bg-green-600 h-8 w-24 rounded-md m-3.5">
          Buy now
        </button>
      </div>
      <div>
        <img
          src="https://b.zmtcdn.com/data/pictures/chains/6/18208896/855c9047d1ed6fbec59c8ee02183417c.jpg?fit=around|750:500&crop=750:500;*,*"
          className="h-140 w-screen"
        ></img>
        <div className="flex flex-row justify-around -mt-136 font-semibold ">
          <div className="flex flex-row">
            <img
              src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ficon%2F6.png&w=64&q=75"
              className="h-6 mx-1.5 w-auto hidden sm:block"
            ></img>
            <div className="hidden sm:block"> Phone:+919876534567</div>
          </div>
          <div className="flex flex-row ">
            <img
              src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ficon%2F6.png&w=64&q=75"
              className="h-6 mx-1.5 w-auto hidden sm:block "
            ></img>
            <div className="hidden sm:block">Email:hrithikkc@gmail.com</div>
          </div>
          <div className=" hidden sm:block">Location:Sahyadri Campuse</div>
        </div>
        <div className="mb-6 hidden sm:block">
          ________________________________________________________________________________________________________________________________________________________
        </div>
        <div className="flex flex-row m-4 justify-around font-bold cursor-pointer ">
          {/* <Select op1="Home" op2="Home1" op3="Home2" /> */}
          <select
            className="hidden sm:block h-4 w-20"
            onChange={(e) => {
              router.push(e.target.value);
            }}
          >
            <option className=" text-black font-semibold">Home</option>
            <option value="/home1" className=" text-black font-semibold">
              Home1
            </option>
            <option value="/home2" className=" text-black font-semibold">
              Home2
            </option>
          </select>
          <Select op1="Pages" op2="Login" op3="Resigter" />
          <select
            className="hidden sm:block h-4 w-20"
            onChange={(e) => {
              router.push(e.target.value);
            }}
          >
            <option className=" text-black font-semibold">Menu</option>
            <option value="/menu" className=" text-black font-semibold">
              Menu1
            </option>
            <option value="/menu" className=" text-black font-semibold">
              Menu2
            </option>
          </select>
          <img
            src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Flogo-light.png&w=750&q=75"
            className=" h-15 w-auto md:mr-0 mr-28"
          ></img>

          <select
            className="hidden sm:block h-4 w-20"
            onChange={(e) => {
              router.push(e.target.value);
            }}
          >
            <option value="/Blogs" className=" text-black font-semibold">
              Blogs
            </option>
            <option value="/Blogs" className=" text-black font-semibold">
              Blogs Standard
            </option>
            <option value="/Blogs" className=" text-black font-semibold">
              Blogs with Sidebar
            </option>
          </select>
          <select
            className="hidden sm:block h-4 w-20 "
            onChange={(e) => {
              router.push(e.target.value);
            }}
          >
            <option value="/Blogs" className=" text-black font-semibold">
              Shops
            </option>
            <option value="/chef" className=" text-black font-semibold">
              Chef
            </option>
            <option value="/Blogs" className=" text-black font-semibold">
              Cart
            </option>
          </select>
          <button
            className="hidden sm:block h-4 w-20 font-semibold"
            onChange={(e) => {
              router.push(e.target.value);
            }}
          >
            <option value="/Blogs" className=" text-white font-semibold">
              Contact Us
            </option>
          </button>
        </div>
      </div>
      <div className=" md:text-6xl text-3xl font-semibold justify-self-center mt-36">
        {props.tittle}
      </div>
      <div className="flex flex-row justify-center ">
        <div className=" text-2xl text-black font-semibold mt-6">{props.nav}</div>
        <div className="text-2xl text-black font-semibold  mt-6">{props.current}</div>
      </div>
    </div>
  );
}
