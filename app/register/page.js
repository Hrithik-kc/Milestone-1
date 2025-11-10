import React from "react";
import Navbar1 from "../components/Navbar1";
import Footer1 from "../components/Footer1";
export default function Register() {
  return  <div className ="bg-white">
          {/* navbar */}
          <div className = "">
            <div className = "absolute  top-120 left-140 font-semibold font-serif text-white text-[50px] flex justify-center items-center">REGISTER NOW</div>
            <Navbar1/>
          </div>
          {/*register main*/}
          <div className = "md:h-[80%] w-[83%] shadow-xl/20 rounded-[5px] bg-white ml-30 mt-10 mb-10  flex flex-row">
              <img src = "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fthumb%2F14.jpg&w=3840&q=75" alt="bg"
              className = "w-[50%] h-170"
              ></img>
              <div className = "flex flex-col ">
                <div className = "font-serif text-[35px] pl-20 pt-15 text-[#AA6C39] font-semibold">CREATE AN ACCOUNT</div>
                <div className = "text-[20px] pl-20  text-gray-500 -">Enter your details to create a new account</div>
                <input type = "email" placeholder="*Email" className = "w-90 h-10 mt-5 ml-20 rounded-[5px] bg-gray-700 pl-2 border-1 border-gray-300 text-[20px]"></input>
                <input type = "password" placeholder="*Password" className = "w-90 h-10 mt-5 ml-20 rounded-[5px] bg-gray-700 pl-2 border-1 border-gray-300 text-[20px]"></input>
                <input type = "password" placeholder="*Confirm Password" className = "w-90 h-10 mt-5 ml-20 rounded-[5px] bg-gray-700 pl-2 border-1 border-gray-300 text-[20px]"></input>
                <button className = " bg-[#B8860B] font-bold text-[20px] text-white w-90 h-10 rounded-[5px] mt-10 ml-20 hover:bg-yellow-400 ">REGISTER</button>
                <div className = "font-serif text-[25px] text-black mb-6 pl-42 pt-10">Or Register with</div>
                <div className = "flex flex-row">
                    <button className = " bg-white text-[20px] text-black w-40 h-12 rounded-[5px] ml-20 flex flex-row border-1 border-gray-300">
                        <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWg7X0YYzUCU5m8BA_sH_ti92q4X0lCz5h_w&s" alt = "ggl" className = "pt-1 w-10 h-10"></img>
                        <div className = "pl-5 pt-1.5">Google</div> 
                    </button>
                    <div className = "relative inline-block">
                        <button className = " bg-white text-[20px] text-black w-40 h-12 rounded-[5px] ml-10 flex flex-row border-1 border-gray-300">
                        <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFSNFvomhiSK6UCLA0BAzdpFzc2kyuFOj4xefsRruR5w&s" alt = "ggl" className = "mask-clip-border pt-1 w-10 h-10 mix-blend-normal"></img>
                        <div className = "pl-5 pt-1.5">Facebook </div> 
                        </button>
                    </div>
                </div>
                <div>
                  <div className ="text-gray-500 text-[17px] ml-20 mt-6">Already have an account?</div>
                  <div className ="text-[#B8860B] text-[17px] ml-70 -mt-6.5 underline cursor-pointer">Login here</div>
                </div>
              </div>
          </div>
          <div>
              <Footer1/>
          </div>

          
  </div>
}