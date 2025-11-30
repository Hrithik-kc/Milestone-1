"use client";
import { useRouter } from "next/navigation";
import Select from "./components/select";
import Footer from "./components/footer";
import Masterchef from "./components/masterchef";
import Dish from "./components/dishes";
import Navbar from "./components/navbar";
import Table from "./components/table";
import Offer from "./components/offer";
import Onlineorder from "./components/onlineorder";

export default function Home() {
  const router = useRouter();

  return (
    <div>
      <div>
        <Navbar
          img="https://cdn.pixabay.com/video/2024/02/25/201947-916877801_tiny.jpg"
          tittle="Best Resturant"
        />
        <div className="bg-amber-600 h-2 w-screen mt-35"></div>
      </div>
      <div className="bg-gray-100 w-screen dark:bg-gray-900">
        <div className=" md:flex md:flex-row flex flex-col md:ml-0 -ml-27 ">
          <Table />
          <div className="flex flex-col">
            <div className="text-4xl font-semibold text-black dark:text-white flex flex-row ml-32 md:mt-40 mt-28">
              <img
                src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshape%2Ffire.png&w=48&q=75"
                className="h-12 w-auto"
              ></img>
              Our Popular Category
              <div className=" md:flex md:flex-row flex flex-col gap-8 ml-16">
                <div className="bg-amber-800 h-10 w-10 rounded-full gap-8 hidden md:block text-amber-50 pl-2.5">
                  &#60;
                </div>
                <div className="bg-amber-800 h-10 w-10 rounded-full hidden md:block text-amber-50 pl-2.5">
                  &#62;
                </div>
              </div>
            </div>
            <div className="md:flex md:flex-row flex flex-col ">
              <div className="bg-black md:h-60 h-130 md:w-50 w-100 rounded-2xl ml-30 mt-8 transition ease-in-out duration-300 hover:scale-105 ">
                <img
                  src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fmenu%2F25.jpg&w=828&q=75"
                  className="h-130 w-100 rounded-2xl md:h-60 md:w-auto "
                ></img>
                <h1 className="text-xl -mt-12 mx-1.5 font-bold text-white">
                  Chicken Alfredo
                </h1>
                <h1 className="text-base -mt-12 mx-1.5 font-semibold text-amber-400">
                  Main Dishes
                </h1>
              </div>
              <div className="bg-black h-60 w-50 rounded-2xl md:ml-8 mt-8 hidden md:block transition ease-in-out duration-300 hover:scale-105">
                <img
                  src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fmenu%2F28.jpg&w=828&q=75"
                  className="h-100 w-auto rounded-2xl md:h-60"
                ></img>
                <h1 className="text-xl -mt-12 mx-1.5 font-bold text-white">
                  Hot Chocolates
                </h1>
                <h1 className="text-base -mt-12 mx-1.5 font-semibold text-amber-400">
                  Beverages
                </h1>
              </div>
              <div className="bg-black h-60 w-50 rounded-2xl ml-8 mt-8 hidden md:block transition ease-in-out duration-300 hover:scale-105">
                <img
                  src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fmenu%2F27.jpg&w=828&q=75"
                  className="h-60 w-auto rounded-2xl hidden md:block"
                ></img>
                <h1 className="text-xl -mt-12 mx-1.5 font-bold text-white">
                  Salmon Fry
                </h1>
                <h1 className="text-base -mt-12 mx-1.5 font-semibold text-amber-400 ">
                  Sea food
                </h1>
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
            <div className="text-2xl font-semibold text-black dark:text-white mt-5">
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
            <div className="text-2xl font-semibold text-black dark:text-white mt-5">
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
            <div className="text-2xl font-semibold text-black dark:text-white mt-5">
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
        <Offer />
        <div className="text-amber-900 font-semibold md:text-2xl dark:text-white text-xl justify-self-center mt-24">
          FOOD MENU
        </div>
        <div className="md:text-5xl text-4xl text-black dark:text-white font-semibold justify-self-center mt-6">
          Our Special Menu
        </div>

        <Dish />

        <Onlineorder />
        <div className="md:flex md:flex-row flex flex-col justify-center md:justify-center-none">
          <iframe
            className="md:h-100 h-120 md:rounded-3xl rounded-2xl ml-3 md:w-2xl w-100 md:mt-50 mt-28"
            src="https://www.youtube.com/embed/F3zw1Gvn4Mk?si=dSRaWkM_P_7txhXQ"
            title="YouTube video player"
            allow="autoplay "
            allowFullScreen
          ></iframe>
          <div className=" bg-white dark:bg-gray-500 shadow-md md:w-xl w-100 md:h-150 h-160 rounded-4xl md:ml-11 ml-3 md:mt-35 mt-20">
            <div className="flex flex-col">
              <div className="text-3xl font-semibold text-indigo-950 dark:text-white ml-10 mt-18">
                Opening Hours
              </div>
              <div className="text-amber-950 font-medium dark:text-white ml-10 mt-4">
                <div>
                  A relaxing and pleasant atmosphere, good jazz, dinner, and{" "}
                </div>
                <div>cocktails. The Patio Time Bar opens in the center..</div>
              </div>
              <div className="md:text-xl text-lg text-black dark:text-white font-semibold ml-10 mt-9">
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
                <div className="flex flex-col text-black dark:text-white mt-18 ml-5">
                  <div className="text-lg ">Call Any Time</div>
                  <div className="text-3xl dark:text-white font-semibold">
                    +91 6360711517
                  </div>
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

      <div className="bg-gray-100 w-screen dark:bg-gray-900">
        <div>
          <div className="pt-24 justify-self-center text-2xl text-amber-800 font-semibold dark:text-white">
            News & Blogs
          </div>
          <div className="md:text-4xl font-bold text-4xl md:mx-0 mx-16 md:text-start text-center dark:text-white text-black mt-8 justify-self-center">
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
            <div className="bg-amber-100 dark:bg-gray-300 md:h-70 h-70 md:w-lg w-100 md:mt-0 -mt-140 md:ml-0 ml-3 shadow-md">
              <div className="bg-amber-800 w-20 h-20 md:ml-96 ml-72 -mt-9 text-white text-2xl font-bold justify-self-center pl-4 ">
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
            <div className="bg-amber-100 md:h-70  dark:bg-gray-300  h-70 md:w-lg w-100 md:mt-0 mt-68 shadow-md md:ml-0 ml-3">
              <div className="bg-amber-800 w-20 h-20 md:ml-96 ml-72 -mt-9 text-2xl text-white font-bold justify-self-center pl-4">
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
