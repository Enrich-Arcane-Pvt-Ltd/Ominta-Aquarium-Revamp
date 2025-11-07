'use client';
import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section
      className="relative h-screen bg-black flex items-center justify-center text-center overflow-hidden"
    >
      
      <div className="absolute inset-0">
        <img
          src="/hero-bg.jpg"
          alt="Aquarium background"
          className="w-full h-full object-cover opacity-40"
        />
      </div>

      
      <div className="relative z-10 text-light-100 px-4">
        <h1 className="text-5xl md:text-6xl font-bold text-primary-400 mb-6 drop-shadow-lg">
          Welcome to AquaPro
        </h1>
        <p className="text-lg md:text-xl text-light-200 mb-8 max-w-2xl mx-auto">
          Your trusted partner in aquarium design, installation, and maintenance.
        </p>
        <button className="px-8 py-3 bg-primary-500 text-white font-semibold rounded-full hover:bg-primary-400 transition-all shadow-md">
          Discover More
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
