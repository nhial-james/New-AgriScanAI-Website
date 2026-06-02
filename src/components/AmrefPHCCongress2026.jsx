import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import PageTransition from './PageTransition';
import '../EventDetail.css';

// Import local assets
import AmrefHero from '../assets/events/Amref-2nd-PHC-Congres-Images/DSC_7252.jpg';
import PanelImage from '../assets/events/Amref-2nd-PHC-Congres-Images/DSC_7239.jpg';

// BetterPAY folder design assets
import bpFront from '../assets/events/BetterPAY-Files-Holder-Design/BetterPAY-Front.jpg';
import bpInsideLeft from '../assets/events/BetterPAY-Files-Holder-Design/BetterPAY-Inside-Left.jpg';
import bpInsideRight from '../assets/events/BetterPAY-Files-Holder-Design/BetterPAY-Inside-Right.jpg';
import bpBack from '../assets/events/BetterPAY-Files-Holder-Design/BetterPAY-Back.jpg';

// Gallery Highlights
import img1 from '../assets/events/Amref-2nd-PHC-Congres-Images/0M8A4463.jpg';
import img2 from '../assets/events/Amref-2nd-PHC-Congres-Images/0M8A4672.jpg';
import img3 from '../assets/events/Amref-2nd-PHC-Congres-Images/DSC_2446.jpg';
import img4 from '../assets/events/Amref-2nd-PHC-Congres-Images/DSC_2457.jpg';
import img5 from '../assets/events/Amref-2nd-PHC-Congres-Images/DSC_2727.jpg';
import img6 from '../assets/events/Amref-2nd-PHC-Congres-Images/DSC_2828.jpg';
import img7 from '../assets/events/Amref-2nd-PHC-Congres-Images/DSC_6533.jpg';
import img8 from '../assets/events/Amref-2nd-PHC-Congres-Images/DSC_6592.jpg';
import img9 from '../assets/events/Amref-2nd-PHC-Congres-Images/DSC_6684.jpg';
import img10 from '../assets/events/Amref-2nd-PHC-Congres-Images/DSC_6691.jpg';
import img11 from '../assets/events/Amref-2nd-PHC-Congres-Images/DSC_6770.jpg';
import img12 from '../assets/events/Amref-2nd-PHC-Congres-Images/DSC_7030.jpg';
import img13 from '../assets/events/Amref-2nd-PHC-Congres-Images/DSC_7046.jpg';
import img14 from '../assets/events/Amref-2nd-PHC-Congres-Images/DSC_7073.jpg';
import img15 from '../assets/events/Amref-2nd-PHC-Congres-Images/DSC_7080.jpg';
import img16 from '../assets/events/Amref-2nd-PHC-Congres-Images/DSC_7213.jpg';
import img17 from '../assets/events/Amref-2nd-PHC-Congres-Images/DSC_7239.jpg';
import img18 from '../assets/events/Amref-2nd-PHC-Congres-Images/DSC_7252.jpg';
import img19 from '../assets/events/Amref-2nd-PHC-Congres-Images/DSC_7443.jpg';
import img20 from '../assets/events/Amref-2nd-PHC-Congres-Images/DSC_7549.jpg';

const gallery = [
  img1, img2, img3, img4, img5, img6, img7, img8, img9, img10,
  img11, img12, img13, img14, img15, img16, img17, img18, img19, img20
];

