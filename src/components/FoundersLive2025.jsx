import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import PageTransition from './PageTransition';
import FoundersLiveImg from '../assets/events/Founders-Live-Nairobi-2025-Hero.png';
import agriscanPoster from '../assets/events/AgriScanAI-poster.jpg';
import '../EventDetail.css';

const FoundersLive2025 = () => {
  useEffect(() => {
    document.title = 'AgriScanAI Wins Founders Live Nairobi 2025 - AgriScanAI';
  }, []);

  return (
    <PageTransition>
      <div className="flex flex-col min-h-screen bg-white">
        <Navbar />

        {/* Hero Section */}
        <section className="w-full relative">
          <div className="relative h-[400px] md:h-[500px] lg:h-[600px]">
            <img src={FoundersLiveImg} alt="Founders Live Nairobi 2025" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 lg:p-16">
              <div className="max-w-7xl mx-auto">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                  AgriScanAI Wins at Founders Live Nairobi 2025
                </h1>
                <p className="text-lg md:text-xl text-white/90 mb-4">
                  Nairobi, Kenya — September 18, 2025
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
                AgriScanAI is proud to announce that we emerged as the <strong>winner of Founders Live Nairobi</strong>, where we pitched our groundbreaking solution, AgriScanAI.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Founders Live, a global pitch competition where entrepreneurs deliver 99-second pitches followed by audience voting, brought together five innovative startups at BaoBox, Nairobi. The excitement from the audience and the judges was overwhelming, validating our mission and product-market fit.
              </p>

              <div className="mb-6 rounded-lg overflow-hidden shadow-xl">
                <img src={agriscanPoster} alt="AgriScanAI pitch" className="w-full h-auto" />
              </div>

              <section className="mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-primary-background mb-6">
                  Our Winning Pitch: AgriScanAI
                </h2>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  At the event, AgriScanAI showcased our AI-powered solution transforming agriculture by helping farmers detect plant diseases, improve yields, and make data-driven decisions. The audience resonated with our vision of using AI to empower farmers and strengthen food security in Africa.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-primary-background mb-6">
                  The Prize & Recognition
                </h2>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  As winners, AgriScanAI received:
                </p>

                <div className="bg-gray-50 rounded-lg p-6 md:p-8 mb-6">
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-primary-background flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      <span className="text-gray-700 text-lg"><strong>Founders Live Professional Boost</strong> – a one-year membership valued at $999, with access to over $1,000,000 in cash credits and savings across 100+ essential platforms for startups</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-primary-background flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      <span className="text-gray-700 text-lg">A feature on the <strong>Founders Live Podcast</strong></span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-primary-background flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      <span className="text-gray-700 text-lg">Eligibility to compete in the Prime Time regional qualifiers, with the chance to advance to the global stage</span>
                    </li>
                  </ul>
                </div>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  This achievement is not just about recognition; it's about fueling our mission to scale AgriScanAI and create meaningful impact in agriculture across Africa.
                </p>

                <div className="bg-primary-light/10 border-l-4 border-primary-light rounded-r-xl p-6 md:p-8 mb-8 mt-8">
                  <p className="text-xl md:text-2xl text-primary-background font-medium italic leading-relaxed">
                    "This win is a true reflection of both our individual contributions and collective teamwork. It is an important milestone, and I believe it's just the beginning of many more wins to come."
                  </p>
                  <p className="text-lg text-gray-600 mt-4">— AgriScanAI Team</p>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-primary-background mb-6">
                  What's Next
                </h2>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Winning Founders Live Nairobi provides AgriScanAI with a springboard into bigger opportunities — from scaling our AI-driven solutions to engaging investors and partners who share our vision of technology for sustainable agriculture.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  We look forward to representing Kenya in future Founders Live competitions and continuing to champion innovation that matters.
                </p>

                <div className="bg-primary-light/10 border-l-4 border-primary-light rounded-r-xl p-6 md:p-8 mb-8 mt-8">
                  <h3 className="text-2xl font-bold text-primary-background mb-4">
                    Regional Qualifiers Ahead
                  </h3>
                  <p className="text-lg text-gray-700">
                    AgriScanAI is now eligible to compete in Prime Time regional qualifiers with the potential to advance to the global stage of Founders Live.
                  </p>
                </div>

                <p className="text-lg text-gray-700 leading-relaxed mb-12">
                  Together, we are not just building technology; we are building a future of resilient farmers and sustainable food systems.
                </p>
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
                to="/events/finas-2025"
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
                to="/events/agrifin-2025"
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

export default FoundersLive2025;
