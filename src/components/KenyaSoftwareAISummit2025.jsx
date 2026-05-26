import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import PageTransition from './PageTransition';
import KenyaSoftwareAISummit2025Image from '../assets/The Kenya Software & AI Summit 2025.jpeg';
import '../EventDetail.css';

// Import highlight images
import img1 from '../assets/events/The Kenya Software & AI Summit 2025 Highlight Image 1.jpeg';
import img2 from '../assets/events/The Kenya Software & AI Summit 2025 Highlight Image 2.jpeg';
import img3 from '../assets/events/The Kenya Software & AI Summit 2025 Highlight Image 3.jpeg';
import img4 from '../assets/events/The Kenya Software & AI Summit 2025 Highlight Image 4.JPG';
import img6 from '../assets/events/The Kenya Software & AI Summit 2025 Highlight Image 6.JPG';
import img7 from '../assets/events/The Kenya Software & AI Summit 2025 Highlight Image 7.JPG';
import img8 from '../assets/events/The Kenya Software & AI Summit 2025 Highlight Image 8.jpeg';
import img9 from '../assets/events/The Kenya Software & AI Summit 2025 Highlight Image 9.JPG';
import img10 from '../assets/events/The Kenya Software & AI Summit 2025 Highlight Image 10.jpeg';
import img11 from '../assets/events/The Kenya Software & AI Summit 2025 Highlight Image 11.jpg';

// Import inline images
import lizaSpeakerImg from '../assets/events/Liza Karen Achagana speaking at The Kenya Software & AI Summit 2025.jpg';
import musaliaImg from '../assets/events/Prime Cabinet Secretary Musalia Mudavadi at the The Kenya Software & AI Summit 2025.jpg';
import goodPartnersBoothImg from '../assets/events/Good Partners booth at The Kenya Software & AI Summit 2025.JPG';

const gallery = [img1, img2, img3, img4, img6, img7, img8, img9, img10, img11];

