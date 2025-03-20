import { FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";
import { IoIosFootball } from "react-icons/io";
import { BsExclamationCircle } from "react-icons/bs";
import SportsNavigation from "./Sportsnavigation";
import { RiArrowRightDoubleLine } from "react-icons/ri";
import { AiFillLike } from "react-icons/ai";
import { BiFootball } from "react-icons/bi";
export default function Leftside() {
  return (
    <section className=" w-[10%] lg:w-[20%] p-1 overflow-y-auto custom-scrollbar">
    <div className="sticky top-0 z-10 bg-[#1a1a1a] text-white rounded-md shadow-md">
      <div className="lg:flex justify-between items-center text-sm pb-2 hidden">
        <button className="flex justify-center bg-[#212121] w-full py-[7px] text-white items-center space-x-1">
          <RiArrowRightDoubleLine size={12} />
          <span>Collapse block</span>
        </button>
      </div>

      <div>
        <div className="flex p-2 bg-[#232323] rounded-[3px] justify-center lg:justify-start items-center gap-[8px]">
          <AiFillLike className="text-[20px]" />
          <span className="hidden lg:flex text-white text-[14px] font-semibold">
            Recommended
          </span>
        </div>

        <div className="flex justify-center lg:justify-between rounded-[3px] p-2 bg-[#232323] items-center mt-[2px]">
          <span className="text-white flex items-center space-x-1">
            <IoIosFootball size={16} />
            <span className="hidden lg:flex font-semibold text-[14px]">
              Top Games
            </span>
          </span>
          <div className="hidden lg:flex items-center space-x-2 text-gray-400">
            <FaChevronLeft size={14} />
            <span>1/5</span>
            <FaChevronRight size={14} />
          </div>
        </div>
      </div>
    </div>

    {/* Scrollable Content */}
    <div className=" bg-white lg:block hidden">
      <div className="flex items-center justify-between">
        <div className="flex justify-start items-center gap-[5px]">
          <BiFootball className="text-black" />
          <div className="text-gray-600 text-xs">
            Saudi Arabia. Saudi Professional..
          </div>
        </div>
        <FaStar className="text-yellow-400" size={14} />
      </div>

      <div className="text-yellow-600 text-xs mt-1">
        2nd half, 92 minutes / Round 20 / Penalties 0-1
      </div>

      <div className="mt-2">
        <div className="flex justify-between items-center py-1">
          <div className="flex items-center space-x-2">
            <img
              src="https://v3.traincdn.com/resized/size14/sfiles/logo_teams/5720f37a8939c078e93e0b01011fbb32.webp"
              className="w-5 h-5"
              alt="Al-Okhdood"
            />
            <span className="text-gray-800 text-[13px] font-[400]">
              Al-Okhdood
            </span>
          </div>
          <span className="text-gray-800">0</span>
        </div>
        <div className="flex justify-between items-center py-1">
          <div className="flex items-center space-x-2">
            <img
              src="https://v3.traincdn.com/resized/size14/sfiles/logo_teams/3e89ac5cd0aaedcfbbb0af457bdf81dd.webp"
              className="w-5 h-5"
              alt="Damac"
            />
            <span className="text-gray-800 text-[13px] font-[400]">
              Damac
            </span>
          </div>
          <span className="text-gray-800">0</span>
        </div>
      </div>
      <button className="text-gray-600 text-sm mt-2">
        Detailed score &gt;
      </button>
    </div>

    {/* Betting Odds */}
    <div className="px-[4px] py-[5px] lg:grid bg-white hidden grid-cols-3 gap-1 text-sm">
      <button className="bg-[#D6D6D6] p-2 rounded text-center text-gray-700 flex justify-between items-center">
        W1<span className="">7.7</span>
      </button>
      <button className="bg-[#D6D6D6] p-2 rounded text-center text-gray-700 flex justify-between items-center">
        X<span className="">1.135</span>
      </button>
      <button className="bg-[#D6D6D6] p-2 rounded text-center text-gray-700 flex justify-between items-center">
        W2<span className="">24</span>
      </button>
    </div>

    <SportsNavigation />
  </section>
  );
}