import Banner from "@/components/sass1/Banner";
import FAQs from "@/components/sass1/FAQs";
import Features from "@/components/sass1/Features";
import Hero from "@/components/sass1/Hero";
import LogoTicker from "@/components/sass1/LogoTicker";
import Navbar from "@/components/sass1/Navbar";
import ProductShowcase from "@/components/sass1/ProductShowcase";

const page = () => {
  return (
    <div className="flex flex-col items-center min-h-screen  *:w-full">
      <Banner />
      <Navbar />
      <Hero />
      <LogoTicker />
      <Features />
      <ProductShowcase />
      <FAQs />
    </div>
  );
};

export default page;
