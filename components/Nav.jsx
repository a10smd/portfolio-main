"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

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

const Nav = () => {
  return (
    <nav className="flex gap-8">
      {Links.map((link, index) => {
        return (
          <Link href={link.link} key={index}>
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
