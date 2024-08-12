import Link from "next/link";
import { Button } from "./ui/button";

// components
import Nav from "./Nav";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto">
        {/* logo */}
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Abdus<span className="text-green-400">.</span>
          </h1>
        </Link>

        {/* desktop nav */}
        <div className="hidden lg:flex">
          <Nav />
        </div>
      </div>
    </header>
  );
};

export default Header;
