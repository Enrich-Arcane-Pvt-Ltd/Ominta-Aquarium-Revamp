"use client";

import React from "react";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import ServicesSection from "./Components/ServiceSection";
import Footer from "./Components/Footer";
import OurServices from "./Components/OurServicesSection";
import LatestPosts from "./LatestPosts";
import CustomFishTanksSection from "./Components/CustomFishTanksSection";
import ClientsAboutUs from "./Components/ClientsAboutUs";
import OurTeam from "./Components/OurTeam";
import AquaticPets from "./Components/AquaticPets";
import Gallery from "./Components/Gallery";
import ContactSection from "./Components/ContactPage";
import AboutPage from "./Components/AboutPage";

const Home: React.FC = () => {
  return (
    <div>
      <main>
        <HeroSection />
        <ServicesSection />
        <OurServices />
        <LatestPosts />
        <CustomFishTanksSection />
        <ClientsAboutUs/>
        <OurTeam/>
        <AquaticPets/> 
        <Gallery/>
      </main>
    </div>
  );
};

export default Home;