import Image from "next/image";
import { Twitter, Facebook, Instagram } from "lucide-react";

export default function OurTeam() {
  const team = [
    {
      name: "Viki Black",
      role: "CHIEF EXECUTIVE OFFICER",
      image: "/images/office-worker-3.jpg",
      bio: "At commodo urna, vulputate liberosdgggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggnterdum scelerisque ullamcorper, pellentesque risus ipsum.",
      social: { twitter: "", facebook: "", instagram: "" },
    },
    {
      name: "Lora Stewart",
      role: "MARKETING ASSOCIATE",
      image: "/images/ai-generative-head-photo.jpg",
      bio: "sdgrfffffffffffffffffffffffffffffffffff.",
      social: { twitter: "", facebook: "", instagram: "" },
    },
    {
      name: "John Doe",
      role: "AQUARIUM DESIGNER",
      image: "/images/office-worker-3.jpg",
      bio: "dddddddddddddddddddddddddkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkfffffffffffffffffffffffffkkkkkkkkkkkkkkkkkkk.",
      social: { twitter: "", facebook: "", instagram: "" },
    },
  ];

  return (
    <div className="relative w-full py-16 md:py-24 bg-[url('/images/a70701.png')] bg-cover bg-center">
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative  max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold text-light-100 mb-12 md:mb-16">
          Our Team
        </h2>

       
        <div className="flex space-x-6 overflow-x-hidden ">
          {team.map((member, index) => (
            <article key={index}
              className="flex-none w-[600px]  rounded-lg flex " >
           
              <div className="relative w-1/2 h-64 sm:h-72 md:h-80 rounded-l-lg ">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"/>
              </div>

            
              <div className="p-6 w-1/2 text-left flex flex-col justify-between">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-light-100 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-primary-400 text-sm sm:text-base font-medium mb-4">
                    {member.role}
                  </p>
                  <p className="text-accent-200 text-sm leading-relaxed line-clamp-6">
                    {member.bio}
                  </p>
                </div>

               
                <div className="flex space-x-4 mt-4">
                  <a href={member.social.twitter} className="p-2 bg-accent-300 rounded-full">
                    <Twitter className="w-5 h-5 text-primary-500" />
                  </a>
                  <a href={member.social.facebook} className="p-2 bg-accent-300 rounded-full">
                    <Facebook className="w-5 h-5 text-primary-500" />
                  </a>
                  <a href={member.social.instagram} className="p-2 bg-accent-300 rounded-full">
                    <Instagram className="w-5 h-5 text-primary-500" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