export default function AmrefPHCCongress2026() {
  const [modalImage, setModalImage] = useState(null);

  useEffect(() => {
    document.title = '2nd Primary Health Care Congress 2026 - AgriScanAI';
  }, []);

  return (
    <PageTransition>
      <div className="flex flex-col min-h-screen bg-white">
        <Navbar />

        {/* Hero Section */}
        <section className="w-full relative">
          <div className="relative h-[400px] md:h-[500px] lg:h-[600px]">
            <img src={AmrefHero} alt="Good Partners at 2nd PHC Congress" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 lg:p-16">
              <div className="max-w-7xl mx-auto">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                  Good Partners at the 2nd Primary Health Care Congress, Nairobi 2026
                </h1>
                <p className="text-lg md:text-xl text-white/90">
                  Nairobi, Kenya | March 4–6, 2026
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
                Good Partners was proud to participate in the <strong>2nd Primary Health Care Congress</strong>, 
                hosted by Amref Health Africa, Amref International University, and the Ministry of Health Kenya. 
                Held in Nairobi from March 4 to 6, 2026, the Congress brought together policymakers, researchers, 
                development partners, and frontline health practitioners from across Africa to explore how to 
                strengthen Primary Health Care (PHC) systems and accelerate progress toward Universal Health Coverage.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Themed <em>"Redesigning Primary Health Care: Building Resilience Amidst Global Uncertainty,"</em> 
                the three-day event offered a platform for high-impact discussions, evidence-based frameworks, and 
                practical solutions that equip health systems to adapt and thrive in an era of climate crises, 
                pandemics, conflict, and economic instability.
              </p>

              {/* Our Presence & BetterPay */}
              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-primary-background mb-4">
                  Our Presence: Showcasing BetterPay
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Good Partners set up a dedicated exhibition booth at the Congress, where we demonstrated 
                  <strong> BetterPay</strong>, our payment and attendance verification solution designed to 
                  bring transparency, accountability, and efficiency to health and community programmes.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  BetterPay directly addresses one of the most persistent challenges in Primary Health Care delivery: 
                  ensuring that community health workers, beneficiaries, and programme coordinators are reliably paid 
                  and accurately recorded. By digitising these processes, BetterPay helps health organisations reduce 
                  leakage, improve compliance, and demonstrate impact to funders and governments.
                </p>

                {/* BetterPAY Flex Brochure Showcase */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8 p-3 bg-white border border-gray-100 rounded-xl shadow-md">
                  <div className="rounded-lg overflow-hidden cursor-pointer" onClick={() => setModalImage(bpFront)}>
                    <img src={bpFront} alt="BetterPAY Folder Front" className="w-full h-auto hover:scale-105 transition-transform duration-300" />
                  </div>
                  <div className="rounded-lg overflow-hidden cursor-pointer" onClick={() => setModalImage(bpInsideLeft)}>
                    <img src={bpInsideLeft} alt="BetterPAY Folder Inside Left" className="w-full h-auto hover:scale-105 transition-transform duration-300" />
                  </div>
                  <div className="rounded-lg overflow-hidden cursor-pointer" onClick={() => setModalImage(bpInsideRight)}>
                    <img src={bpInsideRight} alt="BetterPAY Folder Inside Right" className="w-full h-auto hover:scale-105 transition-transform duration-300" />
                  </div>
                  <div className="rounded-lg overflow-hidden cursor-pointer" onClick={() => setModalImage(bpBack)}>
                    <img src={bpBack} alt="BetterPAY Folder Back" className="w-full h-auto hover:scale-105 transition-transform duration-300" />
                  </div>
                </div>

                {/* BetterPAY Canva Slideshow */}
                <div className="my-8 rounded-xl overflow-hidden shadow-xl border border-gray-100 bg-white">
                  <div className="relative w-full h-0 pb-[56.25%] overflow-hidden">
                    <iframe 
                      loading="lazy" 
                      className="absolute top-0 left-0 w-full h-full border-none"
                      src="https://www.canva.com/design/DAG5aO4wihs/I1JTv4899fT93FnTiCyexA/view?embed" 
                      allowFullScreen={true} 
                      allow="fullscreen">
                    </iframe>
                  </div>
                  <p className="text-sm font-semibold text-center py-3 border-t">
                    <a href="https://www.canva.com/design/DAG5aO4wihs/I1JTv4899fT93FnTiCyexA/view" target="_blank" rel="noopener noreferrer" className="text-primary-light hover:underline">
                      BetterPAY Presentation Deck by Good Partners
                    </a>
                  </p>
                </div>
              </section>

              {/* Why This Congress Mattered */}
              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-primary-background mb-4">
                  Why This Congress Mattered
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  The Congress convened leaders from government, academia, and the development sector to reflect on 
                  the progress made in building community-based health systems and identify practical steps needed to 
                  accelerate impact. Key discussions covered:
                </p>
                <div className="bg-white border rounded-xl p-6 md:p-8 shadow-sm">
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <span className="w-5 h-5 flex-shrink-0 flex items-center justify-center rounded-full bg-blue-600 text-white text-xs font-bold mt-1">1</span>
                      <div>
                        <strong className="text-gray-900 block mb-1">Health system financing:</strong>
                        <span className="text-gray-600 text-sm">Strategies for sustainable domestic investment in PHC, ensuring resources reach frontline facilities and communities.</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-5 h-5 flex-shrink-0 flex items-center justify-center rounded-full bg-blue-600 text-white text-xs font-bold mt-1">2</span>
                      <div>
                        <strong className="text-gray-900 block mb-1">Digital health transformation:</strong>
                        <span className="text-gray-600 text-sm">The role of digital tools, from unified data platforms to mobile e-learning, in strengthening the PHC workforce.</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-5 h-5 flex-shrink-0 flex items-center justify-center rounded-full bg-blue-600 text-white text-xs font-bold mt-1">3</span>
                      <div>
                        <strong className="text-gray-900 block mb-1">Community health systems:</strong>
                        <span className="text-gray-600 text-sm">How Community Health Promoters serve as an essential link between facilities and households, particularly in underserved areas.</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-5 h-5 flex-shrink-0 flex items-center justify-center rounded-full bg-blue-600 text-white text-xs font-bold mt-1">4</span>
                      <div>
                        <strong className="text-gray-900 block mb-1">Leadership and governance:</strong>
                        <span className="text-gray-600 text-sm">Legislative frameworks such as Kenya's Primary Health Care Act, Digital Health Act, and Social Health Insurance Act as models for health system reform.</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Panel Image */}
              <div className="my-8 rounded-xl overflow-hidden shadow-lg">
                <img src={PanelImage} alt="Panel discussions at the 2nd PHC Congress" className="w-full h-auto" />
                <p className="text-sm text-gray-500 text-center py-2 bg-white font-medium border-t">Panel discussions at the 2nd Primary Health Care Congress, Nairobi</p>
              </div>

              {/* Dr Githinji Quote Block */}
              <div className="bg-[#2563eb]/5 border-l-4 border-blue-600 rounded-r-xl p-6 md:p-8 my-8">
                <p className="text-xl md:text-2xl text-blue-800 font-medium italic leading-relaxed mb-4">
                  "Primary Health Care is the foundation of equitable health systems. If we are to achieve Universal Health Coverage in Africa, we must invest in strong community-based health systems that prevent disease and bring care closer to the people."
                </p>
                <p className="text-lg text-gray-700 font-semibold">— Dr Githinji Gitahi, Group CEO, Amref Health Africa</p>
              </div>

              {/* Stat Callout */}
              <div className="bg-gray-100 rounded-xl p-6 md:p-8 my-8">
                <h4 className="text-xl font-bold text-gray-900 mb-2">3 Days · Nairobi, Kenya · Regional Health Leaders</h4>
                <p className="text-gray-700">
                  The 2nd PHC Congress convened regional and global stakeholders from governments, academic institutions, 
                  NGOs, and the private sector, united by a commitment to stronger, more resilient Primary Health Care systems across Africa.
                </p>
              </div>

              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-primary-background mb-4">
                  What's Next for BetterPay
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Our participation in the 2nd PHC Congress strengthens our commitment to embedding BetterPay further 
                  within health system infrastructure across Africa. We are actively engaging with health organisations, 
                  NGOs, and government health departments who are looking to modernise their community health programme operations.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  If your organisation manages community health workers, vaccination campaigns, social cash transfers, or 
                  any field-based health programme, BetterPay can digitise, verify, and streamline your operations.
                </p>
              </section>

            </div>

            {/* Photo Gallery Grid */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-primary-background mb-6">
                Photo Gallery
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {gallery.map((img, i) => (
                  <div key={i} className="group overflow-hidden rounded-lg aspect-square shadow-sm hover:shadow-md transition-shadow cursor-pointer bg-gray-100" onClick={() => setModalImage(img)}>
                    <img src={img} alt={`Congress highlight ${i + 1}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
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
                to="/events/iccf-2025"
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
                to="/events/agriscanai-farmer-training-kakamega-2026"
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
