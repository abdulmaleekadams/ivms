import Banner from "@/components/sass1/Banner";
import Navbar from "@/components/sass1/Navbar";

const page = () => {
  return (
    <div className="flex flex-col items-center min-h-screen  *:w-full">
      <Banner />
      <Navbar />
    </div>
  );
};

export default page;
