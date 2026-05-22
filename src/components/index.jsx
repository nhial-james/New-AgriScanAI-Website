import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import PageTransition from '../../components/ui/PageTransition';

export const eventsData = [
  {
    id: 1,
    title: 'AgriScanAI at the International Conference on Contract Farming (ICCF) 2025',
    date: 'November 18–19, 2025',
    location: 'Sarit Expo Centre, Nairobi',
    description:
      'AgriScanAI showcased transformative AI-powered farm management solutions at ICCF 2025, demonstrating how technology can revolutionize contract farming by providing transparent, data-driven insights that build trust between farmers and buyers.',
    image: '/images/events/ICCF_2025.jpg',
    link: '/events/iccf-2025',
  },
  {
    id: 2,
    title: 'AgriScanAI at the Kenya Software & AI Summit 2025',
    date: 'October 14, 2025',
    location: 'Radisson Blu Hotel, Upper Hill, Nairobi',
    description:
      'AgriScanAI participated in the Kenya Software & AI Summit 2025, showcasing AI-powered agricultural innovation and positioning Kenya as a continental leader in technology-driven transformation.',
    image: '/images/events/Kenya_Software_AI_Summit_2025.jpeg',
    link: '/events/kenya-software-ai-summit-2025',
  },
  {
    id: 3,
    title: 'AgriScanAI Showcased at the 9th Annual AgriFin Learning Event (ALE 2025)',
    date: 'October 14, 2025',
    location: 'Radisson Blu Hotel, Upper Hill, Nairobi',
    description:
      'AgriScanAI proudly participated in the 9th Annual AgriFin Learning Event hosted under the theme "Data-Driven Innovations and Investments: Harnessing Intelligence to Build Sustainable, Investable Agri-Food Systems."',
    image: '/images/events/agrifin_hero_image.png',
    link: '/events/agrifin-2025',
  },
  {
    id: 4,
    title: 'AgriScanAI Wins at Founders Live Nairobi 2025',
    date: 'September 18, 2025',
    location: 'BaoBox, Nairobi',
    description:
      'AgriScanAI emerged as the winner of Founders Live Nairobi, where we pitched our groundbreaking AI-powered solution. The global pitch competition celebrated creativity, resilience, and bold ideas shaping the future of entrepreneurship.',
    image: '/images/events/Founders-Live-Nairobi-2025-Hero.png',
    link: '/events/founders-live-2025',
  },
  {
    id: 5,
    title: 'Financing Agri-food Systems Sustainably Conference 2025',
    date: 'May 20–22, 2025',
    location: 'KICC, Nairobi, Kenya',
    description:
      'AgriScanAI took center stage at FINAS 2025, a high-level gathering focused on building resilient and sustainable food systems in Africa. We shared insights on digital solutions for agri-finance and smallholder farmer support.',
    image: '/images/events/FINAS-2025-hero.jpg',
    link: '/events/finas-2025',
  },
  {
    id: 6,
    title: 'Global AI Summit on Africa (AI Kigali 2025)',
    date: 'April 3–4, 2025',
    location: 'Kigali, Rwanda',
    description:
      'AgriScanAI participated in the inaugural Global AI Summit on Africa under the theme "AI and Africa\'s Demographic Dividend: Reimagining Economic Opportunities for Africa\'s Workforce."',
    image: '/images/events/ai-kigali-2025-Hero.jpg',
    link: '/events/ai-kigali-2025',
  },
];

const Events = () => {
  return (
    <PageTransition>
      <Helmet>
        <title>Events & Conferences | AgriScanAI</title>
        <meta
          name="description"
          content="Discover where AgriScanAI is making an impact. Join us at agricultural innovation summits, tech conferences, and industry gatherings."
        />
      </Helmet>

      <div className="flex flex-col min-h-screen bg-white">
        <Header />

        {/* ORIGINAL HERO EXACT MATCH */}
        <section className="relative w-full py-24 md:py-32 lg:py-40 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-background via-primary-light to-primary-accent">
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-black/30"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-primary-background/60 via-primary-background/40 to-primary-background/60"></div>
            </div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-10">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 drop-shadow-lg">
              Events
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-white/95 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
              Join us at agricultural innovation summits, tech conferences, and industry gatherings
              where AgriScanAI is making an impact.
            </p>
          </div>
        </section>

        {/* ORIGINAL GRID EXACT MATCH */}
        <section className="w-full py-12 md:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
              {eventsData.map((event) => (
                <article
                  key={event.id}
                  className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="relative h-64 md:h-72 lg:h-80 overflow-hidden bg-gray-200">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  <div className="p-6 md:p-8">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                      <div className="flex items-center gap-2 text-primary-background">
                        <span className="text-sm md:text-base font-medium">{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <span className="text-sm md:text-base">{event.location}</span>
                      </div>
                    </div>

                    <h3 className="text-xl md:text-2xl font-bold text-primary-background mb-4 group-hover:text-primary-light transition-colors duration-300">
                      {event.title}
                    </h3>

                    <p className="text-base md:text-lg text-gray-600 mb-6 leading-relaxed line-clamp-3">
                      {event.description}
                    </p>

                    <Link
                      to={event.link}
                      className="inline-flex items-center gap-2 text-primary-background hover:text-primary-light font-semibold text-base md:text-lg transition-colors duration-300 group"
                    >
                      Read More
                      <svg
                        className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="w-full bg-gradient-to-br from-primary-background to-primary-light py-12 md:py-16 lg:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 md:mb-6">
              Host, Invite, or Sponsor an Event With Us
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-white/90 mb-8 md:mb-10 leading-relaxed">
              Are you organizing a tech summit, university innovation day, community workshop, or
              industry roundtable? We'd love to join you!
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-3 md:px-10 md:py-4 bg-white text-primary-background font-semibold text-base md:text-lg rounded-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Contact Us
            </Link>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default Events;
