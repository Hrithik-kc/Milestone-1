import React from 'react'

export default function Onlineorder() {
  return (
    <div>
        <div className="md:h-160 h-280 md:w-280 w-100 justify-self-center mt-36 rounded-3xl bg-gray-900 dark:bg-gray-800">
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
              <div className="md:mt-10 mt-14 md:text-left text-center md:text-base text-lg text-white">
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
    </div>
  )
}