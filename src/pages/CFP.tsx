import Navbar from "@/components/Navbar";
import CFP from "@/components/CFP";
import Footer from "@/components/Footer";

const CFPPage = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <CFP />
      <Footer />
    </div>
  );
};

export default CFPPage;
