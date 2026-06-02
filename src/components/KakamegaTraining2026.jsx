import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import PageTransition from './PageTransition';
import '../EventDetail.css';

// Import local assets (optimized JPEGs)
import KakamegaHero from '../assets/events/kakamega-training-2026-images/kakamega-training-hero-image.jpg';
import BrochureFront from '../assets/events/kakamega-training-2026-images/AgriScanAI-Trifold-Brochure-Front-Image.jpg';
import BrochureBack from '../assets/events/kakamega-training-2026-images/AgriScanAI-Trifold-Brochure-Back-Image.jpg';
import TruphenaQuoteCard from '../assets/events/kakamega-training-2026-images/Farmer-Truphena-quote.jpg';
import AnthonyQuoteCard from '../assets/events/kakamega-training-2026-images/Farmer-Anthony-quote.jpg';
import NolegaQuoteCard from '../assets/events/kakamega-training-2026-images/principal-nolega-quote.jpg';
import CollagePhoto from '../assets/events/kakamega-training-2026-images/AgriScanAI-Kakamega-Training-Collage-Photo.jpg';

// Partner Logos
import gpLogo from '../assets/events/kakamega-training-2026-images/GPLOGO.jpg';
import ktipLogo from '../assets/events/kakamega-training-2026-images/Kilimo-Training-Institute-Of-Permaculture-logo.jpg';
import agriscanLogo from '../assets/events/kakamega-training-2026-images/AgriScanAI-Logo.jpg';

// Highlight Gallery Images
import img1 from '../assets/events/kakamega-training-2026-images/kakamega-training-image-1.jpg';
import img2 from '../assets/events/kakamega-training-2026-images/kakamega-training-image-2.jpg';
import img3 from '../assets/events/kakamega-training-2026-images/kakamega-training-image-3.jpg';
import img4 from '../assets/events/kakamega-training-2026-images/kakamega-training-image-4.jpg';
import img5 from '../assets/events/kakamega-training-2026-images/kakamega-training-image-5.jpg';
import img6 from '../assets/events/kakamega-training-2026-images/kakamega-training-image-6.jpg';
import img7 from '../assets/events/kakamega-training-2026-images/kakamega-training-image-7.jpg';
import img8 from '../assets/events/kakamega-training-2026-images/kakamega-training-image-8.jpg';
import img9 from '../assets/events/kakamega-training-2026-images/kakamega-training-image-9.jpg';
import img10 from '../assets/events/kakamega-training-2026-images/kakamega-training-image-10.jpg';
import img11 from '../assets/events/kakamega-training-2026-images/kakamega-training-image-11.jpg';

const gallery = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11];

