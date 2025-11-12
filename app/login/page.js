"use client"

import Footer from "../components/footer";
import { useRouter } from "next/navigation";

export default function Login() {
  const router=useRouter();
  return (
    <div className="bg-white">
      <div className="h-[40%] w-screen bg-gray-900 rounded-[10px] flex flex-row ">
        <div className="text-amber-600 font-bold w-2xl text-[20px] pl-10 pt-3">
          Sahyadri Cafe
        </div>
        <button className=" bg-lime-500 font-bold text-[15px] text-white w-25 h-10 rounded-[10px] mt-2 mb-2 ml-210 hover:bg-lime-600">
          Buy 
        </button>
      </div>

      {/* socials */}
      <div className="h-15 w-screen bg-gradient-to-r from-yellow-600 via-yellow-400 to-amber-500 flex flex-row">
        <div className="text-white  text-[17px] pl-15 pt-4">
          Phone: 123456789
        </div>
        <div className="text-white  text-[17px] ml-30 pt-4 font-bold">
          Email:{" "}
        </div>
        <div className="text-white text-[17px] ml-2 pt-4">food@restan.com</div>
        <div className="flex flex-row-reverse mr-10 pt-2.5">
          <div className="">
            <select className="h-8 w-25 appearance-none ml-120   border-1 border-amber-500 text-center text-black font-bold rounded-md bg-white">
              <option>English</option>
              <option>French</option>
              <option>Hindi</option>
            </select>
            <svg className="pointer-events"></svg>
            <img
              src="https://i.pinimg.com/474x/78/c0/12/78c012e7678761400082c6130487a463.jpg"
              alt="facebook"
              className="rounded-full h-3 w-3 "
            ></img>
          </div>
        </div>
      </div>
      {/* register top */}
      <div className="h-[50%] w-screen ">
        <img
          src="https://coffeecafe.42web.io/cafe%20image/image%201.jpg"
          alt="image"
          className="h-120 w-screen"
        />

        <div className="grid grid-col-4 gap-2 absolute top-40 border-b justify-center border-gray-500">
          <div>
            <img
              src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Flogo-light.png&w=1920&q=75"
              className=" top-35 left-10 h-20 w-30 ml-10 mb-5"
            ></img>
          </div>
          <div className="ml-30 -mt-20 justify-center">
            {/* HOME */}
            <select className=" top-90 left-10 font-serif font-bold text-white text-[20px] w-45 ml-45 -mr-3 appearance-none bg-transparent border-none focus:outline-none ">
              <option onClick={()=>{
                router.push("./")
              }}>Home</option>
            </select>
            {/* PAGES */}
            <select className=" top-90 left-10 font-serif font-bold text-white bg text-[20px] w-50 -ml-11  appearance-none bg-transparent border-none focus:outline-none">
              <option className="text-black">About Us</option>
              <option className="text-black">Chef</option>
              <option className="text-black">Chef Details</option>
            </select>
            {/* MENU */}
            <select className=" top-90 left-10 font-serif font-bold text-white text-[20px] w-45 -ml-15 appearance-none bg-transparent border-none focus:outline-none">
              <option className="text-black">PAGES</option>
              <option className="text-black">Menu Style One</option>
              <option className="text-black">Menu Style Two</option>
              <option className="text-black">Menu Style Three</option>
            </select>
            {/* BLOG */}
            <select className=" top-90 left-10 font-serif font-bold text-white text-[20px] w-45 -ml-15 appearance-none bg-transparent border-none focus:outline-none">
              <option className="text-black">Blog</option>
              <option className="text-black">Blog</option>
              <option className="text-black">Blog</option>
            </select>
            <div>
              <img
                src="https://www.kindpng.com/picc/m/478-4788427_shopping-cart-button-shopping-cart-logo-white-hd.png"
                alt="cart"
                className="rounded-[300px]  h-15 w-15 -mt-10  ml-190 cursor-pointer"
              ></img>
            </div>
            <div className=" border-1 border-white font-bold text-[20px] text-white w-40 h-10 rounded-[5px] pl-2 pt-1 -mt-13 ml-230 mr-29 hover:bg-white hover:text-black cursor-pointer">
              <button>RESERVATION</button>
            </div>
          </div>
        </div>
        <div className="absolute  top-120 left-140 font-semibold font-serif text-white text-[50px] flex justify-center items-center ">
        Login Now
        </div>
      </div>
      {/*register main*/}
      <div className="h-[80%] w-[83%] shadow-xl/20 rounded-[5px] bg-white ml-30 mt-10 mb-10  flex flex-row">
        <img
          src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fthumb%2F14.jpg&w=3840&q=75"
          alt="bg"
          className="w-[50%] h-170"
        ></img>
        <div className="flex flex-col ">
          <div className="font-serif text-[35px] pl-20 pt-15 text-[#AA6C39] font-semibold">
               WELCOME BACK
          </div>
          <div className="text-[20px] pl-20  text-gray-500 -">
             Enter your email and password to continue
          </div>
          <input
            type="email"
            placeholder="*Email"
            className="w-90 h-10 mt-5 ml-20 rounded-[5px] bg-gray-700 pl-2 border-1 border-gray-300 text-[20px]"
          ></input>
          <input
            type="password"
            placeholder="*Password"
            className="w-90 h-10 mt-5 ml-20 rounded-[5px] bg-gray-700 pl-2 border-1 border-gray-300 text-[20px]"
          ></input>
         
          <button className=" bg-[#B8860B] font-bold text-[20px] text-white w-90 h-10 rounded-[5px] mt-10 ml-20 hover:bg-yellow-400 ">
            LOGIN
          </button>
          <div className="font-serif text-[25px] text-black mb-6 pl-42 pt-10">
            Or Login with
          </div>
          <div className="flex flex-row">
            <button className=" bg-white text-[20px] text-black w-40 h-12 rounded-[5px] ml-20 flex flex-row border-1 border-gray-300">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWg7X0YYzUCU5m8BA_sH_ti92q4X0lCz5h_w&s"
                alt="ggl"
                className="pt-1 w-10 h-10"
              ></img>
              <div className="pl-5 pt-1.5">Google</div>
            </button>
            <div className="relative inline-block">
              <button className=" bg-white text-[20px] text-black w-40 h-12 rounded-[5px] ml-10 flex flex-row border-1 border-gray-300">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFSNFvomhiSK6UCLA0BAzdpFzc2kyuFOj4xefsRruR5w&s"
                  alt="ggl"
                  className="mask-clip-border pt-1 w-10 h-10 mix-blend-normal"
                ></img>
                <div className="pl-5 pt-1.5">Facebook </div>
              </button>
            </div>
          </div>
          <div>
            <div className="text-gray-500 text-[17px] ml-20 mt-6">
                Dont have an account?
            </div>
            <button className="text-[#B8860B] text-[17px] ml-70 -mt-6.5 underline cursor-pointer"
            onClick={() => {
                router.push("/register");
              }}
>
              Register here
            </button>
          </div>
        </div>
      </div>
      
      
      <Footer/>
    </div>
  );
}
