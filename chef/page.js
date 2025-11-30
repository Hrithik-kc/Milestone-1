"use client";
import Footer from "../components/footer";
import Masterchef from "../components/masterchef";
import Navbar from "../components/navbar";

export default function Chef() {
  return (
    <div>
      <Navbar img="https://i.pinimg.com/1200x/70/83/0d/70830dba2119b6d55605efefe8e95e87.jpg" tittle="Restaurant Chef" nav="Home >" current=" Chef" />
      <div className="  bg-gray-200 h-100 w-screen"></div>
      <div className="-mt-20">
        <Masterchef />
        <div className="bg-gray-200 h-54"></div>
      </div>
      <div className=" md:-mt-65 md:pt-0 pt-5 mt-0 ">
        
        <Footer />
      </div>
      
    </div>
  );
}
