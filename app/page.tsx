"use client";

import React from "react";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import ServicesSection from "./Components/ServiceSection";
import Footer from "./Components/Footer";
import OurServices from "./Components/OurServicesSection";
import LatestPosts from "./LatestPosts";
import CustomFishTanksSection from "./Components/CustomFishTanksSection";
import SidebarIcons from "./Components/SidebarIcons";

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <OurServices />
      <LatestPosts />
      <CustomFishTanksSection />
      <SidebarIcons />
      <Footer />
    </>
  );
};

export default Home;