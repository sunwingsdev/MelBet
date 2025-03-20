import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import axios from "axios";

export default function Carousel() {
  const [banners, setBanners] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fetch banners from API
  useEffect(() => {
    const fetchBanners = async () => {
      try {
        console.log("hello")
        const response = await axios.get("http://localhost:8080/admin/banners"); // Update with your API endpoint
        setBanners(response.data.filenames || []); // Set filenames as banners
        console.log(response)
      } catch (error) {
        console.error("Error fetching banners:", error);
      }
    };

    fetchBanners();
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? banners.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === banners.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [banners]);

  return (
    <div className="relative w-full h-[200px] lg:h-[300px] overflow-hidden">
      <div className="relative flex h-full">
        {banners.map((image, index) => (
          <img
            key={index}
            src={`http://localhost:8080/images/${image}`} // Display image from server
            alt={`Slide ${index + 1}`}
            className={`absolute w-full h-[300px] lg:h-full transition-opacity duration-700 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-[#1e272e] text-white w-[30px] lg:w-[38px] flex justify-center items-center h-[100px] lg:h-[100px] cursor-pointer"
        onClick={prevSlide}
      >
        <FaChevronLeft className="text-[18px] lg:text-[22px]" />
      </button>
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#1e272e] text-white w-[30px] lg:w-[38px] flex justify-center items-center h-[100px] lg:h-[100px] cursor-pointer"
        onClick={nextSlide}
      >
        <FaChevronRight className="text-[18px] lg:text-[22px]" />
      </button>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-1">
        {banners.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`cursor-pointer transition-all duration-300 rounded-full ${
              index === currentIndex ? "w-6 h-2 bg-white rounded-xl" : "w-2 h-2 bg-gray-400"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}
