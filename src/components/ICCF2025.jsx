import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import PageTransition from './PageTransition';
import ICCF2025Image from '../assets/ICCF 2025.jpg';
import '../EventDetail.css';

const ICCF2025 = () => {
  return (
    <PageTransition>
      <div className="flex flex-col min-h-screen bg-white">
        <Navbar />

        {/* Hero Section */}
        <section className="relative w-full py-16 md:py-24 lg:py-32 overflow-hidden bg-gradient-to-br from-primary-background via-primary-light to-primary-accent">
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-lg">
              AgriScanAI at ICCF 2025
            </h1>
            <p className="text-lg md:text-xl text-white/90 drop-shadow-md">
              International Conference on Climate Change and Food Security
            </p>
          </div>
        </section>

        {/* Content */}
        <article className="w-full py-12 md:py-16 lg:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
           <img 
  src={ICCF2025Image}
  alt="ICCF 2025"
  className="w-full rounded-lg shadow-lg mb-12 object-cover"
/>

            <div className="prose prose-lg max-w-none">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                AgriScanAI was honored to participate in the International Conference on Climate Change and Food Security 2025 (ICCF 2025), a pivotal gathering of climate scientists, agricultural experts, policy makers, and innovators dedicated to addressing the intersection of climate change and global food security.
              </p>

              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                The conference brought together leading institutions and organizations from across the globe to discuss cutting-edge research, innovative solutions, and strategic frameworks for building climate-resilient food systems.
              </p>

              <h2 className="text-3xl md:text-4xl font-bold text-primary-background mt-12 mb-6">
                About ICCF 2025
              </h2>

              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                ICCF 2025 served as a critical platform for advancing knowledge about how climate change impacts agricultural productivity and food security across Africa and beyond. The conference featured keynote presentations, technical sessions, and networking opportunities focused on climate adaptation strategies, sustainable agriculture, and technology integration in farming systems.
              </p>

              <h3 className="text-2xl font-semibold text-primary-background mt-10 mb-4">
                Key Conference Focus Areas:
              </h3>
              <ul className="list-disc list-inside text-lg text-gray-700 space-y-2 mb-6">
                <li>Climate Adaptation and Resilience in Agriculture</li>
                <li>AI and Digital Solutions for Climate-Smart Farming</li>
                <li>Data-Driven Decision Making for Food Security</li>
                <li>Sustainable Practices in Changing Climate</li>
                <li>Technology Transfer and Capacity Building</li>
              </ul>

              <h2 className="text-3xl md:text-4xl font-bold text-primary-background mt-12 mb-6">
                AgriScanAI's Contribution
              </h2>

              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                AgriScanAI's participation highlighted how AI-powered agricultural technologies can help farmers adapt to climate challenges. By enabling early disease detection and providing localized insights, AgriScanAI demonstrates a practical approach to building climate resilience at the farmer level.
              </p>

              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                Our solution addresses critical gaps in climate adaptation by providing:
              </p>

              <ul className="list-disc list-inside text-lg text-gray-700 space-y-2 mb-6">
                <li>Early warning systems for crop diseases exacerbated by climate stress</li>
                <li>Data analytics for informed planting and harvesting decisions</li>
                <li>Yield tracking to monitor climate impact on productivity</li>
                <li>Financial insights to build farmer resilience</li>
              </ul>

              <blockquote className="border-l-4 border-primary-background pl-6 my-8 italic text-lg text-gray-700">
                "In a world facing unprecedented climate challenges, solutions like AgriScanAI represent the convergence of technology, data, and human ingenuity needed to ensure food security for African farmers."
                <footer className="mt-2 font-semibold text-gray-900">— ICCF 2025 Delegate</footer>
              </blockquote>

              <h2 className="text-3xl md:text-4xl font-bold text-primary-background mt-12 mb-6">
                Impact and Insights
              </h2>

              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                ICCF 2025 reinforced the urgent need for technology-enabled solutions that can scale climate adaptation across smallholder farming communities. The conference discussions highlighted that AI and digital agriculture are not just innovations but essential tools for ensuring food security in the face of climate change.
              </p>

              <div className="bg-primary-light/10 border-l-4 border-primary-background p-6 my-8 rounded">
                <h3 className="text-2xl font-bold text-primary-background mb-3">
                  ICCF 2025 Key Takeaway
                </h3>
                <p className="text-lg text-gray-700">
                  Technology-enabled agriculture is critical for climate adaptation. Solutions that combine AI, data analytics, and practical farmer support are essential for building food-secure futures across Africa.
                </p>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-primary-background mt-12 mb-6">
                Continuing Our Mission
              </h2>

              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                AgriScanAI's participation in ICCF 2025 reaffirmed our commitment to supporting climate-resilient agriculture. As climate impacts intensify, we remain dedicated to advancing our technology to help farmers make smarter decisions and build sustainable livelihoods.
              </p>

              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-12">
                We look forward to expanding our collaborations with climate and agricultural experts to create an integrated ecosystem where technology, data, and policy align to build a more resilient food future for Africa.
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

export default ICCF2025;
