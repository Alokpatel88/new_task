import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-scroll";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    
    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-gradient-to-r from-green-200 via-green-300 to-green-400 shadow-lg"
          : "bg-gradient-to-r from-green-100 via-green-200 to-green-300 shadow-md"
      }`}
    >
      <div className="flex flex-row justify-between p-5 px-5 md:px-32">
        <div>
          <Link
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            className="font-bold text-3xl p-1 cursor-pointer text-gray-700"
          >
            eduTravel
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 font-medium p-1 text-lg text-gray-700">
          {["Home", "About", "Courses", "Reviews", "Contact"].map((item) => (
            <Link
              key={item}
              to={item.toLowerCase()}
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-green-600 transition-all cursor-pointer"
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center" onClick={handleChange}>
          <div className="p-2 text-gray-700">
            {menu ? <AiOutlineClose size={26} /> : <AiOutlineMenu size={26} />}
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`${
          menu ? "translate-x-0" : "-translate-x-full"
        } md:hidden flex flex-col absolute bg-gradient-to-b from-green-100 via-green-200 to-green-300 left-0 top-20 font-medium text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300 text-gray-700`}
      >
        {["Home", "About", "Courses", "Reviews", "Contact"].map((item) => (
          <Link
            key={item}
            to={item.toLowerCase()}
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-green-600 transition-all cursor-pointer"
            onClick={handleChange}
          >
            {item}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
