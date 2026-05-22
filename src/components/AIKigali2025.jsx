import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import PageTransition from './PageTransition';
import AIKigali2025Image from '../assets/ai-kigali-2025-Hero.jpg'; 
import '../EventDetail.css';

const AIKigali2025 = () => {
  return (
    <PageTransition>
      <div className="flex flex-col min-h-screen bg-white">
        <Navbar />

        {/* Hero Section */}
        <section className="relative w-full py-16 md:py-24 lg:py-32 overflow-hidden bg-gradient-to-br from-primary-background via-primary-light to-primary-accent">
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-lg">
              AI Kigali 2025 Summit
            </h1>
            <p className="text-lg md:text-xl text-white/90 drop-shadow-md">
              Artificial Intelligence and Innovation in Rwanda
            </p>
          </div>
        </section>

        {/* Content */}
        <article className="w-full py-12 md:py-16 lg:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <img 
              src={AIKigali2025Image}
              alt="AI Kigali 2025" 
              className="w-full rounded-lg shadow-lg mb-12 object-cover"
            />

            <div className="prose prose-lg max-w-none">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                AgriScanAI was proud to participate in AI Kigali 2025, a premier summit dedicated to advancing artificial intelligence innovation and application across the East African region. The summit brought together AI researchers, technologists, entrepreneurs, and policymakers to showcase cutting-edge AI solutions and explore opportunities for leveraging AI for sustainable development.
              </p>

              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                Against Rwanda's positioning as a technology and innovation hub in East Africa, AI Kigali 2025 highlighted the continent's emerging AI ecosystem and the potential for African-developed AI solutions to address local and global challenges.
              </p>

              <h2 className="text-3xl md:text-4xl font-bold text-primary-background mt-12 mb-6">
                About AI Kigali 2025
              </h2>

              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                AI Kigali is a premier summit that convenes thought leaders, innovators, and practitioners working at the intersection of artificial intelligence and sustainable development. The 2025 summit featured keynote presentations, technical sessions, startup pitch competitions, and networking opportunities focused on practical AI applications addressing African challenges and opportunities.
              </p>

              <h3 className="text-2xl font-semibold text-primary-background mt-10 mb-4">
                Summit Focus Areas:
              </h3>
              <ul className="list-disc list-inside text-lg text-gray-700 space-y-2 mb-6">
                <li>AI for Sustainable Development Goals</li>
                <li>Agriculture and Food Security AI Applications</li>
                <li>Healthcare AI and Medical Diagnostics</li>
                <li>Financial Inclusion through AI</li>
                <li>Climate and Environmental Applications</li>
                <li>Ethical AI and Responsible Innovation</li>
              </ul>

              <h2 className="text-3xl md:text-4xl font-bold text-primary-background mt-12 mb-6">
                AgriScanAI's Showcase
              </h2>

              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                AgriScanAI's presence at AI Kigali 2025 demonstrated a practical, end-to-end AI solution for agricultural challenges. Our booth showcased how computer vision, machine learning, and mobile technology converge to create accessible, affordable AI tools for farmers in low-resource settings.
              </p>

              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                Conversations at our booth focused on:
              </p>

              <ul className="list-disc list-inside text-lg text-gray-700 space-y-2 mb-6">
                <li>Deploying AI models on mobile devices for offline use</li>
                <li>Building computer vision systems for agricultural diagnostics</li>
                <li>Scaling AI solutions in resource-constrained environments</li>
                <li>Ethical considerations in agricultural AI</li>
                <li>Creating sustainable business models for AI for development</li>
                <li>Collaboration opportunities for AI research and deployment</li>
              </ul>

              <blockquote className="border-l-4 border-primary-background pl-6 my-8 italic text-lg text-gray-700">
                "AI Kigali showcased the extraordinary depth of technical talent and innovation happening across Africa. AgriScanAI stands as a compelling example of how African developers can build world-class AI solutions that generate both social impact and commercial value."
                <footer className="mt-2 font-semibold text-gray-900">— Summit Attendee</footer>
              </blockquote>

              <h2 className="text-3xl md:text-4xl font-bold text-primary-background mt-12 mb-6">
                Key Insights and Discussions
              </h2>

              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                AI Kigali 2025 illuminated the significant opportunity and responsibility that comes with advancing AI solutions in Africa. The summit discussions emphasized the need to:
              </p>

              <div className="bg-primary-light/10 border-l-4 border-primary-background p-6 my-8 rounded">
                <h3 className="text-2xl font-bold text-primary-background mb-3">
                  AI Kigali 2025 Key Takeaway
                </h3>
                <p className="text-lg text-gray-700">
                  Africa is not just a consumer of AI but an innovator and developer of AI solutions. Building inclusive, ethical, and locally-relevant AI applications is both a tremendous opportunity and essential for ensuring AI benefits are equitably distributed across the continent.
                </p>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-primary-background mt-12 mb-6">
                The Future of AI in Agriculture
              </h2>

              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                Our participation in AI Kigali 2025 reinforced our vision for AI-powered agricultural transformation. As we continue to develop and scale AgriScanAI, we're committed to:
              </p>

              <ul className="list-disc list-inside text-lg text-gray-700 space-y-2 mb-12">
                <li>Advancing technical innovation in agricultural AI and machine learning</li>
                <li>Building inclusive solutions that serve smallholder farmers across Africa</li>
                <li>Contributing to open-source AI and agricultural technology communities</li>
                <li>Collaborating with researchers and institutions on AI for development</li>
                <li>Demonstrating that AI can generate both social impact and sustainable commercial returns</li>
              </ul>

              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-12">
                AI Kigali 2025 confirmed that the future of AI in Africa is bright, locally-driven, and oriented toward solving real challenges. We're honored to be contributing to this future through AgriScanAI and excited about the possibilities for collaboration and innovation in the coming years.
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

export default AIKigali2025;
