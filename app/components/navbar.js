"use client";
import React from "react";
import { useState } from "react";
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
        <img src={props.img} className="h-140 w-screen"></img>
        <div className="flex flex-row justify-around -mt-136 font-semibold ">
          <div className="flex flex-row">
            <img
              src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ficon%2F6.png&w=64&q=75"
              className="h-6 mx-1.5 w-auto hidden sm:block"
            ></img>
            <div className="hidden sm:block text-white">
              {" "}
              Phone:+919876534567
            </div>
          </div>
          <div className="flex flex-row ">
            <img
              src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ficon%2F6.png&w=64&q=75"
              className="h-6 mx-1.5 w-auto hidden sm:block "
            ></img>
            <div className="hidden sm:block light text-white">
              Email:hrithikkc@gmail.com
            </div>
          </div>
          <div className=" hidden sm:block text-white">
            Location:Sahyadri Campuse
          </div>
        </div>
        <div className="mb-6 hidden sm:block text-white">
          ________________________________________________________________________________________________________________________________________________________
        </div>
        <div className="flex flex-row m-4 justify-around font-bold cursor-pointer ">
          <div className="flex flex-row">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_zccfkLU76yXCyG_B1d5Up-3X-ZrYYfuL-g&s"
              className="h-5 w-7 -mt-3 -ml-3 block md:hidden "
            ></img>
            <Select op1="" op2="Login" op3="Register" op4="Menu" op5="Chef" />
          </div>
          <select
            className="hidden sm:block h-4 w-20 text-white rounded-2xl"
            onChange={(e) => {
              router.push(e.target.value);
            }}
          >
            <option value="/" className=" text-black font-semibold">
              Home
            </option>
            <option value="/" className=" text-black font-semibold rounded-2xl">
              Home1
            </option>
            <option value="/" className=" text-black font-semibold">
              Home2
            </option>
          </select>
 <select
            className="hidden sm:block h-4 w-20 text-white"
            onChange={(e) => {
              router.push(e.target.value);
            }}
          >
            <option value="/" className=" text-black font-semibold">
              Pages
            </option>
            <option value="/login" className=" text-black font-semibold">
              Login
            </option>
            <option value="/register" className=" text-black font-semibold">
              Register
            </option>
          </select>
          <select
            className="hidden sm:block h-4 w-20 text-white"
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
            className="hidden sm:block h-4 w-20 text-white"
            onChange={(e) => {
              router.push(e.target.value);
            }}
          >
            <option value="/blog" className=" text-black font-semibold">
              Blogs
            </option>
            <option value="/blog" className=" text-black font-semibold">
              Blogs Standard
            </option>
            <option value="/Blogs" className=" text-black font-semibold">
              Blogs with Sidebar
            </option>
          </select>
          <select
            className="hidden sm:block h-4 w-20 text-white "
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

      <div className=" md:text-7xl text-3xl font-semibold justify-self-center mt-20 text-white">
        {props.tittle}
      </div>
      <div className="flex flex-row justify-center ">
        <div className=" text-3xl text-black font-bold mt-6 ">{props.nav}</div>
        <div className="text-3xl text-black font-bold  mt-6">
          {props.current}
        </div>
      </div>
    </div>
  );
}
