import React from 'react';

interface Pillar {
  id: number;
  title: string;
  subtitle: string;
  category: string;
  details: string[];
  imageUrl: string;
}

const pillarsData: Pillar[] = [
  {
    id: 1,
    title: 'Elite Methodology',
    subtitle: 'Train at the central headquarters.',
    category: 'The Lab',
    details: [
      'The Embassy HQ Facilities: Full access to our state-of-the-art facilities in Fuengirola (Training Center, Gym, Recovery Area).',
      'Master Coaches: Sessions led directly by the main technical staff of The Embassy.',
      'NBA-Level Tech: Use of shooting technology, biomechanical analysis, and professional performance tracking.',
      'Personalized Roadmap: Individualized development plans designed by our sports directors.'
    ],
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1761950147664_TheEmbassyTC-imagen_025.jpg?alt=media&token=0734f083-4749-4a46-9f88-f6ee7bfd0f53',
  },
  {
    id: 2,
    title: 'Compete at the Highest Level',
    subtitle: 'Measure your game against the Spanish elite.',
    category: 'The Test',
    details: [
      'Elite Matchups: Organization of friendly matches against ACB youth teams, EBA/LEB teams, or visiting international academies.',
      'Game Analysis: Professional post-game video analysis with our staff.',
      'Scouting Exposure: Opportunity to be seen by scouts and sports directors from The Embassy network.'
    ],
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1761950147664_TheEmbassyTC-imagen_036.jpg?alt=media&token=e35e2655-a8cb-4db4-b527-54e76095b763',
  },
  {
    id: 3,
    title: 'Costa del Sol Living',
    subtitle: 'Recovery and lifestyle under the Málaga sun.',
    category: 'The Balance',
    details: [
      'Beach & Sun: Enjoy the beaches of Fuengirola and the privileged climate of the Costa del Sol (320+ days of sun per year).',
      'Cultural Excursions: Optional visits to Málaga city, Marbella, Puerto Banús, or traditional white villages.',
      'Gastronomy: Healthy Mediterranean culinary experience, key to sports performance.'
    ],
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1762686745454_costa_del_sol.jpg?alt=media&token=d318d46d-03f9-4d16-b6fe-72bb4d8152ca',
  },
];

const CheckIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className={className || "w-6 h-6"}>
        <circle cx="12" cy="12" r="12" fill="currentColor"/>
        <path d="M9 12.5l2.5 2.5 4.5-4.5" stroke="#0a0a0a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);


const PillarCard: React.FC<{ pillar: Pillar, reverse: boolean }> = ({ pillar, reverse }) => {
  return (
    <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-stretch gap-8 md:gap-0 bg-black/30 rounded-lg overflow-hidden my-12 shadow-2xl transition-all duration-300 ease-in-out hover:shadow-[#d17609]/30 hover:shadow-lg hover:-translate-y-2 hover:scale-[1.02] scroll-animate ${reverse ? 'slide-in-left' : 'slide-in-right'}`}>
      <div className="md:w-1/2">
        <img src={pillar.imageUrl} alt={pillar.title} className="w-full h-full object-cover min-h-[300px]" />
      </div>
      <div className="md:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
        <p className="text-[#d17609] font-bold tracking-widest uppercase">{pillar.category}</p>
        <h3 className="text-3xl lg:text-4xl font-black text-white mt-2 mb-2">{pillar.title}</h3>
        <p className="text-gray-400 text-lg mb-8">{pillar.subtitle}</p>
        <ul className="space-y-4">
          {pillar.details.map((detail, index) => (
            <li key={index} className="flex items-start">
              <CheckIcon className="w-6 h-6 text-[#d17609] mr-3 mt-1 flex-shrink-0" />
              <span className="text-gray-300">{detail}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const PillarsSection: React.FC = () => {
  return (
    <section id="pillars" className="py-20 md:py-32 parallax-bg relative" style={{backgroundImage: "url('https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1761950147664_TheEmbassyTC-imagen_031.jpg?alt=media&token=1484f778-a8dd-4cff-9e23-780295ae2092')"}}>
      <div className="absolute inset-0 bg-black/70"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 scroll-animate fade-in">
            <h2 className="text-4xl md:text-5xl font-black uppercase text-white tracking-wider">The Core of the HQ Experience</h2>
            <div className="mx-auto mt-4 h-1 w-24 bg-[#d17609]"></div>
        </div>
        {pillarsData.map((pillar, index) => (
          <PillarCard key={pillar.id} pillar={pillar} reverse={index % 2 !== 0} />
        ))}
      </div>
    </section>
  );
};

export default PillarsSection;