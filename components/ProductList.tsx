import React, { useState } from 'react';
import { Product, TranslationDictionary } from '../types';

interface ProductListProps {
  products: Product[];
  onSelectProduct: (product: Product) => void;
  t: TranslationDictionary['products'];
}

// Helper to generate image URL with high-quality prompts
const getProductImageUrl = (product: Product) => {
    const name = product.product_name.toLowerCase();
    const category = product.category.toLowerCase();
    
    // Keywords for high-quality, photorealistic results
    const style = "photorealistic, 8k resolution, cinematic lighting, sharp focus, professional commercial product photography, studio lighting, white background";
    
    let subject = "";

    if (name.includes('oil') || name.includes('dầu') || name.includes('liquid') || name.includes('turpentine')) {
        subject = "clear glass chemical bottle containing transparent golden essential pine oil, placed on a laboratory surface, beautiful backlight showing liquid viscosity";
    } else if (name.includes('road marking') || name.includes('giao thông')) {
        subject = "heap of yellow thermoplastic road marking paint powder, industrial construction chemical material, high detail texture";
    } else if (name.includes('gum rosin') || name.includes('nhựa thông') || name.includes('colophony')) {
        subject = "natural amber pine rosin chunks, translucent golden organic resin crystal rocks, raw material, macro photography, glowing with light";
    } else if (name.includes('solution') || name.includes('dung dịch') || name.includes('rs130')) {
        subject = "amber chemical liquid solution in a professional glass beaker, laboratory equipment background, scientific visualization";
    } else if (category.includes('resin') || category.includes('nhựa') || name.includes('ester') || name.includes('maleic') || name.includes('phenal')) {
        // Granular resins
        subject = "pile of premium pale yellow transparent chemical resin granules, plastic pellets, macro texture, industrial raw material, clean composition";
    } else {
        subject = "industrial chemical yellow resin solid, refined raw material, high quality texture";
    }

    // Using a larger dimension and specific seed for consistency
    return `https://image.pollinations.ai/prompt/${encodeURIComponent(`${subject}, ${style}`)}?width=800&height=600&nologo=true&seed=${product.product_name.length + 5}`;
};

// Extracted Card Component for individual image state handling
const ProductCard: React.FC<{
    product: Product;
    onSelect: (product: Product) => void;
    t: TranslationDictionary['products'];
    index: number;
}> = ({ product, onSelect, t, index }) => {
    const [imageLoaded, setImageLoaded] = useState(false);

    return (
        <div 
            className="bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col group animate-[fadeInUp_0.6s_ease-out_forwards] opacity-0"
            style={{ animationDelay: `${index * 50 + 300}ms` }}
        >
            <div className="h-64 bg-gray-50 relative overflow-hidden flex items-center justify-center">
                 {/* Placeholder / Loader */}
                <div className={`absolute inset-0 bg-gray-200 animate-pulse transition-opacity duration-500 ${imageLoaded ? 'opacity-0' : 'opacity-100'}`}></div>
                
                <img 
                    src={getProductImageUrl(product)}
                    alt={product.product_name} 
                    loading="lazy"
                    onLoad={() => setImageLoaded(true)}
                    className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-105 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="absolute bottom-4 left-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                     <button
                        onClick={(e) => {
                            e.stopPropagation();
                            onSelect(product);
                        }}
                        className="w-full py-2 bg-white/95 backdrop-blur-sm text-emerald-800 text-sm font-bold rounded-lg shadow-lg hover:bg-emerald-500 hover:text-white transition-colors"
                    >
                        {t.view_detail}
                    </button>
                </div>

                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-bold text-emerald-800 uppercase tracking-wider shadow-sm border border-emerald-100/50">
                    {product.category.split(' ')[0]}
                </div>
            </div>
            
            <div className="p-6 flex-1 flex flex-col relative">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors line-clamp-2 min-h-[3.5rem]">
                    {product.product_name}
                </h3>
                <p className="text-gray-600 text-sm mb-6 flex-1 line-clamp-3 leading-relaxed">
                    {product.description}
                </p>
                
                <div className="mt-auto pt-4 border-t border-gray-50">
                     <div className="flex items-center text-sm text-gray-400 group-hover:text-emerald-500 transition-colors">
                        <span className="font-medium">Xem chi tiết</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                     </div>
                </div>
            </div>
        </div>
    );
};

const ProductList: React.FC<ProductListProps> = ({ products, onSelectProduct, t }) => {
  const [filter, setFilter] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('ALL');

  const categories = ['ALL', ...Array.from(new Set(products.map(p => p.category)))];

  const filteredProducts = products.filter(product => {
    const matchesText = product.product_name.toLowerCase().includes(filter.toLowerCase()) ||
                        product.description.toLowerCase().includes(filter.toLowerCase());
    const matchesCategory = categoryFilter === 'ALL' || product.category === categoryFilter;
    
    return matchesText && matchesCategory;
  });

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16 animate-[fadeInUp_0.8s_ease-out_forwards]">
          <h2 className="text-3xl font-extrabold text-black sm:text-5xl tracking-tight">
            {t.title}
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
            {t.subtitle}
          </p>
        </div>

        {/* Filters */}
        <div className="mb-10 flex flex-col md:flex-row gap-6 items-center justify-between sticky top-20 z-40 bg-white/80 backdrop-blur-md p-4 rounded-2xl shadow-sm border border-gray-200/50 animate-[fadeInUp_0.8s_ease-out_forwards] delay-200 opacity-0 transition-all">
          <div className="w-full md:w-1/3 relative group">
             <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400 group-focus-within:text-emerald-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
             </div>
             <input
              type="text"
              placeholder={t.search_placeholder}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 bg-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all text-black placeholder-gray-500"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            />
          </div>
          
          <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto no-scrollbar scroll-smooth">
              {categories.map(cat => (
                  <button
                      key={cat}
                      onClick={() => setCategoryFilter(cat)}
                      className={`px-5 py-2.5 rounded-full text-sm font-semibold whitespace-nowrap transition-all duration-300 transform border ${
                          categoryFilter === cat 
                          ? 'bg-emerald-600 text-white border-emerald-600 shadow-md scale-105' 
                          : 'bg-white text-gray-600 border-gray-200 hover:bg-emerald-50 hover:text-emerald-600 hover:border-emerald-200'
                      }`}
                  >
                      {cat === 'ALL' ? t.all_categories : cat}
                  </button>
              ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <ProductCard 
                key={product.product_name} 
                product={product} 
                onSelect={onSelectProduct} 
                t={t} 
                index={index} 
            />
          ))}
        </div>

        {filteredProducts.length === 0 && (
            <div className="text-center py-32 text-gray-500 animate-[fadeInUp_0.5s_ease-out_forwards]">
                <div className="inline-block p-6 rounded-full bg-gray-100 mb-4 shadow-inner">
                     <svg className="h-10 w-10 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
                <p className="text-xl font-medium">{t.no_results}</p>
            </div>
        )}
      </div>
    </div>
  );
};

export default ProductList;