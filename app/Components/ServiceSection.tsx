"use client";

import Image from "next/image";
import React from "react";

const ServicesSection = () => {
  return (
    <section className="bg-white py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-stretch mb-8 md:mb-0">
          <div className="relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] overflow-hidden">
            <div className="absolute inset-0">
              <Image
                src="/images/img2.jpg"
                alt="Aquarium Design"
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/20" />
            </div>
          </div>

          <div className="flex flex-col justify-center space-y-4 md:space-y-6 p-6 sm:p-8 md:p-10 lg:p-12 relative bg-light-200">
            <span className="hidden md:flex absolute -left-3 top-12 -rotate-90 origin-left text-xs lg:text-sm tracking-[0.15em] text-primary-600 items-center">
              <span className="border-l-2 border-primary-600 h-6 mr-2"></span>
              Installation
            </span>

            <div className="md:hidden flex items-center gap-2 text-primary-600">
              <span className="border-l-2 border-primary-600 h-6"></span>
              <span className="text-xs tracking-[0.15em] uppercase">
                Installation
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-accent-900 leading-tight">
              Aquarium Design, Manufacture, Installation
            </h2>
            <p className="text-accent-600 leading-relaxed text-sm sm:text-base">
              The AquaPro have created some of the most stylish and luxury bespoke
              built aquariums and fish tanks in the country. We draw on over 25
              years of expertise in designing, manufacturing and installing
              aquariums.
            </p>
            <button className="w-fit border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white transition-all duration-300 px-6 py-2.5 rounded text-sm font-semibold hover:shadow-lg hover:scale-105">
              MORE INFO
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-stretch">
          <div className="flex flex-col justify-center space-y-4 md:space-y-6 p-6 sm:p-8 md:p-10 lg:p-12 relative bg-light-300 order-2 md:order-1">
            <span className="hidden md:flex absolute -left-3 top-12 -rotate-90 origin-left text-xs lg:text-sm tracking-[0.15em] text-primary-600 items-center">
              <span className="border-l-2 border-primary-600 h-6 mr-2"></span>
              Maintenance
            </span>

            <div className="md:hidden flex items-center gap-2 text-primary-600">
              <span className="border-l-2 border-primary-600 h-6"></span>
              <span className="text-xs tracking-[0.15em] uppercase">
                Maintenance
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-accent-900 leading-tight">
              Aquarium Maintenance Services
            </h2>
            <p className="text-accent-600 leading-relaxed text-sm sm:text-base">
              With over 30 years in the business and nationwide coverage, we are
              one of the foremost aquarium and fish tank maintenance companies in
              New Jersey.
            </p>
            <button className="w-fit border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white transition-all duration-300 px-6 py-2.5 rounded text-sm font-semibold hover:shadow-lg hover:scale-105">
              MORE INFO
            </button>
          </div>

          <div className="relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] overflow-hidden order-1 md:order-2">
            <div className="absolute inset-0">
              <Image
                src="/images/img3.jpg"
                alt="Aquarium Maintenance"
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/20" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
