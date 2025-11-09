import React from 'react';
import { useI18n } from '../context/I18nContext';

const HeroSection: React.FC = () => {
  const { t } = useI18n();

  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-center text-white parallax-bg" style={{ 
        backgroundImage: "url('https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1761950147664_WhatsApp-Image-2021-12-13-at-10.15.51-AM.jpeg?alt=media&token=147a429f-4059-47c3-8b1a-cb8782f922b0')",
        backgroundPosition: 'center 40%' 
    }}>
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-10 p-6 pt-16 md:pt-32 flex flex-col items-center max-w-4xl mx-auto">
        <img src="https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1762685212137_logo_THE_EMBASSY.png?alt=media&token=8ebc6425-e3ce-4eb3-8a14-1799ca68b869" alt="The Embassy Logo" className="w-full max-w-[280px] md:max-w-[320px] h-auto mb-2 scroll-animate fade-in" />
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter text-shadow scroll-animate fade-in delay-1">{t('hero.title')}</h1>
        <h2 className="text-2xl md:text-4xl font-semibold text-gray-300 tracking-wide text-shadow mt-4 scroll-animate fade-in delay-2">{t('hero.subtitle')}</h2>
        <p className="mt-8 text-lg md:text-xl max-w-2xl text-gray-200 leading-relaxed text-shadow scroll-animate fade-in delay-3">
          {t('hero.description')}
        </p>
        <div className="mt-12 flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 rtl:sm:space-x-reverse scroll-animate fade-in delay-4">
          <a href="#contact" className="w-full sm:w-auto bg-[#d17609] text-black font-bold py-4 px-10 rounded-full text-lg hover:bg-[#b46408] transition-all duration-300 transform hover:scale-105 shadow-lg animate-pulse hover:animate-none">
            {t('hero.getInTouch')}
          </a>
          <a href="https://www.theembassytc.com/" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto text-white font-semibold py-4 px-10 rounded-full text-lg border-2 border-[#d17609] hover:bg-[#d17609] hover:text-black transition-all duration-300 transform hover:scale-105">
            {t('hero.about')}
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;