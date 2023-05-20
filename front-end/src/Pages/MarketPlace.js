import Callout from "../Components/Callout";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";

const MarketPlace = () => {
  return (
    <>
      <NavBar />

      <div className="h-[535px] text-left text-17xl text-lightseagreen-100 font-h2">
        <img
          className="w-screen h-[460px] object-cover"
          alt=""
          src={require("../assets/hero1.jpg")}
        />
        <div className="absolute top-[300px] left-[100px] w-[550px] h-[120px] bg-gray-500">
          <p className="relative top-[05px] left-[10px] text-9xl tracking-[-0.02em] text-white font-bold w-[450px]">
            Find New Projects in Pakistan
          </p>
          <p className="relative top-[15px] left-[10px] text-xxxs  text-[14px] tracking-[-0.001em] text-white font-normal w-[480px]">
            Real Chain World provides you with a vibe of what every day looks
            like in different housing societies of Pakistan
          </p>
        </div>
      </div>
      <div className="absolute top-[480px] ml-60 rounded-lg w-4/6 h-[160px] bg-white flex">
        <div className="relative top-[05px] ml-2 rounded-lg w-1/5 h-[80px] bg-white">
          <p className="relative top-[05px] ml-4 left-[05px] text-xxs text-[17px]  text-black font-medium">
            City
          </p>
          <input
            className="relative top-[2px] ml-4 w-4/5 h-[40px] bg-white text-gray-500 text-sm p-2.5 focus:outline-none focus:border-none"
            placeholder="Lahore"
            required
          />
        </div>
        <div className="relative top-[15px] w-0.5 h-[60px] bg-gray-300"></div>
        <div className="relative top-[05px] ml-2 rounded-lg w-3/5 h-[80px] bg-white">
          <p className="relative top-[05px] ml-4 left-[05px] text-xxs text-[17px]  text-black font-medium">
            Property Name
          </p>
          <input
            className="relative top-[2px] ml-4 w-5/6 h-[40px] bg-white text-gray-500 text-sm p-2.5 focus:outline-none focus:border-none"
            placeholder="Search Property"
            required
          />
        </div>
        <div className="relative top-[15px] w-0.5 h-[60px] bg-gray-300"></div>
        <button className="relative top-[22px] px-6 ml-6 mr-6 rounded w-1/6 h-[45px] bg-lightseagreen-100 text-[18px] text-white font-medium inline-flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-4 h-4 mr-2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>

          <span>Search</span>
        </button>
      </div>
      <h1 className="mt-10 ml-28  text-9xl tracking-[-0.02em] font-bold font-h2 text-lightseagreen-100">
        Projects on our Platform
      </h1>
      <h3 className=" ml-28 text-4xl tracking-[-0.02em] font-medium w-[650px] text-gray-500">
        Giving you the trust you need to own your share of tokenized real
        estate.
      </h3>
      <div className="ml-24 mt-12" id="best-opportunties">
        <div className="m-6 flex flex-wrap gap-16 w-[1100px]">
          <card className="w-[310px] h-[580px]">
            <img
              className="w-[300px] h-[170px]"
              alt=""
              src={require("../assets//rectangle-10@2x.png")}
            />
            <div className="bg-white shadow-[0px_2px_2px_2px_rgba(71,_142,_117,_0.2)] w-[300px] h-[340px]">
              <h4 className=" text-4xl mt-2 pl-6 font-bold text-lightseagreen-100">
                PKR34.9 Lakh to 89.9 Lakh
              </h4>
              <p className=" text-4xl mt-2 pl-6 font-medium ">
                30 Inlet Cove Cottage
              </p>
              <p className=" text-3xl mt-2 pl-6 font-light text-gray-700">
                Alexandria, Pakistan
              </p>
              <div className="p-6 font-semibold text-gray-700 flex justify-between">
                <p>Rate Per Token:</p>
                <p className="">50 ETH</p>
              </div>
              <div className="pl-6 pr-6 mt-0 font-semibold text-gray-700 flex justify-between">
                <p>Available Token:</p>
                <p className="">50 ETH</p>
              </div>

              <p className=" text-4xl mt-6 pl-6 font-medium text-lightseagreen-100">
                0 Investors
              </p>
              <button className="cursor-pointer [border:none] mt-8 ml-1 pl-4 bg-lightseagreen-100 rounded w-[290px] h-[50px]">
                <div className=" text-4xl font-medium text-white text-center">{`View Property   `}</div>
              </button>
            </div>
          </card>
          <card className="w-[310px] h-[580px]">
            <img
              className="w-[300px] h-[170px]"
              alt=""
              src={require("../assets//rectangle-10@2x.png")}
            />
            <div className="bg-white shadow-[0px_2px_2px_2px_rgba(71,_142,_117,_0.2)] w-[300px] h-[340px]">
              <h4 className=" text-4xl mt-2 pl-6 font-bold text-lightseagreen-100">
                PKR34.9 Lakh to 89.9 Lakh
              </h4>
              <p className=" text-4xl mt-2 pl-6 font-medium ">
                30 Inlet Cove Cottage
              </p>
              <p className=" text-3xl mt-2 pl-6 font-light text-gray-700">
                Alexandria, Pakistan
              </p>
              <div className="p-6 font-semibold text-gray-700 flex justify-between">
                <p>Rate Per Token:</p>
                <p className="">50 ETH</p>
              </div>
              <div className="pl-6 pr-6 mt-0 font-semibold text-gray-700 flex justify-between">
                <p>Available Token:</p>
                <p className="">50 ETH</p>
              </div>

              <p className=" text-4xl mt-6 pl-6 font-medium text-lightseagreen-100">
                0 Investors
              </p>
              <button className="cursor-pointer [border:none] mt-8 ml-1 pl-4 bg-lightseagreen-100 rounded w-[290px] h-[50px]">
                <div className=" text-4xl font-medium text-white text-center">{`View Property   `}</div>
              </button>
            </div>
          </card>
          <card className="w-[310px] h-[580px]">
            <img
              className="w-[300px] h-[170px]"
              alt=""
              src={require("../assets//rectangle-10@2x.png")}
            />
            <div className="bg-white shadow-[0px_2px_2px_2px_rgba(71,_142,_117,_0.2)] w-[300px] h-[340px]">
              <h4 className=" text-4xl mt-2 pl-6 font-bold text-lightseagreen-100">
                PKR34.9 Lakh to 89.9 Lakh
              </h4>
              <p className=" text-4xl mt-2 pl-6 font-medium ">
                30 Inlet Cove Cottage
              </p>
              <p className=" text-3xl mt-2 pl-6 font-light text-gray-700">
                Alexandria, Pakistan
              </p>
              <div className="p-6 font-semibold text-gray-700 flex justify-between">
                <p>Rate Per Token:</p>
                <p className="">50 ETH</p>
              </div>
              <div className="pl-6 pr-6 mt-0 font-semibold text-gray-700 flex justify-between">
                <p>Available Token:</p>
                <p className="">50 ETH</p>
              </div>

              <p className=" text-4xl mt-6 pl-6 font-medium text-lightseagreen-100">
                0 Investors
              </p>
              <button className="cursor-pointer [border:none] mt-8 ml-1 pl-4 bg-lightseagreen-100 rounded w-[290px] h-[50px]">
                <div className=" text-4xl font-medium text-white text-center">{`View Property   `}</div>
              </button>
            </div>
          </card>
          <card className="w-[310px] h-[580px]">
            <img
              className="w-[300px] h-[170px]"
              alt=""
              src={require("../assets//rectangle-10@2x.png")}
            />
            <div className="bg-white shadow-[0px_2px_2px_2px_rgba(71,_142,_117,_0.2)] w-[300px] h-[340px]">
              <h4 className=" text-4xl mt-2 pl-6 font-bold text-lightseagreen-100">
                PKR34.9 Lakh to 89.9 Lakh
              </h4>
              <p className=" text-4xl mt-2 pl-6 font-medium ">
                30 Inlet Cove Cottage
              </p>
              <p className=" text-3xl mt-2 pl-6 font-light text-gray-700">
                Alexandria, Pakistan
              </p>
              <div className="p-6 font-semibold text-gray-700 flex justify-between">
                <p>Rate Per Token:</p>
                <p className="">50 ETH</p>
              </div>
              <div className="pl-6 pr-6 mt-0 font-semibold text-gray-700 flex justify-between">
                <p>Available Token:</p>
                <p className="">50 ETH</p>
              </div>

              <p className=" text-4xl mt-6 pl-6 font-medium text-lightseagreen-100">
                0 Investors
              </p>
              <button className="cursor-pointer [border:none] mt-8 ml-1 pl-4 bg-lightseagreen-100 rounded w-[290px] h-[50px]">
                <div className="text-4xl font-medium text-white text-center">{`View Property   `}</div>
              </button>
            </div>
          </card>
        </div>
      </div>
      <Callout />
      <Footer />
    </>
  );
};

export default MarketPlace;
