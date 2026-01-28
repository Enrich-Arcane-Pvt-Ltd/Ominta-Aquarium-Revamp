"use client";

import React, { useState } from "react";
import { Contact } from "@/app/types/Dashboard";
import { toast } from "react-toastify";

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<Contact>({
    name: "",
    email: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsSubmitting(true);

    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill the fields');
      setIsSubmitting(false);      
      return
    }

    if (formData.name.length > 50) {
      toast.error('Name should be less than 50 characters');
      setIsSubmitting(false);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error('Please enter a valid email address');
      setIsSubmitting(false);
      return;
    }

    if (formData.message.length > 255) {
      toast.error('Message should be less than 255 characters');
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch("https://enricharcane.info/contact.php", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.status === "success") {
        toast.success("Message sent successfully!");

        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      toast.error("Failed to send message.");
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className="w-full bg-white pt-16">
      <div className="mx-auto flex flex-col gap-10">
        <div className="w-full flex flex-col items-center justify-center px-6 sm:px-10 lg:px-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 text-center mb-2">
            Contact Us
          </h2>
          <div className="text-3xl text-cyan-500 mb-10 text-center">~</div>

          <form className="w-full max-w-2xl space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Your name"
                className="border border-gray-300 text-sm md:text-base px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-400 w-full text-primary-700 font-semibold"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
              <input
                type="text"
                placeholder="Your e-mail"
                className="border border-gray-300 text-sm md:text-base px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-400 w-full text-primary-700 font-semibold"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <textarea
              placeholder="Your message"
              rows={6}
              className="w-full border border-gray-300 text-sm md:text-base px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-cyan-400 text-primary-700 font-semibold"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            ></textarea>

            <div className="flex justify-center">
              <button
                type="submit"
                className="mt-4 bg-cyan-600 text-white px-8 py-3 text-sm sm:text-base font-semibold uppercase tracking-wider hover:bg-white hover:text-cyan-600 border border-cyan-600 transition-all duration-300"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </form>
        </div>

        <div className="w-full relative h-[400px] sm:h-[450px] lg:h-[500px]">
          <iframe
            src="https://www.google.com/maps?q=920%20Broad%20St,%20Newark,%20NJ%2007102&output=embed"
            className="absolute inset-0 w-full h-full"
            loading="lazy"
          ></iframe>

          <div className="absolute top-10 right-6 sm:right-10 bg-cyan-600 text-white p-6 sm:p-8 max-w-[90%] sm:max-w-sm">
            <h3 className="text-xl sm:text-2xl font-bold mb-3">Find Us</h3>
            <p className="text-sm sm:text-base mb-2">
              <strong>Address:</strong> 123, Lenox Street Newark, NJ 07102
            </p>
            <p className="text-sm sm:text-base mb-2">
              <strong>Phone:</strong>{" "}
              <a href="tel:123-456-7890" className="text-white underline">
                123-456-7890
              </a>
            </p>
            <p className="text-sm sm:text-base">
              <strong>Email:</strong>{" "}
              <a href="mailto:info@example.com" className="text-white underline">
                info@example.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
