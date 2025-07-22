import React from 'react';
import { FaInstagram, FaFacebookF, FaWhatsapp } from 'react-icons/fa';
import logo from '../../assets/image.jpeg';

const Footer = () => {
    return (
        <footer className="bg-black text-white py-10 px-6 mt-10">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left">

                {/* Logo and Brand */}
                <div className="flex flex-col items-center md:items-start space-y-3">
                    <img
                        src={logo}
                        alt="Brand Logo"
                        className="h-16 w-16 object-cover rounded-full hover:scale-110 transition duration-300 ease-in-out"
                    />
                    <p className="text-[#FFD700] text-xl font-bold tracking-widest italic drop-shadow-[0_0_6px_rgba(255,215,0,0.8)] font-[Cinzel]">
                        TrendAura
                    </p>
                </div>

                {/* Social Media Icons */}
                <div className="flex justify-center space-x-6 text-2xl">
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"
                        className="hover:text-yellow-400 transition duration-300">
                        <FaInstagram />
                    </a>
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"
                        className="hover:text-yellow-400 transition duration-300">
                        <FaFacebookF />
                    </a>
                    <a href="https://wa.me/yourphonenumber" target="_blank" rel="noopener noreferrer"
                        className="hover:text-yellow-400 transition duration-300">
                        <FaWhatsapp />
                    </a>
                </div>

                {/* Copyright */}
                <div className="text-sm text-gray-500 hover:text-white transition duration-300">
                    © {new Date().getFullYear()} TrendAura. All rights reserved.
                </div>

            </div>
        </footer>
    );
};

export default Footer;
