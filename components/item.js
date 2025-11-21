export default function Card({ image, rate, price, food, info, more }) {
  return (
    <div>
      
      <div className="card border border-gray-300 h-125 w-88 justify-self-center rounded-xl ">
        <img src={image} alt="food" className="w-fit rounded-xl"></img>
        <div className="flex flex-row font-bold text-amber-900 ">
          <p className="text-lg ml-9 mt-4">{rate}</p>
          <p className="text-gray-600 text-3xl ml-9 mt-4">{price}</p>
        </div>
        <h2 className="text-2xl text-black  ml-4 font-bold ">{food}</h2>
        <p className="text-gray-700 ml-4 font-semibold mt-4">{info}</p>
        <p className="text-gray-700 ml-4 font-semibold">{more}</p>
        <button className="h-12 ml-8 w-72 rounded-3xl text-black font-medium border mt-5 hover:bg-amber-600 hover:text-white border-amber-700">
          Add To Cart
        </button>
      </div>
    </div>
  );
}