const KenyaSoftwareAISummit2025 = () => {
  useEffect(() => {
    document.title = 'AgriScanAI at Kenya Software & AI Summit 2025 - AgriScanAI';
  }, []);

  return (
    <PageTransition>
      <div className="flex flex-col min-h-screen bg-white">
        <Navbar />

        {/* Hero Section */}
        <section className="w-full relative">
          <div className="relative h-[400px] md:h-[500px] lg:h-[600px]">
            <img src={KenyaSoftwareAISummit2025Image} alt="Kenya Software & AI Summit 2025" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 lg:p-16">
              <div className="max-w-7xl mx-auto">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                  AgriScanAI at the Kenya Software & AI Summit 2025
                </h1>
                <p className="text-lg md:text-xl text-white/90 mb-4">
                  Eldoret, Kenya | November 10–12, 2025
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
                AgriScanAI proudly participated in the <strong>Kenya Software & AI Summit 2025</strong>, held at the Moi University Annex Campus in Eldoret. The Summit, themed <strong>"Connecting Minds. Shaping Software. Driving Growth,"</strong> brought together innovators, policymakers, developers, and business leaders shaping the future of Kenya's digital economy.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                The event was organized in partnership with the Ministry of Information, Communications & The Digital Economy, Africa Telecommunications Union (ATU), ICT Authority, and Moi University, reflecting Kenya's commitment to strengthening its position as a continental hub for software and AI-driven innovation.
              </p>

              <section className="mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-primary-background mb-6">
                  AgriScanAI at the Summit: Showcasing Innovation
                </h2>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  At our exhibition booth, AgriScanAI showcased our flagship AI-powered agricultural solution that helps farmers instantly detect crop diseases, access actionable insights, and make data-driven decisions that improve yield and income.
                </p>

                <div className="mb-6 rounded-lg overflow-hidden shadow-xl">
                  <img src={goodPartnersBoothImg} alt="AgriScanAI Booth at The Kenya Software & AI Summit 2025" className="w-full h-auto" />
                </div>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Visitors, students, innovators, and government officials interacted with live demo sessions led by our Business Development & IT Sales Lead, <strong>Liza Karen Achagana</strong>, who provided in-depth product explanations and engaged attendees in meaningful conversations about the future of digital agriculture.
                </p>

                <div className="mb-6 rounded-lg overflow-hidden shadow-xl">
                  <img src={lizaSpeakerImg} alt="Liza Karen Achagana speaking" className="w-full h-auto" />
                </div>

                <div className="bg-primary-light/10 border-l-4 border-primary-light rounded-r-xl p-6 md:p-8 mb-6">
                  <p className="text-xl md:text-2xl text-primary-background font-medium italic leading-relaxed mb-4">
                    "We don't build for farmers; we build with them. Co-creation ensures AgriScanAI is not just smart but grounded in real life. AI is only meaningful when it solves real problems. For AgriScanAI, impact means empowering communities with insights that change their daily decision-making."
                  </p>
                  <p className="text-lg text-gray-600 mt-4">— Liza Karen Achagana, Business Development & IT Sales Lead, Good Partners</p>
                </div>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  This message resonated strongly with attendees, especially stakeholders working in agri-tech, fintech, and grassroots innovation.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-primary-background mb-6">
                  High-Level Recognition
                </h2>

                <div className="mb-6 rounded-lg overflow-hidden shadow-xl">
                  <img src={musaliaImg} alt="Prime Cabinet Secretary Musalia Mudavadi" className="w-full h-auto" />
                </div>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  During the Summit, <strong>Prime Cabinet Secretary Musalia Mudavadi</strong> shared an inspiring message on Kenya's digital future:
                </p>

                <div className="bg-primary-light/10 border-l-4 border-primary-light rounded-r-xl p-6 md:p-8 mb-8">
                  <p className="text-xl md:text-2xl text-primary-background font-medium italic leading-relaxed">
                    "Kenya stands ready to write the next chapter of Africa's technological journey, one defined not by consumption, but by creation; not by dependency, but by leadership and innovation."
                  </p>
                  <p className="text-lg text-gray-600 mt-4">— Rt. Hon. Musalia Mudavadi</p>
                </div>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  This sentiment aligned powerfully with AgriScanAI's mission to develop homegrown, impactful technologies that elevate farmers and drive real economic transformation.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-primary-background mb-6">
                  Why the Summit Mattered
                </h2>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  The Kenya Software & AI Summit offered a high-value platform for:
                </p>

                <div className="bg-gray-50 rounded-lg p-6 md:p-8 mb-6">
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-primary-background flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <div>
                        <span className="text-gray-700">Showcasing local technologies with global potential</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-primary-background flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <div>
                        <span className="text-gray-700">Networking with developers, investors, and policymakers</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-primary-background flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <div>
                        <span className="text-gray-700">Participating in discussions on software standards, AI ethics, data governance, and software sovereignty</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-primary-background flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <div>
                        <span className="text-gray-700">Exploring collaboration opportunities with government and private sector partners</span>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="bg-primary-light/10 border-l-4 border-primary-light rounded-r-xl p-6 md:p-8 mb-8 mt-8">
                  <h3 className="text-2xl font-bold text-primary-background mb-4">
                    Connecting Minds. Shaping Software. Driving Growth.
                  </h3>
                  <p className="text-lg text-gray-700">
                    The Kenya Software & AI Summit 2025 brought together Kenya's brightest minds in software development and AI innovation, positioning the country as a continental leader in technology-driven transformation. AgriScanAI's participation strengthened our visibility and opened doors to new partnerships focused on digital agriculture and financial inclusion.
                  </p>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-primary-background mb-6">
                  Event Highlights Gallery
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {gallery.map((imgSrc, idx) => (
                    <div key={idx} className="aspect-square rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <img src={imgSrc} alt={`Summit Highlight ${idx + 1}`} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                    </div>
                  ))}
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-primary-background mb-6">
                  Looking Ahead
                </h2>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  As we move forward, AgriScanAI will:
                </p>

                <ul className="list-disc list-inside space-y-2 text-lg text-gray-700 mb-6 pl-4">
                  <li>Deepen collaborations formed during the Summit</li>
                  <li>Integrate insights into AgriScanAI's product improvements</li>
                  <li>Actively support Kenya's agenda for responsible AI and digital innovation</li>
                  <li>Continue building tools that solve real problems for real people</li>
                </ul>

                <div className="bg-primary-light/10 border-l-4 border-primary-light rounded-r-xl p-6 md:p-8 mb-8 mt-10">
                  <p className="text-xl md:text-2xl text-primary-background font-medium italic leading-relaxed">
                    "Our commitment remains unwavering: creating technology that empowers communities, strengthens food systems, and accelerates digital transformation across Africa."
                  </p>
                  <p className="text-lg text-gray-600 mt-4">— AgriScanAI Team</p>
                </div>
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

            {/* CTA Buttons & Pagination */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-12 pt-8 border-t border-gray-200">
              <Link
                to="/events/iccf-2025"
                className="flex items-center gap-2 text-gray-600 hover:text-primary-background font-medium transition-colors duration-300"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
                Previous Event
              </Link>
              <Link 
                to="/events/agrifin-2025" 
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

export default KenyaSoftwareAISummit2025;
