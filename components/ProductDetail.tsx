import React from 'react';
import { Product } from '../types';

interface ProductDetailProps {
  product: Product | null;
  onClose: () => void;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product, onClose }) => {
  if (!product) return null;

  // Helper to create human-readable headers from keys
  const formatHeader = (key: string) => {
    return key
      .replace(/_/g, ' ')
      .replace(/(\w)(\w*)/g, (g0,g1,g2) => g1.toUpperCase() + g2.toLowerCase());
  };

  // Get keys from the first specification object to build table headers
  const specKeys = product.specifications.length > 0 
    ? Object.keys(product.specifications[0]) 
    : [];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        
        {/* Backdrop */}
        <div 
            className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" 
            aria-hidden="true"
            onClick={onClose}
        ></div>

        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full">
          
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                <div className="flex justify-between items-start">
                    <div>
                        <span className="text-xs font-semibold text-primary uppercase tracking-wide">
                            {product.category}
                        </span>
                        <h3 className="text-2xl leading-6 font-bold text-black mt-1" id="modal-title">
                        {product.product_name}
                        </h3>
                    </div>
                    <button 
                        onClick={onClose}
                        className="bg-gray-100 rounded-full p-2 hover:bg-gray-200 transition-colors"
                    >
                        <svg className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                
                <div className="mt-4">
                  <p className="text-gray-800">{product.description}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    {/* Applications */}
                    <div>
                         <h4 className="font-bold text-black mb-2 flex items-center">
                            <svg className="w-5 h-5 mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            Ứng Dụng
                         </h4>
                         <ul className="list-disc list-inside text-sm text-gray-800 space-y-1">
                             {product.applications.map((app, idx) => (
                                 <li key={idx}>{app}</li>
                             ))}
                         </ul>
                    </div>
                    
                    {/* Properties */}
                     {product.properties && (
                        <div>
                            <h4 className="font-bold text-black mb-2 flex items-center">
                                <svg className="w-5 h-5 mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                                </svg>
                                Đặc Tính
                            </h4>
                            <ul className="list-disc list-inside text-sm text-gray-800 space-y-1">
                                {product.properties.map((prop, idx) => (
                                    <li key={idx}>{prop}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>

                {/* Packaging */}
                {product.packaging && (
                    <div className="mt-4 p-3 bg-white rounded-lg border border-gray-200 text-sm text-gray-800">
                        <span className="font-semibold text-black">Quy cách đóng gói: </span> {product.packaging}
                    </div>
                )}

                {/* Specifications Table */}
                {product.specifications.length > 0 && (
                    <div className="mt-8">
                        <h4 className="font-bold text-black mb-4">Thông Số Kỹ Thuật (Specifications)</h4>
                        <div className="overflow-x-auto border rounded-lg">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        {specKeys.map(key => (
                                            <th 
                                                key={key} 
                                                scope="col" 
                                                className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider whitespace-nowrap"
                                            >
                                                {formatHeader(key)}
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {product.specifications.map((spec, idx) => (
                                        <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                            {specKeys.map(key => (
                                                <td key={key} className="px-6 py-4 whitespace-nowrap text-sm text-black">
                                                    {spec[key]}
                                                </td>
                                            ))}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}

              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
                type="button"
                className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-primary text-base font-medium text-white hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary sm:ml-3 sm:w-auto sm:text-sm"
                onClick={onClose}
            >
              Đóng
            </button>
             <button
                type="button"
                className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                onClick={() => {
                   onClose();
                   window.location.hash = "contact";
                }}
            >
              Liên Hệ Mua Hàng
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;