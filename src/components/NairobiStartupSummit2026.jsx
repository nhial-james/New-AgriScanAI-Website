import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import PageTransition from './PageTransition';
import '../EventDetail.css';

// Import local assets
import StartupHero from '../assets/events/Nairobi-StartUp-2026/Nairobi StartUp Summit.jpg';
import AgriScanLogo from '../assets/AgriScanAI Transparent.png';
import BetterPayLogo from '../assets/BetterPay-transparent-Logo.png';

export default function NairobiStartupSummit2026() {
  useEffect(() => {
    document.title = '4th Edition of Nairobi Startup Summit & Awards 2026 - AgriScanAI';
  }, []);

  return (
    <PageTransition>
      <div className="flex flex-col min-h-screen bg-white">
        <Navbar />

        {/* Hero Section */}
        <section className="w-full relative">
          <div className="relative h-[400px] md:h-[500px] lg:h-[600px]">
            <img src={StartupHero} alt="Good Partners at Nairobi Startup Summit & Awards 2026" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 lg:p-16">
              <div className="max-w-7xl mx-auto">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                  Good Partners at the 4th Edition of Nairobi Startup Summit &amp; Awards
                </h1>
                <p className="text-lg md:text-xl text-white/90">
                  USIU Africa, Nairobi, Kenya | May 28–29, 2026
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <article className="w-full py-12 md:py-16 lg:py-20 bg-gray-50/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Intro Copy */}
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-lg text-gray-700 leading-relaxed mb-6 font-medium">
                Good Partners participated in the 4th Edition of the Nairobi Startup Summit &amp; Awards, 
                held on <strong>28th–29th May 2026 at USIU Africa, Nairobi.</strong> The summit brought together startups, 
                SMEs, investors, corporates, policymakers, ecosystem builders, innovators and media to explore the future 
                of entrepreneurship, technology, investment and inclusive economic growth across East Africa.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                For Good Partners, the event provided a valuable opportunity to connect with industry leaders, showcase 
                practical digital solutions, engage with potential partners, and contribute to conversations on how 
                technology can solve real challenges across agriculture, finance and community development.
              </p>

              <div className="my-8 flex justify-center w-full">
                <div 
                  className="w-full max-w-[450px] rounded-lg overflow-hidden shadow-lg border border-gray-100 bg-white"
                  style={{ height: '850px' }}
                >
                  <iframe
                    src="https://www.instagram.com/p/DY7iY0loZ9e/embed"
                    className="w-full border-none"
                    scrolling="no"
                    allowFullScreen={true}
                    title="Instagram Post"
                    style={{ width: '100%', height: '100%' }}
                  ></iframe>
                </div>
              </div>

              {/* About the Summit */}
              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-primary-background mb-4">
                  About the Nairobi Startup Summit &amp; Awards
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  The Nairobi Startup Summit &amp; Awards is one of East Africa's leading innovation and entrepreneurship 
                  platforms. The event creates space for founders, investors, ecosystem enablers, corporates and development 
                  partners to exchange ideas, explore collaboration opportunities and showcase scalable solutions.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  The 2026 edition focused on key themes including innovation, investment readiness, sustainability, 
                  inclusive growth, AI, emerging technologies, entrepreneurship and ecosystem collaboration. Through 
                  keynote sessions, panel discussions, exhibitions, networking opportunities and awards, the summit highlighted 
                  the role of startups and technology-driven organisations in shaping Africa's next phase of growth.
                </p>
              </section>

              {/* Our Participation */}
              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-primary-background mb-4">
                  Good Partners' Participation
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Good Partners joined the summit as an exhibitor, presenting its work in digital transformation and practical 
                  technology development. At the exhibitor pavilion, our team engaged with entrepreneurs, investors, development 
                  actors, technology leaders, innovators and members of the wider startup ecosystem.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  These engagements provided an opportunity to demonstrate how Good Partners is building solutions that are 
                  relevant, scalable and designed for real-world impact. Our participation reflected our continued commitment 
                  to empowering businesses and communities through innovative technology, tailored digital systems and solutions 
                  that support growth, accountability and sustainability.
                </p>

                <div className="my-8 flex justify-center w-full">
                  <div 
                    className="w-full max-w-[450px] rounded-lg overflow-hidden shadow-lg border border-gray-100 bg-white"
                    style={{ height: '850px' }}
                  >
                    <iframe
                      src="https://www.instagram.com/p/DY7EdRNoRIT/embed"
                      className="w-full border-none"
                      scrolling="no"
                      allowFullScreen={true}
                      title="Instagram Post"
                      style={{ width: '100%', height: '100%' }}
                    ></iframe>
                  </div>
                </div>
              </section>

              {/* Solutions Showcased */}
              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-primary-background mb-6">
                  Solutions Showcased
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  During the summit, Good Partners showcased two key solutions: <strong>AgriScanAI</strong> and <strong>BetterPAY</strong>.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center h-12 mb-4">
                      <img src={AgriScanLogo} alt="AgriScanAI Logo" className="h-10 object-contain" />
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      AgriScanAI is a smart farming solution designed to support data-driven agriculture and climate-smart decision-making.
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Through plant disease scanning, yield estimations, and carbon tracking, AgriScanAI supports smarter and more sustainable farming practices for smallholders.
                    </p>
                  </div>

                  <div className="bg-white border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center h-12 mb-4">
                      <img src={BetterPayLogo} alt="BetterPAY Logo" className="h-10 object-contain" />
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      BetterPAY is a secure digital platform designed to support fund disbursement, attendance verification and program accountability.
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Built for organisations managing community programs, cash transfers, or events where transparency, secure payments, and attendance verification are essential.
                    </p>
                  </div>
                </div>

                <div className="my-8 flex justify-center w-full">
                  <div 
                    className="w-full max-w-[550px] rounded-lg overflow-hidden shadow-lg border border-gray-100 bg-white"
                    style={{ height: '1000px' }}
                  >
                    <iframe
                      src="https://www.linkedin.com/embed/feed/update/urn:li:activity:7464646364472360960"
                      className="w-full border-none"
                      allowFullScreen={true}
                      title="LinkedIn Post"
                      style={{ width: '100%', height: '100%' }}
                    ></iframe>
                  </div>
                </div>
              </section>

              {/* Reflections */}
              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-primary-background mb-6">
                  Key Reflections from the Summit
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex gap-3 items-start bg-white border border-gray-100 rounded-lg p-4 shadow-xs">
                    <span className="text-emerald-500 text-lg font-bold">✓</span>
                    <p className="text-gray-700 text-sm">
                      <strong>Practical technology</strong> is essential for solving everyday challenges in agriculture, finance, and community development.
                    </p>
                  </div>
                  <div className="flex gap-3 items-start bg-white border border-gray-100 rounded-lg p-4 shadow-xs">
                    <span className="text-emerald-500 text-lg font-bold">✓</span>
                    <p className="text-gray-700 text-sm">
                      <strong>Strategic partnerships</strong> remain critical in scaling digital solutions that serve real users and communities across East Africa.
                    </p>
                  </div>
                  <div className="flex gap-3 items-start bg-white border border-gray-100 rounded-lg p-4 shadow-xs">
                    <span className="text-emerald-500 text-lg font-bold">✓</span>
                    <p className="text-gray-700 text-sm">
                      <strong>Inclusive innovation</strong> must be accessible and designed entirely around the needs of people and organisations on the ground.
                    </p>
                  </div>
                  <div className="flex gap-3 items-start bg-white border border-gray-100 rounded-lg p-4 shadow-xs">
                    <span className="text-emerald-500 text-lg font-bold">✓</span>
                    <p className="text-gray-700 text-sm">
                      <strong>Digital transformation</strong> continues to open new opportunities for transparency, efficiency, sustainability, and economic growth.
                    </p>
                  </div>
                </div>
              </section>

              {/* Looking Ahead */}
              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-primary-background mb-4">
                  Looking Ahead
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Following the summit, Good Partners remains committed to developing digital solutions that address real challenges across 
                  agriculture, finance, health, education, environment and humanitarian support. We will continue to build, test and 
                  scale technologies that empower businesses, communities and organisations to thrive in a digital-first world.
                </p>
              </section>

            </div>

            {/* Standardized premium CTA Box matching ICCF2025 */}
            <section className="text-center bg-gray-50 rounded-2xl p-8 md:p-12 border border-gray-100 shadow-sm mt-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Join Us in Transforming Agriculture</h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Whether you're a farmer, agribusiness, investor, or development partner, AgriScanAI invites you to be part of this movement.
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

            <div className="w-full h-px bg-gray-200 my-10"></div>

            {/* Bottom Navigation Pagination */}
            <div className="flex justify-between items-center my-8">
              <Link
                to="/events/agriscanai-farmer-training-kakamega-2026"
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

              <div className="w-32 hidden sm:block"></div>
            </div>

          </div>
        </article>

        <Footer />
      </div>
    </PageTransition>
  );
}
