import Footer from "../components/footer";
import Masterchef from "../components/masterchef";
import Navbar from "../components/navbar";

export default function Chef(){
    return(
        <div>
            <Navbar tittle="Restaurant Chef" nav="Home >" current=" Chef" />
            <div className="mt-60  bg-gray-200 h-250 w-screen">
            </div>
            <div className=" "></div>
          <div className=" md:-mt-120 md:pt-0 pt-40 mt-10 "> <Footer/></div>
             
          
        </div>
    )
}