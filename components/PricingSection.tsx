import React from 'react';

const PricingSection: React.FC = () => {
  return (
    <section id="pricing" className="py-20 parallax-bg" style={{backgroundImage: "url('https://picsum.photos/seed/gym-dark/1920/1080')"}}>
        <div className="absolute inset-0 bg-black/80"></div>
        <div className="relative z-10 container mx-auto px-6 text-center">
            <h3 className="text-2xl md:text-3xl font-semibold tracking-wider text-gray-300">HQ EXPERIENCES STARTING FROM</h3>
            <p className="text-6xl md:text-8xl font-black text-[#d17609] my-4">[PRICE TO BE DEFINED]€</p>
            <p className="text-gray-400 font-semibold">PER PERSON (FLIGHTS TO MALAGA NOT INCLUDED)</p>
        </div>
    </section>
  );
};

export default PricingSection;