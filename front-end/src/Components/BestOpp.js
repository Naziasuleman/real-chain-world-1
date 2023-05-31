import { Link } from "react-router-dom";
const BestOpp = () => {
  return (
    <>
      <div className="ml-24 mt-28" id="best-opportunties">
        <div className=" h-[130px] text-left text-gray-700 text-lightseagreen-100 flex">
          <div className="flex-column justify-between">
            <h4 className="text-9xl font-h4 tracking-[-0.01em]">
              Best Opportunities
            </h4>
            <p className="mt-4 text-4xl font-medium text-gray-500">
              Start investing flexibly, wherever you are in the world
            </p>
          </div>
          <Link to="/marketplace">
            <button className="cursor-pointer [border:none] mt-16 pl-96 bg-[transparent] text-3xl font-medium items-center flex">
              See More
              <svg
                aria-hidden="true"
                class="w-4 h-4 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </Link>
        </div>
        <div className="m-2 flex justify-between w-[1000px]">
          <card className="w-[300px] h-[380px]">
            <img
              className="w-[300px] h-[170px]"
              alt=""
              src={require("../assets//rectangle-10@2x.png")}
            />
            <div className="bg-white shadow-[0px_2px_2px_2px_rgba(71,_142,_117,_0.2)] w-[300px] h-[200px]">
              <h4 className=" text-4xl mt-2 pl-4 font-bold text-lightseagreen-100">
                PKR34.9 Lakh to 89.9 Lakh
              </h4>
              <p className=" text-4xl mt-2 pl-4 font-medium">
                30 Inlet Cove Cottage
              </p>
              <p className=" text-3xl mt-2 pl-4 font-light text-gray-700">
                Alexandria, Pakistan
              </p>
              <button className="cursor-pointer [border:none] mt-8 ml-1 pl-4 bg-lightseagreen-100 rounded w-[290px] h-[50px]">
                <div className=" text-4xl font-medium text-white text-center">{`View Property   `}</div>
              </button>
            </div>
          </card>
          <card className="w-[300px] h-[380px]">
            <img
              className="w-[300px] h-[170px]"
              alt=""
              src={require("../assets//rectangle-10@2x.png")}
            />
            <div className="bg-white shadow-[0px_2px_2px_2px_rgba(71,_142,_117,_0.2)] w-[300px] h-[200px]">
              <h4 className=" text-4xl mt-2 pl-4 font-bold text-lightseagreen-100">
                PKR34.9 Lakh to 89.9 Lakh
              </h4>
              <p className=" text-4xl mt-2 pl-4 font-medium">
                30 Inlet Cove Cottage
              </p>
              <p className=" text-3xl mt-2 pl-4 font-light text-gray-700">
                Lahore, Pakistan
              </p>
              <button className="cursor-pointer [border:none] mt-8 ml-1 pl-4 bg-lightseagreen-100 rounded w-[290px] h-[50px]">
                <div className=" text-4xl font-medium text-white text-center">{`View Property   `}</div>
              </button>
            </div>
          </card>
          <card className="w-[300px] h-[380px]">
            <img
              className="w-[300px] h-[170px]"
              alt=""
              src={require("../assets//rectangle-10@2x.png")}
            />
            <div className="bg-white shadow-[0px_2px_2px_2px_rgba(71,_142,_117,_0.2)] w-[300px] h-[200px]">
              <h4 className=" text-4xl mt-2 pl-4 font-bold text-lightseagreen-100">
                PKR34.9 Lakh to 89.9 Lakh
              </h4>
              <p className=" text-4xl mt-2 pl-4 font-medium">
                30 Inlet Cove Cottage
              </p>
              <p className=" text-3xl mt-2 pl-4 font-light text-gray-700">
                Alexandria, Pakistan
              </p>
              <button className="cursor-pointer [border:none] mt-8 ml-1 pl-4 bg-lightseagreen-100 rounded w-[290px] h-[50px]">
                <div className=" text-4xl font-medium text-white text-center">{`View Property   `}</div>
              </button>
            </div>
          </card>
        </div>
      </div>
    </>
  );
};
export default BestOpp;
