import React from 'react';

interface LegalSectionProps {
  title: string;
  content: string;
}

const LegalSection: React.FC<LegalSectionProps> = ({ title, content }) => {
  return (
    <div className="bg-white min-h-[80vh] py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-[fadeInUp_0.8s_ease-out_forwards]">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">{title}</h1>
        </div>
        
        <div 
            className="prose prose-emerald max-w-none text-gray-700 animate-[fadeInUp_0.8s_ease-out_forwards] delay-200 opacity-0"
            dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </div>
  );
};

export default LegalSection;