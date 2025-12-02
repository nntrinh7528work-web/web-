import React, { useState } from 'react';
import { ViewState, Language, TranslationDictionary } from '../types';

interface NavbarProps {
  currentView: ViewState;
  setView: (view: ViewState) => void;
  onOpenChat: () => void;
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationDictionary['nav'];
}

const Navbar: React.FC<NavbarProps> = ({ currentView, setView, onOpenChat, language, setLanguage, t }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: t.home, value: ViewState.HOME },
    { label: t.products, value: ViewState.PRODUCTS },
    { label: t.contact, value: ViewState.CONTACT },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center cursor-pointer group" onClick={() => setView(ViewState.HOME)}>
            <div className="flex-shrink-0 flex items-center">
               <div className="w-10 h-10 bg-gradient-to-br from-primary to-emerald-700 rounded-full flex items-center justify-center text-white font-bold text-xl mr-2 shadow-md group-hover:scale-105 transition-transform">
                 TV
               </div>
               <span className="font-bold text-xl text-gray-800 tracking-tight hidden sm:block group-hover:text-primary transition-colors">Tùng Việt Chemical</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navItems.map((item) => (
              <button
                key={item.value}
                onClick={() => setView(item.value)}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-all ${
                  currentView === item.value
                    ? 'text-primary bg-emerald-50 shadow-sm'
                    : 'text-gray-600 hover:text-primary hover:bg-gray-50'
                }`}
              >
                {item.label}
              </button>
            ))}
            
            <div className="h-6 w-px bg-gray-200 mx-2"></div>

            {/* Language Switcher - Improved UI */}
            <div className="flex items-center bg-gray-100 rounded-full p-1 border border-gray-200">
                <button 
                    onClick={() => setLanguage('vi')}
                    className={`px-3 py-1 rounded-full text-xs font-bold transition-all duration-300 ${
                        language === 'vi' 
                        ? 'bg-white text-emerald-600 shadow-sm' 
                        : 'text-gray-400 hover:text-gray-600'
                    }`}
                >
                    TIẾNG VIỆT
                </button>
                <button 
                    onClick={() => setLanguage('en')}
                    className={`px-3 py-1 rounded-full text-xs font-bold transition-all duration-300 ${
                        language === 'en' 
                        ? 'bg-white text-emerald-600 shadow-sm' 
                        : 'text-gray-400 hover:text-gray-600'
                    }`}
                >
                    ENGLISH
                </button>
            </div>

            <button
              onClick={onOpenChat}
              className="ml-4 bg-gradient-to-r from-primary to-emerald-500 text-white px-5 py-2 rounded-full text-sm font-bold shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 hover:-translate-y-0.5 transition-all flex items-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
              </svg>
              {t.askAI}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden gap-4">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
            >
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-inner">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.value}
                onClick={() => {
                  setView(item.value);
                  setIsMobileMenuOpen(false);
                }}
                className={`block w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                  currentView === item.value
                    ? 'text-primary bg-emerald-50'
                    : 'text-gray-600 hover:text-primary hover:bg-gray-50'
                }`}
              >
                {item.label}
              </button>
            ))}
             
             {/* Mobile Language Switcher */}
             <div className="flex items-center gap-3 py-3 px-4 mt-2 border-t border-gray-100">
                <span className="text-sm font-medium text-gray-500">Ngôn ngữ / Language:</span>
                <div className="flex bg-gray-100 rounded-lg p-1">
                    <button 
                        onClick={() => setLanguage('vi')}
                        className={`px-3 py-1.5 rounded-md text-xs font-bold transition-all ${
                            language === 'vi' ? 'bg-white text-emerald-600 shadow-sm' : 'text-gray-500'
                        }`}
                    >
                        VN
                    </button>
                    <button 
                        onClick={() => setLanguage('en')}
                        className={`px-3 py-1.5 rounded-md text-xs font-bold transition-all ${
                            language === 'en' ? 'bg-white text-emerald-600 shadow-sm' : 'text-gray-500'
                        }`}
                    >
                        EN
                    </button>
                </div>
             </div>

             <button
                onClick={() => {
                    onOpenChat();
                    setIsMobileMenuOpen(false);
                }}
                className="block w-full text-center mt-4 px-4 py-3 rounded-xl text-base font-bold text-white bg-gradient-to-r from-primary to-emerald-600 shadow-md"
              >
                {t.askAI}
              </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;