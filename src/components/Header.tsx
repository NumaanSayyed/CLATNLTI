import { useState } from 'react';
import scrollToSection from '../utils/Scroll';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleMenuClick = (section: string) => {
        scrollToSection(section);
        setIsMenuOpen(false); // close menu after click
    };

    return (
        <>
            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex items-center">
                            <div className="font-poppins font-bold text-2xl text-blue-900">
                                CLAT<span className="text-yellow-500">NLTI</span>
                            </div>
                        </div>
                        {/* Desktop Menu */}
                        <div className="hidden md:flex items-center space-x-8">
                            <button
                                onClick={() => scrollToSection('home')}
                                className="text-gray-700 hover:text-blue-900 font-medium cursor-pointer"
                            >
                                Home
                            </button>
                            <button
                                onClick={() => scrollToSection('courses')}
                                className="text-gray-700 hover:text-blue-900 font-medium cursor-pointer"
                            >
                                Courses
                            </button>
                            <button
                                onClick={() => scrollToSection('videos')}
                                className="text-gray-700 hover:text-blue-900 font-medium cursor-pointer"
                            >
                                Videos
                            </button>
                            <button
                                onClick={() => scrollToSection('feedbacks')}
                                className="text-gray-700 hover:text-blue-900 font-medium cursor-pointer"
                            >
                                Feedbacks
                            </button>
                            <button className="bg-blue-900 text-white px-6 py-2 !rounded-button hover:bg-blue-800 transition-colors cursor-pointer whitespace-nowrap">
                                Login
                            </button>
                        </div>
                        {/* Hamburger Button */}
                        <div className="md:hidden">
                            <button className="text-gray-700 cursor-pointer" onClick={toggleMenu}>
                                <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden bg-white shadow-md px-4 py-4 space-y-4">
                        <button
                            onClick={() => handleMenuClick('home')}
                            className="block w-full text-left text-gray-700 hover:text-blue-900"
                        >
                            Home
                        </button>
                        <button
                            onClick={() => handleMenuClick('courses')}
                            className="block w-full text-left text-gray-700 hover:text-blue-900"
                        >
                            Courses
                        </button>
                        <button
                            onClick={() => handleMenuClick('videos')}
                            className="block w-full text-left text-gray-700 hover:text-blue-900"
                        >
                            Videos
                        </button>
                        <button
                            onClick={() => handleMenuClick('feedbacks')}
                            className="block w-full text-left text-gray-700 hover:text-blue-900"
                        >
                            Feedbacks
                        </button>
                        <button className="block w-full bg-blue-900 text-white px-4 py-2 rounded-md hover:bg-blue-800">
                            Login
                        </button>
                    </div>
                )}
            </nav>
        </>
    );
}

export default Header;
