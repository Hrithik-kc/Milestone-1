"use client";
import { useState } from "react";
import Card from "./item";
export default function Dish() {
  const [menu, setmenu] = useState("main");
  const main = [
    {
      id: 1,
      image:
        "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fmenu%2F1.jpg&w=828&q=75",
      rate: "⭐4.9(5.7k)",
      price: "$34",
      product: "Braised Chicken Legs",
      info: "4 Chicken legs  ●Chilli Sauce",
      co: "● Soft drinks",
    },
    {
      id: 2,
      image:
        "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fmenu%2F5.jpg&w=828&q=75",
      rate: "⭐4.9(5.7k)",
      price: "$40",
      product: "Seared Scallops with Butter",
      info: "4 Chicken legs  ●Chilli Sauce",
      co: "● Soft drinks",
    },
    {
      id: 3,
      image:
        "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fmenu%2F2.jpg&w=828&q=75",
      rate: "⭐4.9(5.7k)",
      price: "$24",
      product: "Bone Steak",
      info: "4 Chicken legs  ●Chilli Sauce",
      co: "● Soft drinks",
    },
    {
      id: 4,
      image:
        "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fmenu%2F3.jpg&w=828&q=75",
      rate: "⭐4.9(5.7k)",
      price: "$18",
      product: "Fish Tacos with Chipotle ",
      info: "4 Chicken legs  ●Chilli Sauce",
      co: "● Soft drinks",
    },
    {
      id: 5,
      image:
        "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fmenu%2F4.jpg&w=828&q=75",
      rate: "⭐4.9(5.7k)",
      price: "$34",
      product: "Broken Lasagna",
      info: "4 Chicken legs  ●Chilli Sauce",
      co: "● Soft drinks",
    },
    {
      id: 6,
      image:
        "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fmenu%2F5.jpg&w=828&q=75",
      rate: "⭐4.9(5.7k)",
      price: "$30",
      product: "Double-Stack Mushroom",
      info: "4 Chicken legs  ●Chilli Sauce",
      co: "● Soft drinks",
    },
  ];
  const dess = [
    {
      id: 1,
      image:
        "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fmenu%2F7.jpg&w=828&q=75",
      rate: "⭐4.9(5.7k)",
      price: "$34",
      product: "Vanilla Cupcakes",
      info: "4 Chicken legs  ●Chilli Sauce",
      co: "● Soft drinks",
    },
    {
      id: 2,
      image:
        "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fmenu%2F8.jpg&w=828&q=75",
      rate: "⭐4.9(5.7k)",
      price: "$18",
      product: "Chocolate brownie",
      info: "4 Chicken legs  ●Chilli Sauce",
      co: "● Soft drinks",
    },
    {
      id: 3,
      image:
        "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fmenu%2F9.jpg&w=828&q=75",
      rate: "⭐4.9(5.7k)",
      price: "$12",
      product: "Croissants Sweet Rolls",
      info: "4 Chicken legs  ●Chilli Sauce",
      co: "● Soft drinks",
    },
    {
      id: 4,
      image:
        "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fmenu%2F10.jpg&w=828&q=75",
      rate: "⭐4.9(5.7k)",
      price: "$22",
      product: "White Chocolate",
      info: "4 Chicken legs  ●Chilli Sauce",
      co: "● Soft drinks",
    },
    {
      id: 5,
      image:
        "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fmenu%2F11.jpg&w=828&q=75",
      rate: "⭐4.9(5.7k)",
      price: "$34",
      product: "Lemon Meringue Pie",
      info: "4 Chicken legs  ●Chilli Sauce",
      co: "● Soft drinks",
    },
    {
      id: 6,
      image:
        "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fmenu%2F12.jpg&w=828&q=75",
      rate: "⭐4.9(5.7k)",
      price: "$36",
      product: "Braised Chicken Legs",
      info: "4 Chicken legs  ●Chilli Sauce",
      co: "● Soft drinks",
    },
  ];
  const sea = [
    {
      id: 1,
      image:
        "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fmenu%2F13.jpg&w=828&q=75",
      rate: "⭐4.9(5.7k)",
      price: "$34",
      product: "Salmon Fry",
      info: "4 Chicken legs  ●Chilli Sauce",
      co: "● Soft drinks",
    },
    {
      id: 2,
      image:
        "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fmenu%2F14.jpg&w=828&q=75",
      rate: "⭐4.9(5.7k)",
      price: "$18",
      product: "Pangasius or Basa",
      info: "4 Chicken legs  ●Chilli Sauce",
      co: "● Soft drinks",
    },
    {
      id: 3,
      image:
        "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fmenu%2F15.jpg&w=828&q=75",
      rate: "⭐4.9(5.7k)",
      price: "$12",
      product: "Spicy Stuffed Clams",
      info: "4 Chicken legs  ●Chilli Sauce",
      co: "● Soft drinks",
    },
    {
      id: 4,
      image:
        "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fmenu%2F16.jpg&w=828&q=75",
      rate: "⭐4.9(5.7k)",
      price: "$22",
      product: "Special Cajun Red Crab",
      info: "4 Chicken legs  ●Chilli Sauce",
      co: "● Soft drinks",
    },
    {
      id: 5,
      image:
        "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fmenu%2F17.jpg&w=828&q=75",
      rate: "⭐4.9(5.7k)",
      price: "$34",
      product: "Crustaceans ",
      info: "4 Chicken legs  ●Chilli Sauce",
      co: "● Soft drinks",
    },
    {
      id: 6,
      image:
        "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fmenu%2F18.jpg&w=828&q=75",
      rate: "⭐4.9(5.7k)",
      price: "$36",
      product: "cephalopod mollusks",
      info: "4 Chicken legs  ●Chilli Sauce",
      co: "● Soft drinks",
    },
  ];
  const bev = [
    {
      id: 1,
      image:
        "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fmenu%2F19.jpg&w=828&q=75",
      rate: "⭐4.9(5.7k)",
      price: "$34",
      product: "Cabernet Sauvignon",
      info: "4 Chicken legs  ●Chilli Sauce",
      co: "● Soft drinks",
    },
    {
      id: 2,
      image:
        "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fmenu%2F20.jpg&w=828&q=75",
      rate: "⭐4.9(5.7k)",
      price: "$18",
      product: "Americano Coffee",
      info: "4 Chicken legs  ●Chilli Sauce",
      co: "● Soft drinks",
    },
    {
      id: 3,
      image:
        "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fmenu%2F21.jpg&w=828&q=75",
      rate: "⭐4.9(5.7k)",
      price: "$12",
      product: "Hot chocolate Shake",
      info: "4 Chicken legs  ●Chilli Sauce",
      co: "● Soft drinks",
    },
    {
      id: 4,
      image:
        "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fmenu%2F22.jpg&w=828&q=75",
      rate: "⭐4.9(5.7k)",
      price: "$22",
      product: "Watermelon Juice",
      info: "4 Chicken legs  ●Chilli Sauce",
      co: "● Soft drinks",
    },
    {
      id: 5,
      image:
        "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fmenu%2F23.jpg&w=828&q=75",
      rate: "⭐4.9(5.7k)",
      price: "$34",
      product: "Seared Scallops",
      info: "4 Chicken legs  ●Chilli Sauce",
      co: "● Soft drinks",
    },
    {
      id: 6,
      image:
        "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fmenu%2F24.jpg&w=828&q=75",
      rate: "⭐4.9(5.7k)",
      price: "$36",
      product: "Soft Drinks",
      info: "4 Chicken legs  ●Chilli Sauce",
      co: "● Soft drinks",
    },
  ];
  const choose = {
    main: main,
    dess: dess,
    sea:sea,
    bev:bev
  };
  const showItem = choose[menu];
  return (
    <div>
      <div className="md:flex md:flex-row flex flex-col border border-amber-800 md:h-24 h-80 w-100 rounded-lg md:w-2xl justify-self-center justify-between  mt-14">
        <button
          className="bg-amber-800 hover:bg-blue-300 hover:text-black md:h-16 h-20 md:w-36 w-80 rounded-lg md:ml-2 ml-9 mt-4 font-semibold"
          onClick={() => setmenu("main")}
        >
          MAIN DISHES
        </button>
        <button
          className="bg-amber-800  hover:bg-blue-300 hover:text-black md:h-16 h-20 md:w-36 w-80 rounded-lg  mt-4 md:ml-0 ml-9 font-semibold"
          onClick={() => setmenu("dess")}
        >
          DESSERTS
        </button>
        <button
          className="bg-amber-800  hover:bg-blue-300 hover:text-black md:h-16 h-20 md:w-36 w-80 rounded-lg  mt-4 md:ml-0 ml-9 font-semibold"
          onClick={() => setmenu("sea")}
        >
          SEA FOOD
        </button>
        <button
          className="bg-amber-800  hover:bg-blue-300 hover:text-black md:h-16 h-20 md:w-36 w-80 rounded-lg mr-2 md:ml-0 ml-9 mt-4 font-semibold md:mb-0 mb-2"
          onClick={() => setmenu("bev")}
        >
          BEVERAGES
        </button>
      </div>
      <>
        <div className=" grid grid-cols-1 md:grid-cols-3 gap-y-9 mx-20 mt-12 ">
          {showItem.map((value) => {
            return (
              <Card
                key={value.id}
                image={value.image}
                rate={value.rate}
                price={value.price}
                food={value.product}
                info={value.info}
                more={value.co}
              />
            )
          })}
        </div>
      </>
    </div>
  );
}
