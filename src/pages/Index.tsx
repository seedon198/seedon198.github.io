import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Domains from "@/components/Domains";
import Activities from "@/components/Activities";
import Schedule from "@/components/Schedule";
import CFP from "@/components/CFP";
import Prizes from "@/components/Prizes";
import Partners from "@/components/Partners";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <Hero />
  <Activities />
      <About />
      <Domains />
  <Schedule />
  <CFP />
      <Prizes />
      <Partners />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
