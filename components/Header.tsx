import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#philosophy', label: 'Philosophy' },
    { href: '#pillars', label: 'The Pillars' },
    { href: '#hospitality', label: 'Hospitality' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isMobileMenuOpen ? 'bg-black/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4 flex items-center">
        <a href="#home" className="flex items-center space-x-4">
          <img src="https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1762686328016_LOGO_simple_blanco.png?alt=media&token=e096f7cc-678d-48b8-9e93-d937b0e3612b" alt="The Embassy Logo" className="h-6 md:h-8 w-auto" />
          <span className="text-white font-bold tracking-wider uppercase text-base">Experience</span>
        </a>
        <nav className="hidden md:flex items-center space-x-8 ml-auto">
          {navLinks.map((link) => (
            <a 
              key={link.href} 
              href={link.href} 
              className="relative text-gray-300 hover:text-white transition-colors duration-300 font-semibold after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-[2px] after:bg-[#d17609] after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
          <a href="https://www.theembassytc.com/" target="_blank" rel="noopener noreferrer" className="bg-[#d17609] text-black font-bold py-2 px-6 rounded-full hover:bg-[#b46408] transition-all duration-300 transform hover:scale-105">
            Visit The Embassy
          </a>
        </nav>
        <div className="md:hidden ml-auto">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white focus:outline-none z-50">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    {isMobileMenuOpen ? (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-16 6h16" />
                    )}
                </svg>
            </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-black/80 backdrop-blur-sm pb-6 pt-2 absolute top-full left-0 w-full">
          <div className="flex flex-col items-center space-y-4">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="text-gray-300 hover:text-white transition-colors duration-300 font-semibold py-2 text-lg">{link.label}</a>
            ))}
            <a href="https://www.theembassytc.com/" target="_blank" rel="noopener noreferrer" className="bg-[#d17609] text-black font-bold py-3 px-8 rounded-full hover:bg-[#b46408] transition-all duration-300 transform hover:scale-105 mt-4">
              Visit The Embassy
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;