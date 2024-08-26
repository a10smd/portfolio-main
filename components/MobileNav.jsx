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
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-green-400" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        {/* logo */}
        <div className="mt-32 mb-40 text-center text-2xl">
          <Link href="/">
            <h1 className="text-4xl font-semibold">
              Abdus \<span className="text-green-400">.</span>
            </h1>
          </Link>
        </div>
        {/* nav links */}
        <nav className="flex flex-col justify-center items-center gap-8">
          {Links.map((link, index) => {
            return (
              <Link
                href={link.link}
                key={index}
                className={`${
                  link.link === pathname
                    ? "text-green-400 border-b-2 border-green-400"
                    : ""
                } text-xl capitalize hover:text-green-400 transition-all`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
