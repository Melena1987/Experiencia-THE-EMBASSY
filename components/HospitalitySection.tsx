import React from 'react';

const HotelIcon: React.FC<{className?: string}> = ({className}) => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className || "w-6 h-6"}><path fillRule="evenodd" d="M4.5 2.25a.75.75 0 0 0 0 1.5v16.5a.75.75 0 0 0 .75.75h13.5a.75.75 0 0 0 .75-.75V3.75a.75.75 0 0 0 0-1.5h-4.5a.75.75 0 0 0-.75.75v.75h-3V3a.75.75 0 0 0-.75-.75h-4.5ZM7.5 15a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75Zm.75 2.25a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3ZM7.5 9a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-3A.75.75 0 0 1 7.5 9Zm.75 2.25a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3ZM7.5 6a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-3A.75.75 0 0 1 7.5 6Zm10.5 9a.75.75 0 0 1 .75-.75h.75a.75.75 0 0 1 0 1.5h-.75a.75.75 0 0 1-.75-.75Zm.75 2.25a.75.75 0 0 0 0 1.5h.75a.75.75 0 0 0 0-1.5h-.75ZM18 9a.75.75 0 0 1 .75-.75h.75a.75.75 0 0 1 0 1.5h-.75A.75.75 0 0 1 18 9Zm.75 2.25a.75.75 0 0 0 0 1.5h.75a.75.75 0 0 0 0-1.5h-.75ZM18 6a.75.75 0 0 1 .75-.75h.75a.75.75 0 0 1 0 1.5h-.75A.75.75 0 0 1 18 6Z" clipRule="evenodd" /></svg>);
const PlateIcon: React.FC<{className?: string}> = ({className}) => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className || "w-6 h-6"}><path d="M11.25 2.25c-3.866 0-7 2.05-7 4.5s3.134 4.5 7 4.5 7-2.05 7-4.5-3.134-4.5-7-4.5Zm0 1.5a5.5 5.5 0 0 0 0 6c1.806 0 3.44-.858 4.5-2.25a5.5 5.5 0 0 0-4.5-3.75ZM11.25 12c-4.418 0-8 1.79-8 4s3.582 4 8 4 8-1.79 8-4-3.582-4-8-4Zm0 1.5a6.5 6.5 0 0 0-6.177 3.5c1.432.463 3.19.75 5.177.75s3.745-.287 5.177-.75A6.5 6.5 0 0 0 11.25 13.5Z" /></svg>);
const BusIcon: React.FC<{className?: string}> = ({className}) => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className || "w-6 h-6"}><path fillRule="evenodd" d="M10.5 3A2.25 2.25 0 0 0 8.25 5.25v2.25H7.5A2.25 2.25 0 0 0 5.25 9.75v7.5A2.25 2.25 0 0 0 7.5 19.5h9a2.25 2.25 0 0 0 2.25-2.25v-7.5A2.25 2.25 0 0 0 16.5 7.5h-.75V5.25A2.25 2.25 0 0 0 13.5 3h-3ZM9 9.75a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75Zm.75 3.75a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5h-4.5Z" clipRule="evenodd" /></svg>);
const ShieldIcon: React.FC<{className?: string}> = ({className}) => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className || "w-6 h-6"}><path fillRule="evenodd" d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z" clipRule="evenodd" /></svg>);

const features = [
  {
    icon: HotelIcon,
    title: "Premium Accommodation",
    description: "Stay in our 4* Superior / 5* partner hotels in Fuengirola/Higuerón (subject to agreement)."
  },
  {
    icon: PlateIcon,
    title: "Full Board Nutrition",
    description: "Nutritional plans adapted to high-performance athletes under a full board regime."
  },
  {
    icon: BusIcon,
    title: "Private Transport",
    description: "Transfers from Málaga Airport (AGP) and exclusive internal mobility for the group."
  },
  {
    icon: ShieldIcon,
    title: "24/7 Staff Support",
    description: "Our local team is at your complete disposal throughout your stay."
  }
];

const HospitalitySection: React.FC = () => {
  return (
    <section id="hospitality" className="py-20 md:py-32 bg-[#101010]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 scroll-animate fade-in">
          <h2 className="text-4xl md:text-5xl font-black uppercase text-white tracking-wider">Hosted by The Embassy</h2>
          <div className="mx-auto mt-4 h-1 w-24 bg-[#d17609]"></div>
          <p className="mt-8 max-w-2xl mx-auto text-lg text-gray-400 scroll-animate slide-in-up delay-1">
            We play at home. We know every corner to offer you impeccable logistics.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className={`bg-black/30 p-8 rounded-lg text-center flex flex-col items-center transition-all duration-300 ease-in-out hover:bg-[#d17609]/10 hover:-translate-y-2 hover:shadow-lg hover:shadow-[#d17609]/20 scroll-animate slide-in-up delay-${index + 1}`}>
              <div className="bg-[#d17609]/20 p-4 rounded-full mb-6">
                <feature.icon className="w-10 h-10 text-[#d17609]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HospitalitySection;