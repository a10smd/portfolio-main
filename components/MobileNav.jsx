"use client";

import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";

const Links = [
  {
    name: "home",
    link: "/",
  },
  {
    name: "services",
    link: "/services",
  },
  {
    name: "resume",
    link: "/resume",
  },
  {
    name: "work",
    link: "/work",
  },
  {
    name: "contact",
    link: "/contact",
  },
];

const MobileNav = () => {
  return <nav>MobileNav</nav>;
};

export default MobileNav;
