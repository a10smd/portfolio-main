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
  const pathname = usePathname();
  return (
    <nav className="flex gap-8">
      {Links.map((link, index) => {
        return (
          <Link
            href={link.link}
            key={index}
            className={`${
              link.link === pathname &&
              "text-green-400 border-b-2 border-green-500"
            } capitalize font-medium hover:text-green-400 transition-all`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
