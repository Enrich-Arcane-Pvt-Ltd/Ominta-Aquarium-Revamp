"use client";

import React from "react";
import Image from "next/image";

const ServicesSection = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-0 items-center">

        
        <div className="relative">
          <div className="overflow-hidden">
            <Image
              src="/images/img2.jpg"
              alt="Aquarium Design"
              width={600}
              height={400}
              className="object-cover w-full h-[350px] md:h-[400px]"
            />
          </div>
        </div>

        
        <div className="flex flex-col justify-center space-y-6 px-6 md:px-10 relative">
          
          <span className="absolute -left-5 md:-left-3 top-8 -rotate-90 origin-left text-sm tracking-[0.15em] text-cyan-600 flex items-center">
            <span className="border-l-2 border-cyan-600 h-6 mr-2"></span>
            Installation
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
            Aquarium Design, Manufacture, Installation
          </h2>
          <p className="text-gray-600 leading-relaxed">
            The AquaPro have created some of the most stylish and luxury bespoke
            built aquariums and fish tanks in the country. We draw on over 25
            years of expertise in designing, manufacturing and installing
            aquariums.
          </p>
          <button className="w-fit border border-cyan-600 text-cyan-600 hover:bg-cyan-600 hover:text-white transition px-4 py-2 rounded text-sm font-semibold">
            MORE INFO
          </button>
        </div>

        
        <div className="flex flex-col justify-center space-y-6 px-6 md:px-10 relative order-2 md:order-1">
          
          <span className="absolute -left-2 md:-left-3 top-8 -rotate-90 origin-left text-sm tracking-[0.15em] text-cyan-600 flex items-center">
            <span className="border-l-2 border-cyan-600 h-6 mr-2"></span>
            Maintenance
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
            Aquarium Maintenance Services
          </h2>
          <p className="text-gray-600 leading-relaxed">
            With over 30 years in the business and nationwide coverage, we are
            one of the foremost aquarium and fish tank maintenance companies in
            New Jersey.
          </p>
          <button className="w-fit border border-cyan-600 text-cyan-600 hover:bg-cyan-600 hover:text-white transition px-4 py-2 rounded text-sm font-semibold">
            MORE INFO
          </button>
        </div>

        
        <div className="relative order-1 md:order-2">
          <div className="overflow-hidden">
            <Image
              src="/images/img3.jpg"
              alt="Aquarium Maintenance"
              width={600}
              height={400}
              className="object-cover w-full h-[350px] md:h-[400px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
