import React from "react";
import Navbar from "../components/Navbar1";
import Footer from "../components/Footer1";
import {breakfastItems, dessertItems} from "../components/Menu";
export default function Register() {
  return  <div className ="bg-white  dark:bg-black">
              <div>
                <Navbar/>
                <div className = "absolute top-120 left-140 font-semibold font-serif text-white text-[50px] flex justify-center items-center ">
                    Food Menu
                </div>
             </div>
          {/*meun Main*/}
           {/*Breakfast Menu*/}
           <div className = "grid grid-cols-2 flex flex-row ">
              <div className = "h-150 w-150 mt-20 ml-15">
                  <div className = "flex flex-col -ml-10">
                    <div className = "mt-10 ml-115 h-50 w-50  bg-[#BA9368] absolute border-1 [clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)] dark:bg-[#1319A3] border-[#050F79]">
                      <div className = "text-[#EEE6A7] font-bold font-serif pt-11 pl-12 text-[35px] ">Menu</div>
                      <div className = "font-bold text-[20px] ml-11 text-white font-serif">BreakFast</div>
                    </div>
                  </div>
                  <img src = "https://media.istockphoto.com/id/839554548/photo/healthy-full-american-breakfast.jpg?s=612x612&w=0&k=20&c=iQVE5Tv1KOfaY9GWJnXbECUPIKb_Lbq3keQ3z-D_evI="
                      alt = "breakfast" 
                        className = "h-140 w-140 -ml-10 rounded-[10px] static"
                  ></img>
              </div>
              <div className = "flex flex-col -mt-15">
                <div className = "flex flex-row"><div className ="border-1 border-gray-600 h-10 w-15 pl-3 pt-1.5 text-gray-600 font-bold ml-130 mt-30">Half</div>
                <div className ="border-1 border-gray-600 h-10 w-15 ml-7 pl-3 pt-1.5 text-gray-600 font-bold mt-30">Full</div></div>
                <div>
                    {breakfastItems.map((item) => (
                    <div className = "flex flex-row" key={item.id}>
                    <img src = {item.img} 
                        className ="h-40 w-40 rounded-full mt-3 ml-10"
                    /> 
                    <div>
                        <div className = "font-bold text-[20px] ml-5 text-black font-serif mt-8 grid grid-cols-2"><div className = "dark:text-white">{item.name}</div><div className ="ml-20 text-[#BA9368] tracking-wide text-[25px]">{item.price}</div></div> 
                        <div className = "font-bold text-[15px] ml-5 text-gray-500 font-serif mt-3 grid grid-cols-2 "><div>{item.description}</div><div className = "ml-25">Free drinks</div></div> 
                    </div>
                    </div>
                    ))}
                </div>
              </div>
           </div>
           {/*Dessert Menu*/}
           <div className = "grid grid-cols-2 flex flex-row">
              <div className = "h-150 w-150 mt-20 ml-200">
                  <div className = "flex flex-col">
                    <div className = "md:mt-10 ml-90 h-50 w-50  bg-[#BA9368] absolute border-1 [clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)]">
                      <div className = "text-[#EEE6A7] font-bold font-serif pt-11 pl-12 text-[35px] ">Menu</div>
                      <div className = "font-bold text-[20px] ml-14 text-white font-serif">Desserts</div>
                    </div>
                  </div>
                  <img src = "https://media.istockphoto.com/id/623709028/photo/table-with-various-cookies-tarts-cakes-cupcakes-and-cakepops.jpg?s=612x612&w=0&k=20&c=NX-Ld03_GDHO77WjzzrUacReuoaXHajIXPsjdxgJDG8="
                      alt = "dessert" 
                        className = "h-140 w-140 -ml-25 rounded-[10px] static"
                  ></img>
              </div>
              <div className = "flex flex-col -mt-15 -ml-180">
                <div className = "flex flex-row"><div className ="border-1 border-gray-600 h-10 w-15 pl-3 pt-1.5 text-gray-600 font-bold ml-133 mt-30">Half</div>
                <div className ="border-1 border-gray-600 h-10 w-15 ml-7 pl-3 pt-1.5 text-gray-600 font-bold mt-30">Full</div></div>
                <div>
                    {dessertItems.map((item) => (
                <div className = "flex flex-row" key = {item.id}>
                    <img src = {item.img}
                        className ="h-40 w-40 rounded-full mt-3 ml-15"
                    ></img>
                    <div>
                        <div className = "font-bold text-[20px] ml-5 text-black font-serif  mt-8 grid grid-cols-2"><div className = "dark:text-white">{item.name}</div><div className ="ml-20 text-[#BA9368] tracking-wide text-[25px]">{item.price}</div></div> 
                        <div className = "font-bold text-[15px] ml-5 text-gray-500 font-serif mt-3 grid grid-cols-2 "><div>{item.description}</div><div className = "ml-25">Free drinks</div></div> 
                    </div>
                </div>
                ))}
                </div>
              </div>
           </div>
           {/*Dinner Menu*/}
          {/*menu bottom*/}
            <div>
                <Footer/>
            </div>
          
        </div>
}