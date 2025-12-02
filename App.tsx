import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import Contact from './components/Contact';
import AIChat from './components/AIChat';
import LegalSection from './components/LegalSection';
import { COMPANY_DATA_VI, COMPANY_DATA_EN, TRANSLATIONS, LEGAL_CONTENT } from './constants';
import { ViewState, Product, Language } from './types';

function App() {
  const [currentView, setView] = useState<ViewState>(ViewState.HOME);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isChatOpen, setIsChatOpen] = useState(false);
  
  // Initialize language from localStorage or default to 'vi'
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const savedLang = localStorage.getItem('app_language');
      return (savedLang === 'en' || savedLang === 'vi') ? savedLang : 'vi';
    }
    return 'vi';
  });

  // Persist language change
  useEffect(() => {
    localStorage.setItem('app_language', language);
  }, [language]);

  // Select data based on language
  const currentData = language === 'vi' ? COMPANY_DATA_VI : COMPANY_DATA_EN;
  const t = TRANSLATIONS[language];
  const legal = LEGAL_CONTENT[language];

  // Handle hash changes for simple routing/linking
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1);
      if (hash === 'products') setView(ViewState.PRODUCTS);
      else if (hash === 'contact') setView(ViewState.CONTACT);
      else if (hash === 'privacy') setView(ViewState.PRIVACY);
      else if (hash === 'terms') setView(ViewState.TERMS);
      else setView(ViewState.HOME);
    };

    // Check hash on initial load
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleProductSelect = (product: Product) => {
    setSelectedProduct(product);
  };

  const renderContent = () => {
    switch (currentView) {
      case ViewState.HOME:
        return (
          <>
            <Hero 
              onCtaClick={() => setView(ViewState.PRODUCTS)} 
              data={currentData}
              t={t.hero}
            />
            <div className="bg-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:text-center mb-12">
                        <h2 className="text-base text-primary font-semibold tracking-wide uppercase">{t.home.about_title}</h2>
                        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-black sm:text-4xl">
                            {currentData.company_info.name}
                        </p>
                        <p className="mt-4 max-w-2xl text-xl text-gray-800 lg:mx-auto">
                            {currentData.company_info.description}
                        </p>
                    </div>
                    
                    <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                        <div className="relative">
                             <dt>
                                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                    </svg>
                                </div>
                                <p className="ml-16 text-lg leading-6 font-medium text-black">{t.home.factory_scale}</p>
                            </dt>
                            <dd className="mt-2 ml-16 text-base text-gray-800">
                                {t.home.factory_desc_prefix} {currentData.company_info.factory_established} {t.home.factory_desc_capacity} {currentData.company_info.capacity}.
                            </dd>
                        </div>
                         <div className="relative">
                             <dt>
                                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                    </svg>
                                </div>
                                <p className="ml-16 text-lg leading-6 font-medium text-black">{t.home.cooperation}</p>
                            </dt>
                            <dd className="mt-2 ml-16 text-base text-gray-800">
                                {currentData.company_info.cooperation_areas.join('. ')}.
                            </dd>
                        </div>
                    </dl>
                </div>
            </div>
             <div className="bg-white py-12">
                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                      <button onClick={() => setView(ViewState.PRODUCTS)} className="text-primary hover:text-secondary font-medium text-lg">
                          {t.home.view_all_products} &rarr;
                      </button>
                 </div>
             </div>
             <Contact info={currentData.company_info} t={t.contact} />
          </>
        );
      case ViewState.PRODUCTS:
        return (
          <ProductList 
            products={currentData.products} 
            onSelectProduct={handleProductSelect}
            t={t.products}
          />
        );
      case ViewState.CONTACT:
        return <Contact info={currentData.company_info} t={t.contact} />;
      case ViewState.PRIVACY:
        return <LegalSection title={t.footer.privacy} content={legal.privacy} />;
      case ViewState.TERMS:
        return <LegalSection title={t.footer.terms} content={legal.terms} />;
      default:
        return null;
    }
  };

  const navigateToLegal = (view: ViewState) => {
    setView(view);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar 
        currentView={currentView} 
        setView={setView} 
        onOpenChat={() => setIsChatOpen(true)}
        language={language}
        setLanguage={setLanguage}
        t={t.nav}
      />

      <main className="flex-grow">
        {renderContent()}
      </main>

      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
                <p>&copy; {new Date().getFullYear()} {currentData.company_info.name}. {t.footer.rights}</p>
            </div>
             <div className="flex space-x-6">
                 <button 
                    onClick={() => navigateToLegal(ViewState.PRIVACY)} 
                    className="text-gray-400 hover:text-white transition-colors"
                 >
                    {t.footer.privacy}
                 </button>
                 <button 
                    onClick={() => navigateToLegal(ViewState.TERMS)} 
                    className="text-gray-400 hover:text-white transition-colors"
                 >
                    {t.footer.terms}
                 </button>
            </div>
        </div>
      </footer>

      <ProductDetail 
        product={selectedProduct} 
        onClose={() => setSelectedProduct(null)} 
        t={t.detail}
      />

      <AIChat 
        isOpen={isChatOpen} 
        onClose={() => setIsChatOpen(false)} 
        language={language}
        t={t.chat}
        currentData={currentData}
      />
    </div>
  );
}

export default App;