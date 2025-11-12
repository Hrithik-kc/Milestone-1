"use client";
import  { useState } from "react";
import { useRouter } from "next/navigation";
export default function Navbar() {
    const [ToggleMenu, setToggleMenu] = useState(false);
    const [TogglePages, setTogglePages] = useState(false);
    const router = useRouter();
    return <div className = "static ]">
          <div className= "w-[100%]">
                <div className = "  h-[40%] w-[100%] bg-gray-500 flex flex-row">
                <div className = "text-white font-bold text-[20px] pl-10 pt-3 sm:block">envato</div><div className = "mt-3 ml-1 text-[20px] text-white">Market</div>
                <button className = "md:flex flex-auto md:bg-[#597A2E] font-bold text-[15px] text-white w-15 h-8  mt-2 mb-2 mr-10 ml-260 hover:bg-[#76AE11] pt-1 pl-9.5 ">Buy</button>
            </div>
          {/* socials */}
            <div className = "flex flex-row md:h-15 w-[100%] bg-gradient-to-r from-[#8E5E2B] via-[#D4A96F] to-[#8E5E2B] flex flex-row">
              <div className = "text-white  text-[17px] ml-10 pt-4 flex flex-row">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round" class="lucide lucide-phone-call-icon lucide-phone-call mt-1  "><path d="M13 2a9 9 0 0 1 9 9"/><path d="M13 6a5 5 0 0 1 5 5"/><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"/></svg>
                <div className = "pl-3">Phone: 123456789</div></div>
              <div className = "text-white  text-[17px] ml-10 pt-4 font-bold flex flex-row">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round" class="lucide lucide-mail-icon lucide-mail"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/><rect x="2" y="4" width="20" height="16" rx="2"/></svg>
                <div className = "pl-2">Email: </div></div><div className = "text-white text-[17px] ml-2 pt-4">food@restan.com</div>
              <div className = "ml-90 mt-2 h-10 w-10"></div>
              <div className = "flex flex-row-reverse mr-10 pt-2.5">
              <div className="">
                <select className="h-8 w-25 appearance-none ml-4 border-1 border-amber-500 text-center text-black font-bold rounded-md bg-white">
                  <option>English</option>
                  <option>French</option>
                  <option>Hindi</option>
                </select>
                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round" class="lucide lucide-languages-icon lucide-languages -ml-6 -mt-8"><path d="m5 8 6 6"/><path d="m4 14 6-6 2-3"/><path d="M2 5h12"/><path d="M7 2h1"/><path d="m22 22-5-10-5 10"/><path d="M14 18h6"/></svg>
                </div>  
              </div>
              <div className = "border-r-1 border-gray-800 h-10 mt-2.5 -ml-5"></div>
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round" class="lucide lucide-facebook-icon lucide-facebook ml-10 mt-3"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round" class="lucide lucide-instagram-icon lucide-instagram ml-4 mt-3"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round" class="lucide lucide-twitter-icon lucide-twitter ml-4 mt-3"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round" class="lucide lucide-youtube-icon lucide-youtube ml-4 mt-3"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>
          </div>
            </div>
          {/* Menu top */}
            <div className ="h-[50%] w-[100%] ">
              <img src = "https://coffeecafe.42web.io/cafe%20image/image%201.jpg"
              alt = "image" className = "h-120 w-[100%]" /> 

              <div className = "grid grid-col-4 gap-2 absolute top-40 border-b-1 border-gray-500 w-[100%]">
                <div>
                  <img src = "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Flogo-light.png&w=1920&q=75" 
                  className = " top-35 left-10 h-20 w-30 ml-10 mb-5"></img>
                </div>  
                <div className = "ml-80 -mt-20 ">
                  <div className = "grid grid-cols-4">
                  {/* HOME */}
                    <ul className ="flex flex-row">
                    <li>
                      <button
                      className = "cursor-pointer text-[25px] text-white ml-15 font-serif font-semibold"
                      onClick={() => router.push("/")}
                      >Home
                      </button>
                    </li>
                    </ul>
                  {/*ABOUT*/}
                      <button
                      onClick={() =>{ 
                        setTogglePages(!TogglePages);
                        setToggleMenu(false);
                      }}
                      className = " absolute text-[25px] text-white ml-45 font-serif font-semibold w-20"
                      >Pages
                      </button>
                      {TogglePages && (
                     <ul className ="flex flex-row">
                    <li>
                      <div 
                         className = {`${TogglePages ? "block" : "hidden"} absolute rounded-[10px] inset-shadow-sm bg-gradient-to-r from-[#DBDED9] to-[#77512A] w-60 h-50 -ml-25 mt-10 motion-safe:animate-[wiggle_1s_ease-in-out_infinite] `}>
                        <div className = "mt-5 ml-5  ">
                        <div className = "cursor-pointer transiton delay-50 duration-300 ease-in-out hover:scale-110"
                            onClick={() => router.push("")}
                          ><a herf = "#" className = " text-[25px] text-black font-serif font-semibold ">About us</a></div>
                        <div className = " mt-2 cursor-pointer transiton delay-50 duration-300 ease-in-out hover:scale-110"
                            onClick={() => router.push("../login")}
                          ><a herf = "#" className = "text-[25px] text-black font-serif font-semibold ">Login</a></div>
                        <div className = "mt-2 cursor-pointer transiton delay-50 duration-300 ease-in-out hover:scale-110"
                            onClick={() => router.push("../register")}
                          ><a herf = "#" className = " text-[25px] text-black font-serif font-semibold ">Register</a></div>
                        </div>
                      </div>
                      </li>
                    </ul>
                    )}
                   {/* MENU */}
                      <button
                      onClick={() =>{ 
                        setToggleMenu(!ToggleMenu);
                        setTogglePages(false);
                      }}
              
                      className = "absolute text-[25px] text-white ml-75 font-serif font-semibold w-20"
                      >Menu
                      </button>
                      {ToggleMenu && (
                     <ul className ="flex flex-row">
                    <li>
                      <div  id = "Menudrop"
                         className = {`${ToggleMenu ? "block" : "hidden"} absolute rounded-[10px] inset-shadow-sm bg-gradient-to-r from-[#DBDED9] to-[#77512A] w-60 h-50 ml-7 mt-10 motion-safe:animate-[wiggle_1s_ease-in-out_infinite] `}>
                        <div className = "mt-5 ml-5  ">
                        <div className = "cursor-pointer transiton delay-50 duration-300 ease-in-out hover:scale-110"
                            onClick={() => router.push("../menu")}
                          ><a herf = "#" className = " text-[25px] text-black font-serif font-semibold ">Menu 1</a></div>
                        <div className = "mt-5 cursor-pointer transiton delay-50 duration-300 ease-in-out hover:scale-110"><a herf = "#" className = "text-[25px] text-black font-serif font-semibold ">Menu 2</a></div>
                        <div className = "mt-5 cursor-pointer transiton delay-50 duration-300 ease-in-out hover:scale-110"><a herf = "#" className = " text-[25px] text-black font-serif font-semibold ">Menu 3</a></div>
                        </div>
                      </div>
                      </li>
                    </ul>
                    )}
                   {/* BLOG */}
                  </div>
                <div >
                  <img 
                    src = "https://www.kindpng.com/picc/m/478-4788427_shopping-cart-button-shopping-cart-logo-white-hd.png" alt="cart"
                   className = "rounded-[300px]  h-15 w-15 -mt-15  ml-190 cursor-pointer"
                  >
                  </img>
                </div>
                <div className = " border-1 border-white font-bold text-[20px] text-white w-40 h-10 rounded-[5px] pl-2 pt-1 -mt-13 ml-210 mr-20 hover:bg-white hover:text-black cursor-pointer">
                  <button >RESERVATION</button>
                </div>
                </div>
              </div>  
              <div className = "absolute  top-120 left-140 font-semibold font-serif text-white text-[50px] flex justify-center items-center ">
               
              </div>
            </div>
    </div>
}

