import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-12">
      <div className="container mx-auto px-6 text-center text-gray-400">
        <img src="https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1762685212137_logo_THE_EMBASSY.png?alt=media&token=8ebc6425-e3ce-4eb3-8a14-1799ca68b869" alt="The Embassy Logo" className="h-10 w-auto mx-auto" />
        <p className="mt-4 text-[#d17609] italic">"The Sanctuary for Performance"</p>
        <a 
          href="https://maps.app.goo.gl/hndgPuajgjfedQQy9" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="mt-2 text-lg inline-block hover:text-white transition-colors duration-300"
        >
          Fuengirola, Málaga, Spain.
        </a>
        <div className="mt-8 border-t border-gray-800 pt-8">
          <p>&copy; {new Date().getFullYear()} The Embassy Training Center.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;