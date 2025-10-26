import Navbar from "@/components/Navbar";
import Activities from "@/components/Activities";
import Footer from "@/components/Footer";

const ActivitiesPage = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <Activities />
      <Footer />
    </div>
  );
};

export default ActivitiesPage;
