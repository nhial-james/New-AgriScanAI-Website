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
      const isWaitlist = downloadUrl === '#';
      const templateId = isWaitlist ? 'template_kci4c6v' : 'template_n2ne9pm';
      const publicKey = '5ni8LpNq2kawFdv9P';

      let templateParams;
      if (isWaitlist) {
        const nameParts = form.name.trim().split(/\s+/);
        const firstName = nameParts[0] || '';
        const lastName = nameParts.slice(1).join(' ') || '';

        templateParams = {
          firstName,
          lastName,
          from_name: form.name,
          email: form.email,
          from_email: form.email,
          phone: '',
          company: '',
          message: `User joined the waitlist for: ${appName}`,
        };
      } else {
        templateParams = {
          from_name: form.name,
          from_email: form.email,
          app_name: appName,
          download_time: new Date().toLocaleString()
        };
      }

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
    <div className={`dl-modal-overlay ${isOpen ? 'open' : ''}`}>
      <div className={`dl-modal-container ${isRendered ? 'rendered' : ''}`}>
        
        {/* Top Banner section */}
        <div className="dl-modal-header">
          {/* Close Button */}
          <button 
            onClick={handleClose}
            className="dl-modal-close"
            aria-label="Close modal"
          >
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* App Icon */}
          <div className="dl-modal-icon-wrap">
            <svg className="w-8 h-8 sm:w-10 sm:h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ width: '36px', height: '36px', color: '#2E7D32' }}>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            <div className="dl-modal-icon-badge">
              v2.0
            </div>
          </div>
          
          <h3 className="dl-modal-title">{appName}</h3>
          
          <p className="dl-modal-subtitle">
            Download the latest version of AgriScanAI. Enter your details to get the file and stay updated on important releases.
          </p>
        </div>

        {/* Form Section */}
        <div className="dl-modal-body">
          <form onSubmit={handleSubmit} className="dl-modal-form">
            
            <div className="dl-modal-group">
              <label htmlFor="modal-name" className="dl-modal-label">
                Full Name <span>*</span>
              </label>
              <input
                type="text"
                id="modal-name"
                name="name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="dl-modal-input"
                placeholder="Jane Doe"
              />
            </div>
            
            <div className="dl-modal-group">
              <label htmlFor="modal-email" className="dl-modal-label">
                Email Address <span>*</span>
              </label>
              <input
                type="email"
                id="modal-email"
                name="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="dl-modal-input"
                placeholder="you@example.com"
              />
            </div>

            {message && (
              <div className={`dl-modal-message ${error ? 'error' : 'success'}`}>
                {error ? (
                  <svg style={{ width: '18px', height: '18px', flexShrink: 0 }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ) : (
                  <svg style={{ width: '18px', height: '18px', flexShrink: 0 }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                )}
                {message}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="dl-modal-submit"
            >
              {loading ? (
                <>
                  <svg className="animate-spin" style={{ width: '18px', height: '18px', marginRight: '6px' }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </>
              ) : (
                <>
                  <svg style={{ width: '18px', height: '18px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  {downloadUrl === "#" ? "Join Waitlist" : "Download Now"}
                </>
              )}
            </button>
          </form>
          
          <div className="dl-modal-footer">
            <svg style={{ width: '14px', height: '14px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            Your information is secure and encrypted
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default DownloadModal;
