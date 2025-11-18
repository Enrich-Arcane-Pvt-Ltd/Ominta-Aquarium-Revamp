"use client";

import React from "react";
import Image from "next/image";
import { Twitter, Facebook, Instagram, Sparkles, Award, Users } from "lucide-react";

const AboutPage: React.FC = () => {
  const teamMembers = [
    { 
      name: "Walter Park", 
      image: "/Images/office-worker-3.jpg", 
      role: "Creative Director",
      specialty: "Brand Strategy"
    },
    { 
      name: "Vicki Black", 
      image: "/Images/ai-generative-head-photo.jpg", 
      role: "Chief Executive Officer",
      specialty: "Leadership"
    },
    { 
      name: "Lora Stewart", 
      image: "/Images/office-worker-3.jpg", 
      role: "Marketing Associate",
      specialty: "Digital Marketing"
    },
    { 
      name: "Linda Green", 
      image: "/Images/ai-generative-head-photo.jpg", 
      role: "Financial Director",
      specialty: "Finance Strategy"
    },
  ];

  return (
    <section className="relative">
      <div className="flex flex-col md:flex-row items-center justify-center py-20 gap-10 px-6 md:px-20">
        <div className="max-w-xl">
          <div className="flex flex-row w-full">
            <div className="flex items-center">
              <h3
                className="text-primary-500 font-bold text-sm tracking-widest uppercase transform -rotate-90 whitespace-nowrap"
              >
                Who We Are
              </h3>
            </div>

            <div className="flex flex-col ml-4">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 leading-snug">
                Specialists In Custom Fish Tanks, Luxury Aquarium Design And Installation.
              </h2>

              <p className="text-gray-600 mb-6 leading-relaxed">
                The Ominta Aquarium Revamp team has created some of the most stylish and luxury bespoke
                aquariums and fish tanks in the country. We draw on over 25 years of expertise in designing,
                manufacturing, and installing aquariums.
              </p>

              <a
                href="#team"
                className="inline-block px-8 py-3 border w-2/3 text-center border-primary-500 text-primary-600 font-semibold text-sm transition-all duration-300 hover:bg-primary-500 hover:text-white"
              >
                More Info
              </a>
            </div>
          </div>
        </div>

        <div className="relative w-full max-w-md md:flex justify-center hidden">
          <Image
            src="/Images/img12.png"
            alt="Luxury Fish"
            width={500}
            height={400}
            className="object-contain"
            priority
          />
        </div>
      </div>

      <div className="relative py-20 px-6 md:px-20 overflow-hidden">
        <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="group relative">
            <div className="relative bg-white rounded-2xl p-8 shadow-lg border border-gray-100 transition-all duration-500 group-hover:shadow-2xl group-hover:border-primary-200">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center shadow-lg transform transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110">
                  <Sparkles className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Our Vision</h3>
                  <div className="w-16 h-1 bg-primary-500 rounded-full"></div>
                </div>
              </div>
              
              <p className="text-gray-600 leading-relaxed">
                The Ominta Aquarium Revamp team has created some of the most stylish and luxury bespoke
                aquariums and fish tanks in the country. We draw on over 25 years of expertise in designing,
                manufacturing, and installing aquariums.
              </p>
            </div>
          </div>

          <div className="group relative">            
            <div className="relative rounded-2xl p-8 shadow-lg border border-gray-100 transition-all duration-500 group-hover:shadow-2xl group-hover:border-primary-200">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-primary-600 to-primary-700 rounded-xl flex items-center justify-center shadow-lg transform transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110">
                  <Award className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Our Mission</h3>
                  <div className="w-16 h-1 bg-primary-500 rounded-full"></div>
                </div>
              </div>
              
              <p className="text-gray-600 leading-relaxed">
                The Ominta Aquarium Revamp team has created some of the most stylish and luxury bespoke
                aquariums and fish tanks in the country. We draw on over 25 years of expertise in designing,
                manufacturing, and installing aquariums.
              </p>

            </div>
          </div>
        </div>
      </div>

      <div className="relative py-20 md:py-28 lg:py-32 text-white overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/Images/fish-bg-2.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-700/90 via-primary-600/85 to-primary-800/90"></div>
        
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-64 h-64 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-primary-300 rounded-full mix-blend-overlay filter blur-3xl animate-float-delayed"></div>
        </div>

        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 50px, white 50px, white 51px), repeating-linear-gradient(90deg, transparent, transparent 50px, white 50px, white 51px)`
        }}></div>
      </div>

      

      <div id="team" className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 mb-6">
            <Users className="w-6 h-6 text-primary-200" />
            <span className="px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-sm font-medium text-white">
              Meet the Experts
            </span>
            <Users className="w-6 h-6 text-primary-200" />
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            Our Team
          </h2>
          <div className="w-24 h-1 bg-white mx-auto rounded-full mb-4"></div>
          <p className="text-lg md:text-xl text-primary-100 max-w-2xl mx-auto">
            Passionate professionals dedicated to creating aquatic excellence
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="group relative"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/20 transition-all duration-500 hover:bg-white/15 hover:scale-105 hover:shadow-2xl hover:shadow-primary-400/30">
                
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-primary-300/30 to-transparent rounded-tr-3xl rounded-bl-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="absolute -top-3 -right-3 w-10 h-10 bg-primary-400 rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:rotate-12">
                  <Award className="w-5 h-5 text-white" />
                </div>

                <div className="relative mb-6">
                  <div className="relative w-40 h-40 mx-auto rounded-full overflow-hidden border-4 border-white/30 shadow-2xl transition-all duration-500 group-hover:border-primary-300 group-hover:scale-110">
                    <div 
                      className="w-full h-full bg-cover bg-center bg-no-repeat transition-transform duration-700 group-hover:scale-110"
                      style={{ backgroundImage: `url('${member.image}')` }}
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-600/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  
                  <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110">
                    <Sparkles className="w-6 h-6 text-primary-500" />
                  </div>
                </div>

                <div className="text-center space-y-2">
                  <h3 className="font-bold text-xl md:text-2xl text-white transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-sm md:text-base text-primary-200 font-medium">
                    {member.role}
                  </p>
                  <div className="inline-block px-3 py-1 bg-primary-500/30 backdrop-blur-sm rounded-full text-xs text-primary-100 border border-primary-400/30">
                    {member.specialty}
                  </div>
                </div>

                <div className="flex justify-center gap-3 mt-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                  <a
                    href="#"
                    className="w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center hover:bg-white hover:text-primary-600 transition-all duration-300 hover:scale-110 hover:rotate-12"
                  >
                    <Twitter size={18} />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center hover:bg-white hover:text-primary-600 transition-all duration-300 hover:scale-110 hover:rotate-12"
                  >
                    <Facebook size={18} />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center hover:bg-white hover:text-primary-600 transition-all duration-300 hover:scale-110 hover:rotate-12"
                  >
                    <Instagram size={18} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-30px); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
      `}</style>
    </div>
    </section>
  );
};

export default AboutPage;
