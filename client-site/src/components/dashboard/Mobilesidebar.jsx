import { useState } from "react";
import { FaSignOutAlt, FaDollarSign, FaClock, FaExchangeAlt, FaQuestionCircle, FaUserFriends, FaGift, FaShieldAlt, FaCog, FaLock } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { IoAlertCircleSharp } from "react-icons/io5";
import { NavLink, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
const Mobilesidebar = () => {
  const [activeMenu, setActiveMenu] = useState("Deposit");
   const navigate=useNavigate();
  const menuItems = [
    { name: "Deposit",slug:"/en/office/recharge",icon: <FaDollarSign className="mr-2 text-yellow-400" />, alert: true },
    { name: "Withdraw funds",slug:"/en/office/recharge", icon: <FaExchangeAlt className="mr-2" /> },
    { name: "Bet history",slug:"/en/office/history", icon: <FaClock className="mr-2" /> },
    { name: "Transaction history",slug:"/en/office/historypay", icon: <FaExchangeAlt className="mr-2" /> },
    { name: "Payment queries",slug:"/en/office/requests", icon: <FaQuestionCircle className="mr-2" /> },
    { name: "Invite friends",slug:"/en/office/bringfriend", icon: <FaUserFriends className="mr-2" /> },
    { name: "Casino VIP Cashback",slug:"/en/office/casino/vipcashback", icon: <FaGift className="mr-2" /> },
    { name: "Bonuses and gifts",slug:"/en/office/bonuses/deposit", icon: <FaGift className="mr-2" /> },
    { name: "Customer Support",slug:"/en/office/support", icon: <FaQuestionCircle className="mr-2" /> },
    { name: "Personal profile",slug:"/en/office/profile", icon: <FaShieldAlt className="mr-2" /> },
    { name: "Security",slug:"/en/office/security", icon: <FaLock className="mr-2" />, alert: true },
    { name: "Account settings",slug:"/en/office/settings", icon: <FaCog className="mr-2" /> }
  ];
  const logoutfunction = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will be logged out!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, logout!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Logged Out!", "You have been successfully logged out.", "success");
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        navigate("/");
      }
    });
  };
  return (
    <div className="w-[60%] lg:hidden absolute top-0 z-[100] left-0 bg-[#212121] text-white h-screen  p-4  flex-col justify-between">
      <div>
        <div className="  rounded-lg text-center relative">
        <div className="w-full px-[10px] bg-[#2E2E2E] py-[10px] flex justify-between items-center">
        <div className="">
         <p className="text-[15px] font-bold">N°1158267285</p>
         <p className="text-xs text-gray-400 text-left mt-[10px]">Add email</p>
         </div>
          <div className="relative w-[60px] h-[60px] flex items-center justify-center bg-gray-700 rounded-full mt-2">
            <svg className="absolute w-full h-full" viewBox="0 0 36 36">
              <path className="text-gray-600 stroke-current" strokeWidth="4" fill="none" d="M18 2a16 16 0 1 1 0 32 16 16 0 1 1 0-32" />
              <path className="text-yellow-400 stroke-current" strokeWidth="4" fill="none" strokeDasharray="100" strokeDashoffset="60" d="M18 2a16 16 0 1 1 0 32 16 16 0 1 1 0-32" />
            </svg>
            <span className="text-yellow-400 text-[15px] font-[500]">2/5</span>
            {/* <div className="absolute w-3 h-3 bg-yellow-400 rounded-full top-0 right-3"></div> */}
            {/* <div className="absolute w-3 h-3 bg-yellow-400 rounded-full" style={{ top: "50%", right: "5%", transform: "translateY(-50%)" }}></div> */}
          </div>
        </div>
{/* -----------------top-part-end------------------------ */}
          <div className="py-[10px] text-sm bg-[#1e272e] px-[10px]">
            <p className="w-full flex justify-between items-center">Bonus points <span className="float-right">0</span></p>
            <p className="w-full flex justify-between items-center mt-[10px]">Main account (BDT) <span className="float-right">0</span></p>
          </div>
        </div>

        <nav className="mt-4">
          <ul>
            {menuItems.map((item) => (
             <NavLink to={`${item.slug}`}>
               <li
                key={item.name}
                className={`flex items-center p-2 mt-2 cursor-pointer text-nowrap ${activeMenu === item.name ? "bg-gray-800 border-l-[2px] border-yellow-400" : "hover:bg-gray-700"}`}
                onClick={() => setActiveMenu(item.name)}
              >
                {item.icon} {item.name}
                {item.alert && <span className="ml-auto text-red-500 text-[18px]"><IoAlertCircleSharp/></span>}
              </li>
             </NavLink>
            ))}
          </ul>
        </nav>
      </div>

      <button onClick={logoutfunction} className="flex cursor-pointer items-center justify-center w-full p-3 bg-gray-800 text-white rounded-lg mt-4 hover:bg-gray-700">
        <FaSignOutAlt className="mr-2" /> Log out
      </button>
    </div>
  );
};

export default Mobilesidebar;
