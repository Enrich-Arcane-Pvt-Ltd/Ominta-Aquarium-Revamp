"use client";

import Image from "next/image";
import { Twitter, Facebook, Instagram } from "lucide-react";

export default function OurTeam() {
  const team = [
    {
      name: "Victoria Black",
      role: "Chief Executive Officer",
      image: "/images/office-worker-3.jpg",
      bio: "Victoria brings over 15 years of leadership in the aquarium design industry. Her vision for innovation and dedication to client satisfaction have positioned AquaPro as a market leader in luxury aquatic environments.",
      social: {
        twitter: "https://twitter.com/",
        facebook: "https://facebook.com/",
        instagram: "https://instagram.com/",
      },
    },
    {
      name: "Lora Stewart",
      role: "Marketing Director",
      image: "/images/ai-generative-head-photo.jpg",
      bio: "Lora is responsible for brand strategy and client engagement. With a strong background in digital marketing and visual storytelling, she ensures that AquaPro’s creativity reaches a global audience.",
      social: {
        twitter: "https://twitter.com/",
        facebook: "https://facebook.com/",
        instagram: "https://instagram.com/",
      },
    },
  ];

  return (
    <section className="relative w-full py-16 md:py-24 bg-[url('/images/About-03.jpg')] bg-cover bg-center">
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-12 md:mb-16">
          Our Team
        </h2>

        <div className="flex flex-col gap-10 md:gap-12 lg:gap-16">
          {team.map((member, index) => (
            <article
              key={index}
              className={`flex flex-col md:flex-row ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              } items-stretch bg-white/5 backdrop-blur-sm overflow-hidden`}
            >
              <div className="relative w-full md:w-1/2 h-64 sm:h-72 md:h-80 lg:h-96">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>

              <div className="flex flex-col justify-between w-full md:w-1/2 p-6 sm:p-8 lg:p-10 text-white">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold mb-2 text-primary-300">
                    {member.name}
                  </h3>
                  <p className="text-sm sm:text-base text-primary-400 font-semibold mb-4 uppercase tracking-wide">
                    {member.role}
                  </p>
                  <p className="text-gray-200 text-sm sm:text-base leading-relaxed">
                    {member.bio}
                  </p>
                </div>

                <div className="flex space-x-4 mt-6">
                  <a
                    href={member.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white/10 hover:bg-primary-500/20 rounded-full transition"
                  >
                    <Twitter className="w-5 h-5 text-primary-400" />
                  </a>
                  <a
                    href={member.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white/10 hover:bg-primary-500/20 rounded-full transition"
                  >
                    <Facebook className="w-5 h-5 text-primary-400" />
                  </a>
                  <a
                    href={member.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white/10 hover:bg-primary-500/20 rounded-full transition"
                  >
                    <Instagram className="w-5 h-5 text-primary-400" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
