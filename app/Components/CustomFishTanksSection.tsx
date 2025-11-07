"use client";
import React from "react";
import Image from "next/image";

const CustomFishTanksSection = () => {
  return (
    <section className="relative py-20 md:py-36 text-white overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/img10.jpg"
          alt="Luxury Aquarium Background"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="relative z-10 container mx-auto px-6 sm:px-8 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16">
        <div className="w-full md:w-1/2 text-center md:text-left">
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

        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <div className="relative w-64 h-72 sm:w-80 sm:h-96 md:w-[420px] md:h-[480px]">
            <Image
              src="/images/img4.png"
              alt="Custom Fish Tank"
              fill
              priority
              className="object-contain rounded-lg drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomFishTanksSection;
