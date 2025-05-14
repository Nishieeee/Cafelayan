import { useState } from "react";
import Logo from "../assets/cafelayanlogo.jpg";
import Heropage from "./Heropage";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  {
    /*TODO: add contacts and about page*/
  }
  return (
    <header className="flex items-center justify-between px-4 py-3 bg-yellow-50 sticky top-0 shadow-sm z-50 md:px-6 lg:px-12">
      {/* Logo and Name */}
      <div className="flex items-center">
        <img
          src={Logo}
          alt="Cafelayan logo"
          id="logo"
          className="h-10 w-auto md:h-12"
        />
        <h1 className="text-green-900 text-lg ml-2 md:text-xl lg:text-2xl">
          Cafelayan
        </h1>
      </div>

      {/* Mobile Hamburger Button */}
      <button
        className="text-green-900 block md:hidden focus:outline-none"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {isMenuOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center justify-center gap-5 text-green-900">
        <a
          href="/"
          className="p-1 border-b border-transparent hover:border-green-900 transition-all duration-300"
        >
          Home
        </a>
        <a
          href="/about"
          className="p-1 border-b border-transparent hover:border-green-900 transition-all duration-300"
        >
          About us
        </a>
        <a
          href="/partners"
          className="p-1 border-b border-transparent hover:border-green-900 transition-all duration-300"
        >
          Partners
        </a>
        <a
          href="/contact"
          className="p-1 border-b border-transparent hover:border-green-900 transition-all duration-300"
        >
          Contact us
        </a>
      </nav>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-yellow-50 shadow-md md:hidden">
          <nav className="flex flex-col py-2">
            <a
              href="/"
              className="px-4 py-3 text-green-900 hover:bg-yellow-100 transition-colors duration-300"
              onClick={toggleMenu}
            >
              Home
            </a>
            <a
              href="/about"
              className="px-4 py-3 text-green-900 hover:bg-yellow-100 transition-colors duration-300"
              onClick={toggleMenu}
            >
              About us
            </a>
            <a
              href="/partners"
              className="px-4 py-3 text-green-900 hover:bg-yellow-100 transition-colors duration-300"
              onClick={toggleMenu}
            >
              Partners
            </a>
            <a
              href="/contact"
              className="px-4 py-3 text-green-900 hover:bg-yellow-100 transition-colors duration-300"
              onClick={toggleMenu}
            >
              Contact us
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
