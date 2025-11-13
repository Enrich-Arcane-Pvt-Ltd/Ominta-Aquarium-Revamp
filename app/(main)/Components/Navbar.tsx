"use client";

import { Menu, PhoneCall, Search, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState(null);

  const handleMouseEnter = (menu: any) => setOpenMenu(menu);
  const handleMouseLeave = () => setOpenMenu(null);

  const toggleMobileSubmenu = (menu: any) => {
    setMobileSubmenuOpen(mobileSubmenuOpen === menu ? null : menu);
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-[#1b1b1b] shadow-md">
      <div className="h-[80px] flex items-center justify-between px-4 md:px-6 lg:px-10">
        <div className="flex items-center gap-3">
          <div className="w-[80px] h-[60px] md:w-[120px] md:h-[60px] rounded flex items-center justify-center text-white font-bold">
            <Image
              src="/images/img1.png"
              alt="Ominta-Aquarium Logo"
              width={100}
              height={100}
              priority
            />
          </div>
        </div>

        <ul className="hidden lg:flex list-none gap-8 xl:gap-10 text-white text-[14px] font-medium">
          <li
            className="relative"
            onMouseEnter={() => handleMouseEnter("home")}
            onMouseLeave={handleMouseLeave}
          >
            <Link href="/" className="hover:text-cyan-400 transition-colors">
              Home
            </Link>
          </li>

          <li
            className="relative"
            onMouseEnter={() => handleMouseEnter("about")}
            onMouseLeave={handleMouseLeave}
          >
            <Link href="/about" className="hover:text-cyan-400 transition-colors">
              About Us
            </Link>
          </li>

          <li
            className="relative"
            onMouseEnter={() => handleMouseEnter("products")}
            onMouseLeave={handleMouseLeave}
          >
            <Link href="/about" className="hover:text-cyan-400 transition-colors">
              Products
            </Link>
            {openMenu === "products" && (
              <ul className="absolute top-full left-0 bg-[#2a2a2a] rounded-md shadow-lg py-2 min-w-[180px]">
                <li><Link href="#" className="block px-4 py-2 hover:bg-cyan-600">Item 01</Link></li>
                <li><Link href="#" className="block px-4 py-2 hover:bg-cyan-600">Item 01</Link></li>
                <li><Link href="#" className="block px-4 py-2 hover:bg-cyan-600">Item 01</Link></li>
              </ul>
            )}
          </li>

          <li
            className="relative"
            onMouseEnter={() => handleMouseEnter("facilities")}
            onMouseLeave={handleMouseLeave}
          >
            <Link href="/about" className="hover:text-cyan-400 transition-colors">
              Our Facilities
            </Link>
            {openMenu === "facilities" && (
              <ul className="absolute top-full left-0 bg-[#2a2a2a] rounded-md shadow-lg py-2 min-w-[180px]">
                <li><Link href="/pictures" className="block px-4 py-2 hover:bg-cyan-600">Pictures</Link></li>
                <li><Link href="/videos" className="block px-4 py-2 hover:bg-cyan-600">Videos</Link></li>
              </ul>
            )}
          </li>

          <li
            className="relative"
            onMouseEnter={() => handleMouseEnter("blog")}
            onMouseLeave={handleMouseLeave}
          >
            <Link href="/contact" className="hover:text-cyan-400 transition-colors">
              Contact Us
            </Link>
          </li>
        </ul>

        <div className="flex items-center gap-4 text-white">
          <a
            href="tel:+18001234567"
            className="hidden md:flex font-semibold items-center gap-2 hover:text-cyan-400 transition-colors"
          >
            <PhoneCall className="w-5 h-5 text-cyan-400" />
            <span className="hidden lg:inline">1 (800) 123 4567</span>
          </a>
          <Search className="w-5 h-5 text-cyan-400 cursor-pointer hover:scale-110 transition-transform" />

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#1b1b1b] border-t border-gray-700 max-h-[calc(100vh-80px)] overflow-y-auto">
          <ul className="text-white">
            <li className="border-b border-gray-700">
              <a href="#" className="block px-6 py-3 hover:bg-[#2a2a2a]">
                Home
              </a>
            </li>

            <li className="border-b border-gray-700">
              <Link href="/about" className="block px-6 py-3 hover:bg-[#2a2a2a]">
                About Us
              </Link>
            </li>

            <li className="border-b border-gray-700">
              <a href="#" className="block px-6 py-3 hover:bg-[#2a2a2a]">
                Aquarium
              </a>
            </li>

            <li className="border-b border-gray-700">
              <a href="#" className="block px-6 py-3 hover:bg-[#2a2a2a]">
                Features
              </a>
            </li>

            <li className="border-b border-gray-700">
              <a href="#" className="block px-6 py-3 hover:bg-[#2a2a2a]">
                Gallery
              </a>
            </li>

            <li className="border-b border-gray-700">
              <a href="#" className="block px-6 py-3 hover:bg-[#2a2a2a]">
                Blog
              </a>
            </li>

            <li className="border-b border-gray-700">
              <Link href="/contact" className="block px-6 py-3 hover:bg-[#2a2a2a]">
                Contact
              </Link>
            </li>

            <li className="md:hidden">
              <a
                href="tel:+18001234567"
                className="flex items-center gap-2 px-6 py-3 hover:bg-[#2a2a2a]"
              >
                <PhoneCall className="w-5 h-5 text-cyan-400" />
                <span>1 (800) 123 4567</span>
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
