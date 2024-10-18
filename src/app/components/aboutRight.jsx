import Image from "next/image";
import styled from "./../styles/aboutRight.module.css"

export const AboutRight = () => {
  return (
    <div className={`${styled.container} flex justify-center ml-[120px]`} >
      <Image 
        className="relative h-auto object-cover" 
        alt="about us image" 
        height={500} 
        width={500} 
        src="/assets/aboutUs.png" 
      />
    </div>
  );
};
