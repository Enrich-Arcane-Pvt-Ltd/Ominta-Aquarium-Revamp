"use client";

import React from "react";
import Image from "next/image";
import { Sparkles, Fish, PencilRuler, MessageSquare } from "lucide-react";

const OurServices: React.FC = () => {
  const services = [
    {
      image: "/images/img5.jpg",
      icon: Sparkles,
      title: "Maintenance",
      description:
        "AquaPro offers aquarium cleaning or regularly scheduled professional maintenance.",
    },
    {
      image: "/images/img3.jpg",
      icon: Fish,
      title: "Health Services",
      description:
        "AquaPro can provide you with a fast accurate diagnosis. We’ll discuss with you the best course of action.",
    },
    {
      image: "/images/img2.jpg",
      icon: PencilRuler,
      title: "Design & Install",
      description:
        "AquaPro has installed many types of aquariums in both commercial and residential locations.",
    },
    {
      image: "/images/img6.jpg",
      icon: MessageSquare,
      title: "Consultation",
      description:
        "Whether you are a beginner or have an expert-level question, AquaPro can help!",
    },
  ];

  return (
    <section
      id="our-services"
      className="relative bg-cover bg-center py-16 sm:py-20 lg:py-28 text-white"
      style={{
        backgroundImage:
          "linear-gradient(rgba(33,176,254,0.92), rgba(33,176,254,0.92)), url('/images/img7.jpg')",
      }}
    >
     
      <div className="text-center mb-12 sm:mb-16 px-4">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3">
          Our Services
        </h2>
        <div className="text-2xl sm:text-3xl text-cyan-200">~</div>
      </div>

     
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 px-4 sm:px-6 lg:px-8">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <div
              key={index}
              className="group flex flex-col items-center text-center transition-all duration-500 hover:scale-105 p-4"
            >
             
              <div className="relative w-28 sm:w-32 lg:w-36 h-28 sm:h-32 lg:h-36 mb-6 rounded-full flex items-center justify-center overflow-hidden">
              
                <div className="absolute inset-0 rounded-full overflow-hidden opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-105 transition-all duration-500">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover rounded-full"
                  />
                </div>

              
                <div className="relative w-20 sm:w-24 lg:w-28 h-20 sm:h-24 lg:h-28 bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-110">
                  <Icon className="text-primary-500 w-7 sm:w-8 h-7 sm:h-8 group-hover:scale-125 transition-transform duration-300" />
                </div>
              </div>

            
              <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-3">
                {service.title}
              </h3>

            
              <p className="text-white/90 text-sm sm:text-base mb-6 leading-relaxed px-1 sm:px-3">
                {service.description}
              </p>

             
              <button className="text-xs sm:text-sm font-semibold uppercase border-b-2 border-white hover:text-cyan-200 hover:border-cyan-200 transition tracking-wide">
                More Info
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default OurServices;
