import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import PageTransition from './PageTransition';
import ICCF2025Image from '../assets/ICCF 2025.jpg';
import '../EventDetail.css';

// Import highlight images
import img1 from '../assets/events/ICCF 2025 Highlight Image 1.JPG';
import img2 from '../assets/events/ICCF 2025 Highlight Image 2.JPG';
import img3 from '../assets/events/ICCF 2025 Highlight Image 3.JPG';
import img4 from '../assets/events/ICCF 2025 Highlight Image 4.JPG';
import img5 from '../assets/events/ICCF 2025 Highlight Image 5.JPG';
import img6 from '../assets/events/ICCF 2025 Highlight Image 6.JPG';
import img7 from '../assets/events/ICCF 2025 Highlight Image 7.JPG';
import img8 from '../assets/events/ICCF 2025 Highlight Image 8.JPG';
import img9 from '../assets/events/ICCF 2025 Highlight Image 9.JPG';
import img10 from '../assets/events/ICCF 2025 Highlight Image 10.JPG';
import img11 from '../assets/events/ICCF 2025 Highlight Image 11.JPG';
import img13 from '../assets/events/ICCF 2025 Highlight Image 13.jpeg';

// Import inline images
import lizaSpeakerImg from '../assets/events/Liza Karen Achagana Speaker & Thought Leader at ICCF 2025.png';
import goodPartnersBoothImg from '../assets/events/Good Partners Booth at ICCF 2025.JPG';
import lizaExplainingImg from '../assets/events/Liza Karen Achagana at the Good Partners Booth explaining AgriScanAI to Visitors.JPG';

const gallery = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img13];

