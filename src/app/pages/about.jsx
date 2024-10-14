import Link from "next/link";
import { AboutLeft } from "../components/aboutLeft";
import { AboutRight } from "../components/aboutRight";





const AboutUs = () => {
  return (
    <>
      <div className="h-100vh flex flex-row">
      <AboutLeft />
      <AboutRight />
      
      </div>
    </>
  )
}

export default AboutUs;