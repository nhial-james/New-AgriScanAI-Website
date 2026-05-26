import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageTransition from '../components/PageTransition';
import ScrollToTop from '../components/ScrollToTop';
import '../Contact.css';

const resources = [
  {
    id: 1,
    category: 'Newsletter',
    title: 'Good Partners Quarterly Newsletter (Q1)',
    description: 'Get our Q1 insights, project milestones, and updates directly from the team.',
    date: 'Q1 2026',
    type: 'PDF',
    size: '4.2 MB',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
      </svg>
    ),
    color: 'from-green-500 to-emerald-700',
    cover: '/src/assets/newsletter-cover.jpg',
    document: '/src/assets/documents/Good Partners Quarterly Newsletter.pdf',
    link: 'https://drive.google.com/file/d/17bG0ykfwXQY8rPYTtJyuXn-MyPtQT-Rn/view'
  }
];

export default function Resources() {
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    document.title = 'Resources | AgriScanAI';
  }, []);

  const categories = ['All', ...new Set(resources.map(r => r.category))];

  const filteredResources = filter === 'All' 
    ? resources 
    : resources.filter(r => r.category === filter);

  return (
    <PageTransition>
      <ScrollToTop />
      <Navbar />
      
      {/* Hero Section */}
      <div className="contact-page" style={{ minHeight: 'auto', paddingBottom: '3rem' }}>
        <div className="contact-content-wrap">
          <div className="contact-ring contact-ring-top-right" aria-hidden="true" />
          <div className="contact-ring contact-ring-mid-right" aria-hidden="true" />
          <div className="contact-ring contact-ring-bottom-left" aria-hidden="true" />

          <header className="contact-hero">
            <p className="contact-hero-eyebrow">Knowledge Hub</p>
            <h1 className="contact-hero-title">Discover Insights & Resources</h1>
            <p className="contact-hero-subtitle">
              Access our latest research reports, technical whitepapers, presentation slides, and comprehensive guides designed to empower the agricultural community.
            </p>
          </header>
        </div>
      </div>

      {/* Content Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Filters */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 shadow-sm ${
                  filter === cat 
                    ? 'bg-green-600 text-white shadow-md transform scale-105' 
                    : 'bg-white text-gray-600 border border-gray-200 hover:border-green-300 hover:text-green-600'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredResources.map((resource) => (
              <div 
                key={resource.id}
                className="group relative bg-white rounded-3xl p-6 border border-gray-100 shadow-xl shadow-gray-200/50 hover:shadow-2xl hover:shadow-green-900/10 transition-all duration-500 flex flex-col h-full transform hover:-translate-y-2 overflow-hidden"
              >
                {/* Decorative background gradient on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${resource.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-full h-48 mb-6 rounded-2xl overflow-hidden bg-gray-100">
                    <img src={resource.cover} alt="Newsletter Cover" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-600 mb-4 w-max">
                    {resource.type} • {resource.size}
                  </span>

                  <span className="text-sm font-bold text-green-600 mb-2 uppercase tracking-wide">
                    {resource.category}
                  </span>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-700 transition-colors duration-300">
                    {resource.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed mb-8 flex-grow">
                    {resource.description}
                  </p>
                  
                  <div className="flex items-center justify-between pt-6 border-t border-gray-100 mt-auto">
                    <span className="text-sm text-gray-500 font-medium">
                      Published: {resource.date}
                    </span>
                    <a href={resource.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-green-50 text-green-600 group-hover:bg-green-600 group-hover:text-white transition-colors duration-300 shadow-sm font-semibold">
                      Read Now
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {filteredResources.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">No resources found in this category.</p>
            </div>
          )}

        </div>
      </section>

      {/* Presentation Slide Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 tracking-tight">
            About Us Presentation
          </h2>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            Explore our journey, vision, and the innovative technology driving AgriScanAI forward.
          </p>
          <div className="relative w-full max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl bg-gray-100">
            <div style={{
              position: 'relative', 
              width: '100%', 
              height: 0, 
              paddingTop: '56.2500%',
              paddingBottom: 0, 
              boxShadow: '0 2px 8px 0 rgba(63,69,81,0.16)', 
              margin: 0, 
              overflow: 'hidden',
              borderRadius: '8px', 
              willChange: 'transform'
            }}>
              <iframe 
                loading="lazy" 
                style={{
                  position: 'absolute', 
                  width: '100%', 
                  height: '100%', 
                  top: 0, 
                  left: 0, 
                  border: 'none', 
                  padding: 0, 
                  margin: 0
                }}
                src="https://www.canva.com/design/DAG5aExjfpA/ZvE6sun-Ezo-HTQFGqxyjQ/view?embed" 
                allowFullScreen="allowfullscreen" 
                allow="fullscreen"
                title="AgriScanAI Presentation"
              >
              </iframe>
            </div>
            <a 
              href="https://www.canva.com/design/DAG5aExjfpA/ZvE6sun-Ezo-HTQFGqxyjQ/view?utm_content=DAG5aExjfpA&utm_campaign=designshare&utm_medium=embeds&utm_source=link" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-green-600 hover:text-green-700 mt-2 inline-block font-semibold"
            >
              AgriScanAI
            </a>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 bg-green-900 relative overflow-hidden text-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-emerald-500/20 rounded-full blur-[100px] transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-green-500/20 rounded-full blur-[100px] transform translate-x-1/2 translate-y-1/2"></div>
        </div>
        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
              Stay Ahead of the Curve
            </h2>
            <p className="text-lg text-green-100 mb-10 leading-relaxed">
              Join our mailing list to receive the latest research, reports, and exclusive insights directly to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 justify-center">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="w-full sm:w-96 px-6 py-4 rounded-2xl bg-white/10 border border-white/20 focus:bg-white/20 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all shadow-sm text-white placeholder-green-200 font-medium backdrop-blur-sm"
                required
              />
              <button 
                type="submit" 
                className="px-8 py-4 bg-white text-green-900 font-bold rounded-2xl transition-all shadow-lg hover:shadow-xl hover:bg-green-50 hover:-translate-y-0.5 whitespace-nowrap"
              >
                Subscribe Now
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </PageTransition>
  );
}
