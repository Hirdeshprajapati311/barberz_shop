import Image from "next/image";
import { ContactLeft } from "../components/contactLeft";
import { ContactRight } from "../components/contactRight";


export const ContactUs = () => {
  return (
    <div className="relative flex justify-between flex-row  h-[750px]">
      <Image alt="chair" className="z-[-11] " src="/assets/chair.png" layout="fill" objectFit="cover" ></Image>
      <div className="absolute inset-0 z-[-11] bg-black opacity-50" />
      <ContactLeft className=" w-[50%]" />
      <ContactRight className=" w-[50%]"  />
    </div>
    
  );
}