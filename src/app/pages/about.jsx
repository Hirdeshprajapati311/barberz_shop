import { AboutLeft } from "../components/aboutLeft";
import { AboutRight } from "../components/aboutRight";
import styled from "./../styles/about.module.css"





const AboutUs = () => {
  return (
    <>
      <div className={`${styled.container} h-screen flex md:justify-center flex-col md:flex-row`}>
      <AboutLeft />
      <AboutRight />
      
      </div>
    </>
  )
}

export default AboutUs;