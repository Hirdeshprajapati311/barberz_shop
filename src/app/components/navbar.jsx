import { NavigationMenu, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { Logo } from "./logo";



export const Navbar = () => {
  return (
    <div className="navbar h-20 w-full items-center bg-[#292727]/70 text-white">
      <NavigationMenu>
      <NavigationMenuList className="flex mt-4 items-center space-x-10">
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