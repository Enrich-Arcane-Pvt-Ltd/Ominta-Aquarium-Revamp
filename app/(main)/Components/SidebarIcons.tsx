"use client";

import React from "react";
import { ShoppingCart, Image, Layout } from "lucide-react";

const SidebarIcons = () => {
  return (
    <div className="fixed right-0 top-1/3 z-50 flex flex-col bg-cyan-700 shadow-lg rounded-l-lg overflow-hidden">
      
      <button className="p-4 border-b border-cyan-600 hover:bg-cyan-600 transition-all flex items-center justify-center">
        <ShoppingCart className="text-white w-5 h-5" />
      </button>

      
      <button className="p-4 border-b border-cyan-600 hover:bg-cyan-600 transition-all flex items-center justify-center">
        <Image className="text-white w-5 h-5" />
      </button>

      
      <button className="p-4 hover:bg-cyan-600 transition-all flex items-center justify-center">
        <Layout className="text-white w-5 h-5" />
      </button>
    </div>
  );
};

export default SidebarIcons;
