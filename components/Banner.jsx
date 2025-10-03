import React, { useState, useEffect } from "react";
import banner1 from "../assets/banner_3.jpg";
import banner2 from "../assets/banner_4.jpg";

const banners = [banner1, banner2];

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-64 md:h-96 overflow-hidden">
      {banners.map((banner, index) => (
        <img
          key={index}
          src={banner}
          alt={`Banner ${index + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      <div className="text-center mt-6">
        <h1 className="text-3xl font-bold">______ Forever Clothing ______</h1>
        <p className="mt-2 text-gray-600">Discover timeless fashion with Forever Clothing, where style meets comfort for every occasion.</p>
      </div>
    </div>
    
  );
};

export default Banner;