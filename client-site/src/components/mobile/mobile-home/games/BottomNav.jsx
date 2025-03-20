import { useState } from "react";
import { FaBars, FaFutbol, FaRegUser, FaTimes, FaDice, FaAppleAlt ,FaChevronDown} from "react-icons/fa";
import { IoTicketOutline } from "react-icons/io5";
import { MdSportsVolleyball } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { GoDotFill } from "react-icons/go";
import { TbMenu3 } from "react-icons/tb";
import { CgClose } from "react-icons/cg";
import { GiPineapple } from "react-icons/gi";
import { MdOutlineDiamond } from "react-icons/md";
import { BiDice5 } from "react-icons/bi";
import { MdOutlineSportsCricket } from "react-icons/md";
import { FaGooglePlay, FaAppStoreIos, FaTv, FaStar, FaTrophy,FaGamepad, FaCog  } from 'react-icons/fa';
import { MdLiveTv } from 'react-icons/md';
import { SiApple } from "react-icons/si";
import { FaHome } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";
import { PiGameControllerBold } from "react-icons/pi";
import { FaChartPie } from "react-icons/fa";
import toast,{Toaster} from "react-hot-toast"
const BottomNav = () => {
  const [activeTab, setActiveTab] = useState("");
  const [sportsopen, setsportsopen] = useState(false);

  const toggleCasinoDropdown = () => {
    setCasinoOpen(!casinoOpen);
    setsportsopen(false)
  };
  const [casinoOpen, setCasinoOpen] = useState(false);

  const togglesportsdropdown = () => {
    setsportsopen(!sportsopen);
    setCasinoOpen(false)
  };
  const [bet_slipopen, setbet_slipopen] = useState(false);

  const togglebetslip = () => {
    setbet_slipopen(!bet_slipopen);
    setCasinoOpen(false)
    setsportsopen(false)
  };
  // ------const menu-----------------
  const [menu_open,set_menuopen]=useState(false);
  const togglemenuopen = () => {
    set_menuopen(!menu_open)
    setbet_slipopen(false);
    setCasinoOpen(false)
    setsportsopen(false)
  };
  const navItems = [
    { id: "sport", label: "Sport", icon: <MdSportsVolleyball />,action:togglesportsdropdown },
    { id: "casino", label: "Casino", icon: <FaFutbol />, action: toggleCasinoDropdown },
    { id: "bet_slip", label: "Bet Slip", icon: <IoTicketOutline />, isCenter: true, action: togglebetslip },
    { id: "login", label: "Log In",href:"login",icon: <FaRegUser /> },
    { id: "menu", label: "Menu", icon: <FaBars />,action:togglemenuopen },
  ];
  const [selectedLanguage, setSelectedLanguage] = useState("EN");
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  const languages = ["EN", "Español", "Français", "Deutsch", "বাংলা"];
  const handlealert=()=>{
    toast.error("Please,Connect game api!")
  }
  const handlealert2=()=>{
    toast.error("No app available!")
  }
  return (
    <>
      {/* Bottom Navigation */}
      <div className="fixed lg:hidden z-[1000] flex bottom-0 left-0 right-0 bg-white border-t-[1px] border-gray-200 text-white justify-around items-end pb-1 shadow-lg shadow-gray-500">
       <Toaster/>
        {navItems.map((item) => (
          <NavLink to={item.href ? item.href:""} key={item.id} className="relative">
            <button
              className={`relative flex flex-col items-center cursor-pointer px-2 lg:px-4 py-1 ${
                activeTab === item.id ? "text-yellow-400" : "text-gray-500"
              } transition-all`}
              onClick={() => {
                setActiveTab(item.id);
                if (item.action) item.action();
              }}
            >
              {item.isCenter ? (
                <div className="bg-yellow-500 flex justify-center p-[6px] rounded-full text-black items-center">
                  <div className="bg-yellow-500">
                    <span className="animate-spin-slow text-[18px]">{item.icon}</span>
                  </div>
                </div>
              ) : (
                <div className="text-[15px]">{item.icon}</div>
              )}
              <span className="text-[12px] font-[500] mt-2">{item.label}</span>
            </button>

            {/* Casino Dropdown - Opens ONLY when clicking Casino */}
            {item.id === "casino" && casinoOpen && (
              <div
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-white shadow-lg rounded-t-[10px] py-3 px-[4px] transition-all duration-300 ease-in-out"
              >
              <ul className="flex flex-col items-center space-y-3">
                  <li onClick={handlealert} className="flex flex-col items-center text-gray-700 hover:text-black cursor-pointer">
                    <GiPineapple className="text-xl" />
                    <span className="text-sm text-nowrap">Casino</span>
                  </li>
                  <li onClick={handlealert} className="flex flex-col items-center text-gray-700 hover:text-black cursor-pointer">
                    <MdOutlineDiamond className="text-xl" />
                    <span className="text-sm text-nowrap">Live Casino</span>
                  </li>
                  <li onClick={handlealert} className="flex flex-col items-center text-gray-700 hover:text-black cursor-pointer">
                    <BiDice5 className="text-xl" />
                    <span className="text-sm text-nowrap">Fast Gam..</span>
                  </li>
                  <button
                  className="flex justify-center items-center cursor-pointer w-full text-gray-500 hover:text-gray-800 transition-all"
                  onClick={() => setCasinoOpen(false)}
                >
                  <CgClose className="text-[22px]" />
                </button>
                </ul>
              </div>
            )}
              {item.id === "sport" && sportsopen && (
              <div
                className="absolute bottom-0 left-1/2 ml-[10px] transform -translate-x-1/2 bg-white shadow-lg rounded-t-[10px] py-3 px-[10px] transition-all duration-300 ease-in-out"
              >
                <ul className="flex flex-col items-center space-y-3">
                  <li onClick={handlealert} className="flex flex-col items-center text-gray-600 hover:text-black cursor-pointer">
                    <span className="flex justify-center items-center">( <GoDotFill className="text-green-500 animate-pulse"/> )</span>
                    <span className="text-sm">Live</span>
                  </li>
                  <li onClick={handlealert} className="flex flex-col items-center text-gray-600 hover:text-black cursor-pointer">
                  <BiDice5 className="text-xl" />
                    <span className="text-sm">Sports</span>
                  </li>
                  <NavLink to="/unibet-sports" className="flex flex-col items-center text-gray-700 hover:text-black cursor-pointer">
                    <TbMenu3 className="text-xl" />
                    <span className="text-sm text-nowrap">Unibet</span>
                  </NavLink>
                  <button
                  className="flex justify-center items-center cursor-pointer w-full text-gray-500 hover:text-gray-800 transition-all"
                  onClick={() => setsportsopen(false)}
                >
                  <CgClose className="text-[22px]" />
                </button>
                </ul>

                {/* Close Button */}
   
              </div>
            )}
           
          </NavLink>
        ))}
          {activeTab=== "bet_slip" && bet_slipopen && (
           <div className="w-full fixed z-[-1] bottom-0 left-0 bg-red-50 h-[300px]">

           </div>
            )}
            {activeTab=== "menu" && menu_open && (
   <div className="bg-white fixed top-0 left-0 w-full  text-gray-800 h-[100vh] overflow-y-auto no-scrollbar shadow-lg">
   {/* Top Bar */}
   <div className="flex items-center justify-between p-4 border-b border-gray-300">
     {/* Language Selection */}
     <div className="relative">
       <button
         onClick={() => setIsLanguageOpen(!isLanguageOpen)}
         className="px-3 py-1 rounded-lg flex items-center space-x-2"
       >
         <span className="text-[18px]">{selectedLanguage}</span>
         <FaChevronDown />
       </button>
       {isLanguageOpen && (
         <div className="absolute mt-2 bg-white border border-gray-300 rounded-lg shadow-lg w-32">
           {languages.map((lang) => (
             <button
               key={lang}
               onClick={() => {
                 setSelectedLanguage(lang);
                 setIsLanguageOpen(false);
               }}
               className="block w-full text-left px-3 py-2 hover:bg-gray-100"
             >
               {lang}
             </button>
           ))}
         </div>
       )}
     </div>

     {/* Icons */}
     <div className="flex space-x-2">
       <button onClick={handlealert} className="p-3 hover:bg-gray-200 text-gray-800 rounded-[5px] bg-gray-200"><FaCog size={18} /></button>
       <button onClick={()=>{set_menuopen(false)}} className="p-2 hover:bg-gray-200 rounded-lg"><CgClose size={22} /></button>
     </div>
   </div>

   {/* Left Sidebar */}
   <div className="w-full  space-y-2">
     {/* Download Section */}
     <div className="space-y-4 px-4 py-[10px] border-b-[1px] border-gray-200">
       <h2 className="text-sm font-semibold text-center">Download mobile app</h2>
       <div className="grid grid-cols-2 gap-[6px]">
         <button onClick={handlealert2} className="flex items-center justify-center space-x-2 font-[500] bg-[#FFB805] text-black p-2 rounded-[5px]">
           <FaGooglePlay />
           <span>ANDROID</span>
         </button>
         <button onClick={handlealert2} className="flex items-center justify-center space-x-2 font-[500] bg-[#FFB805] text-black p-2 rounded-[5px]">
           <SiApple />
           <span>IOS</span>
         </button>
       </div>
     </div>

     {/* Navigation */}
     <div className="space-y-2">
       <NavLink to="/" onClick={()=>{set_menuopen(false)}} className="flex items-center space-x-2 w-full p-2 border-b-[1px] border-gray-200 hover:bg-gray-200">
         <span className="p-[10px] text-[20px] bg-gray-100 rounded-full"><FaHome /></span>
         <span>Main Page</span>
       </NavLink>
       <button onClick={handlealert} className="flex items-center space-x-2 w-full p-2 border-b-[1px] border-gray-200 hover:bg-gray-200">
         <span className="p-[10px] text-[20px] bg-gray-100 rounded-full"><TbMenu3 /></span>
         <span>Sports</span>
       </button>

       <button onClick={handlealert} className="flex items-center space-x-2 w-full p-2 border-b-[1px] border-gray-200 hover:bg-gray-200">
         <span className="p-[10px] text-[13px] bg-gray-100 rounded-full text-green-500 animate-pulse flex justify-center items-center">( <GoDotFill /> )</span>
         <span>Live</span>
       </button>
       <button onClick={handlealert} className="flex items-center space-x-2 w-full p-2 border-b-[1px] border-gray-200 hover:bg-gray-200">
         <span className="p-[10px] text-[20px] bg-gray-100 rounded-full"><MdOutlineSportsCricket /></span>
         <span>IPL 2025</span>
       </button>

       <button onClick={handlealert} className="flex items-center space-x-2 w-full p-2 border-b-[1px] border-gray-200 hover:bg-gray-200">
         <span className="w-[27px] h-[27px] flex justify-center items-center bg-green-600 rounded-full"><span className="w-[16px] h-[16px] bg-red-500 rounded-full"></span></span>
         <span>Bet on Your National team</span>
       </button>

       <button onClick={handlealert} className="flex items-center space-x-2 w-full p-2 border-b-[1px] border-gray-200 hover:bg-gray-200">
         <span className="p-[10px] text-[20px] bg-gray-100 rounded-full"><PiGameControllerBold /></span>
         <span>Esports</span>
       </button>

       <button onClick={handlealert} className="flex items-center space-x-2 w-full p-2 border-b-[1px] border-gray-200 hover:bg-gray-200">
         <span className="p-[10px] text-[20px] bg-gray-100 text-orange-500 rounded-full"><IoIosStar /></span>
         <span>Favourites</span>
       </button>
       <button onClick={handlealert} className="flex items-center space-x-2 w-full p-2 border-b-[1px] border-gray-200 hover:bg-gray-200">
         <span className="p-[10px] text-[20px] bg-gray-100 rounded-full"><FaChartPie /></span>
         <span>Results</span>
       </button>
     </div>

   </div>
 </div>
            )}
            
      </div>
    </>
  );
};

export default BottomNav;
