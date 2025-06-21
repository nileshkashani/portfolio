import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { HiOutlineMenuAlt3, HiX } from 'react-icons/hi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Home', link: 'home' },
    { label: 'About', link: 'about' },
    { label: 'Skills', link: 'skills' },
    { label: 'Projects', link: 'projects' },
    { label: 'Contact', link: 'contact' },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50 font-poppins">
      <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600">Nilesh</div>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 font-bold text-base">
          {navItems.map((item) => (
            <Link
              key={item.link}
              to={item.link}
              spy={true}
              smooth={true}
              duration={500}
              offset={-80}
              activeClass="active-link"
              className="
                cursor-pointer relative text-gray-700 transition-all duration-300
                hover:text-blue-600
                after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[3px]
                after:bg-blue-600 after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300
              "
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden text-3xl text-blue-600 cursor-pointer" onClick={toggleMenu}>
          {isOpen ? <HiX /> : <HiOutlineMenuAlt3 />}
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col gap-6 items-center bg-white py-6 shadow-md">
          {navItems.map((item) => (
            <Link
              key={item.link}
              to={item.link}
              spy={true}
              smooth={true}
              duration={500}
              offset={-80}
              onClick={closeMenu}
              activeClass="active-link"
              className="text-gray-700 font-medium text-lg hover:text-blue-600 transition"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
