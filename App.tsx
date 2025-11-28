import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import Contact from './components/Contact';
import AIChat from './components/AIChat';
import { COMPANY_DATA } from './constants';
import { ViewState, Product } from './types';

function App() {
  const [currentView, setView] = useState<ViewState>(ViewState.HOME);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isChatOpen, setIsChatOpen] = useState(false);

  // Handle hash changes for simple routing/linking
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1);
      if (hash === 'products') setView(ViewState.PRODUCTS);
      else if (hash === 'contact') setView(ViewState.CONTACT);
      else setView(ViewState.HOME);
    };

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
            <Hero onCtaClick={() => setView(ViewState.PRODUCTS)} />
            <div className="bg-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:text-center mb-12">
                        <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Về Chúng Tôi</h2>
                        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-black sm:text-4xl">
                            {COMPANY_DATA.company_info.name}
                        </p>
                        <p className="mt-4 max-w-2xl text-xl text-gray-800 lg:mx-auto">
                            {COMPANY_DATA.company_info.description}
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
                                <p className="ml-16 text-lg leading-6 font-medium text-black">Quy Mô Nhà Máy</p>
                            </dt>
                            <dd className="mt-2 ml-16 text-base text-gray-800">
                                Thành lập từ năm {COMPANY_DATA.company_info.factory_established} với công suất {COMPANY_DATA.company_info.capacity}.
                            </dd>
                        </div>
                         <div className="relative">
                             <dt>
                                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                    </svg>
                                </div>
                                <p className="ml-16 text-lg leading-6 font-medium text-black">Hợp Tác Phát Triển</p>
                            </dt>
                            <dd className="mt-2 ml-16 text-base text-gray-800">
                                Chúng tôi luôn tìm kiếm ý tưởng sản xuất mới và nghiên cứu ứng dụng từ nguồn nguyên liệu Việt Nam.
                            </dd>
                        </div>
                    </dl>
                </div>
            </div>
            {/* Featured Products preview could go here */}
             <div className="bg-white py-12">
                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                      <button onClick={() => setView(ViewState.PRODUCTS)} className="text-primary hover:text-secondary font-medium text-lg">
                          Xem toàn bộ danh mục sản phẩm &rarr;
                      </button>
                 </div>
             </div>
             <Contact info={COMPANY_DATA.company_info} />
          </>
        );
      case ViewState.PRODUCTS:
        return (
          <ProductList 
            products={COMPANY_DATA.products} 
            onSelectProduct={handleProductSelect} 
          />
        );
      case ViewState.CONTACT:
        return <Contact info={COMPANY_DATA.company_info} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar 
        currentView={currentView} 
        setView={setView} 
        onOpenChat={() => setIsChatOpen(true)}
      />

      <main className="flex-grow">
        {renderContent()}
      </main>

      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
                <p>&copy; {new Date().getFullYear()} {COMPANY_DATA.company_info.name}. All rights reserved.</p>
            </div>
             <div className="flex space-x-6">
                 <a href="#" className="hover:text-gray-300">Privacy Policy</a>
                 <a href="#" className="hover:text-gray-300">Terms of Service</a>
            </div>
        </div>
      </footer>

      <ProductDetail 
        product={selectedProduct} 
        onClose={() => setSelectedProduct(null)} 
      />

      <AIChat 
        isOpen={isChatOpen} 
        onClose={() => setIsChatOpen(false)} 
      />
    </div>
  );
}

export default App;