import React from "react"
export default function Masterchef(){
    return(
        <div>
             <div className="bg-gray-200 w-screen ">
        <div className="text-amber-800 text-2xl font-medium justify-self-center pt-16">
          MASTER CHEFS
        </div>
        <div className="font-semibold text-black md:text-5xl text-4xl mt-8 justify-self-center">
          Meet Our Special Chefs
        </div>
        <div className="md:flex md:flex-row flex flex-col md:ml-0 ml-15 gap-15 justify-center mt-14">
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
        </div>
    )
}