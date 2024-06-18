import Image from "next/image";
import React from "react";
import logo from "../styles/images/fdlogo.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-10 bg-gradient-to-b from-black via-black/75 via-75% to-transparent to-100%">
      <div className="container mx-auto flex items-center justify-center lg:justify-between p-5">
        <div className="flex items-center">
          <a href="#welcome">
            <Image src={logo} alt="Logo" width={40} height={40} />
          </a>
        </div>
        <nav className="flex space-x-10">
          <a
            href="#about"
            className="text-gray-200 hover:text-gray-400 hidden lg:block"
          >
            About
          </a>
          <a
            href="#portfolio"
            className="text-gray-200 hover:text-gray-400 hidden lg:block"
          >
            Portfolio
          </a>
          <a
            href="#contact"
            className="text-gray-200 hover:text-gray-400 hidden lg:block"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
