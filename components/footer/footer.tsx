'use client';
import React from 'react';
import { FaArrowUp } from 'react-icons/fa';

const Footer = () => {
    // Scroll to top handler
    const scrollToTop = () => {
        if (typeof window !== 'undefined') {
            window.scrollTo({ top: 0, behavior: 'smooth'});
        }
    };

    return (
        <footer className="w-full  py-8 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0 relative">
            <span className="text-center w-full text-gray-300 text-base md:text-xl font-medium">
                Copyright © 2025 | Aarjaw Adhikari | All Rights Reserved.
            </span>
            <button
                onClick={scrollToTop}
                className="mt-4 md:mt-0 md:absolute md:right-8 md:top-1/2 md:-translate-y-1/2 bg-gray-100 hover:bg-[#2AD87E] text-black rounded-lg p-5 transition-all shadow"
                aria-label="Scroll to top"
            >
                <FaArrowUp size={24} />
            </button>
        </footer>
    );
};

export default Footer;
