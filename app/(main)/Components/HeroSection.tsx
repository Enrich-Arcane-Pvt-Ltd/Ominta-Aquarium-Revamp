'use client';
import { useState } from "react";
import Image from "next/image";
import { Waves, Fish, Droplet, Sparkles } from "lucide-react";

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-accent-900">
      <div
        className="absolute inset-0"
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      >
        <Image
          src="/Images/Hero.jpg"
          alt="Aquarium background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-accent-900/40 via-accent-900/60 to-accent-900/90 z-10" />
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none z-20">
        <div className="absolute top-20 left-10 animate-float">
          <Droplet className="w-8 h-8 text-primary-600" />
        </div>
        <div className="absolute top-40 right-20 animate-float-delayed">
          <Fish className="w-12 h-12 text-primary-600" />
        </div>
        <div className="absolute bottom-40 left-1/4 animate-float">
          <Sparkles className="w-6 h-6 text-primary-200" />
        </div>
        <div className="absolute top-1/3 right-1/3 animate-float-delayed">
          <Waves className="w-10 h-10 text-primary-500" />
        </div>
      </div>

      <div className="relative z-30 text-white px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="text-center space-y-8">
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 bg-primary-500/20 backdrop-blur-sm border border-primary-400/30 rounded-full text-sm font-medium text-primary-300 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-4"
            }`}
          >
            <Sparkles className="w-4 h-4" />
            <span>Premium Aquarium Solutions</span>
          </div>

          <h1
            className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight transition-all duration-1000 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            <span className="block text-white mb-2">Welcome to</span>
            <span className="block bg-gradient-to-r from-primary-300 via-primary-400 to-primary-500 text-transparent bg-clip-text">
              Ominta Aquarium
            </span>
          </h1>

          <p
            className={`text-base sm:text-lg md:text-xl lg:text-2xl text-light-400 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-400 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            Your trusted partner in{" "}
            <span className="text-primary-400 font-semibold">
              aquarium design
            </span>
            ,
            <span className="text-primary-400 font-semibold">
              {" "}
              installation
            </span>
            , and
            <span className="text-primary-400 font-semibold">
              {" "}
              maintenance
            </span>
            . Transforming spaces into underwater paradises.
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }

        @keyframes float-delayed {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-30px) rotate(-5deg);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
