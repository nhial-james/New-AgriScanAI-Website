import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import PageTransition from './PageTransition';
import FoundersLive2025Image from '../assets/Founders-Live-Nairobi-2025-Hero.png';
import '../EventDetail.css';

const FoundersLive2025 = () => {
  return (
    <PageTransition>
      <div className="flex flex-col min-h-screen bg-white">
        <Navbar />

        {/* Hero Section */}
        <section className="relative w-full py-16 md:py-24 lg:py-32 overflow-hidden bg-gradient-to-br from-primary-background via-primary-light to-primary-accent">
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-lg">
              Founders Live Nairobi 2025
            </h1>
            <p className="text-lg md:text-xl text-white/90 drop-shadow-md">
              Connecting Africa's Startup Founders and Investors
            </p>
          </div>
        </section>

        {/* Content */}
        <article className="w-full py-12 md:py-16 lg:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <img 
              src={FoundersLive2025Image}
              alt="Founders Live Nairobi 2025"
              className="w-full rounded-lg shadow-lg mb-12 object-cover"
            />

            <div className="prose prose-lg max-w-none">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                AgriScanAI was thrilled to participate in Founders Live Nairobi 2025, a premier event dedicated to connecting Africa's most innovative startup founders with investors, mentors, and fellow entrepreneurs. The event showcased the incredible depth of talent and entrepreneurial energy driving innovation across the African continent.
              </p>

              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                Founders Live brought together hundreds of early-stage and growth-stage startups across sectors, from fintech and logistics to agritech and cleantech, creating a dynamic ecosystem for networking, funding opportunities, and collaboration.
              </p>

              <h2 className="text-3xl md:text-4xl font-bold text-primary-background mt-12 mb-6">
                About Founders Live 2025
              </h2>

              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                Founders Live is Africa's premier startup event, designed to amplify African founders and catalyze investment into the continent's most promising startups. The 2025 edition featured pitch competitions, investor roundtables, panel discussions, and networking sessions bringing together founders, venture capitalists, corporate investors, and ecosystem enablers.
              </p>

              <h3 className="text-2xl font-semibold text-primary-background mt-10 mb-4">
                Event Focus Areas:
              </h3>
              <ul className="list-disc list-inside text-lg text-gray-700 space-y-2 mb-6">
                <li>Early-Stage Funding and Pitching</li>
                <li>Corporate Venture Partnerships</li>
                <li>Impact Investing in Africa</li>
                <li>Building Scalable African Startups</li>
                <li>Emerging Sector Opportunities</li>
                <li>Founder Support and Ecosystem Development</li>
              </ul>

              <h2 className="text-3xl md:text-4xl font-bold text-primary-background mt-12 mb-6">
                AgriScanAI's Participation
              </h2>

              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                AgriScanAI showcased our journey from concept to market impact, demonstrating how technology-driven solutions can address critical challenges in African agriculture. Our booth featured live demonstrations of our AI-powered disease detection system and conversations with investors interested in agritech innovation.
              </p>

              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                Through Founders Live, we connected with:
              </p>

              <ul className="list-disc list-inside text-lg text-gray-700 space-y-2 mb-6">
                <li>Venture capital firms investing in African agritech</li>
                <li>Impact investors focused on food security and farmer livelihoods</li>
                <li>Corporate partners exploring agricultural innovation partnerships</li>
                <li>Fellow founders working to scale agriculture solutions</li>
                <li>Mentors and advisors who have navigated similar scaling challenges</li>
              </ul>

              <blockquote className="border-l-4 border-primary-background pl-6 my-8 italic text-lg text-gray-700">
                "Founders Live showcased the vibrancy of Africa's startup ecosystem. AgriScanAI's presence demonstrated that African founders are building solutions not just for Africa, but for the world."
                <footer className="mt-2 font-semibold text-gray-900">— Event Attendee</footer>
              </blockquote>

              <h2 className="text-3xl md:text-4xl font-bold text-primary-background mt-12 mb-6">
                Key Conversations and Insights
              </h2>

              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                Founders Live 2025 highlighted the growing investor interest in agritech and climate-tech solutions. Conversations with investors, corporate development teams, and fellow founders reinforced that:
              </p>

              <div className="bg-primary-light/10 border-l-4 border-primary-background p-6 my-8 rounded">
                <h3 className="text-2xl font-bold text-primary-background mb-3">
                  Founders Live 2025 Takeaway
                </h3>
                <p className="text-lg text-gray-700">
                  African agritech is attracting significant investment and international interest. Founders solving real farmer problems with technology have the potential to build globally-scaled, profitable businesses while creating tremendous social impact.
                </p>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-primary-background mt-12 mb-6">
                Moving Forward
              </h2>

              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                Our participation in Founders Live Nairobi 2025 strengthened AgriScanAI's position within the African startup and investment ecosystem. The connections made, feedback received, and conversations started will help accelerate our path to scaling impact across Africa.
              </p>

              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-12">
                We remain committed to building AgriScanAI into a leading agricultural technology company that empowers African farmers while creating value for all our stakeholders. Founders Live confirmed that the market opportunity, investor appetite, and founder talent are all aligned to make this vision possible.
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

export default FoundersLive2025;
