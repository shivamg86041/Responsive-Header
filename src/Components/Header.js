import React, { useState } from "react";
import { FaBars, FaSearch } from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 text-white shadow-lg">
      <div className="flex items-center justify-between px-6 py-4 md:px-8 transition-all duration-300">

        <div className="text-2xl font-semibold tracking-wide">MyLogo</div>

        <nav
          className={`absolute md:static top-16 left-0 right-0 bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 md:bg-transparent md:flex md:space-x-8 md:items-center md:justify-center ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <a
            href="#home"
            className="block px-4 py-2 text-center text-white md:inline-block hover:text-yellow-300 transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            Home
          </a>
          <a
            href="#about"
            className="block px-4 py-2 text-center text-white md:inline-block hover:text-yellow-300 transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            About
          </a>
          <a
            href="#services"
            className="block px-4 py-2 text-center text-white md:inline-block hover:text-yellow-300 transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            Services
          </a>
          <a
            href="#contact"
            className="block px-4 py-2 text-center text-white md:inline-block hover:text-yellow-300 transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            Contact
          </a>
        </nav>

        <div className="relative flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="hidden md:block p-2 rounded-full bg-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-300 ease-in-out transform hover:scale-105 w-48 placeholder-gray-400"
          />

          {!isSearchOpen && (
            <button
              onClick={toggleSearch}
              className="md:hidden text-2xl text-white hover:text-yellow-400 transition-all duration-300"
              aria-label="Toggle Search"
            >
              <FaSearch />
            </button>
          )}

          {isSearchOpen && (
            <div
              className="absolute md:hidden flex items-center right-0 top-0 bg-gray-700 rounded-full w-40"
              style={{
                transform: "translateY(-50%) translateX(50%)",
                transition: "transform 0.3s ease-in-out",
              }}
            >
              <input
                type="text"
                placeholder="Search..."
                className="w-full p-2 rounded-full bg-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-300 ease-in-out placeholder-gray-400"
              />
              <button
                onClick={toggleSearch}
                className="text-xl ml-2  text-white pr-2  right-2 transform"
                aria-label="Close Search"
              >
                ✖
              </button>
            </div>
          )}
        </div>

        <button
          className="text-2xl md:hidden text-white hover:text-yellow-400 transition-all duration-300"
          onClick={toggleMenu}
          aria-label="Toggle Navigation"
        >
          <FaBars />
        </button>
      </div>
    </header>
  );
};

export default Header;
