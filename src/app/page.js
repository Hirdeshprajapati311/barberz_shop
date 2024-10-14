import Image from "next/image";
import Index from "./pages";
import AboutUs from "./pages/about";
import { Services } from "./pages/services";
import { ContactUs } from "./pages/contactUs";








const Home = () => {
  return (
    <>
      <div className="mb-[200px] h-[550px]">
      <Image className="relative p-0 z-[-11] " src="/assets/image.png" alt="hero img" layout="fill" objectFit="cover"></Image>
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