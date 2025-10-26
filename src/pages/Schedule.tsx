import Navbar from "@/components/Navbar";
import Schedule from "@/components/Schedule";
import Footer from "@/components/Footer";

const SchedulePage = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <Schedule />
      <Footer />
    </div>
  );
};

export default SchedulePage;
