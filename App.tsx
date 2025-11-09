import React, { useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import IntroductionSection from './components/IntroductionSection';
import PillarsSection from './components/PillarsSection';
import HospitalitySection from './components/HospitalitySection';
import ContactFormSection from './components/ContactFormSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  useEffect(() => {
    const animatedElements = document.querySelectorAll('.scroll-animate');

    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.1
      });

      animatedElements.forEach(el => {
        observer.observe(el);
      });

      return () => {
        animatedElements.forEach(el => {
          observer.unobserve(el);
        });
      };
    } else {
      // Fallback for older browsers
      animatedElements.forEach(el => {
        el.classList.add('visible');
      });
    }
  }, []);

  return (
    <div className="bg-[#0a0a0a] text-gray-200">
      <Header />
      <main>
        <HeroSection />
        <IntroductionSection />
        <PillarsSection />
        <HospitalitySection />
        <ContactFormSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;