import Image from "next/image";
import Index from "./pages";
import AboutUs from "./pages/about";
import { Services } from "./pages/services";
import { ContactUs } from "./pages/contactUs";








const Home = () => {
  return (
    <>
      <div className="mb-[200px] md:pb-[700px] w-full md:h-[550px] h-[550px]">
      <Image className="relative z-[-11]" src="/assets/image.png" alt="hero img" layout="fill" objectFit="cover"></Image>
      <Index></Index>
      </div>
      <div>
      <AboutUs></AboutUs>
      <Services />
      </div>
      <ContactUs/>
    </>
  );
}

export default Home;