const ICCF2025 = () => {
  useEffect(() => {
    document.title = 'AgriScanAI at ICCF 2025 - AgriScanAI';
  }, []);

  return (
    <PageTransition>
      <div className="flex flex-col min-h-screen bg-white">
        <Navbar />

        {/* Hero Section */}
        <section className="w-full relative">
          <div className="relative h-[400px] md:h-[500px] lg:h-[600px]">
            <img src={ICCF2025Image} alt="ICCF 2025" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 lg:p-16">
              <div className="max-w-7xl mx-auto">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                  AgriScanAI at the International Conference on Contract Farming (ICCF) 2025
                </h1>
                <p className="text-lg md:text-xl text-white/90 mb-4">
                  Nairobi, Kenya | November 18–19, 2025
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
                AgriScanAI took center stage at the <strong>International Conference on Contract Farming (ICCF) 2025</strong>, held at the Sarit Expo Centre in Nairobi. With the theme <strong>"Exploring Market Opportunities in Contract Farming,"</strong> the conference brought together farmers, agribusinesses, technology innovators, and policymakers to address challenges and unlock potential in Kenya's agricultural sector.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                AgriScanAI showcased how AI-powered technology can revolutionize contract farming by providing transparent, data-driven insights that build trust between farmers and buyers while optimizing production outcomes.
              </p>

              <section className="mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-primary-background mb-6">
                  The AgriScanAI Booth: Showcasing Innovation
                </h2>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  The AgriScanAI booth was a hub of activity throughout the conference, drawing farmers, agribusinesses, and investors eager to learn how our AI-powered solution could transform their operations.
                </p>

                <div className="mb-6 rounded-lg overflow-hidden shadow-xl">
                  <img src={goodPartnersBoothImg} alt="AgriScanAI Booth at ICCF 2025" className="w-full h-auto" />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                  AgriScanAI: Transforming Farm Management with AI
                </h3>
                
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  AgriScanAI is an AI-powered mobile application that enables farmers to:
                </p>

                <ul className="list-disc list-inside space-y-2 text-lg text-gray-700 mb-6 pl-4">
                  <li>Scan and count crops instantly using smartphone cameras</li>
                  <li>Access real-time analytics on crop health, yield predictions, and pest management</li>
                  <li>Make data-driven decisions to optimize production and reduce losses</li>
                  <li>Build trust with buyers through transparent, verifiable production data</li>
                </ul>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Visitors were particularly impressed by live demonstrations showing how AgriScanAI could scan maize fields and provide instant yield estimates—a game-changer for contract farming arrangements where accurate production forecasting is critical.
                </p>

                <div className="mb-6 rounded-lg overflow-hidden shadow-xl">
                  <img src={lizaExplainingImg} alt="Liza Karen Achagana explaining AgriScanAI to visitors" className="w-full h-auto" />
                </div>

                <div className="bg-primary-light/10 border-l-4 border-primary-light rounded-r-xl p-6 md:p-8 mb-8">
                  <p className="text-xl md:text-2xl text-primary-background font-medium italic leading-relaxed">
                    "By combining AgriScanAI's production insights with secure payment systems, we are creating an ecosystem where farmers can confidently enter contract farming agreements—knowing their yields will be accurately measured and their payments will arrive on time."
                  </p>
                  <p className="text-lg text-gray-600 mt-4">— AgriScanAI Team</p>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-primary-background mb-6">
                  Liza Karen Achagana: A Powerful Keynote on Farmer-Centered Innovation
                </h2>

                <div className="mb-6 rounded-lg overflow-hidden shadow-xl">
                  <img src={lizaSpeakerImg} alt="Liza Karen Achagana speaking at ICCF 2025" className="w-full h-auto" />
                </div>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  On November 18, 2025, <strong>Liza Karen Achagana</strong>, Business Development & IT Sales Lead at Good Partners, delivered a keynote address that resonated deeply with the audience. Her speech, titled <strong>"Rethinking Farmer Engagement: From Adoption to Empowerment,"</strong> challenged industry stakeholders to shift their mindset when introducing new technologies to farmers.
                </p>

                <div className="bg-primary-light/10 border-l-4 border-primary-light rounded-r-xl p-6 md:p-8 mb-6">
                  <p className="text-xl md:text-2xl text-primary-background font-medium italic leading-relaxed mb-4">
                    "Farmers are not resistant to change; they are resistant to loss. They have seen too many promises broken, too many technologies that didn't work in their fields, and too many programs that disappeared after the funding dried up. If we want farmers to adopt new solutions, we must first prove that these solutions will protect their livelihoods, not gamble with them."
                  </p>
                  <p className="text-lg text-gray-600 mt-4">— Liza Karen Achagana, Business Development & IT Sales Lead, Good Partners</p>
                </div>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Liza emphasized that technology adoption is not a matter of education or awareness—it's about trust, risk mitigation, and demonstrated value. She outlined three critical principles for successful farmer engagement:
                </p>

                <div className="bg-gray-50 rounded-lg p-6 md:p-8 mb-6">
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-primary-background flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <div>
                        <strong className="text-gray-900 block mb-1">Start with Risk Reduction, Not Profit Maximization:</strong>
                        <span className="text-gray-700">Farmers prioritize stability over high returns. Any new technology must first reduce existing risks before promising greater profits.</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-primary-background flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <div>
                        <strong className="text-gray-900 block mb-1">Design for Real-World Constraints:</strong>
                        <span className="text-gray-700">Solutions must work in low-connectivity environments, require minimal upfront investment, and be usable by farmers with varying literacy levels.</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-primary-background flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <div>
                        <strong className="text-gray-900 block mb-1">Build Long-Term Partnerships, Not One-Off Transactions:</strong>
                        <span className="text-gray-700">Sustainable agricultural transformation requires ongoing support, training, and collaboration—not just a single interaction.</span>
                      </div>
                    </li>
                  </ul>
                </div>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Her speech received a standing ovation and sparked lively discussions throughout the conference. Many attendees later visited the AgriScanAI booth to explore how our solution embodies these principles.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-primary-background mb-6">
                  Why This Matters: The Future of Contract Farming in Kenya
                </h2>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Contract farming has the potential to transform Kenya's agricultural sector by providing farmers with guaranteed markets, fair prices, and access to inputs. However, traditional contract farming arrangements often suffer from:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-2 mb-2">
                      <svg className="w-5 h-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                      <strong className="text-gray-900">Information Asymmetry</strong>
                    </div>
                    <p className="text-gray-600 text-sm">Buyers and farmers lack accurate production data</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-2 mb-2">
                      <svg className="w-5 h-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      <strong className="text-gray-900">Payment Delays</strong>
                    </div>
                    <p className="text-gray-600 text-sm">Farmers wait weeks or months for payments</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-2 mb-2">
                      <svg className="w-5 h-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                      <strong className="text-gray-900">Trust Deficits</strong>
                    </div>
                    <p className="text-gray-600 text-sm">Both parties fear exploitation</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-2 mb-2">
                      <svg className="w-5 h-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                      <strong className="text-gray-900">Poor Record-Keeping</strong>
                    </div>
                    <p className="text-gray-600 text-sm">Paper-based systems lead to disputes</p>
                  </div>
                </div>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  AgriScanAI addresses these challenges head-on by providing:
                </p>

                <div className="bg-green-50 rounded-lg p-6 md:p-8 mb-6 border border-green-100">
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="bg-green-100 p-1.5 rounded-full mt-0.5">
                        <svg className="w-4 h-4 text-primary-background" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                      </div>
                      <div>
                        <strong className="text-gray-900 block mb-1">Real-Time Production Data:</strong>
                        <span className="text-gray-700">Eliminates guesswork and disputes over yields</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="bg-green-100 p-1.5 rounded-full mt-0.5">
                        <svg className="w-4 h-4 text-primary-background" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                      </div>
                      <div>
                        <strong className="text-gray-900 block mb-1">Digital Records:</strong>
                        <span className="text-gray-700">Creates an auditable trail for all transactions</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="bg-green-100 p-1.5 rounded-full mt-0.5">
                        <svg className="w-4 h-4 text-primary-background" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                      </div>
                      <div>
                        <strong className="text-gray-900 block mb-1">Mobile-First Design:</strong>
                        <span className="text-gray-700">Works in rural, low-connectivity areas</span>
                      </div>
                    </li>
                  </ul>
                </div>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  By demonstrating these solutions at ICCF 2025, AgriScanAI is paving the way for a new era of contract farming—one where technology bridges the gap between farmers and markets, ensuring fair deals for all parties.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-primary-background mb-6">
                  Conference Highlights
                </h2>
                
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  ICCF 2025 was filled with inspiring moments, networking opportunities, and meaningful conversations about the future of agriculture in Kenya.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {gallery.map((imgSrc, idx) => (
                    <div key={idx} className="aspect-square rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <img src={imgSrc} alt={`ICCF 2025 Highlight ${idx + 1}`} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                    </div>
                  ))}
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-primary-background mb-6">
                  What's Next for AgriScanAI
                </h2>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Following the success of ICCF 2025, AgriScanAI is expanding its partnerships with agribusinesses, farmer cooperatives, and government agencies to scale our solution across Kenya and beyond.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                  Upcoming Initiatives:
                </h3>

                <ul className="list-disc list-inside space-y-2 text-lg text-gray-700 mb-6 pl-4">
                  <li><strong>Pilot Programs:</strong> Launching AgriScanAI with thousands of smallholder farmers in 2026</li>
                  <li><strong>Payment Integration:</strong> Partnering with major buyers to enable instant farmer payments</li>
                  <li><strong>Regional Expansion:</strong> Extending solutions to Uganda, Tanzania, and Rwanda</li>
                  <li><strong>Training & Capacity Building:</strong> Equipping farmers and agribusinesses with digital tools</li>
                </ul>

                <div className="bg-primary-light/10 border-l-4 border-primary-light rounded-r-xl p-6 md:p-8 mb-8 mt-10">
                  <p className="text-xl md:text-2xl text-primary-background font-medium italic leading-relaxed">
                    "AgriScanAI is committed to ensuring that technology serves farmers, not the other way around. By prioritizing trust, transparency, and real-world usability, we are building a future where contract farming works for everyone."
                  </p>
                  <p className="text-lg text-gray-600 mt-4">— AgriScanAI Team</p>
                </div>
              </section>

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
            </div>

            {/* CTA Buttons & Pagination */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-12 pt-8 border-t border-gray-200">
              <Link
                to="/events"
                className="flex items-center gap-2 text-gray-600 hover:text-primary-background font-medium transition-colors duration-300"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
                Back to Events
              </Link>
              <Link 
                to="/events/kenya-software-ai-summit-2025" 
                className="flex items-center gap-2 text-primary-background hover:text-primary-light font-medium transition-colors duration-300"
              >
                Next Event
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
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
