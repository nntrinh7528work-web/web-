import React, { useState } from 'react';
import { Product } from '../types';

interface ProductListProps {
  products: Product[];
  onSelectProduct: (product: Product) => void;
}

const ProductList: React.FC<ProductListProps> = ({ products, onSelectProduct }) => {
  const [filter, setFilter] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('ALL');

  const categories = ['ALL', ...Array.from(new Set(products.map(p => p.category)))];

  const filteredProducts = products.filter(product => {
    const matchesText = product.product_name.toLowerCase().includes(filter.toLowerCase()) ||
                        product.description.toLowerCase().includes(filter.toLowerCase());
    const matchesCategory = categoryFilter === 'ALL' || product.category === categoryFilter;
    
    return matchesText && matchesCategory;
  });

  // Function to generate a relevant image URL based on product details
  const getProductImageUrl = (product: Product) => {
      const name = product.product_name.toLowerCase();
      // Base prompt
      let prompt = "industrial chemical product";
      const seed = 42; // Constant seed not strictly needed for polliniations but good practice if available, here we rely on prompt specificity

      if (name.includes('oil') || name.includes('dầu')) {
          // Oils (Turpentine, Pine Oil)
          prompt = "clear essential pine oil in glass bottle laboratory wooden table natural light";
      } else if (name.includes('solution') || name.includes('dung dịch') || name.includes('rs130')) {
          // Solutions (Liquid resins)
          prompt = "amber chemical liquid in glass beaker laboratory scientific close up";
      } else if (name.includes('road marking') || name.includes('giao thông')) {
          // Road marking paint resins
          prompt = "thermoplastic road marking paint yellow material construction site";
      } else if (name.includes('gum rosin') || name.includes('nhựa thông')) {
          // Raw Gum Rosin
          prompt = "natural pine gum rosin amber crystal rocks solid chunks macro photography";
      } else if (name.includes('ester') || name.includes('maleic') || name.includes('phenal')) {
          // Modified Resins (Solid granules)
          prompt = "pile of golden yellow transparent resin granules granular solid chemical macro";
      } else {
          // Fallback generic resin
          prompt = "yellow amber resin solid chemical product studio shot";
      }

      return `https://image.pollinations.ai/prompt/${encodeURIComponent(prompt)}?width=400&height=300&nologo=true&seed=${name.length}`;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-extrabold text-black sm:text-4xl">
          Danh Mục Sản Phẩm
        </h2>
        <p className="mt-4 max-w-2xl text-xl text-gray-800 mx-auto">
          Các sản phẩm nhựa thông biến tính và tinh dầu chất lượng cao.
        </p>
      </div>

      {/* Filters */}
      <div className="mb-8 flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="w-full md:w-1/3">
           <input
            type="text"
            placeholder="Tìm kiếm sản phẩm..."
            className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-shadow text-black placeholder-gray-500"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />
        </div>
        
        <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto">
            {categories.map(cat => (
                <button
                    key={cat}
                    onClick={() => setCategoryFilter(cat)}
                    className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                        categoryFilter === cat 
                        ? 'bg-primary text-white shadow-md' 
                        : 'bg-white text-gray-800 hover:bg-gray-100 border border-gray-300'
                    }`}
                >
                    {cat === 'ALL' ? 'Tất cả' : cat}
                </button>
            ))}
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map((product) => (
          <div 
            key={product.product_name} 
            className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-200 overflow-hidden flex flex-col"
          >
            <div className="h-48 bg-gray-100 relative overflow-hidden group">
                <img 
                    src={getProductImageUrl(product)}
                    alt={product.product_name} 
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-bold text-gray-800 uppercase tracking-wider shadow-sm">
                    {product.category.split(' ')[0]}...
                </div>
            </div>
            
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-lg font-bold text-black mb-2">
                {product.product_name}
              </h3>
              <p className="text-gray-800 text-sm mb-4 flex-1 line-clamp-3">
                {product.description}
              </p>
              
              <div className="mt-4 pt-4 border-t border-gray-100">
                <button
                    onClick={() => onSelectProduct(product)}
                    className="w-full flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-primary bg-emerald-50 hover:bg-emerald-100 transition-colors"
                >
                    Xem Chi Tiết & Thông Số
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredProducts.length === 0 && (
          <div className="text-center py-20 text-gray-800">
              Không tìm thấy sản phẩm phù hợp.
          </div>
      )}
    </div>
  );
};

export default ProductList;