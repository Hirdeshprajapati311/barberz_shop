
"use client"
import { NavigationMenu, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { Logo } from "./logo";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";



export const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };




  return (

    <div className=" navbar h-20 w-full items-center  bg-[#292727]/70 text-white">
      
      
      
      <button
      className="flex  items-center" 
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
      <GiHamburgerMenu size={30} color="white" className="relative top-5 md:hidden ml-5 " />

{/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path fill="currentColor" d="M3 12h18M3 6h18M3 18h18" stroke="black" stroke-width="2" stroke-linecap="round"/>
</svg> */}
      </button>


    
      <NavigationMenu  className={`md:flex ${isOpen ? 'flex' : 'hidden'} mt-4 flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-10`}>
      <NavigationMenuList className="flex flex-col md:flex-row">
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            Home
          </NavigationMenuTrigger>
        </NavigationMenuItem>
        <NavigationMenuItem>
              <NavigationMenuTrigger>
                Services
              </NavigationMenuTrigger>
          </NavigationMenuItem>
          <NavigationMenuItem>
              <NavigationMenuTrigger>
              About Us
              </NavigationMenuTrigger>
          </NavigationMenuItem>
          <NavigationMenuItem>
              <Logo></Logo>
          </NavigationMenuItem>
          <NavigationMenuItem>
              <NavigationMenuTrigger>
                Team
              </NavigationMenuTrigger>
          </NavigationMenuItem>
          <NavigationMenuItem>
              <NavigationMenuTrigger>
                Booking
              </NavigationMenuTrigger>
          </NavigationMenuItem>
          <NavigationMenuItem>
              <NavigationMenuTrigger>
                Contact Us
              </NavigationMenuTrigger>
            </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
    </div>
  );
}