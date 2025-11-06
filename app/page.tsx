import AquaticPets from "./Components/AquaticPets";
import ClientsAboutUs from "./Components/ClientsAboutUs";
import Footer from "./Components/Footer";
import Gallery from "./Components/Gallery";
import OurTeam from "./Components/OurTeam";


export default function Home() {
  return (
   <div>
    <ClientsAboutUs/>
    <OurTeam/>
     <AquaticPets/> 
    <Gallery/>
     <Footer/> 
   </div>
  );
}
