import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import PageTransition from './PageTransition';
import Finas2025Image from '../assets/FINAS-2025-hero.jpg';
import '../EventDetail.css';

const Finas2025 = () => {
  return (
    <PageTransition>
      <div className="flex flex-col min-h-screen bg-white">
        <Navbar />

        {/* Hero Section */}
        <section className="relative w-full py-16 md:py-24 lg:py-32 overflow-hidden bg-gradient-to-br from-primary-background via-primary-light to-primary-accent">
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-lg">
              FINAS 2025 Conference
            </h1>
            <p className="text-lg md:text-xl text-white/90 drop-shadow-md">
              Finance for Agriculture in Sub-Saharan Africa
            </p>
          </div>
        </section>

        {/* Content */}
        <article className="w-full py-12 md:py-16 lg:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <img 
              src={Finas2025Image}
              alt="FINAS 2025"
              className="w-full rounded-lg shadow-lg mb-12 object-cover"
            />

            <div className="prose prose-lg max-w-none">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                AgriScanAI was honored to showcase at FINAS 2025 (Finance for Agriculture in Sub-Saharan Africa), a premier conference dedicated to advancing agricultural financing and fostering agricultural development across the region. The event brought together agricultural finance professionals, development practitioners, policymakers, and agritech innovators to explore sustainable finance mechanisms for rural development.
              </p>

              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                FINAS 2025 addressed the critical challenge of bridging the agricultural finance gap that constrains productivity and livelihoods for millions of smallholder farmers across Sub-Saharan Africa.
              </p>

              <h2 className="text-3xl md:text-4xl font-bold text-primary-background mt-12 mb-6">
                About FINAS 2025
              </h2>

              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                FINAS 2025 is a specialized conference focused on financing agricultural development in Sub-Saharan Africa. The event convenes stakeholders in agricultural finance including microfinance institutions, development banks, agricultural input suppliers, insurance providers, and agricultural technology providers to discuss innovations in agricultural finance and sustainable rural development strategies.
              </p>

              <h3 className="text-2xl font-semibold text-primary-background mt-10 mb-4">
                Conference Core Topics:
              </h3>
              <ul className="list-disc list-inside text-lg text-gray-700 space-y-2 mb-6">
                <li>Innovative Financial Products for Agricultural Development</li>
                <li>Digital Finance and Mobile Money in Agriculture</li>
                <li>Risk Management and Agricultural Insurance</li>
                <li>Technology-Enabled Agricultural Financing</li>
                <li>Climate-Smart Agriculture Finance</li>
                <li>Value Chain Finance and Input Financing</li>
              </ul>

              <h2 className="text-3xl md:text-4xl font-bold text-primary-background mt-12 mb-6">
                AgriScanAI's Participation
              </h2>

              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                AgriScanAI's participation at FINAS 2025 highlighted the critical intersection of technology, data, and finance in enabling agricultural productivity. Our solution demonstrates how AI-driven insights can enhance the bankability of smallholder farmers by providing lenders with objective data on farmer capability and agricultural performance.
              </p>

              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                Our engagement with FINAS attendees focused on:
              </p>

              <ul className="list-disc list-inside text-lg text-gray-700 space-y-2 mb-6">
                <li>Using AI insights to improve credit assessment and farmer creditworthiness</li>
                <li>Data-driven approaches to reducing agricultural lending risk</li>
                <li>Enabling productive investment through better farmer information</li>
                <li>Creating feedback loops between finance providers and farmer productivity</li>
                <li>Supporting climate adaptation through data-informed decision making</li>
              </ul>

              <blockquote className="border-l-4 border-primary-background pl-6 my-8 italic text-lg text-gray-700">
                "Agricultural finance is a crucial enabler of development, but making smart lending decisions requires better information. AgriScanAI provides that information, creating a win-win for lenders, farmers, and development outcomes."
                <footer className="mt-2 font-semibold text-gray-900">— FINAS 2025 Participant</footer>
              </blockquote>

              <h2 className="text-3xl md:text-4xl font-bold text-primary-background mt-12 mb-6">
                Key Learnings and Insights
              </h2>

              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                FINAS 2025 reinforced the critical role of information asymmetry in constraining agricultural finance. Financial institutions face challenges in assessing farmer creditworthiness and managing agricultural risk without reliable data on individual farmer performance.
              </p>

              <div className="bg-primary-light/10 border-l-4 border-primary-background p-6 my-8 rounded">
                <h3 className="text-2xl font-bold text-primary-background mb-3">
                  FINAS 2025 Key Insight
                </h3>
                <p className="text-lg text-gray-700">
                  Data is the missing link in agricultural finance. Technologies that provide lenders and investors with reliable, real-time information about farmer productivity and agricultural outcomes unlock new possibilities for sustainable, inclusive agricultural finance.
                </p>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-primary-background mt-12 mb-6">
                Building Better Agricultural Finance Ecosystems
              </h2>

              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                Our participation in FINAS 2025 strengthened our commitment to being a key enabler in agricultural finance ecosystems. We see tremendous opportunity to work with financial institutions, cooperatives, and development organizations to make agricultural finance more accessible, affordable, and sustainable for small-scale farmers.
              </p>

              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-12">
                By providing reliable data on agricultural performance, AgriScanAI helps unlock capital for farmers, enabling them to make better investments in productivity while giving lenders and investors the information needed to make sound decisions. This alignment of technology, data, and finance holds the key to agricultural transformation across Sub-Saharan Africa.
              </p>
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

export default Finas2025;
