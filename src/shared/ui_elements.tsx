import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import { RouterLink } from "./utils";


export function FullNavBar() {
  return (
    <Navbar fluid rounded className="mb-3">
      <NavbarBrand as={RouterLink} href="/">
        {/* <img src="/favicon.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" /> */}
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Home</span>
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse>
        <NavbarLink as={RouterLink} href="/">Home</NavbarLink>
        <NavbarLink as={RouterLink} href="/game">Game</NavbarLink>
        <NavbarLink as={RouterLink} href="/subpage1">Subpage1</NavbarLink>
        <NavbarLink as={RouterLink} href="#">Future</NavbarLink>
        <NavbarLink as={RouterLink} href="#">Contents</NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}