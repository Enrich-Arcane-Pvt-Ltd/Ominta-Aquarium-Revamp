"use client";

import React from "react";
import LatestPosts from "../LatestPosts";
import AquaticPets from "./Components/AquaticPets";
import ClientsAboutUs from "./Components/ClientsAboutUs";
import CustomFishTanksSection from "./Components/CustomFishTanksSection";
import Gallery from "./Components/Gallery";
import HeroSection from "./Components/HeroSection";
import OurServices from "./Components/OurServicesSection";
import OurTeam from "./Components/OurTeam";
import ServicesSection from "./Components/ServiceSection";

const Home: React.FC = () => {
  return (
    <div>
      <main>
        <HeroSection />
        <ServicesSection />
        <OurServices />
        <LatestPosts />
        <CustomFishTanksSection />
        <ClientsAboutUs />
        <OurTeam />
        <AquaticPets />
        <Gallery />
      </main>
    </div>
  );
};

export default Home;
