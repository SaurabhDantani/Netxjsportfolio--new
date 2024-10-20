"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import menuData from "./menuData";
import { ModeToggle } from "../theme/toggle";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { Link } from "@radix-ui/react-navigation-menu";
import NewNavBar from "./newNavbar";

const Header = () => {
  const [navigationOpen, setNavigationOpen] = useState(false);
  const [stickyMenu, setStickyMenu] = useState(false);
  const pathUrl = usePathname();

  // Handle sticky menu on scroll
  const handleStickyMenu = () => {
    if (window.scrollY >= 80) {
      setStickyMenu(true);
    } else {
      setStickyMenu(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyMenu);
    return () => window.removeEventListener("scroll", handleStickyMenu);
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
        stickyMenu
          ? "bg-white py-4 shadow-md dark:bg-black"
          : "py-7"
      }`}
    >
      <div className="container mx-auto flex max-w-screen-xl items-center justify-between px-4 md:px-8">
        <div className="flex items-center justify-between w-full xl:w-1/4">
          <a href="/">
            <Image
              src="/images/logo/logo-dark.svg"
              alt="logo"
              width={119.03}
              height={30}
              className="hidden dark:block"
            />
            <Image
              src="/images/logo/logo-light.svg"
              alt="logo"
              width={119.03}
              height={30}
              className="dark:hidden"
            />
          </a>
          <NewNavBar />

        </div>

        {/* Nav Menu */}
        <div
          className={`${
            navigationOpen
              ? "block xl:flex bg-white dark:bg-black p-5 rounded-lg shadow-md absolute top-16 left-0 w-full xl:static xl:bg-transparent xl:p-0 xl:shadow-none transition-all duration-300"
              : "hidden xl:flex"
          }`}
        >
          {/* <NavigationMenu>
            <NavigationMenuList className="flex flex-col xl:flex-row">
              {menuData.map((menuItem, key) => (
                <NavigationMenuItem key={key}>
                  {menuItem.submenu ? (
                    <>
                      <NavigationMenuTrigger className="text-black dark:text-white">
                        {menuItem.title}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        {menuItem.submenu.map((item, key) => (
                          <NavigationMenuLink asChild key={key}>
                            <Link
                              href={item.path || "#"}
                              className="block p-2 hover:text-primary text-black dark:text-white"
                            >
                              {item.title}
                            </Link>
                          </NavigationMenuLink>
                        ))}
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <NavigationMenuLink asChild>
                      <Link
                        href={menuItem.path}
                        className={`block p-2 text-black dark:text-white ${
                          pathUrl === menuItem.path
                            ? "text-primary"
                            : "hover:text-primary"
                        }`}
                      >
                        {menuItem.title}
                      </Link>
                    </NavigationMenuLink>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
            <NavigationMenuIndicator />
            <NavigationMenuViewport />
          </NavigationMenu> */}

          <div className="mt-5 flex items-center gap-6 xl:mt-0">
            <NewNavBar />
            <ModeToggle />
          </div>
        </div>``
        {/* Nav Menu End */}
      </div>
    </header>
  );
};

export default Header;
