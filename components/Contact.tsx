import React from 'react';
import { CompanyInfo, TranslationDictionary } from '../types';

interface ContactProps {
  info: CompanyInfo;
  t: TranslationDictionary['contact'];
}

const Contact: React.FC<ContactProps> = ({ info, t }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(t.form_success);
    // Reset form logic would go here
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div id="contact" className="bg-gray-50 py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24">
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-[fadeInUp_0.8s_ease-out_forwards]">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">{t.title}</h2>
          <p className="mt-4 text-xl leading-8 text-gray-600 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
            {/* Company Info Card (Left) */}
            <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 overflow-hidden p-8 border border-gray-100 animate-[slideInRight_0.8s_ease-out_forwards] delay-100 opacity-0 transform translate-x-[-20px] lg:translate-x-0">
                <h3 className="text-2xl font-bold text-gray-900 mb-8 pb-4 border-b border-gray-100">{t.info_title}</h3>
                <h4 className="text-xl font-bold text-emerald-600 mb-6">{info.name}</h4>
                
                <div className="space-y-8">
                    <div className="flex items-start group">
                        <div className="flex-shrink-0 mt-1">
                            <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600 group-hover:bg-emerald-100 transition-colors">
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                        </div>
                        <div className="ml-4 text-base text-gray-600">
                            <p className="font-semibold text-gray-900 mb-1">{t.factory_address}</p>
                            <p className="leading-relaxed">{info.contact.address}</p>
                        </div>
                    </div>

                    <div className="flex items-start group">
                        <div className="flex-shrink-0 mt-1">
                             <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600 group-hover:bg-emerald-100 transition-colors">
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                            </div>
                        </div>
                        <div className="ml-4 text-base text-gray-600 w-full">
                            <p className="font-semibold text-gray-900 mb-2">Hotlines:</p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {info.contact.hotlines.map((line, idx) => (
                                    <div key={idx} className="bg-gray-50 p-4 rounded-xl border border-gray-100 hover:border-emerald-200 transition-colors">
                                        <p className="text-emerald-600 font-bold text-lg">{line.number}</p>
                                        <a href={`mailto:${line.email}`} className="text-sm text-gray-500 hover:text-emerald-600 transition-colors">
                                            {line.email}
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="flex items-start group">
                        <div className="flex-shrink-0 mt-1">
                             <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600 group-hover:bg-emerald-100 transition-colors">
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                                </svg>
                            </div>
                        </div>
                        <div className="ml-4 text-base text-gray-600 space-y-2">
                            <p><span className="font-semibold text-gray-900">{t.contact_person}:</span> {info.contact.contact_person}</p>
                            <p><span className="font-semibold text-gray-900">{t.tax_id}:</span> {info.contact.tax_id}</p>
                            <div className="flex gap-4">
                                <p><span className="font-semibold text-gray-900">{t.phone}:</span> {info.contact.phone}</p>
                                <p><span className="font-semibold text-gray-900">{t.fax}:</span> {info.contact.fax}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contact Form (Right) */}
            <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 p-8 border border-gray-100 animate-[fadeInUp_0.8s_ease-out_forwards] delay-300 opacity-0">
                <h3 className="text-2xl font-bold text-gray-900 mb-8 pb-4 border-b border-gray-100">{t.form_title}</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1">{t.form_name}</label>
                        <input 
                            type="text" 
                            id="name" 
                            required
                            className="block w-full rounded-xl border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 focus:border-emerald-500 focus:bg-white focus:ring-2 focus:ring-emerald-200 outline-none transition-all placeholder-gray-400"
                            placeholder={t.form_name}
                        />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1">{t.form_email}</label>
                            <input 
                                type="email" 
                                id="email" 
                                required
                                className="block w-full rounded-xl border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 focus:border-emerald-500 focus:bg-white focus:ring-2 focus:ring-emerald-200 outline-none transition-all placeholder-gray-400"
                                placeholder="example@email.com"
                            />
                        </div>
                        <div>
                            <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-1">{t.form_phone}</label>
                            <input 
                                type="tel" 
                                id="phone" 
                                required
                                className="block w-full rounded-xl border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 focus:border-emerald-500 focus:bg-white focus:ring-2 focus:ring-emerald-200 outline-none transition-all placeholder-gray-400"
                                placeholder="+84 ..."
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-1">{t.form_message}</label>
                        <textarea 
                            id="message" 
                            rows={4}
                            required
                            className="block w-full rounded-xl border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 focus:border-emerald-500 focus:bg-white focus:ring-2 focus:ring-emerald-200 outline-none transition-all placeholder-gray-400 resize-none"
                            placeholder="..."
                        ></textarea>
                    </div>
                    <div>
                        <button 
                            type="submit"
                            className="w-full flex justify-center py-4 px-4 border border-transparent rounded-xl shadow-lg text-lg font-bold text-white bg-emerald-600 hover:bg-emerald-700 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-all duration-300"
                        >
                            {t.form_submit}
                        </button>
                    </div>
                </form>
            </div>
        </div>

        {/* Map Section */}
        <div className="w-full h-96 bg-gray-200 rounded-2xl overflow-hidden shadow-lg border border-gray-200 animate-[fadeInUp_0.8s_ease-out_forwards] delay-500 opacity-0">
            <iframe 
                src="https://maps.google.com/maps?q=Công%20Ty%20Cổ%20Phần%20Hóa%20Phẩm%20Tùng%20Việt&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                width="100%" 
                height="100%" 
                style={{border:0}} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Bản đồ Tùng Việt Chemical"
                className="grayscale hover:grayscale-0 transition-all duration-1000"
            ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;