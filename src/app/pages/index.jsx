import { Contact } from "../components/contact";
import { HomeBody } from "../components/homebody";
import { Navbar } from "../components/navbar";
import { Socials } from "../components/socials";

import Link from "next/link";



const Index = () => {
  return (
    <>
      <div className="flex flex-col w-full">
        <Navbar></Navbar>
        <div className="flex mt-1">
        <Contact/>
        <Socials />
        </div>

        <div>
          <HomeBody></HomeBody>
        </div>

      </div>
    </>
  );
};

export default Index;