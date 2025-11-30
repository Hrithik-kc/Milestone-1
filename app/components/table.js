import React from 'react'

export default function Table() {
  return (
    <div>
      <div className="bg-white h-130 w-96 ml-32 rounded-3xl md:mt-15 mt-60 shadow-md dark:bg-gray-950">
            <div className="bg-amber-700 h-20 w-20 rounded-full ml-11 -mt-8 ">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwt9XWa9NtaQTkc4On4Y-iOyWsKby8kiMHZxypYnPtLeOb3gKJW-BF7RAXzBKPnW6HxRQ&usqp=CAU"
                className="rounded-full h-15 w-19 justify-self-center pt-5"
              ></img>
            </div>
            <div className="text-3xl text-black font-semibold ml-12 mt-5 dark:text-white">
              Book a Table
            </div>
            <input
              className="h-12 w-72 ml-12 rounded-lg border pl-4 mt-7 text-gray-600 border-gray-400"
              placeholder="Phone"
            ></input>

            <select className="h-12 w-72 ml-12 rounded-lg border pl-4 mt-7 text-gray-600 border-gray-400">
              <option className=" text-black font-semibold">1 Person</option>
              <option className=" text-black font-semibold">2 Person</option>
              <option value="/Blogs" className=" text-black font-semibold">
                3 Person
              </option>
            </select>
            <input
              className="h-12 w-72 ml-12 rounded-lg border pl-4 mt-7 text-gray-600 border-gray-400"
              type="Date"
            ></input>
            <input
              className="h-12 w-72 ml-12 rounded-lg border pl-4 mt-7 text-gray-600 border-gray-400"
              placeholder="Time"
              type='Time'
            ></input>
            <button
              className="h-11 w-34 ml-26 mt-4 rounded-lg text-white bg-amber-900 text-xl dark:text-white font-medium"
              onClick={() => {
                alert("The Table Is Booked");
              }}
            >
              Book a Table
            </button>
          </div>
    </div>
  )
}
