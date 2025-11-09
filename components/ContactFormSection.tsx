import React, { useState } from 'react';

const ContactFormSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    groupType: '',
    groupSize: '',
    dates: '',
    objectives: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would typically handle form submission, e.g., send data to an API
    console.log('Form submitted:', formData);
    alert('Thank you for your interest! We will contact you shortly.');
    setFormData({
      name: '', email: '', groupType: '', groupSize: '', dates: '', objectives: ''
    });
  };

  return (
    <section id="contact" className="py-20 md:py-32 relative parallax-bg" style={{backgroundImage: "url('https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1761950147664_TheEmbassyTC-imagen_019.jpg?alt=media&token=6bf0b512-e239-4863-af3c-3455d7c77f7a')"}}>
      <div className="absolute inset-0 bg-black/70"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12 scroll-animate fade-in">
          <h2 className="text-4xl md:text-5xl font-black uppercase text-white tracking-wider">Come to the Source</h2>
          <div className="mx-auto mt-4 h-1 w-24 bg-[#d17609]"></div>
          <p className="mt-8 max-w-2xl mx-auto text-lg text-gray-400">
            Tell us about your project. The doors of our house are open for those who share our passion for excellence.
          </p>
        </div>
        <div className="max-w-4xl mx-auto bg-black/30 p-8 md:p-12 rounded-lg shadow-2xl scroll-animate slide-in-up delay-1">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="md:col-span-2">
              <label htmlFor="name" className="block text-gray-300 font-semibold mb-2">Name and Surname</label>
              <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} required className="w-full bg-gray-900/50 border border-gray-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-[#d17609] transition-all" />
            </div>
            <div className="md:col-span-2">
              <label htmlFor="email" className="block text-gray-300 font-semibold mb-2">Email</label>
              <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required className="w-full bg-gray-900/50 border border-gray-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-[#d17609] transition-all" />
            </div>
            <div>
              <label htmlFor="groupType" className="block text-gray-300 font-semibold mb-2">Group Type</label>
              <select name="groupType" id="groupType" value={formData.groupType} onChange={handleChange} className="w-full bg-gray-900/50 border border-gray-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-[#d17609] transition-all">
                <option value="">Select an option...</option>
                <option value="Team">Team</option>
                <option value="Academy">Academy</option>
                <option value="Individual Pro">Individual Pro</option>
              </select>
            </div>
            <div>
              <label htmlFor="groupSize" className="block text-gray-300 font-semibold mb-2">Group Size</label>
              <input type="number" name="groupSize" id="groupSize" min="1" value={formData.groupSize} onChange={handleChange} className="w-full bg-gray-900/50 border border-gray-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-[#d17609] transition-all" />
            </div>
            <div className="md:col-span-2">
              <label htmlFor="dates" className="block text-gray-300 font-semibold mb-2">Desired Dates</label>
              <input type="text" name="dates" id="dates" placeholder="e.g., July 2025" value={formData.dates} onChange={handleChange} className="w-full bg-gray-900/50 border border-gray-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-[#d17609] transition-all" />
            </div>
            <div className="md:col-span-2">
              <label htmlFor="objectives" className="block text-gray-300 font-semibold mb-2">Objectives of the stay</label>
              <textarea name="objectives" id="objectives" rows={4} placeholder="e.g., Technification, Pre-season, Tour..." value={formData.objectives} onChange={handleChange} className="w-full bg-gray-900/50 border border-gray-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-[#d17609] transition-all"></textarea>
            </div>
            <div className="md:col-span-2 text-center">
              <button type="submit" className="bg-[#d17609] text-black font-bold py-4 px-12 rounded-full text-lg hover:bg-[#b46408] transition-all duration-300 transform hover:scale-105 shadow-lg mt-4">
                REQUEST ACCESS TO HQ
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;