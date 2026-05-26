import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

const DownloadModal = ({ isOpen, onClose, downloadUrl, appName = 'AgriScanAI APK' }) => {
  const [form, setForm] = useState({ name: '', email: '' });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState(false);
  const [isRendered, setIsRendered] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => setIsRendered(true), 10);
    } else {
      setIsRendered(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim()) {
      setMessage('Please fill in all fields');
      setError(true);
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setMessage('Please enter a valid email address');
      setError(true);
      return;
    }

    setLoading(true);
    setMessage('Processing...');
    setError(false);

    try {
      // Configuration extracted from live site
      const serviceId = 'service_11ah9yu';
      const templateId = 'template_n2ne9pm';
      const publicKey = '5ni8LpNq2kawFdv9P';

      const templateParams = {
        from_name: form.name,
        from_email: form.email,
        app_name: appName,
        download_time: new Date().toLocaleString()
      };

      await emailjs.send(serviceId, templateId, templateParams, {
        publicKey: publicKey
      });

      // Trigger file download
      if (downloadUrl !== "#") {
        const link = document.createElement('a');
        link.href = downloadUrl;
        link.download = downloadUrl.split('/').pop();
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        setMessage('Download started! Check your downloads folder.');
      } else {
        setMessage('Thanks! We will notify you when it is ready.');
      }
      
      setTimeout(() => {
        handleClose();
      }, 2500);
      
    } catch (err) {
      console.error('EmailJS response error:', err);
      setMessage('Failed to start process. Please try again later.');
      setError(true);
      setLoading(false);
    }
  };

  const handleClose = () => {
    setIsRendered(false);
    setTimeout(() => {
      setForm({ name: '', email: '' });
      setMessage('');
      setError(false);
      setLoading(false);
      onClose();
    }, 300);
  };

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${isRendered ? 'opacity-100' : 'opacity-0'}`}>
      <div 
        className={`bg-white w-full max-w-lg rounded-2xl sm:rounded-3xl shadow-2xl relative transform transition-all duration-500 flex flex-col max-h-[95vh] sm:max-h-[90vh] overflow-y-auto custom-scrollbar ${isRendered ? 'scale-100 translate-y-0 opacity-100' : 'scale-95 translate-y-8 opacity-0'}`}
      >
        
        {/* Top Banner section */}
        <div className="relative pt-8 pb-5 px-5 sm:pt-10 sm:pb-6 sm:px-8 text-center bg-gradient-to-br from-[#f8fdf8] to-[#f1faf7] border-b border-[#E1E5E6] shrink-0">
          {/* Close Button */}
          <button 
            onClick={handleClose}
            className="absolute top-3 right-3 sm:top-4 sm:right-4 w-8 h-8 flex items-center justify-center rounded-full bg-white text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors shadow-sm border border-gray-100 z-10"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* App Icon */}
          <div className="mx-auto w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-2xl flex items-center justify-center shadow-lg shadow-green-900/10 border border-green-50 mb-3 sm:mb-4 relative z-10">
            <svg className="w-8 h-8 sm:w-10 sm:h-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            <div className="absolute -top-2 -right-2 bg-green-500 text-white text-[9px] sm:text-[10px] font-bold px-2 py-0.5 rounded-full border-2 border-white shadow-sm">
              v2.0
            </div>
          </div>
          
          <h3 className="text-xl sm:text-2xl font-extrabold text-gray-900 tracking-tight mb-1">{appName}</h3>
          

          
          <p className="text-xs sm:text-sm text-gray-500 px-2 sm:px-4 leading-relaxed mt-2">
            Download the latest version of AgriScanAI. Enter your details to get the file and stay updated on important releases.
          </p>
        </div>

        {/* Form Section */}
        <div className="p-5 sm:p-8 bg-white shrink-0">
          <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:gap-4">
            
            <div className="flex flex-col gap-1.5">
              <label htmlFor="modal-name" className="text-xs sm:text-[13px] font-bold text-gray-700 uppercase tracking-wide">
                Full Name <span className="text-green-500">*</span>
              </label>
              <input
                type="text"
                id="modal-name"
                name="name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full h-11 sm:h-12 px-4 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-all duration-200 text-sm font-medium text-gray-800 placeholder-gray-400"
                placeholder="Jane Doe"
              />
            </div>
            
            <div className="flex flex-col gap-1.5">
              <label htmlFor="modal-email" className="text-xs sm:text-[13px] font-bold text-gray-700 uppercase tracking-wide">
                Email Address <span className="text-green-500">*</span>
              </label>
              <input
                type="email"
                id="modal-email"
                name="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full h-11 sm:h-12 px-4 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-all duration-200 text-sm font-medium text-gray-800 placeholder-gray-400"
                placeholder="you@example.com"
              />
            </div>

            {message && (
              <div className={`p-3 rounded-xl text-xs sm:text-sm font-medium border flex items-center gap-2 mt-1 sm:mt-2 ${error ? 'bg-red-50 text-red-700 border-red-100' : 'bg-green-50 text-green-700 border-green-100'}`}>
                {error ? (
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ) : (
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                )}
                {message}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className={`w-full mt-2 sm:mt-4 h-12 sm:h-14 rounded-xl font-bold text-white transition-all duration-300 shadow-md flex items-center justify-center gap-2 text-sm sm:text-base ${
                loading 
                  ? 'bg-green-400 cursor-not-allowed shadow-none' 
                  : 'bg-green-600 hover:bg-green-700 hover:shadow-lg hover:-translate-y-0.5 active:scale-[0.98]'
              }`}
            >
              {loading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 sm:h-5 sm:w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </>
              ) : (
                <>
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  {downloadUrl === "#" ? "Join Waitlist" : "Download Now"}
                </>
              )}
            </button>
          </form>
          
          <div className="mt-4 sm:mt-6 text-center pb-2">
            <p className="text-[10px] sm:text-xs text-gray-400 font-medium flex items-center justify-center gap-1.5">
              <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              Your information is secure and encrypted
            </p>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default DownloadModal;
