import React, { useState } from 'react';
import { AppData, TranslationDictionary } from '../types';

interface HeroProps {
    onCtaClick: () => void;
    data: AppData;
    t: TranslationDictionary['hero'];
}

const Hero: React.FC<HeroProps> = ({ onCtaClick, data, t }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const heroImage = "https://image.pollinations.ai/prompt/modern%20chemical%20factory%20processing%20plant%20industrial%20pipes%20steel%20clean%20cinematic%20lighting?width=1920&height=1080&nologo=true";
  const { contact } = data.company_info;

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative bg-slate-900 overflow-hidden min-h-[90vh] flex items-center">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 opacity-40 bg-slate-900">
        <img 
            src={heroImage}
            alt="Chemical Factory Background" 
            loading="lazy"
            onLoad={() => setImageLoaded(true)}
            className={`w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-900/30"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 w-full">
        <div className="lg:w-2/3">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-7xl animate-[fadeInUp_0.8s_ease-out_forwards]">
            <span className="block">{t.title_prefix}</span>
            <span className="block text-emerald-400 mt-2">{t.title_highlight}</span>
          </h1>
          <p className="mt-6 text-xl text-gray-300 max-w-2xl leading-relaxed animate-[fadeInUp_0.8s_ease-out_forwards] delay-200 opacity-0">
            {data.company_info.description}
          </p>
          
          <div className="mt-10 max-w-sm sm:flex sm:max-w-none animate-[fadeInUp_0.8s_ease-out_forwards] delay-300 opacity-0">
            <div className="space-y-4 sm:space-y-0 sm:inline-grid sm:grid-cols-2 sm:gap-5">
              <button
                onClick={onCtaClick}
                className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-slate-900 bg-emerald-400 hover:bg-emerald-500 hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-emerald-500/30"
              >
                {t.cta_products}
              </button>
              <a
                href="#contact"
                onClick={scrollToContact}
                className="flex items-center justify-center px-8 py-3 border border-emerald-400/30 text-base font-medium rounded-lg text-emerald-100 bg-emerald-900/40 hover:bg-emerald-900/60 backdrop-blur-md hover:-translate-y-1 transition-all duration-300"
              >
                {t.cta_contact}
              </a>
            </div>
          </div>

          {/* Added Contact Info Section with Slide In Animation */}
          <div className="mt-16 border-t border-gray-700/50 pt-8 animate-[fadeInUp_0.8s_ease-out_forwards] delay-500 opacity-0">
              <p className="text-sm font-semibold text-emerald-400 tracking-wider uppercase mb-6 flex items-center gap-3">
                  <span className="w-10 h-[2px] bg-emerald-400"></span>
                  {t.hotline_title}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {contact.hotlines.map((line, idx) => (
                      <div key={idx} className="flex items-center space-x-4 bg-slate-800/40 p-4 rounded-xl border border-slate-700/50 backdrop-blur-md hover:bg-slate-800/70 hover:border-emerald-500/50 transition-all duration-300 group cursor-default">
                          <div className="flex-shrink-0 h-12 w-12 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 group-hover:bg-emerald-500/20 group-hover:scale-110 transition-all duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-emerald-400" viewBox="0 0 20 20" fill="currentColor">
                                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                              </svg>
                          </div>
                          <div>
                              <p className="text-lg font-bold text-white tracking-tight">{line.number}</p>
                              <a href={`mailto:${line.email}`} className="text-sm text-gray-400 hover:text-emerald-300 transition-colors block mt-1">{line.email}</a>
                          </div>
                      </div>
                  ))}
                  
                  {/* Contact Person Summary */}
                  <div className="flex items-center space-x-4 bg-slate-800/40 p-4 rounded-xl border border-slate-700/50 backdrop-blur-md hover:bg-slate-800/70 hover:border-amber-500/50 transition-all duration-300 group cursor-default">
                      <div className="flex-shrink-0 h-12 w-12 rounded-full bg-amber-500/10 flex items-center justify-center border border-amber-500/20 group-hover:bg-amber-500/20 group-hover:scale-110 transition-all duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                        </div>
                          <div>
                            <p className="text-lg font-bold text-white tracking-tight">{contact.contact_person}</p>
                            <p className="text-sm text-gray-400 mt-1">{t.rep_title}</p>
                        </div>
                  </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;