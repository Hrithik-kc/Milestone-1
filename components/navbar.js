import React from "react";
export default function Navbar(props) {
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
      </div>
      <div className=" md:text-6xl text-3xl font-semibold justify-self-center mt-36">
        {props.tittle}
      </div>
      <div className="flex flex-row justify-center ">
        <div className=" text-2xl  font-semibold mt-6">
          {props.nav}
        </div>
        <div className="text-2xl mt-6">{props.current}</div>
      </div>
    </div>
  );
}
