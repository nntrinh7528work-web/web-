import React, { useState, useRef, useEffect } from 'react';
import { sendMessageToGemini } from '../services/geminiService';
import { ChatMessage, Language, TranslationDictionary, AppData } from '../types';

interface AIChatProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
  t: TranslationDictionary['chat'];
  currentData: AppData;
}

const AIChat: React.FC<AIChatProps> = ({ isOpen, onClose, language, t, currentData }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Initialize welcome message when language or open state changes (if empty)
  useEffect(() => {
    if (messages.length === 0) {
        setMessages([{ role: 'model', text: t.welcome }]);
    }
  }, [t.welcome]); // Only dependency is the translation string

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      // Pass the entire history context + current data/language to service
      const responseText = await sendMessageToGemini(userMsg.text, messages, currentData, language);
      const aiMsg: ChatMessage = { role: 'model', text: responseText };
      setMessages(prev => [...prev, aiMsg]);
    } catch (error) {
        // Error handling already in service, but just in case
        console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 w-full max-w-md bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden max-h-[80vh] md:max-h-[600px] animate-[fadeInUp_0.4s_cubic-bezier(0.16,1,0.3,1)_forwards] origin-bottom-right">
      
      {/* Header */}
      <div className="bg-white border-b border-gray-100 p-4 flex justify-between items-center sticky top-0 z-10">
        <div className="flex items-center gap-3">
            <div className="relative">
                <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse"></div>
                <div className="absolute inset-0 w-3 h-3 rounded-full bg-emerald-500 opacity-75 animate-ping"></div>
            </div>
            <div>
                <h3 className="font-bold text-gray-800 text-sm">{t.header}</h3>
                <p className="text-[10px] text-gray-500 uppercase tracking-wider">Powered by Gemini</p>
            </div>
        </div>
        <button 
            onClick={onClose} 
            className="bg-gray-50 hover:bg-gray-100 rounded-full p-2 text-gray-500 hover:text-gray-800 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 scroll-smooth">
        {messages.map((msg, idx) => (
          <div 
            key={idx} 
            className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-[fadeInUp_0.3s_ease-out_forwards]`}
          >
            {msg.role === 'model' && (
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-emerald-500 to-teal-400 flex items-center justify-center text-white text-xs font-bold mr-2 flex-shrink-0 shadow-sm">
                    AI
                </div>
            )}
            <div 
              className={`max-w-[85%] rounded-2xl px-5 py-3 text-sm shadow-sm leading-relaxed ${
                msg.role === 'user' 
                  ? 'bg-emerald-600 text-white rounded-tr-none' 
                  : 'bg-white text-gray-800 border border-gray-200 rounded-tl-none'
              }`}
            >
              {/* Simple Markdown Rendering Support (Bold, Lists) */}
              <div 
                className="prose prose-sm max-w-none prose-p:my-1 prose-ul:my-1 prose-li:my-0"
                dangerouslySetInnerHTML={{ 
                    __html: msg.text
                    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') 
                    .replace(/\n/g, '<br/>')
                }} 
              />
            </div>
          </div>
        ))}
        {isLoading && (
            <div className="flex justify-start animate-pulse">
                <div className="w-8 h-8 rounded-full bg-gray-200 mr-2 flex-shrink-0"></div>
                <div className="bg-white rounded-2xl rounded-tl-none border border-gray-200 px-4 py-3 shadow-sm">
                    <div className="flex space-x-1.5 items-center h-full">
                        <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                        <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce" style={{animationDelay: '0.4s'}}></div>
                    </div>
                </div>
            </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-4 bg-white border-t border-gray-100 shadow-[0_-5px_20px_-5px_rgba(0,0,0,0.05)]">
        <div className="flex items-center gap-3">
          <input
            type="text"
            className="flex-1 border border-gray-200 bg-gray-50 rounded-full px-5 py-3 text-sm focus:outline-none focus:border-emerald-500 focus:bg-white focus:ring-2 focus:ring-emerald-100 transition-all text-black placeholder-gray-400 shadow-inner"
            placeholder={t.placeholder}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyPress}
          />
          <button
            onClick={handleSend}
            disabled={isLoading || !input.trim()}
            className="bg-emerald-600 text-white p-3 rounded-full hover:bg-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg shadow-emerald-600/30 hover:shadow-emerald-600/50 hover:-translate-y-0.5"
          >
            <svg className="w-5 h-5 transform rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </button>
        </div>
        <p className="text-[10px] text-center text-gray-400 mt-2 opacity-75">
            {t.disclaimer}
        </p>
      </div>
    </div>
  );
};

export default AIChat;