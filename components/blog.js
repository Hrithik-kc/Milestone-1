"use client"
import React from "react";

export default function Blog(){
    return(
        <div>
             <div className="bg-gray-100 w-screen">
                    <div>
                      <div className="pt-24 justify-self-center text-2xl text-amber-800 font-semibold">
                        News & Blogs
                      </div>
                      <div className="md:text-4xl font-bold text-4xl md:mx-0 mx-16 md:text-start text-center text-black mt-8 justify-self-center">
                        Our Latest News & Blog
                      </div>
                      <div className="md:flex md:flex-row flex flex-col justify-center gap-10 mt-12">
                        <img
                          src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fblog%2F1.jpg&w=828&q=75"
                          className="md:h-100 md:w-xl h-80 w-100 md:ml-0 ml-3"
                        ></img>
                        <img
                          src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fblog%2F2.jpg&w=828&q=75"
                          className="md:h-100 md:w-xl h-80 w-100 md:ml-0 ml-3 md:mt-0 mt-50"
                        ></img>
                      </div>
                      <div className="md:flex md:flex-row flex flex-col gap-20 justify-center -mt-18">
                        <div className="bg-amber-100 md:h-70 h-70 md:w-lg w-100 md:mt-0 -mt-140 md:ml-0 ml-3 shadow-md">
                          <div className="bg-amber-800 w-20 h-20 md:ml-96 ml-72 -mt-9 text-2xl font-bold justify-self-center pl-4 ">
                            31 OCT
                          </div>
                          <div className="text-black ">
                            <div className="ml-8">BY MD SOHAG .BURGER ,FOOD</div>
                            <div className="font-semibold text-3xl ml-8 mt-5">
                              <div>Picked up a Brussels</div>
                              <div>burger Sprouts with</div>
                              <div>ham</div>
                            </div>
                            <button className="mt-5 ml-8">READ MORE</button>
                          </div>
                        </div>
                        <div className="bg-amber-100 md:h-70 h-70 md:w-lg w-100 md:mt-0 mt-68 shadow-md md:ml-0 ml-3">
                          <div className="bg-amber-800 w-20 h-20 md:ml-96 ml-72 -mt-9 text-2xl font-bold justify-self-center pl-4">
                            24 DEC
                          </div>
                          <div className="text-black">
                            <div className="ml-8">BY MD SOHAG .BURGER ,FOOD</div>
                            <div className="font-semibold text-3xl ml-8 mt-5">
                              <div>This prefabricated</div>
                              <div>passive house is highly</div>
                              <div>sustainable</div>
                            </div>
                            <button className="mt-5 ml-8">READ MORE</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

        </div>
    )
}