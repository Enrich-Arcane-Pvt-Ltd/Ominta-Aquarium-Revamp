"use client";

import React from "react";
import Image from "next/image";
import Navbar from "../Components/Navbar";

const ContactPage: React.FC = () => {
  return (
    <>
      <Navbar />

      <main className="w-full flex flex-col">
        
        <section className="relative h-[300px] md:h-[400px] w-full flex items-center justify-center text-center text-white">
          <Image
            src="/Images/img6.jpg"
            alt="Contact Background"
            fill
            priority
            className="object-cover object-center brightness-50"
          />

          <div className="relative z-10">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">
              Contact
            </h1>
            <p className="text-sm md:text-base font-semibold">
              Home / <span className="text-cyan-400">Contact</span>
            </p>
          </div>
        </section>

        
        <section className="py-16 px-6 sm:px-10 lg:px-20 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-2">
              Drop a Line
            </h2>
            <div className="text-3xl text-cyan-500 mb-10">~</div>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Your name"
                  className="border border-gray-300 text-sm md:text-base px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400"
                />
                <input
                  type="email"
                  placeholder="Your e-mail"
                  className="border border-gray-300 text-sm md:text-base px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400"
                />
              </div>

              <textarea
                placeholder="Your message"
                rows={6}
                className="w-full border border-gray-300 text-sm md:text-base px-4 py-3 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-cyan-400"
              ></textarea>

              <div className="flex items-start gap-2 text-gray-600 text-xs sm:text-sm">
                <input type="checkbox" id="agree" className="mt-1 accent-cyan-500" />
                <label htmlFor="agree">
                  I agree that my submitted data is being collected and stored.
                </label>
              </div>

              <div className="flex justify-center">
                <button
                  type="submit"
                  className="mt-4 bg-cyan-600 text-white px-8 py-3 text-sm sm:text-base rounded-sm font-semibold uppercase tracking-wider hover:bg-white hover:text-cyan-600 border border-cyan-600 transition-all duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </section>

        
        <section className="relative h-[500px] w-full">
          <iframe
            src="https://www.google.com/maps?q=920%20Broad%20St,%20Newark,%20NJ%2007102&output=embed"
            className="absolute inset-0 w-full h-full"
            loading="lazy"
          ></iframe>

          <div className="absolute top-20 right-10 bg-cyan-600 text-white p-8 rounded-lg shadow-lg max-w-sm">
            <h3 className="text-2xl font-bold mb-3">Find Us</h3>
            <p className="text-sm mb-2">
              <strong>Address:</strong> 123, Lenox Street Newark, NJ 07102
            </p>
            <p className="text-sm mb-2">
              <strong>Phone:</strong>{" "}
              <a href="tel:123-456-7890" className="text-white underline">
                123-456-7890
              </a>
            </p>
            <p className="text-sm">
              <strong>Email:</strong>{" "}
              <a href="mailto:info@example.com" className="text-white underline">
                info@example.com
              </a>
            </p>
          </div>
        </section>

       
      </main>
    </>
  );
};

export default ContactPage;
