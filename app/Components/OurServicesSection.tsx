"use client";

import React from "react";
import { Sparkles, Fish, PencilRuler, MessageSquare } from "lucide-react";

const OurServices = () => {
  const services = [
    {
      image: "https://images.unsplash.com/photo-1520986606214-8b456906c813?w=400",
      icon: Sparkles,
      title: "Maintenance",
      description:
        "Ominta-Aquarium offers aquarium cleaning or regularly scheduled professional maintenance.",
    },
    {
      image: "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?w=400",
      icon: Fish,
      title: "Health Services",
      description:
        "Ominta-Aquarium can provide you with a fast accurate diagnosis. We'll discuss with you the best course of action.",
    },
    {
      image: "https://images.unsplash.com/photo-1535591273668-578e31182c4f?w=400",
      icon: PencilRuler,
      title: "Design & Install",
      description:
        "Ominta-Aquarium has installed many types of aquariums in both commercial and residential locations.",
    },
    {
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400",
      icon: MessageSquare,
      title: "Consultation",
      description:
        "Whether you are a beginner or have an expert-level question, Ominta-Aquarium can help!",
    },
  ];

  return (
    <section
      id="our-services"
      className="relative bg-cover bg-center py-16 sm:py-20 lg:py-28 text-white"
      style={{
        backgroundImage:
          "linear-gradient(rgba(15, 186, 207, 0.92), rgba(15, 186, 207, 0.92)), url('https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1920')",
      }}
    >
      <div className="text-center mb-12 sm:mb-16 px-4">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3">
          Our Services
        </h2>
        <div className="text-2xl sm:text-3xl text-primary-200">~</div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 px-4 sm:px-6 lg:px-8">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <div
              key={index}
              className="group flex flex-col items-center text-center transition-all duration-500 hover:scale-105 p-4"
            >
              <div className="relative w-32 sm:w-36 lg:w-40 h-32 sm:h-36 lg:h-40 mb-6 rounded-full flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-white rounded-full shadow-2xl"></div>
                
                <div className="absolute inset-0 flex items-center justify-center z-20 opacity-100 group-hover:opacity-0 transition-opacity duration-500">
                  <Icon className="text-primary-500 w-12 sm:w-14 lg:w-16 h-12 sm:h-14 lg:h-16 transition-transform duration-300" />
                </div>

                <div className="absolute inset-0 rounded-full overflow-hidden opacity-0 group-hover:opacity-100 transition-all duration-500 z-10">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700"
                  />
                </div>
              </div>

              <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-3">
                {service.title}
              </h3>

              <p className="text-white/90 text-sm sm:text-base mb-6 leading-relaxed px-1 sm:px-3">
                {service.description}
              </p>

              <button className="text-xs sm:text-sm font-semibold uppercase border-b-2 border-white hover:text-primary-200 hover:border-primary-200 transition tracking-wide">
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