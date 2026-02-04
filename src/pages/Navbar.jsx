import React, { useEffect, useState } from "react";

import { Menu, X } from "lucide-react";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experiences" },
    { name: "Contact", href: "#contact" },
  ];

  const handleClickOnItem = (e, href) => {
    e.preventDefault();
    console.log(href);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50  transition-all duration-300 ${
        isScrolled
          ? " bg-slate-900/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center text-white px-10 py-5">
        <a
          href="#"
          onClick={(e) => handleClickOnItem(e, "#home")}
          className="text-2xl md:text-3xl font-bold"
        >
          AkshanDhyani
        </a>

        {/* desktop nav items  */}
        <div className="space-x-8 hidden md:flex md:items-center md:gap-4 text-lg">
          <div>
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="px-3 py-2 text-white hover:text-blue-600 rounded-lg transition-colors"
                onClick={(e) => handleClickOnItem(e, item.href)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>

        {/* mobile menu icon */}
        <button
          className="md:hidden text-white p-2 hover:bg-slate-800 rounded-lg transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {/* mobile nav item  */}
      <div
        className={`md:hidden bg-slate-900/95 backdrop-blur-md overflow-hidden rounded-2xl  transition-all duration-300 ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 py-4 space-y-3">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="block px-4 py-2 text-white hover:bg-slate-800 transition-colors"
              onClick={(e) => handleClickOnItem(e, item.href)}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
