import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import PageTransition from './PageTransition';
import AgriFin2025Image from '../assets/agrifin_hero_image.png';
import '../EventDetail.css';

const AgriFin2025 = () => {
  return (
    <PageTransition>
      <div className="flex flex-col min-h-screen bg-white">
        <Navbar />

        {/* Hero Section */}
        <section className="relative w-full py-16 md:py-24 lg:py-32 overflow-hidden bg-gradient-to-br from-primary-background via-primary-light to-primary-accent">
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-lg">
              AgriScanAI Showcased at the 9th Annual AgriFin Learning Event (ALE 2025)
            </h1>
            <p className="text-lg md:text-xl text-white/90 drop-shadow-md">
              Nairobi, Kenya — October 14, 2025
            </p>
          </div>
        </section>

        {/* Content */}
        <article className="w-full py-12 md:py-16 lg:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <img 
              src={AgriFin2025Image}
              alt="AgriFin Learning Event 2025" 
              className="w-full rounded-lg shadow-lg mb-12 object-cover"
            />

            <div className="prose prose-lg max-w-none">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                AgriScanAI proudly participated in the 9th Annual AgriFin Learning Event (ALE 2025), hosted at Radisson Blu Hotel, Upper Hill, Nairobi, under the theme "Data-Driven Innovations and Investments: Harnessing Intelligence to Build Sustainable, Investable Agri-Food Systems."
              </p>

              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                The annual event, organized by Mercy Corps AgriFin in partnership with Briter, brought together key players from across Africa and Asia to explore how data, digital innovation, and smart investment can drive the transformation of agri-food systems.
              </p>

              <h2 className="text-3xl md:text-4xl font-bold text-primary-background mt-12 mb-6">
                About the Event
              </h2>

              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                The 2025 AgriFin Learning Event (ALE) served as a convergence point for policymakers, innovators, investors, and development partners to reflect on progress in digital agriculture. The discussions centered on AgBase, a real-time data and insights platform designed to support smarter, more informed decisions for governments, funders, and ecosystem actors.
              </p>

              <h3 className="text-2xl font-semibold text-primary-background mt-10 mb-4">
                Sessions covered a wide range of topics including:
              </h3>
              <ul className="list-disc list-inside text-lg text-gray-700 space-y-2 mb-6">
                <li>Bridging the Investment Gap for Agri-SMEs</li>
                <li>Harnessing Emerging Technologies and AI in Agri-Finance</li>
                <li>Strengthening Ecosystem Partnerships for Scaling AgTech</li>
                <li>Impact Measurement for AgTechs</li>
                <li>De-risking Climate Investments and Market Intelligence</li>
              </ul>

              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                These sessions featured experts from the Bill & Melinda Gates Foundation, World Bank, UNCDF, FAO, Strathmore AgriFood Innovation Center, Qhala, AI Kenya, and others driving digital transformation in agriculture.
              </p>

              <h2 className="text-3xl md:text-4xl font-bold text-primary-background mt-12 mb-6">
                AgriScanAI's Participation
              </h2>

              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                AgriScanAI was honored to be part of this high-level event as an exhibitor, showcasing its flagship innovation — an AI-powered mobile solution designed to help farmers instantly detect plant diseases, receive actionable insights, and track yield performance.
              </p>

              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                Throughout the day, visitors, investors, and agri-tech stakeholders engaged with our booth to experience live demonstrations of AgriScanAI. The software's capability to combine AI-driven disease detection, localized insights, and financial tracking captured the interest of many attending organizations exploring how technology can boost smallholder productivity.
              </p>

              <blockquote className="border-l-4 border-primary-background pl-6 my-8 italic text-lg text-gray-700">
                "Our participation underscored our commitment to contributing to data-driven, climate-smart agriculture and aligning with the global shift toward smarter, investable agri-food systems."
                <footer className="mt-2 font-semibold text-gray-900">— AgriScanAI Team</footer>
              </blockquote>

              <h2 className="text-3xl md:text-4xl font-bold text-primary-background mt-12 mb-6">
                Reflections and Impact
              </h2>

              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                The conversations at ALE 2025 highlighted a growing consensus: Africa's agriculture is on the cusp of transformation, and technologies like AgriScanAI are at the forefront of that change.
              </p>

              <div className="bg-primary-light/10 border-l-4 border-primary-background p-6 my-8 rounded">
                <h3 className="text-2xl font-bold text-primary-background mb-3">
                  Key Insight from ALE 2025
                </h3>
                <p className="text-lg text-gray-700">
                  AI, data sharing, and ecosystem collaboration are essential to building resilient and sustainable food systems across Africa.
                </p>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-primary-background mt-12 mb-6">
                Looking Ahead
              </h2>

              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                Following our successful showcase at ALE 2025, AgriScanAI aims to:
              </p>

              <ul className="list-disc list-inside text-lg text-gray-700 space-y-2 mb-12">
                <li>Deepen collaborations with regional and global partners met during the event</li>
                <li>Integrate key learnings into the continued development of AgriScanAI</li>
                <li>Contribute to building open, inclusive, and data-informed agricultural ecosystems</li>
                <li>Strengthen partnerships with organizations committed to digital agriculture transformation</li>
              </ul>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-12 pt-8 border-t border-gray-200">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-3 bg-primary-background text-white font-semibold rounded-lg hover:bg-primary-light transition-colors"
              >
                Contact Us
              </Link>
              <Link
                to="/events"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-primary-background text-primary-background font-semibold rounded-lg hover:bg-primary-background hover:text-white transition-colors"
              >
                Back to Events
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
