import React from 'react';

const ComingSoonModal = ({ isOpen, onClose, storeName, message, colorClass }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-md transition-opacity duration-300">
      <div className="bg-white rounded-3xl w-full max-w-md overflow-hidden shadow-[0_20px_50px_rgba(8,_112,_184,_0.3)] relative transform transition-all duration-500 scale-100 translate-y-0 opacity-100">
        
        {/* Decorative Top Banner */}
        <div className={`h-32 bg-gradient-to-r ${colorClass || 'from-green-500 to-green-700'} relative`}>
          <div className="absolute inset-0 bg-white/20 mix-blend-overlay"></div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
          <div className="absolute top-10 -left-10 w-32 h-32 bg-black/10 rounded-full blur-xl"></div>
        </div>

        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="p-8 sm:p-10 text-center -mt-16 relative z-10">
          <div className="w-28 h-28 bg-white rounded-full mx-auto flex items-center justify-center shadow-xl mb-6 border-[6px] border-white relative z-20">
            <div className={`w-full h-full rounded-full bg-gradient-to-br ${colorClass || 'from-green-500 to-green-700'} flex items-center justify-center`}>
              <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
          
          <div className="inline-block px-4 py-1.5 bg-gray-50 rounded-full mb-5 border border-gray-100 shadow-sm">
            <span className="text-gray-500 font-bold text-[0.65rem] sm:text-xs uppercase tracking-[0.2em]">Coming Soon</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-3 tracking-tight">{storeName}</h3>
          
          <p className="text-gray-500 mb-8 sm:mb-10 text-sm sm:text-base leading-relaxed px-2">
            {message}
          </p>

          <button 
            onClick={onClose}
            className={`w-full py-4 px-6 rounded-2xl font-bold text-white transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 bg-gradient-to-r ${colorClass || 'from-green-500 to-green-700'}`}
          >
            Got it, thanks!
          </button>
        </div>
      </div>
    </div>
  );
};

export default ComingSoonModal;
