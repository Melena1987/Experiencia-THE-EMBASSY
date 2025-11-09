import React, { useState, useEffect } from 'react';
import { useI18n } from '../context/I18nContext';

const UKFlag: React.FC<{className?: string}> = ({ className }) => (<svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30"><clipPath id="a"><path d="M30 15h30v15zv15h-30z"/></clipPath><path d="M0 0v30h60V0z" fill="#012169"/><path d="M0 0l60 30m0-30L0 30" stroke="#fff" strokeWidth="6"/><path d="M0 0l60 30m0-30L0 30" clipPath="url(#a)" stroke="#C8102E" strokeWidth="4"/><path d="M30 0v30M0 15h60" stroke="#fff" strokeWidth="10"/><path d="M30 0v30M0 15h60" stroke="#C8102E" strokeWidth="6"/></svg>);
const SAFlag: React.FC<{className?: string}> = ({ className }) => (<svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400"><rect width="600" height="400" fill="#006c35"/><text fill="#fff" fontFamily="Tornado" fontSize="70" textAnchor="middle" x="300" y="220">لَا إِلٰهَ إِلَّا الله مُحَمَّدٌ رَسُولُ الله</text><path fill="#fff" d="m300 325-150-25 10 10 140 15 140-15 10-10-150 25-22.5-35 22.5-12.5v60z"/></svg>);


const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useI18n();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#philosophy', labelKey: 'header.philosophy' },
    { href: '#pillars', labelKey: 'header.pillars' },
    { href: '#hospitality', labelKey: 'header.hospitality' },
    { href: '#contact', labelKey: 'header.contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isMobileMenuOpen ? 'bg-black/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4 flex items-center">
        <a href="#home" className="flex items-center space-x-4 rtl:space-x-reverse">
          <img src="https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1762686328016_LOGO_simple_blanco.png?alt=media&token=e096f7cc-678d-48b8-9e93-d937b0e3612b" alt="The Embassy Logo" className="h-6 md:h-8 w-auto" />
          <span className="text-white font-bold tracking-wider uppercase text-base">{t('header.experience')}</span>
        </a>

        <div className="flex items-center gap-3 ms-4">
            <button onClick={() => setLanguage('en')} aria-label="Switch to English">
                <UKFlag className={`w-6 h-auto rounded-sm transition-opacity duration-300 ${language !== 'en' ? 'opacity-50 hover:opacity-100' : 'opacity-100'}`}/>
            </button>
            <button onClick={() => setLanguage('ar')} aria-label="Switch to Arabic">
                <SAFlag className={`w-6 h-auto rounded-sm transition-opacity duration-300 ${language !== 'ar' ? 'opacity-50 hover:opacity-100' : 'opacity-100'}`}/>
            </button>
        </div>


        <nav className="hidden md:flex items-center space-x-8 rtl:space-x-reverse ms-auto">
          {navLinks.map((link) => (
            <a 
              key={link.href} 
              href={link.href} 
              className="relative text-gray-300 hover:text-white transition-colors duration-300 font-semibold after:content-[''] after:absolute after:left-0 rtl:after:right-0 after:bottom-[-4px] after:w-0 after:h-[2px] after:bg-[#d17609] after:transition-all after:duration-300 hover:after:w-full"
            >
              {t(link.labelKey)}
            </a>
          ))}
          <a href="https://www.theembassytc.com/" target="_blank" rel="noopener noreferrer" className="bg-[#d17609] text-black font-bold py-2 px-6 rounded-full hover:bg-[#b46408] transition-all duration-300 transform hover:scale-105">
            {t('header.visit')}
          </a>
        </nav>
        <div className="md:hidden ms-auto">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
              className="text-white focus:outline-none z-50"
              aria-label="Toggle navigation menu"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
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
        <nav id="mobile-menu" className="md:hidden bg-black/80 backdrop-blur-sm pb-6 pt-2 absolute top-full left-0 w-full">
          <div className="flex flex-col items-center space-y-4">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="text-gray-300 hover:text-white transition-colors duration-300 font-semibold py-2 text-lg">{t(link.labelKey)}</a>
            ))}
            <a href="https://www.theembassytc.com/" target="_blank" rel="noopener noreferrer" className="bg-[#d17609] text-black font-bold py-3 px-8 rounded-full hover:bg-[#b46408] transition-all duration-300 transform hover:scale-105 mt-4">
              {t('header.visit')}
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;