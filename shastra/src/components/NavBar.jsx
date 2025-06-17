import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/shastra-logo.png';
import { HiMenu, HiX } from 'react-icons/hi';


const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className=" bg-white bg-opacity-10 backdrop-blur-lg shadow-lg fixed top-0 left-0 w-full z-50">
      <div className="flex items-center justify-between px-6 py-4 md:px-32">
        
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Logo" className="h-10 w-auto object-contain" />
        </Link>

      
        <div className="hidden md:flex items-center gap-6 text-white">
          <NavLinks />
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden text-white z-50">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <HiX className="text-3xl" /> : <HiMenu className="text-3xl" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed top-0 left-0 right-0 md:hidden flex flex-col items-center bg-navbar text-white gap-4 pb-4">
          <NavLinks />
        </div>
      )}
    </nav>
  );
};

const NavLinks = () => (
  <>
    <Link to="/" className="hover:text-sky-300">Home</Link>
    <Link to="/events" className="hover:text-sky-300">Events</Link>
    <Link to="/competitions" className="hover:text-sky-300">Competitions</Link>
    <Link to="/schedule" className="hover:text-sky-300">Schedule</Link>
    <Link to="/contact" className="hover:text-sky-300">Contact</Link>
  </>
);

export default NavBar;
