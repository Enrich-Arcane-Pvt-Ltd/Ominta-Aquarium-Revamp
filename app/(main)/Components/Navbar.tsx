"use client";

import { Menu, PhoneCall, Search, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState<string | null>(null);

  const handleMouseEnter = (menu: string) => setOpenMenu(menu);
  const handleMouseLeave = () => setOpenMenu(null);

  const toggleMobileSubmenu = (menu: string) => {
    setMobileSubmenuOpen(mobileSubmenuOpen === menu ? null : menu);
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-[#1b1b1b] shadow-md">
      <div className="h-[80px] flex items-center justify-between px-4 md:px-6 lg:px-10">
        
        <div className="flex items-center gap-3">
          <div className="w-[80px] h-[60px] md:w-[120px] md:h-[60px] flex items-center justify-center">
            <Image
              src="/images/img1.png"
              alt="Ominta-Aquarium Logo"
              width={100}
              height={100}
              priority
            />
          </div>
        </div>

        <ul className="hidden lg:flex gap-8 xl:gap-10 text-white text-[14px] font-medium">
          <li>
            <Link href="/" className="hover:text-cyan-400">Home</Link>
          </li>

          <li>
            <Link href="/about" className="hover:text-cyan-400">About Us</Link>
          </li>

          <li
            className="relative"
            onMouseEnter={() => handleMouseEnter("products")}
            onMouseLeave={handleMouseLeave}
          >
            <Link href="/about" className="hover:text-cyan-400">Products</Link>
            {openMenu === "products" && (
              <ul className="absolute top-full left-0 bg-[#2a2a2a] rounded-md shadow-lg py-2 min-w-[180px]">
                <li><Link href="/marine" className="block px-4 py-2 hover:bg-cyan-600">Salt Water Fish</Link></li>
                <li><Link href="/fresh" className="block px-4 py-2 hover:bg-cyan-600">Fresh Water Fish</Link></li>
                <li><Link href="/plants" className="block px-4 py-2 hover:bg-cyan-600">Aquarium Plants</Link></li>
              </ul>
            )}
          </li>

          <li
            className="relative"
            onMouseEnter={() => handleMouseEnter("facilities")}
            onMouseLeave={handleMouseLeave}
          >
            <Link href="/about" className="hover:text-cyan-400">Our Facilities</Link>
            {openMenu === "facilities" && (
              <ul className="absolute top-full left-0 bg-[#2a2a2a] rounded-md shadow-lg py-2 min-w-[180px]">
                <li><Link href="/facilityimages" className="block px-4 py-2 hover:bg-cyan-600">Images</Link></li>
                <li><Link href="/facilityvideos" className="block px-4 py-2 hover:bg-cyan-600">Videos</Link></li>
              </ul>
            )}
          </li>

          <li>
            <Link href="/contact" className="hover:text-cyan-400">Contact Us</Link>
          </li>
        </ul>

        <div className="flex items-center gap-4 text-white">
          <a href="tel:+18001234567" className="hidden md:flex items-center gap-2 hover:text-cyan-400">
            <PhoneCall className="w-5 h-5 text-cyan-400" />
            <span className="hidden lg:inline">1 (800) 123 4567</span>
          </a>

          <Search className="w-5 h-5 text-cyan-400 cursor-pointer" />

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden"
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#1b1b1b] border-t border-gray-700">
          <ul className="text-white">
            <li><Link href="/" className="block px-6 py-3" onClick={() => setMobileMenuOpen(false)}>Home</Link></li>
            <li><Link href="/about" className="block px-6 py-3" onClick={() => setMobileMenuOpen(false)}>About Us</Link></li>

            <li>
              <button onClick={() => toggleMobileSubmenu("products")} className="w-full px-6 py-3 flex justify-between">
                Products <span>{mobileSubmenuOpen === "products" ? "−" : "+"}</span>
              </button>
              {mobileSubmenuOpen === "products" && (
                <ul className="bg-[#2a2a2a]">
                  <li><Link href="/marine" className="block px-10 py-3">Salt Water Fish</Link></li>
                  <li><Link href="/fresh" className="block px-10 py-3">Fresh Water Fish</Link></li>
                  <li><Link href="/plants" className="block px-10 py-3">Aquarium Plants</Link></li>
                </ul>
              )}
            </li>

            <li>
              <button onClick={() => toggleMobileSubmenu("facilities")} className="w-full px-6 py-3 flex justify-between">
                Our Facility <span>{mobileSubmenuOpen === "facilities" ? "−" : "+"}</span>
              </button>
              {mobileSubmenuOpen === "facilities" && (
                <ul className="bg-[#2a2a2a]">
                  <li><Link href="/facilityimages" className="block px-10 py-3">Images</Link></li>
                  <li><Link href="/facilityvideos" className="block px-10 py-3">Videos</Link></li>
                </ul>
              )}
            </li>

            <li><Link href="/contact" className="block px-6 py-3">Contact</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
