import React from 'react'

export default function Offer() {
  return (
    <div>
      <div className="bg-amber-600 md:h-160 md:w-280 h-250 w-100  mt-32 justify-self-center rounded-4xl md:flex md:flex-row flex flex-col">
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
                  <button
                    className="bg-red-950 rounded-full h-13 text-white hover:bg-black center mt-6 w-36 font-semibold"
                    onClick={() => {
                      router.push("/menu");
                    }}
                  >
                    Order Now
                  </button>
                </div>
              </div>
    </div>
  )
}
