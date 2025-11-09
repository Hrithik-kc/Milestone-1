"use client";
import { useRouter } from "next/navigation";
import Select from "./components/select";
import Footer from "./components/footer";
import Masterchef from "./components/masterchef";

export default function Home() {
  const router = useRouter();

  return (
    <div>
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
          <div className="flex flex-row m-4 justify-around font-bold cursor-pointer ">
            <Select op1="Home" op2="Home1" op3="Home2" />
            <Select op1="Pages" op2="Login" op3="Resigter" />
            <Select op1="Menu" op2="Menu1" op3="Menu2" />
            <img
              src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Flogo-light.png&w=750&q=75"
              className=" h-15 w-auto"
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
          <div className="text-4xl mt-20 md:mt-0 font-semibold justify-self-center md:text-8xl">
            Best Restaurant
          </div>
        </div>
        <div className="bg-amber-600 h-2 w-screen mt-76"></div>
      </div>
      <div className="bg-gray-100 w-screen">
        <div className=" md:flex md:flex-row flex flex-col md:ml-0 -ml-27 ">
          <div className="bg-white h-125 w-96 ml-32 rounded-3xl mt-10 shadow-md">
            <div className="bg-amber-700 h-20 w-20 rounded-full ml-11 -mt-8"></div>
            <div className="text-3xl text-black font-semibold ml-12 mt-10">
              Book a Table
            </div>
            <input
              className="h-12 w-72 ml-12 rounded-lg border pl-4 mt-7 text-gray-600 border-gray-400"
              placeholder="Phone"
            ></input>
           
            <select className="h-12 w-72 ml-12 rounded-lg border pl-4 mt-7 text-gray-600 border-gray-400">
              <option className=" text-black font-semibold">
                1 Person
              </option>
              <option  className=" text-black font-semibold">
                2 Person
              </option>
              <option value="/Blogs" className=" text-black font-semibold">
                3 Person
              </option>
            </select>
            <input
              className="h-12 w-72 ml-12 rounded-lg border pl-4 mt-7 text-gray-600 border-gray-400"
              placeholder="Date" 
            ></input>
            <input
              className="h-12 w-72 ml-12 rounded-lg border pl-4 mt-7 text-gray-600 border-gray-400"
              placeholder="Time"
            ></input>
            <button
              className="h-11 w-34 ml-26 mt-4 rounded-lg bg-amber-900 text-xl font-medium"
              onClick={() => {
                alert("The Table Is Booked");
              }}
            >
              Book a Table
            </button>
          </div>
          <div className="flex flex-col">
            <div className="text-4xl font-semibold text-black flex flex-row ml-32 md:mt-40 mt-28">
              <img
                src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshape%2Ffire.png&w=48&q=75"
                className="h-12 w-auto"
              ></img>
              Our Popular Category
              <div className=" md:flex md:flex-row flex flex-col gap-8 ml-16">
                <div className="bg-amber-800 h-10 w-10 rounded-full gap-8 hidden md:block"></div>
                <div className="bg-amber-800 h-10 w-10 rounded-full hidden md:block"></div>
              </div>
            </div>
            <div className="md:flex md:flex-row flex flex-col ">
              <div className="bg-black md:h-60 h-130 md:w-50 w-100 rounded-2xl ml-30 mt-8  ">
                <img
                  src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fmenu%2F25.jpg&w=828&q=75"
                  className="h-130 w-100 rounded-2xl md:h-60 md:w-auto"
                ></img>
              </div>
              <div className="bg-black h-60 w-50 rounded-2xl md:ml-8 mt-8 hidden md:block ">
                <img
                  src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fmenu%2F28.jpg&w=828&q=75"
                  className="h-100 w-auto rounded-2xl md:h-60"
                ></img>
              </div>
              <div className="bg-black h-60 w-50 rounded-2xl ml-8 mt-8 hidden md:block">
                <img
                  src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fmenu%2F27.jpg&w=828&q=75"
                  className="h-60 w-auto rounded-2xl hidden md:block"
                ></img>
              </div>
              <button className="bg-amber-800 h-10 w-10 rounded-full gap-8 block md:hidden"></button>
            </div>
          </div>
        </div>
        <div className="md:flex md:flex-row flex flex-col justify-around m-16 ml-6.5  md:ml-35">
          <div className="flex flex-col border-2  border-gray-600 justify-items-center rounded-4xl w-95 h-95 md:border-none mt-18 md:pl-0 pl-10 md:pt-0 pt-7">
            <img
              src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ficon%2F13.png&w=256&q=75"
              className="h-30 w-30"
            ></img>
            <div className="text-2xl font-semibold text-black mt-5">
              Quality Foods
            </div>
            <div className="text-gray-500 mt-5">
              Belonging sir curiosity discovery{" "}
            </div>
            <div className="text-gray-500 mt-2.5">
              extremity yet forfeited prevailed own
            </div>
            <div className="text-gray-500 mt-2.5">
              {" "}
              off. Traveling by introduced of mr
            </div>
            <div className="text-gray-500 mt-2.5">terminated.</div>
          </div>
          <div className="flex flex-col border-2  border-gray-600 justify-items-center rounded-4xl w-95 h-95 md:border-none mt-18 md:pl-0 pl-10 md:pt-0 pt-7 ">
            <img
              src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ficon%2F14.png&w=256&q=75"
              className="h-30 w-30"
            ></img>
            <div className="text-2xl font-semibold text-black mt-5">
              Fast Delivery
            </div>
            <div className="text-gray-500 mt-5">
              Belonging sir curiosity discovery{" "}
            </div>
            <div className="text-gray-500 mt-2.5">
              extremity yet forfeited prevailed own
            </div>
            <div className="text-gray-500 mt-2.5">
              {" "}
              off. Traveling by introduced of mr
            </div>
            <div className="text-gray-500 mt-2.5">terminated.</div>
          </div>
          <div className="flex flex-col border-2  border-gray-600  rounded-4xl w-95 h-95 md:border-none mt-18 md:pl-0 pl-10 md:pt-0 pt-7  ">
            <img
              src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ficon%2F15.png&w=256&q=75"
              className="h-30 w-30"
            ></img>
            <div className="text-2xl font-semibold text-black mt-5">
              Delicious Recipies
            </div>
            <div className="text-gray-500 mt-5">
              Belonging sir curiosity discovery{" "}
            </div>
            <div className="text-gray-500 mt-2.5">
              extremity yet forfeited prevailed own
            </div>
            <div className="text-gray-500 mt-2.5">
              {" "}
              off. Traveling by introduced of mr
            </div>
            <div className="text-gray-500 mt-2.5">terminated.</div>
          </div>
        </div>
        <div className="bg-amber-600 md:h-160 md:w-280 h-250 w-100  mt-32 justify-self-center rounded-4xl md:flex md:flex-row flex flex-col">
          {/* <img src="https://png.pngtree.com/thumb_back/fh260/background/20220705/pngtree-decent-color-brush-background-image_1416414.jpg" className="h-158 w-277 justify- rounded-4xl ml-2 pt-2"></img> */}

          <div>
            <div className="md:flex md:flex-row flex flex-col">
              <div>
                <img
                  src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fillustration%2F1.png&w=640&q=75"
                  className="h-80 w-80 md:ml-11 md:9 mt-4"
                ></img>
              </div>
              <div>
                <img
                  src="https://t4.ftcdn.net/jpg/03/36/91/17/360_F_336911714_WdVI3MgN9AhyL2nvW2ZxwkYCXwDABWfY.jpg"
                  className="h-32 w-32 rounded-full md:mt-13 -mt-15 md:ml-24 ml-38  "
                ></img>
              </div>
            </div>
            <div>
              <img
                src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fillustration%2F15.png&w=640&q=75"
                className="h-70 w-70 ml-11 hidden md:block"
              ></img>
            </div>
            <div>
              <img
                src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fillustration%2F12.png&w=640&q=75"
                className="h-60 w-60 ml-88 -mt-90 hidden md:block"
              ></img>
            </div>
          </div>
          <div className="flex flex-col ml-14">
            <div className="md:text-3xl text-2xl font-bold text-black  mt-10 md:mt-24">
              Today Special Offer
            </div>
            <div className="md:text-6xl text-4xl font-semibold text-black mt-14">
              Explore
              <div>Irresistible</div>
              <div>Promotions!</div>
            </div>
            <div className="mt-8 text-amber-950 font-medium ">
              <div>
                <div>
                  Contrasted dissimilar get joy you instrument out reasonably.
                </div>
                <div>to zealously necessary.Again keeps at no meant stuff.</div>
                <div>
                  northward as difficult preserved daughters. Continued at up
                </div>
                <div>To perpetual do existence</div>
              </div>
            </div>
            <button className="bg-red-950 rounded-full h-13 hover:bg-black center mt-6 w-36 font-semibold"
            onClick={()=>{
              router.push("/menu")
            }}>
              Order Now
            </button>
          </div>
        </div>
        <div className="text-amber-900 font-semibold md:text-2xl  text-xl justify-self-center mt-24">
          FOOD MENU
        </div>
        <div className="md:text-5xl text-4xl text-black font-semibold justify-self-center mt-6">
          Our Special Menu
        </div>
        <div className="md:flex md:flex-row flex flex-col border border-amber-800 md:h-24 h-80 w-100 rounded-lg md:w-2xl justify-self-center justify-between  mt-14">
          <button className="bg-amber-800 hover:bg-blue-300 hover:text-black md:h-16 h-20 md:w-36 w-80 rounded-lg md:ml-2 ml-9 mt-4 font-semibold">
            MAIN DISHES
          </button>
          <button className="bg-amber-800  hover:bg-blue-300 hover:text-black md:h-16 h-20 md:w-36 w-80 rounded-lg  mt-4 md:ml-0 ml-9 font-semibold">
            DESSERTS
          </button>
          <button className="bg-amber-800  hover:bg-blue-300 hover:text-black md:h-16 h-20 md:w-36 w-80 rounded-lg  mt-4 md:ml-0 ml-9 font-semibold">
            SEA FOOD
          </button>
          <button className="bg-amber-800  hover:bg-blue-300 hover:text-black md:h-16 h-20 md:w-36 w-80 rounded-lg mr-2 md:ml-0 ml-9 mt-4 font-semibold md:mb-0 mb-2">
            BEVERAGES
          </button>
        </div>
        <div className="bg-amber-300 md:w-6xl w-100  h-250 md:h-120 justify-self-center mt-16"></div>
        <div className="md:h-160 h-280 md:w-280 w-100 justify-self-center mt-36 rounded-3xl bg-gray-900">
          <div className="md:flex md:flex-row flex flex-col  md:pt-28 pt-18 justify-around">
            <div>
              <img
                src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fillustration%2F16.png&w=1080&q=75"
                className="md:h-110 h-90 md:ml-10 ml-6 w-auto"
              ></img>
            </div>
            <div className="flex flex-col">
              <div className="font-semibold md:text-5xl text-4xl md:text-left text-center text-white ">
                <div className="md:mt-0 mt-5">Are you Ready to </div>
                <div className="mt-2.5">Start your online</div>
                <div className="mt-2.5">Order?</div>
              </div>
              <div className="md:mt-10 mt-14 md:text-left text-center md:text-base text-lg">
                <div className="md:mr-0 mr-4">
                  Bndulgence diminution so discovered mr apartments. Are off
                  under
                </div>
                <div className="mt-3.5 md:mr-0 mr-4">
                  folly death wrote cause her way spite. Plan upon yet way get
                  cold spot
                </div>
                <div className="mt-3.5 md:mr-0 mr-4 md:ml-0 ml-2.5">
                  its week. Almost do am or limits hearts. Resolve parties but
                  why she
                </div>
                <div className="mt-3.5 md:mr-0 mr-4">
                  shewing. She sang know now
                </div>
              </div>
              <div className="md:flex md:flex-row flex flex-col  md:gap-7 md:ml-0 ml-28 ">
                <button className="bg-white h-13 w-44 mt-15 text-lg text-black font-semibold rounded-full  hover:bg-lime-800">
                  App Store
                </button>
                <button className="bg-white h-13 w-44 md:mt-15 mt-8 text-lg text-black font-semibold rounded-full  hover:bg-lime-800">
                  Play Store
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="md:flex md:flex-row flex flex-col justify-center md:justify-center-none">
          <iframe
            className="md:h-100 h-120 md:rounded-3xl rounded-2xl ml-3 md:w-2xl w-100 md:mt-50 mt-28"
            src="https://www.youtube.com/embed/F3zw1Gvn4Mk?si=dSRaWkM_P_7txhXQ"
            title="YouTube video player"
            allow="autoplay;picture-in-picture"
            allowFullScreen
          ></iframe>
          <div className=" bg-white shadow-md md:w-xl w-100 md:h-150 h-160 rounded-4xl md:ml-11 ml-3 md:mt-35 mt-20">
            <div className="flex flex-col">
              <div className="text-3xl font-semibold text-indigo-950 ml-10 mt-18">
                Opening Hours
              </div>
              <div className="text-amber-950 font-medium ml-10 mt-4">
                <div>
                  A relaxing and pleasant atmosphere, good jazz, dinner, and{" "}
                </div>
                <div>cocktails. The Patio Time Bar opens in the center..</div>
              </div>
              <div className="md:text-xl text-lg text-black font-semibold ml-10 mt-9">
                <div>Sunday To Tuesday ------- 9:00 am to 10:00 pm</div>
                <div className="mt-3">
                  Wednesday To Thursday ----- 10:00 am to 9:00 pm
                </div>
                <div className="mt-3">
                  Friday To Saturday ------- 10:00 am to 12:00 pm
                </div>
              </div>
              <div className="flex flex-row ">
                <div className="bg-amber-900 w-24 h-24 rounded-full mt-11 ml-18">
                  <img
                    src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ficon%2F6.png&w=64&q=75"
                    className="justify-self-center mt-4 "
                  ></img>
                </div>
                <div className="flex flex-col text-black mt-18 ml-5">
                  <div className="text-lg ">Call Any Time</div>
                  <div className="text-3xl font-semibold">+91 6360711517</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshape%2F4.png&w=1920&q=75"
          className="h-82 w-lg -mt-55 hidden md:block opacity-25"
        ></img>
      </div>
      <Masterchef />

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
          <Footer />
        </div>
      </div>
    </div>
  );
}
