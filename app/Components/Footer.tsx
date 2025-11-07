import { Phone, MapPin, Mail } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
   <footer className="bg-accent-900 text-accent-300">
  <div className="w-full px-10 md:px-20 lg:px-32 xl:px-40 py-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-12 ">
          <div className="ml-0">
            <h3 className="text-light-100 text-xl font-bold mb-4">About Us</h3>
            <p className="text-accent-400 leading-relaxed">
              AquaPro prides itself on their depth of knowledge, quality of
              service and a tailored approach to luxury aquarium design.
            </p>
          </div>

          <div className="ml-10">
            <h3 className="text-light-100 text-xl font-bold mb-4">Link</h3>
            <ul className="space-y-2">
              <li>
                <Link href="" className="text-primary-400 hover:text-primary-300 transition-colors">Home
                </Link>
              </li>
              <li>
                <Link href="" className="text-primary-400 hover:text-primary-300 transition-colors" >
                  About Us
                </Link>
              </li>
              <li>
                <Link href="" className="text-primary-400 hover:text-primary-300 transition-colors">
                  Aquarium Services
                </Link>
              </li>
              <li>
                <Link
                  href=""
                  className="text-primary-400 hover:text-primary-300 transition-colors"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="" className="text-primary-400 hover:text-primary-300 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href=""  className="text-primary-400 hover:text-primary-300 transition-colors" >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="-ml-10">
            <h3 className="text-light-100 text-xl font-bold mb-4">Contacts</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5 text-primary-400"/> 
                <span className="text-light-100 font-semibold block">Address:</span>
                  <p className="text-accent-400">1111 Potter Rd, Antelope, CA 32802</p>
                
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5 text-primary-400" />
                <p className="text-light-100 font-semibold">Phone:</p>
                <a
                  href="tel:18001234567"  className="text-primary-400 hover:text-primary-300 transition-colors"  > 1 (800) 123 4567
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5 text-primary-400" />{" "}
                <p className="text-light-100 font-semibold">Email:</p>
                <a href="mailto:info@example.com"  className="text-primary-400 hover:text-cyan-300 transition-colors" >
                  info@example.com
                </a>
              </div>
            </div>
          </div>

          
          <div className="ml-12">
            <h3 className="text-light-100 text-xl font-bold mb-4">Recent Posts</h3>
            <ul className="space-y-3">
              <li>
                <Link href=""  className="text-accent-400 hover:text-primary-400 transition-colors">
                  Standard Post
                </Link>
               
              </li>
              <li>
                <Link href="" className="text-accent-400 hover:text-primary-400 transition-colors" >
                  Audio Post
                </Link>
                
              </li>
              <li>
                <Link href=""  className="text-accent-400 hover:text-primary-400 transition-colors" >
                  Gallery Post
                </Link>
                
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-accent-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-3">
              <div className="text-primary-400 text-2xl font-bold">AQUAPRO</div>
            </div>
            <div className="text-accent-400 text-sm text-center ">
              AncoraThemes © 2025. All Rights Reserved
              <a href="" className="hover:text-primary-400 transition-colors">
                Terms of Use </a> and
              <a href="" className="hover:text-primary-400 transition-colors"> Privacy Policy </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
