import React from 'react';
import { ViewState } from '../types';

interface HeroProps {
    onCtaClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  // Use a specific industrial/chemical factory prompt for the hero background
  const heroImage = "https://image.pollinations.ai/prompt/modern%20chemical%20factory%20processing%20plant%20industrial%20pipes%20steel%20clean%20cinematic%20lighting?width=1920&height=1080&nologo=true";

  return (
    <div className="relative bg-slate-900 overflow-hidden">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 opacity-40">
        <img 
            src={heroImage}
            alt="Chemical Factory Background" 
            className="w-full h-full object-cover"
        />
      </div>
      
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Giải Pháp Hóa Chất <br />
          <span className="text-emerald-400">Từ Tài Nguyên Việt</span>
        </h1>
        <p className="mt-6 text-xl text-gray-300 max-w-3xl">
          Chuyên sản xuất hóa chất, chế biến nhựa thông chuyên sâu. 
          Cam kết chất lượng ổn định, giá thành cạnh tranh và phát triển bền vững.
        </p>
        <div className="mt-10 max-w-sm sm:flex sm:max-w-none">
          <div className="space-y-4 sm:space-y-0 sm:inline-grid sm:grid-cols-2 sm:gap-5">
            <button
              onClick={onCtaClick}
              className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-slate-900 bg-emerald-400 hover:bg-emerald-500 md:py-4 md:text-lg md:px-10 transition-colors shadow-lg shadow-emerald-900/50"
            >
              Xem Sản Phẩm
            </button>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); /* Would handle scrolling logic if needed */ }}
              className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-emerald-100 bg-emerald-900 bg-opacity-60 hover:bg-opacity-70 md:py-4 md:text-lg md:px-10 backdrop-blur-sm transition-colors"
            >
              Liên Hệ Ngay
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;