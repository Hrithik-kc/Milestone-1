import React from "react";
export default function Navbar() {
  return (
    <div>
      <div className="bg-gray-900 h-13 w-full justify-between flex flex-row  ">
        <div className="text-3xl text-amber-500 font-bold m-2 flex flex-row">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvu_NocAGYCF3RvpGXf9IpJQkuVX4M7gzZPA&s"
            className="h-24 w-24 rounded-full -mt-5"
          ></img>
          Sahyadri Market
        </div>
        <button className="bg-green-600 h-8 w-24 rounded-md m-3.5">
          Buy now
        </button>
      </div>
      <div>
        <img
          src="https://cdn.pixabay.com/video/2024/02/25/201947-916877801_tiny.jpg"
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
    </div>
  );
}
