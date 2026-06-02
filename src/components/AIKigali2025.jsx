import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import PageTransition from './PageTransition';
import AIKigaliImg from '../assets/events/ai-kigali-2025-Hero.jpg';
import agriscanPoster from '../assets/events/AgriScanAI-poster.jpg';
import '../EventDetail.css';

// Import highlight images
import img2 from '../assets/events/AI-Kigali-image2.jpg';
import img3 from '../assets/events/AI-Kigali-image3.jpg';
import img4 from '../assets/events/AI-Kigali-image4.jpg';
import img5 from '../assets/events/AI-Kigali-image5.jpg';
import img6 from '../assets/events/AI-Kigali-image6.jpg';
import img7 from '../assets/events/AI-Kigali-image7.jpg';

const gallery = [img2, img3, img4, img5, img6, img7];

const AIKigali2025 = () => {
  useEffect(() => {
    document.title = 'AgriScanAI at Global AI Summit on Africa - AI Kigali 2025';
  }, []);

  return (
    <PageTransition>
      <div className="flex flex-col min-h-screen bg-white">
        <Navbar />

        {/* Hero Section */}
        <section className="w-full relative">
          <div className="relative h-[400px] md:h-[500px] lg:h-[600px]">
            <img src={AIKigaliImg} alt="AI Kigali 2025" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 lg:p-16">
              <div className="max-w-7xl mx-auto">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                  Global AI Summit on Africa (AI Kigali 2025)
                </h1>
                <p className="text-lg md:text-xl text-white/90 mb-4">
                  Kigali, Rwanda | April 3–4, 2025
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
                AgriScanAI participated in the <strong>inaugural Global AI Summit on Africa</strong> held in Kigali, Rwanda, under the transformative theme:
              </p>

              <div className="bg-primary-light/10 border-l-4 border-primary-light rounded-r-xl p-6 md:p-8 mb-8 mt-8">
                <p className="text-xl md:text-2xl text-primary-background font-medium italic leading-relaxed">
                  "AI and Africa's Demographic Dividend: Reimagining Economic Opportunities for Africa's Workforce."
                </p>
              </div>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                The summit brought together AI leaders, policymakers, innovators, and investors from across the continent and beyond to explore how artificial intelligence can unlock Africa's economic potential and drive inclusive growth. AgriScanAI was spotlighted among top innovators creating practical, scalable applications for Africa's key economic sectors.
              </p>

              <div className="mb-6 rounded-lg overflow-hidden shadow-xl">
                <img src={agriscanPoster} alt="AgriScanAI at AI Kigali 2025" className="w-full h-auto" />
              </div>

              <section className="mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-primary-background mb-6">
                  About the Summit
                </h2>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  The Global AI Summit on Africa marked a pivotal moment in the continent's technological evolution. As Africa's youngest population continues to grow, the summit addressed how AI can be leveraged to create jobs, enhance productivity, and solve pressing challenges across various sectors.
                </p>

                <div className="bg-gray-50 rounded-lg p-6 md:p-8 mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Summit Highlights
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-primary-background flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      <span className="text-gray-700 text-lg">Policy frameworks for responsible AI development in Africa</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-primary-background flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      <span className="text-gray-700 text-lg">AI applications in agriculture, healthcare, education, and finance</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-primary-background flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      <span className="text-gray-700 text-lg">Building partnerships between African innovators and global tech leaders</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-primary-background flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      <span className="text-gray-700 text-lg">Investment opportunities in African AI startups and infrastructure</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-primary-background flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      <span className="text-gray-700 text-lg">Skills development and AI education for Africa's youth</span>
                    </li>
                  </ul>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-primary-background mb-6">
                  AgriScanAI's Participation
                </h2>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  As a leading AI-powered agricultural solution, AgriScanAI was honored to showcase how artificial intelligence is transforming farming practices across Africa. Our participation focused on demonstrating practical AI applications that directly benefit smallholder farmers.
                </p>

                <div className="bg-gray-50 rounded-lg p-6 md:p-8 mb-6">
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-primary-background flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      <div>
                        <strong className="text-gray-900 block mb-1">AI-Powered Disease Detection:</strong>
                        <span className="text-gray-700 text-lg">Showcased how AgriScanAI helps farmers instantly identify plant diseases using smartphone cameras and machine learning algorithms.</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-primary-background flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      <div>
                        <strong className="text-gray-900 block mb-1">Mobile-First Approach:</strong>
                        <span className="text-gray-700 text-lg">Demonstrated our commitment to accessible AI technology that works on basic smartphones, reaching farmers in remote areas.</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-primary-background flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      <div>
                        <strong className="text-gray-900 block mb-1">Data-Driven Insights:</strong>
                        <span className="text-gray-700 text-lg">Presented how our platform provides actionable insights and yield predictions to improve farming outcomes.</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-primary-background flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      <div>
                        <strong className="text-gray-900 block mb-1">Scalable Impact:</strong>
                        <span className="text-gray-700 text-lg">Shared our vision of scaling across Africa to support millions of farmers and strengthen food security.</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-primary-background mb-6">
                  Key Takeaways
                </h2>

                <div className="bg-gray-50 rounded-lg p-6 md:p-8 mb-6">
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-primary-background flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      <div>
                        <strong className="text-gray-900 block mb-1">Africa as an AI Innovation Hub:</strong>
                        <span className="text-gray-700 text-lg">The summit reinforced that Africa is not just adopting AI but actively shaping its development to address unique continental challenges.</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-primary-background flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      <div>
                        <strong className="text-gray-900 block mb-1">Agriculture as a Priority Sector:</strong>
                        <span className="text-gray-700 text-lg">There was strong consensus that AI applications in agriculture could significantly boost productivity and food security across the continent.</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-primary-background flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      <div>
                        <strong className="text-gray-900 block mb-1">Inclusive AI Development:</strong>
                        <span className="text-gray-700 text-lg">The importance of building AI solutions that are accessible, affordable, and culturally relevant to African users was emphasized throughout.</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-primary-background flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      <div>
                        <strong className="text-gray-900 block mb-1">Investment & Partnership Opportunities:</strong>
                        <span className="text-gray-700 text-lg">The summit created valuable connections between African AI innovators and potential investors, development partners, and technology collaborators.</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-primary-background mb-6">
                  Event Highlights
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {gallery.map((imgSrc, idx) => (
                    <div key={idx} className="aspect-square rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <img src={imgSrc} alt={`AI Kigali Highlight ${idx + 1}`} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                    </div>
                  ))}
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-primary-background mb-6">
                  Looking Forward
                </h2>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Following our participation in AI Kigali 2025, AgriScanAI is committed to:
                </p>

                <ul className="list-disc list-inside space-y-2 text-lg text-gray-700 mb-6 pl-4">
                  <li>Expanding our reach across East Africa and beyond</li>
                  <li>Collaborating with governments and organizations to scale AI adoption in agriculture</li>
                  <li>Enhancing our AI models with more crop types and local language support</li>
                  <li>Building partnerships with AI research institutions and agricultural universities</li>
                </ul>

                <div className="bg-primary-light/10 border-l-4 border-primary-light rounded-r-xl p-6 md:p-8 mb-8 mt-10">
                  <p className="text-xl md:text-2xl text-primary-background font-medium italic leading-relaxed">
                    "AI Kigali 2025 reinforced our belief that Africa's agricultural transformation will be powered by homegrown AI solutions designed with and for African farmers."
                  </p>
                  <p className="text-lg text-gray-600 mt-4">— AgriScanAI Team</p>
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
              <div className="w-32 hidden sm:block"></div>

              <Link
                to="/events"
                className="inline-flex items-center gap-2 text-gray-600 hover:text-primary-background font-semibold transition-colors"
              >
                <span>All Events</span>
              </Link>

              <Link
                to="/events/finas-2025"
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

export default AIKigali2025;
