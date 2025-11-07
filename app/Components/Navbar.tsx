"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Search, PhoneCall } from "lucide-react"; 

const Navbar: React.FC = () => {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const handleMouseEnter = (menu: string) => setOpenMenu(menu);
  const handleMouseLeave = () => setOpenMenu(null);

  return (
    <nav className="sticky top-0 z-50 w-full h-[80px] bg-[#1b1b1b] flex items-center justify-between px-6 md:px-10 font-sans shadow-md">
      <div className="flex items-center gap-3">
        <Image
          src="/images/img1.png"
          alt="AquaPro Logo"
          width={100}
          height={100}
          priority
        />
      </div>

      
      <ul className="hidden lg:flex list-none gap-8 xl:gap-10 text-white text-[14px] font-medium relative">
        
        <li
          className="relative"
          onMouseEnter={() => handleMouseEnter("home")}
          onMouseLeave={handleMouseLeave}
        >
          <a href="#" className="hover:text-cyan-400 transition-colors">
            Home
          </a>
          {openMenu === "home" && (
            <ul className="absolute top-full left-0 bg-[#2a2a2a] rounded-md shadow-lg py-2 min-w-[180px]">
              <li><a href="#" className="block px-4 py-2 hover:bg-cyan-600">Home 1</a></li>
              <li><a href="#" className="block px-4 py-2 hover:bg-cyan-600">Home 2</a></li>
              <li><a href="#" className="block px-4 py-2 hover:bg-cyan-600">Home Boxed</a></li>
            </ul>
          )}
        </li>

        
        <li
          className="relative"
          onMouseEnter={() => handleMouseEnter("about")}
          onMouseLeave={handleMouseLeave}
        >
          <a href="#" className="hover:text-cyan-400 transition-colors">
            About Us
          </a>
          {openMenu === "about" && (
            <ul className="absolute top-full left-0 bg-[#2a2a2a] rounded-md shadow-lg py-2 min-w-[180px]">
              <li><a href="#" className="block px-4 py-2 hover:bg-cyan-600">About 1</a></li>
              <li><a href="#" className="block px-4 py-2 hover:bg-cyan-600">About 2</a></li>
            </ul>
          )}
        </li>

        
        <li>
          <a href="#" className="hover:text-cyan-400 transition-colors">
            Aquarium
          </a>
        </li>

       
        <li
          className="relative"
          onMouseEnter={() => handleMouseEnter("features")}
          onMouseLeave={handleMouseLeave}
        >
          <a href="#" className="hover:text-cyan-400 transition-colors">
            Features
          </a>
          {openMenu === "features" && (
            <ul className="absolute top-full left-0 bg-[#2a2a2a] rounded-md shadow-lg py-2 min-w-[180px]">
              <li className="relative group">
                <a href="#" className="block px-4 py-2 hover:bg-cyan-600">Tools</a>
                <ul className="absolute top-0 left-full bg-[#333] rounded-md shadow-lg py-2 min-w-[180px] hidden group-hover:block">
                  <li><a href="#" className="block px-4 py-2 hover:bg-cyan-600">Typography</a></li>
                  <li><a href="#" className="block px-4 py-2 hover:bg-cyan-600">Shortcodes</a></li>
                </ul>
              </li>

              <li className="relative group">
                <a href="#" className="block px-4 py-2 hover:bg-cyan-600">Pages</a>
                <ul className="absolute top-0 left-full bg-[#333] rounded-md shadow-lg py-2 min-w-[180px] hidden group-hover:block">
                  <li><a href="#" className="block px-4 py-2 hover:bg-cyan-600">Services</a></li>
                </ul>
              </li>

              <li className="relative group">
                <a href="#" className="block px-4 py-2 hover:bg-cyan-600">Help</a>
                <ul className="absolute top-0 left-full bg-[#333] rounded-md shadow-lg py-2 min-w-[180px] hidden group-hover:block">
                  <li><a href="#" className="block px-4 py-2 hover:bg-cyan-600">Service Plus</a></li>
                  <li><a href="#" className="block px-4 py-2 hover:bg-cyan-600">Privacy Policy</a></li>
                </ul>
              </li>
            </ul>
          )}
        </li>

       
        <li
          className="relative"
          onMouseEnter={() => handleMouseEnter("gallery")}
          onMouseLeave={handleMouseLeave}
        >
          <a href="#" className="hover:text-cyan-400 transition-colors">
            Gallery
          </a>
          {openMenu === "gallery" && (
            <ul className="absolute top-full left-0 bg-[#2a2a2a] rounded-md shadow-lg py-2 min-w-[180px]">
              <li><a href="#" className="block px-4 py-2 hover:bg-cyan-600">Grid</a></li>
              <li><a href="#" className="block px-4 py-2 hover:bg-cyan-600">Masonry</a></li>
              <li><a href="#" className="block px-4 py-2 hover:bg-cyan-600">Cobbles</a></li>
            </ul>
          )}
        </li>

        
        <li
          className="relative"
          onMouseEnter={() => handleMouseEnter("blog")}
          onMouseLeave={handleMouseLeave}
        >
          <a href="#" className="hover:text-cyan-400 transition-colors">
            Blog
          </a>

          {openMenu === "blog" && (
            <ul className="absolute top-full left-0 bg-[#2a2a2a] rounded-md shadow-lg py-2 min-w-[180px]">
              
              
              <li className="relative group">
                <a href="#" className="block px-4 py-2 hover:bg-cyan-600">Classic</a>
                <ul className="absolute top-0 left-full bg-[#333] rounded-md shadow-lg py-2 min-w-[180px] hidden group-hover:block">
                  <li><a href="#" className="block px-4 py-2 hover:bg-cyan-600">Classic</a></li>
                  <li><a href="#" className="block px-4 py-2 hover:bg-cyan-600">Classic 2</a></li>
                  <li><a href="#" className="block px-4 py-2 hover:bg-cyan-600">Classic 3</a></li>
                </ul>
              </li>

             
              <li className="relative group">
                <a href="#" className="block px-4 py-2 hover:bg-cyan-600">Chess</a>
                <ul className="absolute top-0 left-full bg-[#333] rounded-md shadow-lg py-2 min-w-[180px] hidden group-hover:block">
                  <li><a href="#" className="block px-4 py-2 hover:bg-cyan-600">Chess 2</a></li>
                  <li><a href="#" className="block px-4 py-2 hover:bg-cyan-600">Chess 4</a></li>
                  <li><a href="#" className="block px-4 py-2 hover:bg-cyan-600">Chess 6</a></li>
                </ul>
              </li>

             
              <li className="relative group">
                <a href="#" className="block px-4 py-2 hover:bg-cyan-600">Portfolio</a>
                <ul className="absolute top-0 left-full bg-[#333] rounded-md shadow-lg py-2 min-w-[180px] hidden group-hover:block">
                  <li><a href="#" className="block px-4 py-2 hover:bg-cyan-600">Portfolio 2</a></li>
                  <li><a href="#" className="block px-4 py-2 hover:bg-cyan-600">Portfolio 3</a></li>
                  <li><a href="#" className="block px-4 py-2 hover:bg-cyan-600">Portfolio 4</a></li>
                </ul>
              </li>
            </ul>
          )}
        </li>

        
        <li>
          <a href="#" className="hover:text-cyan-400 transition-colors">
            Contact
          </a>
        </li>
      </ul>

      
      <div className="flex items-center gap-6 text-white">
        <a
          href="tel:+18001234567"
          className="font-semibold flex items-center gap-2 hover:text-cyan-400 transition-colors"
        >
          <PhoneCall className="w-5 h-5 text-cyan-400" />
          <span className="hidden sm:inline">1 (800) 123 4567</span>
        </a>
        <Search className="w-5 h-5 text-cyan-400 cursor-pointer hover:scale-110 transition-transform" />
      </div>
    </nav>
  );
};

export default Navbar;