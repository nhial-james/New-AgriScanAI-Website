import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import PageTransition from './PageTransition';
import AgriFinImage from '../assets/agrifin_hero_image.png';
import '../EventDetail.css';

// Import highlight images
import img1 from '../assets/events/agrifin_img_1.JPG';
import img2 from '../assets/events/agrifin_img_2.JPG';
import img3 from '../assets/events/agrifin_img_3.JPG';
import img4 from '../assets/events/agrifin_img_4.JPG';
import img5 from '../assets/events/agrifin_img_5.JPG';
import img6 from '../assets/events/agrifin_img_6.JPG';
import img7 from '../assets/events/agrifin_img_7.JPG';

// Import inline images
import agrifinImg4 from '../assets/events/agrifin_img_4.JPG';
import agrifinImg2 from '../assets/events/agrifin_img_2.JPG';
import agrifinImg3 from '../assets/events/agrifin_img_3.JPG';

const gallery = [img1, img2, img3, img4, img5, img6, img7];

const AgriFin2025 = () => {
  useEffect(() => {
    document.title = 'AgriScanAI at AgriFin Learning Event 2025 - AgriScanAI';
  }, []);

  return (
    <PageTransition>
      <div className="flex flex-col min-h-screen bg-white">
        <Navbar />

        {/* Hero Section */}
        <section className="w-full relative">
          <div className="relative h-[400px] md:h-[500px] lg:h-[600px]">
            <img src={AgriFinImage} alt="AgriFin Learning Event 2025" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 lg:p-16">
              <div className="max-w-7xl mx-auto">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                  AgriScanAI Showcased at the 9th Annual AgriFin Learning Event (ALE 2025)
                </h1>
                <p className="text-lg md:text-xl text-white/90 mb-4">
                  Nairobi, Kenya — October 14, 2025
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
                AgriScanAI proudly participated in the <strong>9th Annual AgriFin Learning Event (ALE 2025)</strong>, hosted at Radisson Blu Hotel, Upper Hill, Nairobi, under the theme <strong>"Data-Driven Innovations and Investments: Harnessing Intelligence to Build Sustainable, Investable Agri-Food Systems."</strong>
              </p>

              <div className="mb-6 rounded-lg overflow-hidden shadow-xl">
                <img src={agrifinImg4} alt="AgriScanAI at ALE 2025" className="w-full h-auto" />
              </div>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                The annual event, organized by Mercy Corps AgriFin in partnership with Briter, brought together key players from across Africa. The event was a premier gathering for innovators, policymakers, and investors committed to transforming Africa's agricultural sector.
              </p>

              <div className="mb-6 rounded-lg overflow-hidden shadow-xl">
                <img src={agrifinImg2} alt="Innovators at ALE 2025" className="w-full h-auto" />
              </div>

              <section className="mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-primary-background mb-6">
                  About the Event
                </h2>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  The 2025 AgriFin Learning Event (ALE) served as a convergence point for policymakers, innovators, investors, and development partners to reflect on progress in digital agriculture. The discussions centered on <strong>AgBase</strong>, a real-time data and insights platform designed to support smarter, more informed decisions for governments, funders, and ecosystem actors.
                </p>

                <div className="bg-gray-50 rounded-lg p-6 md:p-8 mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Sessions covered a wide range of topics including:
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-primary-background flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      <span className="text-gray-700 text-lg">Bridging the Investment Gap for Agri-SMEs</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-primary-background flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      <span className="text-gray-700 text-lg">Harnessing Emerging Technologies and AI in Agri-Finance</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-primary-background flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      <span className="text-gray-700 text-lg">Strengthening Ecosystem Partnerships for Scaling AgTech</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-primary-background flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      <span className="text-gray-700 text-lg">Impact Measurement for AgTechs</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-primary-background flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      <span className="text-gray-700 text-lg">De-risking Climate Investments and Market Intelligence</span>
                    </li>
                  </ul>
                </div>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  These sessions featured experts from the Bill & Melinda Gates Foundation, World Bank, UNCDF, FAO, Strathmore AgriFood Innovation Center, Qhala, AI Kenya, and others driving digital transformation in agriculture.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-primary-background mb-6">
                  AgriScanAI's Participation
                </h2>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  At the AgriScanAI booth, our team demonstrated how we are harnessing intelligence to empower smallholder farmers. 
                </p>

                <div className="mb-6 rounded-lg overflow-hidden shadow-xl">
                  <img src={agrifinImg3} alt="AgriScanAI demonstration" className="w-full h-auto" />
                </div>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  AgriScanAI was honored to be part of this high-level event as an exhibitor, showcasing its flagship innovation — <strong>AgriScanAI</strong>, an AI-powered mobile solution designed to help farmers instantly detect plant diseases, receive actionable insights, and track yield performance.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Throughout the day, visitors, investors, and agri-tech stakeholders engaged with our booth to experience live demonstrations of AgriScanAI. The software's capability to combine AI-driven disease detection, localized insights, and financial tracking captured the interest of many attending organizations exploring how technology can boost smallholder productivity.
                </p>

                <div className="bg-primary-light/10 border-l-4 border-primary-light rounded-r-xl p-6 md:p-8 mb-8 mt-8">
                  <p className="text-xl md:text-2xl text-primary-background font-medium italic leading-relaxed">
                    "Our participation underscored our commitment to contributing to data-driven, climate-smart agriculture and aligning with the global shift toward smarter, investable agri-food systems."
                  </p>
                  <p className="text-lg text-gray-600 mt-4">— AgriScanAI Team</p>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-primary-background mb-6">
                  Reflections and Impact
                </h2>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  The conversations at ALE 2025 highlighted a growing consensus: Africa's agriculture is on the cusp of transformation, and technologies like AgriScanAI are at the forefront of that change.
                </p>

                <div className="bg-primary-light/10 border-l-4 border-primary-light rounded-r-xl p-6 md:p-8 mb-8 mt-8">
                  <h3 className="text-2xl font-bold text-primary-background mb-4">
                    Key Insight from ALE 2025
                  </h3>
                  <p className="text-lg text-gray-700">
                    AI, data sharing, and ecosystem collaboration are essential to building resilient and sustainable food systems across Africa.
                  </p>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-primary-background mb-6">
                  Event Highlights
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {gallery.map((imgSrc, idx) => (
                    <div key={idx} className="aspect-square rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <img src={imgSrc} alt={`AgriFin Highlight ${idx + 1}`} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                    </div>
                  ))}
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-primary-background mb-6">
                  Looking Ahead
                </h2>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Following our successful showcase at ALE 2025, AgriScanAI aims to:
                </p>

                <ul className="list-disc list-inside space-y-2 text-lg text-gray-700 mb-6 pl-4">
                  <li>Deepen collaborations with regional and global partners met during the event</li>
                  <li>Integrate key learnings into the continued development of AgriScanAI</li>
                  <li>Contribute to building open, inclusive, and data-informed agricultural ecosystems</li>
                  <li>Strengthen partnerships with organizations committed to digital agriculture transformation</li>
                </ul>
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
                to="/events/founders-live-2025"
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
                to="/events/kenya-software-ai-summit-2025"
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

export default AgriFin2025;
