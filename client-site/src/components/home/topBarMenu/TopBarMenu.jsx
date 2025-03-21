import {
  FaBookOpen,
  FaFacebookF,
  FaGift,
  FaInstagram,
  FaTelegramPlane,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { MdSportsCricket } from "react-icons/md";
import { RxCaretDown } from "react-icons/rx";
import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../../../assets/logo.png";
import { FaTimes } from "react-icons/fa";

const links = [
  { name: "App", url: "/app", icon: null },
  { name: "12000 BDT bonus", url: "/bonus", icon: <FaGift /> },
];

// social link
const socialLinks = [
  { id: 1, icon: <FaFacebookF />, url: "https://facebook.com" },
  { id: 2, icon: <FaTwitter />, url: "https://twitter.com" },
  { id: 3, icon: <FaInstagram />, url: "https://instagram.com" },
  { id: 3, icon: <FaYoutube />, url: "https://youtube.com" },
  { id: 3, icon: <FaTelegramPlane />, url: "https://telegram.com" },
];

const TopBarMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="flex items-center gap-5 bg-[#212121] pl-4">
        {/* logo */}
        <Link>
          <img className="w-52 2xl:w-64" src={logo} alt="" />
        </Link>
        <div className="w-full">
          {/* top social menu bar */}
          <div className="flex items-center justify-between gap-2 py-3 pr-4">
            <div className="flex items-center gap-10">
              <div className="flex items-center gap-3 text-md text-white">
                {links.map((link, index) => (
                  <Link key={index} href={link.url}>
                    <div className="flex items-center gap-1 py-0.5 px-4 bg-[#3b3b3b] hover:bg-[#4d4c4c] rounded-md duration-300">
                      {link.icon}
                      {link.name}
                    </div>
                  </Link>
                ))}
              </div>

              <div className="flex gap-2 items-center">
                {socialLinks.map((social) => (
                  <Link key={social.id} href={social.url} target="_blank">
                    <div className="p-1.5 text-white bg-sky-600 hover:bg-sky-700 rounded-full duration-300">
                      {social.icon}
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Link>
                <div
                  onClick={() => setIsOpen(true)}
                  className="py-0.5 px-4 text-md text-white bg-sky-600 hover:bg-sky-700 duration-300 rounded-sm"
                >
                  Registration
                </div>
              </Link>
              <Link>
                <div
                  onClick={() => setIsOpen(true)}
                  className="py-0.5 px-4 text-md text-white bg-[#3b3b3b] hover:bg-[#4d4c4c] rounded-sm"
                >
                  Login
                </div>
              </Link>
            </div>
          </div>
          {/* bottom menu bar */}
          <div className="flex gap-2 items-center justify-between pr-4 text-white bg-sky-600">
            <div className="flex items-center">
              <Link>
                <div className="flex items-center gap-1 py-3 px-2.5 text-sm font-medium">
                  <MdSportsCricket />
                  CRICKET
                </div>
              </Link>
              <div
                className="relative"
                onMouseEnter={() => setIsOpen(true)}
                onMouseLeave={() => setIsOpen(false)}
              >
                {/* Button */}
                <div className="flex items-center py-3 px-2.5 text-sm font-medium cursor-pointer">
                  SPORTS
                  <RxCaretDown size={20} />
                </div>

                {/* Dropdown Menu */}
                {isOpen && (
                  <div className="absolute left-0 py-2 px-4 bg-white shadow-lg">
                    <ul className="text-sm text-gray-700">
                      <li className="px-2 py-1 text-sm font-semibold hover:text-amber-600 border-l-2 border-gray-100 hover:border-amber-600 duration-700 cursor-pointer">
                        Football
                      </li>
                      <li className="px-2 py-1 text-sm font-semibold hover:text-amber-600 border-l-2 border-gray-100 hover:border-amber-600 duration-700 cursor-pointer">
                        Football
                      </li>
                      <li className="px-2 py-1 text-sm font-semibold hover:text-amber-600 border-l-2 border-gray-100 hover:border-amber-600 duration-700 cursor-pointer">
                        Football
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>

            <div className="">
              <FaBookOpen />
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          {/* Blurred Background */}
          <div
            className="fixed inset-0 bg-opacity-50 backdrop-blur-sm"
            onClick={() => setIsOpen(false)} // Click করলে বন্ধ হবে
          ></div>

          {/* Modal Content */}
          <div className="bg-white p-6 rounded-lg shadow-lg z-50 w-96 max-h-[80vh] overflow-y-auto relative no-scrollbar">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-900"
            >
              <FaTimes size={20} />
            </button>
            <h2 className="text-lg font-bold mb-4">Login / Registration</h2>

            <p>আপনার তথ্য দিন...</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
              molestias officiis dolorum iste soluta sit tempore est sapiente
              reiciendis rem, maiores, delectus recusandae impedit magnam
              cupiditate placeat, repudiandae laborum dicta.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
              molestias officiis dolorum iste soluta sit tempore est sapiente
              reiciendis rem, maiores, delectus recusandae impedit magnam
              cupiditate placeat, repudiandae laborum dicta.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
              molestias officiis dolorum iste soluta sit tempore est sapiente
              reiciendis rem, maiores, delectus recusandae impedit magnam
              cupiditate placeat, repudiandae laborum dicta.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
              molestias officiis dolorum iste soluta sit tempore est sapiente
              reiciendis rem, maiores, delectus recusandae impedit magnam
              cupiditate placeat, repudiandae laborum dicta.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default TopBarMenu;
