"use client";
import React from "react";
import Image from "next/image";

const CustomFishTanksSection = () => {
  return (
    <section
      className="relative py-24 md:py-40 text-white bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/images/img10.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-[#000000]/70"></div>

      <div className="relative container mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between">
        
        <div className="text-center md:text-left md:w-1/2 mb-10 md:mb-0">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">
            Specialists In Custom Fish Tanks, Luxury Aquarium Design, Installation And Maintenance.
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-200 leading-relaxed mb-8">
            AquaPro prides itself on their depth of knowledge, quality of service, and a tailored
            approach to luxury aquarium design.
          </p>
          <a
            href="#portfolio"
            className="inline-block px-8 py-3 border border-[#21b0fe] text-[#21b0fe] font-semibold text-sm sm:text-base rounded transition-all duration-300 hover:bg-[#21b0fe] hover:text-white"
          >
            VIEW OUR PORTFOLIO
          </a>
        </div>

      
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <Image
            src="/images/img4.png"
            alt="Custom Fish Tank"
            width={420}
            height={480}
            className="object-contain rounded-lg drop-shadow-2xl"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default CustomFishTanksSection;
