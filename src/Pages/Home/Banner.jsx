import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      text: "Find Your Perfect Fit: Explore our Men's and Women's Clothing Collection",
      buttonLabel: "shop now",
      buttonLink: "/product",
      backgroundImage:
        'url("https://images.unsplash.com/photo-1540221652346-e5dd6b50f3e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=869&q=80")',
    },
    {
      text: "Discover Endless Possibilities with our Men's and Women's Clothing Options",
      buttonLabel: "shop now",
      buttonLink: "/product",
      backgroundImage:
        'url("https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80")',
    },
    {
      text: "Shop the Latest Trends in Men's and Women's Fashion!",
      buttonLabel: "shop now",
      buttonLink: "/product",
      backgroundImage:
        'url("https://images.unsplash.com/photo-1523381294911-8d3cead13475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80")',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(
        currentSlide === slides.length - 1 ? 0 : currentSlide + 1
      );
    }, 3000);

    return () => {
      clearInterval(timer);
    };
  }, [currentSlide, slides.length]);

  return (
    <div className=" container flex items-center justify-center h-[500px] ">
      <div className="w-full h-full mx-auto relative">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`${
              index === currentSlide ? "block" : "hidden"
            } transition-opacity duration-500 absolute inset-0 `}
            style={{ backgroundImage: slide.backgroundImage }}
          >
            <div className="bg-black w-full h-full bg-opacity-50 p-4 flex flex-col justify-around items-center">
              <h2 className="text-3xl font-bold text-white mb-4">
                {slide.text}
              </h2>
              <button className="btn btn-outline text-white">
                <Link to={slide.buttonLink}>{slide.buttonLabel}</Link>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner;
