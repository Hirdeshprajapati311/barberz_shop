import { MdWifiCalling3 } from "react-icons/md";
import { MdMessage } from "react-icons/md";

import styled from "./../styles/contact.module.css"

export const Contact = () => {
  return (
    <div className={`${styled.contact} space-x-1 text-white items-center ml-2`}>
      <MdWifiCalling3  className="ml-1 mr-1"/>
      <p>+123456789</p>
      <MdMessage className="ml-2 mr-2"/>
      <p>barberz.123@info.com</p>
   </div> 
  );
}