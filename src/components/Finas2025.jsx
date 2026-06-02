import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import PageTransition from './PageTransition';
import FinasImg from '../assets/FINAS-2025-hero.jpg';
import '../EventDetail.css';

// Import highlight images
import img1 from '../assets/events/Finas2025-Event-Highlight-1.JPG';
import img2 from '../assets/events/Finas2025-Event-Highlight-2.JPG';
import img3 from '../assets/events/Finas2025-Event-Highlight-3.JPG';
import img4 from '../assets/events/Finas2025-Event-Highlight-4.JPG';
import img5 from '../assets/events/Finas2025-Event-Highlight-5.JPG';
import img6 from '../assets/events/CEO-presenting-AgriScanAI-at-FINAS2025.JPG';

// Import inline images
import ceoPresentingImg from '../assets/events/CEO-presenting-AgriScanAI-at-FINAS2025.JPG';
import finasHighlightImg from '../assets/events/Finas2025-Event-Highlight-5.JPG';

const gallery = [img1, img2, img3, img4, img5, img6];

const Finas2025 = () => {
  useEffect(() => {
    document.title = 'AgriScanAI at FINAS 2025 - AgriScanAI';
  }, []);

  return (
    <PageTransition>
      <div className="flex flex-col min-h-screen bg-white">
        <Navbar />

        {/* Hero Section */}
        <section className="w-full relative">
          <div className="relative h-[400px] md:h-[500px] lg:h-[600px]">
            <img src={FinasImg} alt="FINAS 2025" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 lg:p-16">
              <div className="max-w-7xl mx-auto">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                  AgriScanAI at FINAS 2025: Championing the Future of Sustainable Agri-Financing in Africa
                </h1>
                <p className="text-lg md:text-xl text-white/90 mb-4">
                  Nairobi, Kenya | May 20–22, 2025
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <article className="w-full py-12 md:py-16 lg:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                AgriScanAI proudly took center stage at the <strong>Financing Agri-Food Systems Sustainably (FINAS) 2025 Summit</strong>, held at the prestigious Kenyatta International Conference Centre (KICC). Bringing together a cross-section of African and global thought leaders, the event was anchored on the powerful theme:
              </p>

              <div className="bg-primary-light/10 border-l-4 border-primary-light rounded-r-xl p-6 md:p-8 mb-8 mt-8">
                <p className="text-xl md:text-2xl text-primary-background font-medium italic leading-relaxed">
                  "Taking Ownership: Rethinking Sustainable Financing for Africa's Food Systems."
                </p>
              </div>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                The Summit served as a catalytic platform for reimagining how financial innovation, digital technology, and inclusive policies can bridge the agricultural financing gap across the continent. AgriScanAI was honored to be a key contributor in this transformative dialogue. Our solution demonstrates how AI can unlock sustainable financing for smallholders by bridging the trust gap through verifiable data.
              </p>

              <div className="mb-6 rounded-lg overflow-hidden shadow-xl">
                <img src={ceoPresentingImg} alt="CEO presenting AgriScanAI" className="w-full h-auto" />
              </div>

              <section className="mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-primary-background mb-6">
                  About FINAS 2025
                </h2>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  FINAS 2025 builds upon the foundation laid by FINAS 2024, deepening stakeholder engagement around strategic pillars such as:
                </p>

                <div className="bg-gray-50 rounded-lg p-6 md:p-8 mb-6">
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-primary-background flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      <span className="text-gray-700 text-lg">Inclusive and responsible agricultural financing</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-primary-background flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      <span className="text-gray-700 text-lg">Strengthening farmer cooperatives</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-primary-background flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      <span className="text-gray-700 text-lg">Digitally-enabled lending and insurance platforms</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-primary-background flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      <span className="text-gray-700 text-lg">Public-private investment collaboration</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-primary-background flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      <span className="text-gray-700 text-lg">Policy and regulatory reform</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-primary-background flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      <span className="text-gray-700 text-lg">Capacity building and farmer education</span>
                    </li>
                  </ul>
                </div>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  With agriculture remaining the backbone of Africa's economy and a critical lifeline for millions, FINAS 2025 underscored the urgent need to close the <strong>$60–100 billion annual financing gap</strong> for African farmers. The Summit was also a celebration of innovative solutions and provided an avenue for networking, showcasing technologies, and awarding groundbreaking ideas.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-primary-background mb-6">
                  Our Spotlight: AgriScanAI
                </h2>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  At the heart of AgriScanAI's presence was our flagship AI-powered mobile tool designed to help farmers detect plant diseases, access crop health insights, and make data-driven farming decisions all from a simple smartphone interface.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  During the three-day Summit, our interactive booth drew widespread attention from:
                </p>

                <div className="bg-gray-50 rounded-lg p-6 md:p-8 mb-6">
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-primary-background flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      <span className="text-gray-700 text-lg">Farmers and agribusiness owners</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-primary-background flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      <span className="text-gray-700 text-lg">Government policymakers and development agencies</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-primary-background flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      <span className="text-gray-700 text-lg">Financial institutions and agri-insurance providers</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-primary-background flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      <span className="text-gray-700 text-lg">Digital innovators and agricultural researchers</span>
                    </li>
                  </ul>
                </div>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Visitors experienced live demos, engaged with our product team, and explored impact stories showcasing how AgriScanAI is transforming smallholder farming outcomes in real-world conditions.
                </p>

                <div className="bg-primary-light/10 border-l-4 border-primary-light rounded-r-xl p-6 md:p-8 mb-8 mt-8 text-center">
                  <h3 className="text-xl font-bold text-primary-background mb-2 uppercase tracking-wide">Competition Winner</h3>
                  <h2 className="text-4xl md:text-5xl font-extrabold text-primary-background mb-4">2nd Place</h2>
                  <p className="text-lg md:text-xl font-semibold text-gray-800">Agriculture Innovation Solutions</p>
                  <p className="text-md text-gray-600">FINAS 2025 Innovation Competition</p>
                </div>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  We are proud to announce that AgriScanAI secured <strong>2nd place</strong> in the Agriculture Innovation Solutions competition at FINAS 2025. This recognition highlights our commitment to leveraging AI technology to transform agricultural practices and empower farmers across Africa.
                </p>

                <div className="bg-primary-light/10 border-l-4 border-primary-light rounded-r-xl p-6 md:p-8 mb-8 mt-8">
                  <p className="text-xl md:text-2xl text-primary-background font-medium italic leading-relaxed">
                    "This achievement is for every farmer who inspires us to build smarter, more inclusive tools. We're just getting started."
                  </p>
                  <p className="text-lg text-gray-600 mt-4">— Elizabeth Mwashuma, CEO of Good Partners</p>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-primary-background mb-6">
                  Innovation Booth: Live Demos & Impact Stories
                </h2>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  AgriScanAI hosted an exhibition booth at FINAS 2025, showcasing our tech-for-good initiatives to a diverse audience. Attendees included producers, policymakers from national and county governments, development partners, financial and insurance institutions, agricultural technology service providers, input suppliers, and beneficiaries from both public and private sectors.
                </p>

                <div className="bg-gray-50 rounded-lg p-6 md:p-8 mb-6">
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-primary-background flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      <span className="text-gray-700 text-lg">Live demonstrations of AgriScanAI, showcasing real-time plant health scans</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-primary-background flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      <span className="text-gray-700 text-lg">One-on-one chats with our product teams, offering insights into our development process</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-primary-background flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      <span className="text-gray-700 text-lg">Impact dashboards and real user stories, highlighting the tangible difference our solutions make</span>
                    </li>
                  </ul>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-primary-background mb-6">
                  High-Level Recognition
                </h2>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  FINAS 2025 attracted notable figures and institutions across the African agri-financing ecosystem. Among them:
                </p>

                <div className="bg-primary-light/10 border-l-4 border-primary-light rounded-r-xl p-6 md:p-8 mb-8 mt-8">
                  <p className="text-xl md:text-2xl text-primary-background font-medium italic leading-relaxed">
                    "We must pivot to a more inclusive, innovative, and sustainable financing ecosystem. And the key driver here is technology"
                  </p>
                  <p className="text-lg text-gray-600 mt-4">— Hon. Senator Mutahi Kagwe, CS for Agriculture and Livestock Development</p>
                </div>

                <div className="bg-primary-light/10 border-l-4 border-primary-light rounded-r-xl p-6 md:p-8 mb-8 mt-8">
                  <p className="text-xl md:text-2xl text-primary-background font-medium italic leading-relaxed">
                    "The EAC promotes digitalization in agriculture to improve efficiency, reduce costs, and increase access for farmers"
                  </p>
                  <p className="text-lg text-gray-600 mt-4">— H.E. Veronica Nduva, Secretary General of the East African Community</p>
                </div>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Also in attendance were Mr. Moses Vilakati, AU Commissioner for Agriculture, H.E. Musalia Mudavadi, Prime Cabinet Secretary of Kenya, and Hon. Dr. Wycliffe Oparanya, Cabinet Secretary for MSMEs Development, underscoring the Summit's regional and continental significance.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-primary-background mb-6">
                  Event Highlights
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {gallery.map((imgSrc, idx) => (
                    <div key={idx} className="aspect-square rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <img src={imgSrc} alt={`Finas Highlight ${idx + 1}`} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                    </div>
                  ))}
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-primary-background mb-6">
                  What's Next for AgriScanAI
                </h2>

                <p className="text-lg text-gray-700 leading-relaxed mb-12">
                  As we look beyond FINAS 2025, we remain committed to building ethical, scalable, and human-centered technologies that address real-world challenges. AgriScanAI is just the beginning. We're already working on new features, including predictive weather integration and expanded language support, to further empower farmers. For more information about FINAS 2025 and to read the official post-event report, visit the <a href="https://www.kilimo.go.ke/" target="_blank" rel="noopener noreferrer" className="text-primary-background hover:underline font-semibold">Ministry of Agriculture's official portal</a>.
                </p>

                <div className="mb-6 rounded-lg overflow-hidden shadow-xl">
                  <img src={finasHighlightImg} alt="FINAS 2025 Highlights" className="w-full h-auto" />
                </div>
              </section>

              <section className="text-center bg-gray-50 rounded-2xl p-8 md:p-12 border border-gray-100 shadow-sm mt-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Join the Movement</h2>
                <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                  Want to learn more about AgriScanAI or collaborate on future innovations?
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Link to="/about" className="inline-flex justify-center items-center px-8 py-4 bg-primary-background text-white font-bold rounded-lg hover:bg-primary-light transition-colors shadow-md hover:shadow-lg">
                    Explore AgriScanAI
                  </Link>
                  <Link to="/contact" className="inline-flex justify-center items-center px-8 py-4 bg-white text-primary-background border-2 border-primary-background font-bold rounded-lg hover:bg-primary-50 transition-colors">
                    Contact Us
                  </Link>
                </div>
              </section>
            </div>

            {/* Bottom Navigation Pagination */}
            <div className="flex justify-between items-center my-8 pt-8 border-t border-gray-200">
              <Link
                to="/events/ai-kigali-2025"
                className="inline-flex items-center gap-2 text-primary-background font-semibold hover:text-primary-light transition-colors"
              >
                <svg className="w-5 h-5 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
                <span>Previous Event</span>
              </Link>

              <Link
                to="/events"
                className="inline-flex items-center gap-2 text-gray-600 hover:text-primary-background font-semibold transition-colors"
              >
                <span>All Events</span>
              </Link>

              <Link
                to="/events/founders-live-2025"
                className="inline-flex items-center gap-2 text-primary-background font-semibold hover:text-primary-light transition-colors"
              >
                <span>Next Event</span>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </article>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default Finas2025;
