import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import CarWash from "@/components/CarWash";
import Tires from "@/components/Tires";
import Gallery from "@/components/Gallery";
import About from "@/components/About";
import Booking from "@/components/Booking";
import Contacts from "@/components/Contacts";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#1e2329]">
      <Navbar />
      <Hero />
      <Services />
      <CarWash />
      <Tires />
      <Gallery />
      <About />
      <Booking />
      <Contacts />
    </div>
  );
};

export default Index;