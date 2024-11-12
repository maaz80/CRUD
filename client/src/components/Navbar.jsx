import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-teal-700 rounded-b-md fixed w-[100%]">
            {/* Desktop Navbar */}
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        {/* Hamburger Menu for Mobile */}
                        <button
                            onClick={toggleMenu}
                            className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-500 focus:ring-white"
                            aria-controls="mobile-menu"
                            aria-expanded={isOpen ? 'true' : 'false'}
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg
                                className="block h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </button>
                    </div>

                    {/* Logo */}
                    <div className="flex-1 flex items-center justify-center sm:justify-start">
                        <div className="text-white text-2xl font-bold">CRUD</div>
                    </div>

                    {/* Navbar Links (Desktop) */}
                    <div className="hidden sm:block sm:ml-6">
                        <div className="flex space-x-4">
                            <a href="/" className="text-white hover:bg-teal-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                Home
                            </a>
                            <Link to='/about' className="text-white hover:bg-teal-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                About
                            </Link>
                            <Link to='/service' className="text-white hover:bg-teal-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                        Services
                    </Link>
                            <Link to='/contact' className="text-white hover:bg-teal-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                Contact
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`${isOpen ? 'block' : 'hidden'} sm:hidden`} id="mobile-menu">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    <a href="/" className="text-white block px-3 py-2 rounded-md text-base font-medium">
                        Home
                    </a>
                    <Link to='/about' className="text-white block px-3 py-2 rounded-md text-base font-medium">
                        About
                    </Link>
                    <Link to='/service' className="text-white block px-3 py-2 rounded-md text-base font-medium">
                        Services
                    </Link>
                    <Link to='/contact' className="text-white block px-3 py-2 rounded-md text-base font-medium">
                        Contact
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
