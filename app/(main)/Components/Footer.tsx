import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-accent-900 text-accent-300">
      <div className="w-full px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 py-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-10 md:gap-8 lg:gap-12">
          <div>
            <h3 className="text-light-100 text-xl font-bold mb-4">About Us</h3>
            <p className="text-accent-400 leading-relaxed">
              Ominta-Aquarium prides itself on their depth of knowledge, quality
              of service, and a tailored approach to luxury aquarium design.
            </p>
          </div>

          <div>
            <h3 className="text-light-100 text-xl font-bold mb-4">Links</h3>
            <ul className="space-y-2">
              <li >
                <Link
                  href="/"
                  className="text-primary-400 hover:text-primary-300 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li >
                <Link
                  href="/about"
                  className="text-primary-400 hover:text-primary-300 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li >
                <Link
                  href="about"
                  className="text-primary-400 hover:text-primary-300 transition-colors"
                >
                  Our Facilities
                </Link>
              </li>
              <li >
                <Link
                  href="contact"
                  className="text-primary-400 hover:text-primary-300 transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              
            </ul>
          </div>

          <div>
            <h3 className="text-light-100 text-xl font-bold mb-4">Contacts</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-primary-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-light-100 font-semibold">Address:</p>
                  <p className="text-accent-400 text-sm">
                    1111 Potter Rd, Antelope, CA 32802
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <p className="text-light-100 font-semibold">Phone:</p>
                <a
                  href="tel:18001234567"
                  className="text-primary-400 hover:text-primary-300 transition-colors ml-1"
                >
                  1 (800) 123 4567
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <p className="text-light-100 font-semibold">Email:</p>
                <a
                  href="mailto:info@example.com"
                  className="text-primary-400 hover:text-primary-300 transition-colors ml-1"
                >
                  info@example.com
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-light-100 text-xl font-bold mb-4">
              Our Products
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/marine"
                  className="text-accent-400 hover:text-primary-400 transition-colors"
                >
                  Salt Water Fish
                </Link>
              </li>
              <li>
                <Link
                  href="/fresh"
                  className="text-accent-400 hover:text-primary-400 transition-colors"
                >
                  Fresh Water Fish
                </Link>
              </li>
              <li>
                <Link
                  href="/plants"
                  className="text-accent-400 hover:text-primary-400 transition-colors"
                >
                  Aquarium Plants
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-accent-800 mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
            <div className="text-primary-400 text-2xl font-bold">
              Ominta-Aquarium
            </div>
            <div className="text-accent-400 text-sm">
              Ominta-Aquarium © 2025. All Rights Reserved.&nbsp;
              <a href="#" className="hover:text-primary-400 transition-colors">
                Terms of Use
              </a>{" "}
              and{" "}
              <a href="#" className="hover:text-primary-400 transition-colors">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
