import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-accent-900 text-light-100 py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
        
        
        <div className="flex items-center space-x-3">
          <img
            src="/logo.png"
            alt="AquaPro Logo"
            className="w-10 h-10 object-contain"
          />
          <span className="font-bold text-xl text-primary-400">AquaPro</span>
        </div>

        
        <p className="text-sm text-light-400 text-center">
          © {new Date().getFullYear()} AquaPro Aquarium Service. All Rights Reserved.
        </p>

        
        <div className="flex space-x-4 text-light-400">
          <a href="#" className="hover:text-primary-400 transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-primary-400 transition-colors">
            Terms of Service
          </a>
          <a href="#" className="hover:text-primary-400 transition-colors">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
