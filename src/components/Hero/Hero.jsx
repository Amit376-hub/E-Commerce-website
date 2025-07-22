import React from 'react';
import heroBanner from "../../assets/hero-banner.jpg";
import leftModel from "../../assets/left-model.jpg";
import rightModel from "../../assets/right-model.jpg";
import logo from "../../assets/image.jpeg";   // ✅ Import your logo

const Hero = () => {
  return (
    <div className="relative w-full min-h-[100vh] overflow-hidden bg-black">

      {/* ✅ Transparent Logo Background */}
      <img
        src={logo}
        alt="Background Logo"
        className="absolute inset-0 w-full h-full object-contain opacity-10 pointer-events-none"
        style={{ zIndex: 0 }}
      />

      {/* ✅ Main Content */}
      <div className="relative z-10 flex flex-col items-center w-full px-8 py-12">

        {/* Hero Section */}
        <div className="flex flex-col md:flex-row items-center justify-between w-full min-h-[80vh]">

          {/* Left Content */}
          <div className="flex flex-col items-start justify-center text-left md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
              <p className="animate-fadeDown">Discover Your Style Today</p>
            </h1>
            <h1 className="text-2xl font-semibold text-white">
              SHOP NOW
            </h1>
          </div>

          {/* Right Image */}
          <div className="md:w-1/2 flex justify-center">
            <img
              src={heroBanner}
              alt="Hero Banner"
              className="max-w-full h-auto object-contain"
            />
          </div>

        </div>

        {/* Promo Section */}
        <div className="flex flex-col md:flex-row items-center justify-center w-full bg-gray-900 rounded-xl shadow-lg py-10 px-5 mt-12">

          <div className="hidden md:flex w-1/3 justify-center">
            <img src={leftModel} alt="Model Left" className="max-w-[250px] object-cover" />
          </div>

          <div className="flex flex-col items-center text-center w-full md:w-1/3 space-y-4">
            <p className="text-xl font-semibold text-gray-300">Our Latest Collection</p>
            <p className="text-5xl font-extrabold text-white">
              30<span className="text-yellow-500">%</span> OFF
            </p>
            <h1 className="mt-4 text-2xl font-semibold text-white">
              Style That Speaks
            </h1>
          </div>

          <div className="hidden md:flex w-1/3 justify-center">
            <img src={rightModel} alt="Model Right" className="max-w-[250px] object-cover" />
          </div>

        </div>

      </div>

    </div>
  );
};

export default Hero;