export default function KakamegaTraining2026() {
  const [modalImage, setModalImage] = useState(null);

  useEffect(() => {
    document.title = 'AgriScanAI Farmer Training in Kakamega - AgriScanAI';
  }, []);

  return (
    <PageTransition>
      <div className="flex flex-col min-h-screen bg-white">
        <Navbar />

        {/* Hero Section */}
        <section className="w-full relative">
          <div className="relative h-[400px] md:h-[500px] lg:h-[600px]">
            <img src={KakamegaHero} alt="AgriScanAI Farmer Training in Kakamega" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 lg:p-16">
              <div className="max-w-7xl mx-auto">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                  AgriScanAI Farmer Training in Kakamega: Empowering Smallholder Farmers Through AI
                </h1>
                <p className="text-lg md:text-xl text-white/90">
                  Kakamega County, Kenya | March 23–25, 2026
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
                Smallholder farmers are at the heart of local food systems and rural livelihoods across Kenya. 
                However, they continue to face persistent challenges that limit productivity, profitability, 
                and resilience. These include limited access to timely agricultural advisory services, weak 
                record-keeping practices, pest and disease pressures, unpredictable weather patterns, and 
                fragmented market systems.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                While traditional knowledge and informal support networks remain valuable, they are often 
                insufficient in addressing the increasing complexity of modern, climate-driven agricultural 
                risks. At the same time, extension services face limitations in reach and capacity, making it 
                difficult to provide continuous, personalized support to farmers.
              </p>

              {/* Brochure Section */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
                <div className="group overflow-hidden rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow bg-white p-2">
                  <img src={BrochureFront} alt="AgriScanAI Brochure Front" className="w-full h-auto rounded-lg group-hover:scale-[1.02] transition-transform duration-300 cursor-pointer" onClick={() => setModalImage(BrochureFront)} />
                  <p className="text-sm text-gray-500 text-center mt-3 font-medium">AgriScanAI Trifold Brochure (Front)</p>
                </div>
                <div className="group overflow-hidden rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow bg-white p-2">
                  <img src={BrochureBack} alt="AgriScanAI Brochure Back" className="w-full h-auto rounded-lg group-hover:scale-[1.02] transition-transform duration-300 cursor-pointer" onClick={() => setModalImage(BrochureBack)} />
                  <p className="text-sm text-gray-500 text-center mt-3 font-medium">AgriScanAI Trifold Brochure (Back)</p>
                </div>
              </div>

              {/* The Opportunity */}
              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-primary-background mb-4">
                  The Opportunity: AI-Powered Agriculture
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  The rapid growth of smartphone access in rural communities presents a transformative opportunity. 
                  Mobile-based solutions, especially those powered by artificial intelligence, can deliver real-time, 
                  localized, and actionable insights directly to farmers.
                </p>
                <div className="bg-emerald-500/10 border-l-4 border-primary-light rounded-r-xl p-6 mb-8">
                  <p className="text-lg text-primary-background font-semibold mb-2">
                    AgriScanAI was developed to bridge this gap.
                  </p>
                  <p className="text-gray-700">
                    The platform serves as an AI-powered assistant designed to support smallholder farmers through:
                  </p>
                  <ul className="list-none space-y-2 mt-4">
                    <li className="flex items-center gap-3 text-gray-700">
                      <span className="w-5 h-5 flex items-center justify-center rounded-full bg-primary-light text-white text-xs font-bold">✓</span>
                      Pest and disease identification
                    </li>
                    <li className="flex items-center gap-3 text-gray-700">
                      <span className="w-5 h-5 flex items-center justify-center rounded-full bg-primary-light text-white text-xs font-bold">✓</span>
                      Record keeping and financial tracking
                    </li>
                    <li className="flex items-center gap-3 text-gray-700">
                      <span className="w-5 h-5 flex items-center justify-center rounded-full bg-primary-light text-white text-xs font-bold">✓</span>
                      Access to advisory services
                    </li>
                    <li className="flex items-center gap-3 text-gray-700">
                      <span className="w-5 h-5 flex items-center justify-center rounded-full bg-primary-light text-white text-xs font-bold">✓</span>
                      Data-driven farming decisions
                    </li>
                  </ul>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  By combining mobile technology with localized agricultural knowledge, AgriScanAI aims to democratize 
                  access to agricultural intelligence and empower farmers to improve both productivity and income.
                </p>
              </section>

              {/* The Pilot */}
              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-primary-background mb-4">
                  The Kakamega Pilot Program
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  The AgriScanAI pilot was implemented in Kakamega County, Ikholomani Sub-County, in partnership 
                  with the <strong>Kilimo Training Institute of Permaculture (KTIP)</strong>.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  The pilot is designed to evaluate usability of the platform, relevance to farmer needs, and 
                  real-world impact in smallholder farming contexts. A strong emphasis was placed on human-centered 
                  design, ensuring that farmer feedback directly informs platform improvements while leveraging local 
                  institutions to build trust and drive adoption.
                </p>

                {/* Inline Gallery */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
                  <div className="rounded-lg overflow-hidden shadow-md">
                    <img src={img3} alt="Kakamega training session" className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300 cursor-pointer" onClick={() => setModalImage(img3)} />
                  </div>
                  <div className="rounded-lg overflow-hidden shadow-md">
                    <img src={img4} alt="Kakamega training activity" className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300 cursor-pointer" onClick={() => setModalImage(img4)} />
                  </div>
                </div>
              </section>

              {/* Onboarding Stats */}
              <section className="mb-12 bg-white rounded-xl shadow-lg border border-gray-100 p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Onboarding & Reach Statistics</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <p className="text-3xl md:text-4xl font-extrabold text-primary-light">103</p>
                    <p className="text-sm font-semibold text-gray-500 mt-2">Onboarded Farmers</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl md:text-4xl font-extrabold text-primary-light">50</p>
                    <p className="text-sm font-semibold text-gray-500 mt-2">Women Farmers</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl md:text-4xl font-extrabold text-primary-light">30</p>
                    <p className="text-sm font-semibold text-gray-500 mt-2">Men Farmers</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl md:text-4xl font-extrabold text-primary-light">20</p>
                    <p className="text-sm font-semibold text-gray-500 mt-2">Youth Farmers</p>
                  </div>
                </div>
                <div className="border-t border-gray-100 mt-6 pt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <span className="w-3 h-3 rounded-full bg-emerald-500"></span>
                    <span className="text-sm text-gray-600 font-medium">90% Compatible Smartphone Ownership</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-3 h-3 rounded-full bg-emerald-500"></span>
                    <span className="text-sm text-gray-600 font-medium">70% Functional Mobile Literacy</span>
                  </div>
                </div>
              </section>

              {/* Value Chains */}
              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-primary-background mb-4">
                  Pilot Scope & Value Chains
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  The pilot will run for six months, supporting farmers across a full crop cycle (from land preparation to harvest).
                  Key value chains include: <strong>Maize, Beans, Potatoes, Vegetables, Sugarcane, Bananas,</strong> and <strong>Fruit trees</strong>.
                  The focus is to optimize outcomes within one planting season and generate insights for future scaling.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
                  <div className="rounded-lg overflow-hidden shadow-md">
                    <img src={img1} alt="Training Session" className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300 cursor-pointer" onClick={() => setModalImage(img1)} />
                  </div>
                  <div className="rounded-lg overflow-hidden shadow-md">
                    <img src={img2} alt="Farmer demonstrating on mobile" className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300 cursor-pointer" onClick={() => setModalImage(img2)} />
                  </div>
                </div>
              </section>

              {/* Voices from the Field */}
              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-primary-background mb-6">
                  Voices from the Field
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Farmer interactions during the training provided valuable insights into real challenges and expectations:
                </p>

                {/* Pull Quote Blocks with Images */}
                <div className="space-y-8 my-8">
                  <div className="bg-primary-light/5 border-l-4 border-primary-light rounded-r-xl p-6 md:p-8 flex flex-col md:flex-row gap-6 items-center">
                    <img src={TruphenaQuoteCard} alt="Farmer Truphena" className="w-24 h-24 rounded-full object-cover shadow-md border-2 border-white" />
                    <div>
                      <p className="text-xl text-primary-background font-medium italic mb-2">
                        "Should we still record the maize we give to relatives when they visit us?"
                      </p>
                      <p className="text-sm text-gray-600 font-semibold">— Farmer Truphena</p>
                    </div>
                  </div>

                  <div className="bg-primary-light/5 border-l-4 border-primary-light rounded-r-xl p-6 md:p-8 flex flex-col md:flex-row gap-6 items-center">
                    <img src={AnthonyQuoteCard} alt="Farmer Anthony" className="w-24 h-24 rounded-full object-cover shadow-md border-2 border-white" />
                    <div>
                      <p className="text-xl text-primary-background font-medium italic mb-2">
                        "Termites are a problem in our farms. We have tried everything, yet no solution works."
                      </p>
                      <p className="text-sm text-gray-600 font-semibold">— Farmer Anthony (termite challenge locally known as Tsiswa)</p>
                    </div>
                  </div>

                  <div className="bg-primary-light/5 border-l-4 border-primary-light rounded-r-xl p-6 md:p-8 flex flex-col md:flex-row gap-6 items-center">
                    <img src={NolegaQuoteCard} alt="Principal Nolega" className="w-24 h-24 rounded-full object-cover shadow-md border-2 border-white" />
                    <div>
                      <p className="text-xl text-primary-background font-medium italic mb-2">
                        "The financial tracking feature in AgriScanAI will help farmers monitor their finances, because many struggle to keep proper records."
                      </p>
                      <p className="text-sm text-gray-600 font-semibold">— Principal Nolega, Kilimo Training Institute of Permaculture (KTIP)</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Platform Enhancements */}
              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-primary-background mb-4">
                  Key Insights & Platform Enhancements
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  The training sessions generated highly actionable feedback, which we are directly prioritizing in our upcoming roadmap:
                </p>
                <div className="my-8 rounded-xl overflow-hidden shadow-xl">
                  <img src={CollagePhoto} alt="AgriScanAI Farmer Training Highlights" className="w-full h-auto" />
                  <p className="text-sm text-gray-500 text-center py-3 bg-white border-t font-semibold">Highlights from the AgriScanAI Farmer Training Program in Kakamega</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white border rounded-lg p-5 shadow-sm">
                    <h4 className="font-bold text-gray-900 mb-2">Market Linkages</h4>
                    <p className="text-gray-600 text-sm">Direct demand for features linking farmers with verified, trustworthy buyers.</p>
                  </div>
                  <div className="bg-white border rounded-lg p-5 shadow-sm">
                    <h4 className="font-bold text-gray-900 mb-2">Community Exchange Space</h4>
                    <p className="text-gray-600 text-sm">Interest in collaborative spaces (chatrooms) for knowledge sharing.</p>
                  </div>
                  <div className="bg-white border rounded-lg p-5 shadow-sm">
                    <h4 className="font-bold text-gray-900 mb-2">Soil & Crop Compatibility</h4>
                    <p className="text-gray-600 text-sm">Actionable advice regarding matching specific crops to soil analysis data.</p>
                  </div>
                  <div className="bg-white border rounded-lg p-5 shadow-sm">
                    <h4 className="font-bold text-gray-900 mb-2">Predictive Weather Forecasting</h4>
                    <p className="text-gray-600 text-sm">Real-time indicators to support planting and land preparation timing.</p>
                  </div>
                </div>
              </section>

              {/* Partnerships */}
              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-primary-background mb-6 text-center">
                  Collaboration & Permaculture Development
                </h2>
                <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
                  <div className="flex items-center justify-center p-3 bg-gray-50 rounded-lg hover:shadow-md transition-shadow">
                    <img src={gpLogo} alt="Good Partners Logo" className="h-16 md:h-20 object-contain" />
                  </div>
                  <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-primary-light to-transparent hidden md:block"></div>
                  <div className="flex items-center justify-center p-3 bg-gray-50 rounded-lg hover:shadow-md transition-shadow">
                    <img src={ktipLogo} alt="KTIP Logo" className="h-16 md:h-20 object-contain" />
                  </div>
                  <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-primary-light to-transparent hidden md:block"></div>
                  <div className="flex items-center justify-center p-3 bg-gray-50 rounded-lg hover:shadow-md transition-shadow">
                    <img src={agriscanLogo} alt="AgriScanAI Logo" className="h-16 md:h-20 object-contain" />
                  </div>
                </div>
              </section>

            </div>

            {/* Gallery Grid */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-primary-background mb-6">
                Photo Gallery
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {gallery.map((img, i) => (
                  <div key={i} className="group overflow-hidden rounded-lg aspect-square shadow-sm hover:shadow-md transition-shadow cursor-pointer bg-gray-100" onClick={() => setModalImage(img)}>
                    <img src={img} alt={`Kakamega highlight ${i + 1}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  </div>
                ))}
              </div>
            </section>

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
                to="/events/amref-2nd-phc-congress-2026"
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
                to="/events/nairobi-startup-summit-2026"
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

        {/* Modal Viewer */}
        {modalImage && (
          <div className="fixed inset-0 bg-black/90 z-[100000] flex items-center justify-center p-4 cursor-pointer" onClick={() => setModalImage(null)}>
            <button className="absolute top-6 right-6 text-white text-4xl font-light hover:text-gray-300 transition-colors" onClick={() => setModalImage(null)}>×</button>
            <img src={modalImage} alt="Enlarged gallery item" className="max-w-full max-h-[90vh] rounded-lg shadow-2xl" />
          </div>
        )}

        <Footer />
      </div>
    </PageTransition>
  );
}
