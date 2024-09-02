import Banner from "@/components/sass1/Banner";
import Hero from "@/components/sass1/Hero";
import LogoTicker from "@/components/sass1/LogoTicker";
import Navbar from "@/components/sass1/Navbar";

const page = () => {
  return (
    <div className="flex flex-col items-center min-h-screen  *:w-full">
      <Banner />
      <Navbar />
      <Hero />
      <LogoTicker />
    </div>
  );
};

export default page;
