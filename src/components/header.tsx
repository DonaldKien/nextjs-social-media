import Link from "next/link";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Input,
} from "@nextui-org/react";
import React from "react";
import HeaderAuth from "@/components/header-auth";

const Header = async () => {
  return (
    <Navbar>
      <NavbarBrand>
        <Link href="/">Home</Link>
      </NavbarBrand>
      <NavbarContent>
        <NavbarItem>
          <Input />
        </NavbarItem>
      </NavbarContent>
      <NavbarContent>
        <HeaderAuth />
      </NavbarContent>
    </Navbar>
  );
};

export default Header;
