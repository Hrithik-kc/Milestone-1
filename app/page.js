export default function Home() {
  return (
    <div>
      <div>
        <div className="bg-gray-900 h-13 w-full justify-between flex flex-row  ">
          <div className="text-3xl text-amber-500 font-bold m-2 flex flex-row">
            <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvu_NocAGYCF3RvpGXf9IpJQkuVX4M7gzZPA&s" className="h-24 w-24 rounded-full -mt-5"></img>
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
                className="h-6 mx-1.5 w-auto"
              ></img>
              Phone:+919876534567
            </div>
            <div className="flex flex-row">
              <img
                src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ficon%2F6.png&w=64&q=75"
                className="h-6 mx-1.5 w-auto"
              ></img>
              Email:hrithikkc@gmail.com
            </div>
            <div>Location:Sahyadri Campuse</div>
          </div>
          <div className="mb-6">
            ________________________________________________________________________________________________________________________________________________________
          </div>
          <div className="flex flex-row m-4 justify-around font-bold ">
            <div>
              <button className="mx-9">Home</button>
              <button className="mx-9">Pages</button>
              <button className="mx-9">Menu</button>
            </div>
            <img
              src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Flogo-light.png&w=750&q=75"
              className=" h-15 w-auto"
            ></img>
            <div>
              <button className="mx-9">Blogs</button>
              <button className="mx-9">Shop</button>
              <button className="mx-9">Contact Us</button>
            </div>
          </div>
          <div className="text-8xl font-semibold justify-self-center">
            Best Restaurant
          </div>
        </div>
        <div className="bg-amber-600 h-2 w-screen mt-76"></div>
      </div>
      <div className="bg-gray-100 w-screen">
        <div className=" flex flex-row ">
          <div className="bg-white h-125 w-96 ml-32 rounded-3xl mt-10 shadow-md">
            <div className="bg-amber-700 h-20 w-20 rounded-full ml-11 -mt-8"></div>
            <div className="text-3xl text-black font-semibold ml-12 mt-10">
              Book a Table
            </div>
            <input
              className="h-12 w-72 ml-12 rounded-lg border pl-4 mt-7 text-gray-600 border-gray-400"
              placeholder="Phone"
            ></input>
            <input
              className="h-12 w-72 ml-12 rounded-lg border pl-4 mt-7 text-gray-600 border-gray-400"
              placeholder="Members"
            ></input>
            <input
              className="h-12 w-72 ml-12 rounded-lg border pl-4 mt-7 text-gray-600 border-gray-400"
              placeholder="Date"
            ></input>
            <input
              className="h-12 w-72 ml-12 rounded-lg border pl-4 mt-7 text-gray-600 border-gray-400"
              placeholder="Time"
            ></input>
            <button className="h-11 w-34 ml-26 mt-4 rounded-lg bg-amber-900 text-xl font-medium">
              Book a Table
            </button>
          </div>
          <div className="flex flex-col">
            <div className="text-4xl font-semibold text-black flex flex-row ml-32 mt-40">
              <img
                src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshape%2Ffire.png&w=48&q=75"
                className="h-12 w-auto"
              ></img>
              Our Popular Category
              <div className=" flex flex-row gap-8 ml-16">
                <div className="bg-amber-800 h-10 w-10 rounded-full gap-8"></div>
                <div className="bg-amber-800 h-10 w-10 rounded-full"></div>
              </div>
            </div>
            <div className="flex flex-row">
              <div className="bg-black h-60 w-50 rounded-2xl ml-32 mt-8">
                <img
                  src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fmenu%2F25.jpg&w=828&q=75"
                  className="h-60 w-auto rounded-2xl"
                ></img>
              </div>
              <div className="bg-black h-60 w-50 rounded-2xl ml-8 mt-8">
                <img
                  src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fmenu%2F27.jpg&w=828&q=75"
                  className="h-60 w-auto rounded-2xl"
                ></img>
              </div>
              <div className="bg-black h-60 w-50 rounded-2xl ml-8 mt-8">
                <img
                  src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fmenu%2F27.jpg&w=828&q=75"
                  className="h-60 w-auto rounded-2xl"
                ></img>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row  mt-32 justify-around m-16">
          <div className="flex flex-col">
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
          <div className="flex flex-col">
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
          <div className="flex flex-col">
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
        <div className="bg-amber-600 h-160 w-280 mt-32 justify-self-center rounded-4xl flex flex-row">
          {/* <img src="https://png.pngtree.com/thumb_back/fh260/background/20220705/pngtree-decent-color-brush-background-image_1416414.jpg" className="h-158 w-277 justify- rounded-4xl ml-2 pt-2"></img> */}

          <div>
            <div className="flex flex-row">
              <div>
                <img
                  src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fillustration%2F1.png&w=640&q=75"
                  className="h-80 w-80 ml-11 mt-4"
                ></img>
              </div>
              <div>
                <img
                  src="https://t4.ftcdn.net/jpg/03/36/91/17/360_F_336911714_WdVI3MgN9AhyL2nvW2ZxwkYCXwDABWfY.jpg"
                  className="h-32 w-32 rounded-full mt-13 ml-24 "
                ></img>
              </div>
            </div>
            <div>
              <img
                src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fillustration%2F15.png&w=640&q=75"
                className="h-70 w-70 ml-11"
              ></img>
            </div>
            <div>
              <img
                src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fillustration%2F12.png&w=640&q=75"
                className="h-60 w-60 ml-88 -mt-90"
              ></img>
            </div>
          </div>
          <div className="flex flex-col ml-14">
            <div className="text-3xl font-bold text-black mt-24">
              Today Special Offer
            </div>
            <div className="text-6xl font-semibold text-black mt-14">
              Explore
              <div>Irresistible</div>
              <div>Promotions!</div>
            </div>
            <div className="mt-8 text-amber-950 font-medium">
              <div>
                Contrasted dissimilar get joy you instrument out reasonably.
              </div>
              <div>to zealously necessary.Again keeps at no meant stuff.</div>
              <div>
                northward as difficult preserved daughters. Continued at up
              </div>
              <div>To perpetual do existence</div>
            </div>
            <button className="bg-red-950 rounded-full h-13 hover:bg-black center mt-6 w-36 font-semibold">
              Order Now
            </button>
          </div>
        </div>
        <div className="text-amber-900 font-semibold text-2xl justify-self-center mt-24">
          FOOD MENU
        </div>
        <div className="text-5xl text-black font-semibold justify-self-center mt-6">
          Our Special Menu
        </div>
        <div className="flex flex-row border border-amber-800 h-24 rounded-lg w-2xl justify-self-center justify-between  mt-14">
          <button className="bg-amber-800 h-16 w-36 rounded-lg ml-2 mt-4 font-semibold">
            MAIN DISHES
          </button>
          <button className="bg-amber-800 h-16 w-36 rounded-lg  mt-4 font-semibold">
            DESSERTS
          </button>
          <button className="bg-amber-800 h-16 w-36 rounded-lg  mt-4 font-semibold">
            SEA FOOD
          </button>
          <button className="bg-amber-800 h-16 w-36 rounded-lg mr-2 mt-4 font-semibold">
            BEVERAGES
          </button>
        </div>
        <div className="bg-amber-300 w-6xl h-120 justify-self-center mt-16"></div>
        <div className="h-160 w-280 justify-self-center mt-36 rounded-3xl bg-gray-900">
          <div className="flex flex-row pt-28 justify-around">
            <div>
              <img
                src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fillustration%2F16.png&w=1080&q=75"
                className="h-110  ml-10 w-auto"
              ></img>
            </div>
            <div className="flex flex-col">
              <div className="font-semibold text-5xl text-white ">
                <div>Are you Ready to </div>
                <div className="mt-2.5">Start your online</div>
                <div className="mt-2.5">Order?</div>
              </div>
              <div className="mt-10 ">
                <div>
                  Bndulgence diminution so discovered mr apartments. Are off
                  under
                </div>
                <div className="mt-3.5">
                  folly death wrote cause her way spite. Plan upon yet way get
                  cold spot
                </div>
                <div className="mt-3.5">
                  its week. Almost do am or limits hearts. Resolve parties but
                  why she
                </div>
                <div className="mt-3.5">shewing. She sang know now</div>
              </div>
              <div className="flex flex-row gap-7">
                <button className="bg-white h-13 w-44 mt-15 text-lg text-black font-semibold rounded-full  hover:bg-lime-800">
                  App Store
                </button>
                <button className="bg-white h-13 w-44 mt-15 text-lg text-black font-semibold rounded-full  hover:bg-lime-800">
                  Play Store
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row">
          <video controls className="h-100 rounded-3xl ml-3 w-2xl mt-50">
            <source src="https://www.youtube.com/watch?v=F3zw1Gvn4Mk&t=55s" />
          </video>
          <div className=" bg-white shadow-md w-xl h-140 rounded-4xl ml-11 mt-35">
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
              <div className="text-xl text-black font-semibold ml-10 mt-9">
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
                    className="justify-self-center mt-4"
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
          className="h-82 w-lg -mt-55 "
        ></img>
      </div>
      <div className="bg-gray-200 w-screen ">
        <div className="text-amber-800 text-2xl font-medium justify-self-center pt-16">
          MASTER CHEFS
        </div>
        <div className="font-semibold text-black text-5xl mt-8 justify-self-center">
          Meet Our Special Chefs
        </div>
        <div className="flex flex-row gap-15 justify-center mt-14">
          <div className="flex flex-col">
            <div className="border-3 border-gray-500 h-80 w-80  justify-items-center pt-4.5 rounded-full">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1Xx9XhbkiDGC5FaOpzIcGhkRh6nh3FotVrA&s"
                className="h-70 w-70 rounded-full"
              ></img>
            </div>
            <div className="bg-amber-700 h-20 w-xs rounded-3xl -mt-28">
              <div className="text-2xl font-semibold justify-self-center mt-3">
                Alexander Petllo
              </div>
              <div className="font-medium text-black justify-self-center">
                ASSITANT CHEF
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="border-3 border-gray-500 h-80 w-80  justify-items-center pt-4.5 rounded-full">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKaPn7mbM87iM3GDCWjtbzmr6lKt3oRxcTVA&s"
                className="h-70 w-70 rounded-full"
              ></img>
            </div>
            <div className="bg-amber-700 h-20 w-xs rounded-3xl -mt-28">
              <div className="text-2xl font-semibold justify-self-center mt-3">
                Petro William
              </div>
              <div className="font-medium text-black justify-self-center">
                MAIN CHEF
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="border-3 border-gray-500 h-80 w-80  justify-items-center pt-4.5 rounded-full">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdKknhdG8ZhURW_zGMyguGiiPJ40DTzHvAxA&s"
                className="h-70 w-70 rounded-full"
              ></img>
            </div>
            <div className="bg-amber-700 h-20 w-xs rounded-3xl -mt-28">
              <div className="text-2xl font-semibold justify-self-center mt-3">
                Mendia Juxef
              </div>
              <div className="font-medium text-black justify-self-center">
                BURDER KING
              </div>
            </div>
          </div>
        </div>
        <div className="h-12 w-2xl bg-gray-200 mt-24"></div>
      </div>
      <div className="bg-gray-100 w-screen">
        <div>
          <div className="pt-24 justify-self-center text-2xl text-amber-800 font-semibold">
            News & Blogs
          </div>
          <div className="text-4xl font-bold text-black mt-8 justify-self-center">
            Our Latest News & Blog
          </div>
          <div className="flex flex-row justify-center gap-10 mt-12">
            <img
              src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fblog%2F1.jpg&w=828&q=75"
              className="h-100 w-xl"
            ></img>
            <img
              src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fblog%2F2.jpg&w=828&q=75"
              className="h-100 w-xl"
            ></img>
          </div>
          <div className="flex flex-row gap-20 justify-center -mt-18">
            <div className="bg-amber-100 h-70 w-lg">
              <div className="bg-amber-800 w-20 h-20 ml-96 -mt-9 text-2xl font-bold justify-self-center pl-4">
                31 OCT
              </div>
              <div className="text-black">
                <div className="ml-8">BY MD SOHAG .BURGER ,FOOD</div>
                <div className="font-semibold text-3xl ml-8 mt-5">
                  <div>Picked up a Brussels</div>
                  <div>burger Sprouts with</div>
                  <div>ham</div>
                </div>
                <button className="mt-5 ml-8">READ MORE</button>
              </div>
            </div>
            <div className="bg-amber-100 h-70 w-lg">
              <div className="bg-amber-800 w-20 h-20 ml-96 -mt-9 text-2xl font-bold justify-self-center pl-4">
                24 DEC
              </div>
              <div className="text-black">
                <div className="ml-8">BY MD SOHAG .BURGER ,FOOD</div>
                <div className="font-semibold text-3xl ml-8 mt-5">
                  <div>This prefabricated</div>
                  <div>passive house is highly</div>
                  <div>sustainable</div>
                </div>
                <button className="mt-5 ml-25">READ MORE</button>
              </div>
            </div>
          </div>
          <div className="pt-16 mt-100"></div>
          <div className="bg-gray-900 h-90 w-screen flex flex-row justify-between">
            <img
              src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshape%2F9.png&w=640&q=75"
              className="h-90 w-98 pt-9 "
            ></img>
            <button className="bg-white h-10 w-10 rounded-full mt-69 mr-12">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGn5Ev1U1xeZUs8dOVvPHFqKt8G2Sk269_OA&s" className="w-8 h-8  rounded-full ml-1"></img>
            </button>
            <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Flogo-light.png&w=750&q=75" className="h-24 mt-56 w-38 mr-14"></img>
          </div>
          
          <div className="justify-self-center h-120 w-6xl bg-black -mt-168">
            <div className="flex flex-row justify-around  pt-26">
              <div>
                <div className="text-2xl font-semibold ">About Us</div>
                <div className="mt-8">Continued at zealously</div>
                <div className="mt-2.5">necessary is Surrounded</div>
                <div className="mt-2.5">sir motionless she end</div>
                <div className="mt-2.5">literature. Gay direction</div>
                <div className="mt-2.5">neglected.</div>
                <div className="flex flex-row gap-3 mt-4">
                  <div className="bg-gray-400 w-8 h-8">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvz6CaJ2FlG_VbRz7VdPIyvN77mpgGc_h8NQ&s"
                      className="w-7 h-7 justify-self-center mt-0.5"
                    ></img>
                  </div>
                  <div className="bg-gray-400 w-8 h-8">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSCdHOcw26caVnIs7MlcSrzD3sjUkxmMpkGQ&s"
                      className="w-7 h-7 justify-self-center mt-0.5"
                    ></img>
                  </div>
                  <div className="bg-gray-400 w-8 h-8">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOH6x3Yu4XLYtu4vuESZeD3bm4W5F6cpuOgA&s"
                      className="w-7 h-7 justify-self-center mt-0.5"
                    ></img>
                  </div>
                </div>
              </div>
              <div>
                <div className="text-2xl flex flex-col font-semibold ">
                  Explore
                </div>
                <div className="mt-8"> Company Profile</div>
                <div className="mt-2.5">About</div>
                <div className="mt-2.5">Help Center</div>
                <div className="mt-2.5">Career</div>
                <div className="mt-2.5">Features</div>
                <div className="mt-2.5">Contact</div>
              </div>
              <div className="flex flex-col">
                <div className="text-2xl font-semibold ">Contact Info</div>
                <div className="mt-8">175 10h Street, Office</div>
                <div> 375 Berlin, De 21562</div>
                <div className="mt-5">+123 34598768 </div>
                <div className=""></div>
                <div>+554 34598734</div>
                <div className="mt-5">food@restan.com</div>
              </div>
              <div>
                <div className="text-2xl font-semibold  ">Newsletter</div>
                <div className="mt-8">Join our subscribers list to get</div>
                <div className="mt-2.5">the latest news and special</div>
                <div className="mt-2.5">offers</div>
                <input
                  className="h-8 mt-10 w-40 "
                  placeholder="Your Email"
                ></input>
                {/* <input type="checkbox ">In agree to the Privacy and Policy</input> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
