"use client";

import React from "react";
import Image from "next/image";
import { Twitter, Facebook, Instagram } from "lucide-react";

const AboutPage: React.FC = () => {
  return (
    <>
      
      <section className="relative py-20 bg-white text-gray-800 flex flex-col md:flex-row items-center justify-center gap-10 px-6 md:px-20">
        <div className="max-w-xl">
          <h3 className="text-cyan-500 font-semibold text-sm tracking-widest uppercase mb-3">
            Who We Are
          </h3>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 leading-snug">
            Specialists In Custom Fish Tanks, Luxury Aquarium Design And Installation.
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            The Ominta Aquarium Revamp team has created some of the most stylish and luxury bespoke
            aquariums and fish tanks in the country. We draw on over 25 years of expertise in
            designing, manufacturing, and installing aquariums.
          </p>
          <a
            href="#team"
            className="inline-block px-8 py-3 border border-cyan-500 text-cyan-600 font-semibold text-sm rounded transition-all duration-300 hover:bg-cyan-500 hover:text-white"
          >
            More Info
          </a>
        </div>

        
        <div className="relative w-full max-w-md flex justify-center">
          <Image
            src="/Images/fish3.jpg"
            alt="Luxury Fish"
            width={500}
            height={400}
            className="object-contain"
            priority
          />
        </div>
      </section>

     
      <section
        id="team"
        className="relative py-20 bg-[rgba(33,176,254,0.9)] text-white text-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(33,176,254,0.9), rgba(33,176,254,0.9)), url('/images/fish-bg-2.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
            {[
              { name: "Walter Park", image: "/images/office-worker-3.jpg", role: "Creative Director" },
              { name: "Vicki Black", image: "/images/ai-generative-head-photo.jpg", role: "Chief Executive Officer" },
              { name: "Lora Stewart", image: "/images/office-worker-3.jpg", role: "Marketing Associate" },
              { name: "Linda Green", image: "/images/ai-generative-head-photo.jpg", role: "Financial Director" },
            ].map((member, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="w-40 h-40 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={160}
                    height={160}
                    className="object-cover"
                  />
                </div>
                <h3 className="font-semibold text-lg">{member.name}</h3>
                <p className="text-sm text-cyan-100 mb-4">{member.role}</p>

               
                <div className="flex justify-center gap-3">
                  <a
                    href="#"
                    className="border border-cyan-200 p-2 rounded hover:bg-white hover:text-cyan-600 transition-all duration-300"
                  >
                    <Twitter size={18} />
                  </a>
                  <a
                    href="#"
                    className="border border-cyan-200 p-2 rounded hover:bg-white hover:text-cyan-600 transition-all duration-300"
                  >
                    <Facebook size={18} />
                  </a>
                  <a
                    href="#"
                    className="border border-cyan-200 p-2 rounded hover:bg-white hover:text-cyan-600 transition-all duration-300"
                  >
                    <Instagram size={18} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      <section
        className="relative py-20 text-white text-center bg-cover bg-center"
        style={{ backgroundImage: "url('/images/img7.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Our Skills</h2>
          <div className="space-y-6">
            {[
              { skill: "Maintenance", level: 95 },
              { skill: "Health Services", level: 96 },
              { skill: "Design & Install", level: 90 },
              { skill: "Consultation", level: 90 },
            ].map((item, index) => (
              <div key={index}>
                <div className="flex justify-between text-sm md:text-base mb-2">
                  <span>{item.skill}</span>
                  <span>{item.level}%</span>
                </div>
                <div className="w-full bg-gray-600 h-3 rounded-full">
                  <div
                    className="bg-cyan-500 h-3 rounded-full transition-all duration-700"
                    style={{ width: `${item.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
