import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { IoGlobeOutline } from "react-icons/io5";
import { IoLogoYoutube } from "react-icons/io";

import styled from "./../styles/socials.module.css"

export const Socials = () => {
  return (
    <div className={`${styled.socials} md:size-[2px] space-x-4 text-white` }>
      <FaFacebookF />
      <FaTwitter />
      <IoGlobeOutline />
      <IoLogoYoutube/>
    </div>
    
  );
}