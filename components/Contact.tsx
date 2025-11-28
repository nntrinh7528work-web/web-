import React from 'react';
import { CompanyInfo } from '../types';

interface ContactProps {
  info: CompanyInfo;
}

const Contact: React.FC<ContactProps> = ({ info }) => {
  return (
    <div id="contact" className="bg-white py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24">
      <div className="relative max-w-xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-black sm:text-4xl">Liên Hệ Với Chúng Tôi</h2>
          <p className="mt-4 text-lg leading-6 text-gray-800">
            Hợp tác cùng phát triển - Vươn tầm quốc tế
          </p>
        </div>
        
        <div className="mt-12 bg-white rounded-2xl shadow-xl overflow-hidden p-8 border border-gray-200">
            <h3 className="text-lg font-bold text-black mb-4">{info.name}</h3>
            
            <div className="space-y-6">
                <div className="flex items-start">
                    <div className="flex-shrink-0">
                        <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                    </div>
                    <div className="ml-3 text-base text-gray-800">
                        <p className="font-semibold text-black">Địa chỉ nhà máy:</p>
                        <p>{info.contact.address}</p>
                    </div>
                </div>

                <div className="flex items-start">
                    <div className="flex-shrink-0">
                        <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                    </div>
                    <div className="ml-3 text-base text-gray-800 w-full">
                         <p className="font-semibold text-black">Hotlines:</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                             {info.contact.hotlines.map((line, idx) => (
                                 <div key={idx} className="bg-white p-3 rounded border border-gray-200">
                                     <p className="text-primary font-bold text-lg">{line.number}</p>
                                     <a href={`mailto:${line.email}`} className="text-sm text-gray-600 hover:text-primary underline">
                                         {line.email}
                                     </a>
                                 </div>
                             ))}
                        </div>
                    </div>
                </div>

                 <div className="flex items-start">
                    <div className="flex-shrink-0">
                         <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                        </svg>
                    </div>
                    <div className="ml-3 text-base text-gray-800">
                        <p><span className="font-semibold text-black">Người liên hệ:</span> {info.contact.contact_person}</p>
                        <p><span className="font-semibold text-black">Mã số thuế:</span> {info.contact.tax_id}</p>
                        <p><span className="font-semibold text-black">Điện thoại:</span> {info.contact.phone}</p>
                        <p><span className="font-semibold text-black">Fax:</span> {info.contact.fax}</p>
                         <p><span className="font-semibold text-black">Website:</span> {info.contact.website}</p>
                    </div>
                </div>
            </div>
        </div>

        {/* Map Section */}
        <div className="mt-12 w-full h-96 bg-gray-100 rounded-xl overflow-hidden shadow-lg border border-gray-200">
            <iframe 
                src="https://maps.google.com/maps?q=Công%20Ty%20Cổ%20Phần%20Hóa%20Phẩm%20Tùng%20Việt&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                width="100%" 
                height="100%" 
                style={{border:0}} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Bản đồ Tùng Việt Chemical"
            ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;