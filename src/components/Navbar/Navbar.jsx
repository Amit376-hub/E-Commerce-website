import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/image.jpeg';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative bg-black px-5 py-3 shadow-lg overflow-hidden">

      {/* Transparent Logo Watermark */}
      <img
        src={logo}
        alt="Watermark Logo"
        className="absolute inset-0 w-full h-full object-contain opacity-20 pointer-events-none"
        style={{ zIndex: 0 }}
      />

      <nav className="relative z-10 flex items-center justify-between">

        {/* Logo Section */}
        <div className="flex flex-col items-center space-y-2">
          <img
            src={logo}
            alt="TrendAura Logo"
            className="h-[80px] w-[80px] rounded-full object-cover border-3 border-[#FFD700] shadow-md"
          />
          <p className="text-[#FFD700] text-xl font-bold tracking-widest italic drop-shadow-[0_0_6px_rgba(255,215,0,0.8)] font-[Cinzel]">
            TrendAura
          </p>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-white font-medium">
          <Link to="/" className="hover:text-[#FFD700] transition">Home</Link>
          <Link to="/mens" className="hover:text-[#FFD700] transition">Men</Link>
          <Link to="/womens" className="hover:text-[#FFD700] transition">Women</Link>
          <Link to="/kids" className="hover:text-[#FFD700] transition">Kids</Link>
        </div>

        {/* Hamburger Icon */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white text-3xl md:hidden focus:outline-none"
        >
          &#9776;
        </button>

        {/* Cart & Login Button */}
        <div className="hidden md:flex items-center space-x-4">
          <Link to="/cart">
            <lord-icon
              src="https://cdn.lordicon.com/slkvcfos.json"
              trigger="hover"
              colors="primary:#ffffff"
              style={{ width: "40px", height: "40px" }}
            ></lord-icon>
          </Link>

          <Link to="/login">
            <button className="bg-gradient-to-r from-[#C5A059] to-[#FFD700] hover:from-[#FFD700] hover:to-[#C5A059] text-black font-semibold py-2 px-4 rounded-full shadow-lg tracking-wide transition-all duration-300 ease-in-out hover:scale-105">
              Login
            </button>
          </Link>
        </div>
      </nav>

      {/* ✅ Mobile Menu */}
      {menuOpen && (
        <div className="flex flex-col mt-4 space-y-4 text-white text-center md:hidden">
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/mens" onClick={() => setMenuOpen(false)}>Men</Link>
          <Link to="/womens" onClick={() => setMenuOpen(false)}>Women</Link>
          <Link to="/kids" onClick={() => setMenuOpen(false)}>Kids</Link>
          <Link to="/cart" onClick={() => setMenuOpen(false)}>Cart</Link>
          <Link to="/login" onClick={() => setMenuOpen(false)}>Login</Link>
        </div>
      )}

    </div>
  );
};

export default Navbar;
