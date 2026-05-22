import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import PageTransition from '../../components/ui/PageTransition';

const KenyaSoftwareAISummit2025 = () => {
  return (
    <PageTransition>
      <Helmet>
        <title>AgriScanAI at Kenya Software & AI Summit 2025 - AgriScanAI</title>
        <meta name="description" content="AgriScanAI showcased at the Kenya Software & AI Summit 2025" />
      </Helmet>
      
      <div className="flex flex-col min-h-screen bg-white">
        <Header />

        {/* Hero Section */}
        <section className="relative w-full py-16 md:py-24 lg:py-32 overflow-hidden bg-gradient-to-br from-primary-background via-primary-light to-primary-accent">
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-lg">
              Kenya Software & AI Summit 2025
            </h1>
            <p className="text-lg md:text-xl text-white/90 drop-shadow-md">
              Showcasing AI Innovation for African Agriculture
            </p>
          </div>
        </section>

        {/* Content */}
        <article className="w-full py-12 md:py-16 lg:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <img 
              src="/images/events/Kenya_Software_AI_Summit_2025.jpeg" 
              alt="Kenya Software & AI Summit 2025" 
              className="w-full rounded-lg shadow-lg mb-12 object-cover"
            />

            <div className="prose prose-lg max-w-none">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                AgriScanAI was proud to participate in the Kenya Software & AI Summit 2025, one of East Africa's premier technology conferences. This year's summit brought together software developers, AI researchers, entrepreneurs, and enterprise leaders to explore cutting-edge innovations and business opportunities in artificial intelligence and software development.
              </p>

              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                Against the backdrop of Kenya's growing position as a technology hub, the summit highlighted how AI and software solutions are driving transformation across multiple sectors, with agriculture emerging as a critical focus area.
              </p>

              <h2 className="text-3xl md:text-4xl font-bold text-primary-background mt-12 mb-6">
                About the Summit
              </h2>

              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                The Kenya Software & AI Summit 2025 serves as a platform for technology professionals and entrepreneurs to share knowledge, discover emerging trends, and explore business opportunities. The summit featured keynotes from leading AI experts, technical workshops, and networking sessions focused on practical applications of AI across industries.
              </p>

              <h3 className="text-2xl font-semibold text-primary-background mt-10 mb-4">
                Summit Highlights Included:
              </h3>
              <ul className="list-disc list-inside text-lg text-gray-700 space-y-2 mb-6">
                <li>Machine Learning and AI Applications</li>
                <li>Software Architecture and Scalability</li>
                <li>AI for Social Impact and Sustainability</li>
                <li>Startup Funding and Venture Capital</li>
                <li>Cloud Computing and DevOps</li>
                <li>Data Science and Analytics</li>
              </ul>

              <h2 className="text-3xl md:text-4xl font-bold text-primary-background mt-12 mb-6">
                AgriScanAI's Showcase
              </h2>

              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                AgriScanAI's booth showcased a real-world application of AI in agriculture, demonstrating how machine learning algorithms can be deployed at scale to solve everyday farming challenges. Our presentation highlighted the technical architecture and development practices that enable AgriScanAI to deliver reliable, fast, and accurate plant disease detection on mobile devices.
              </p>

              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                Developers and software architects engaged with our team to understand:
              </p>

              <ul className="list-disc list-inside text-lg text-gray-700 space-y-2 mb-6">
                <li>How we leverage computer vision and deep learning for mobile deployment</li>
                <li>Our approach to handling offline functionality in low-connectivity regions</li>
                <li>Strategies for building AI models with limited computational resources</li>
                <li>Data pipeline architecture for continuous model improvement</li>
                <li>Security and privacy considerations in agricultural AI systems</li>
              </ul>

              <blockquote className="border-l-4 border-primary-background pl-6 my-8 italic text-lg text-gray-700">
                "The Kenya Software & AI Summit showcased the incredible potential for technology to solve real-world problems. AgriScanAI stands as proof that African technologists can build world-class AI solutions addressing African challenges."
                <footer className="mt-2 font-semibold text-gray-900">— Summit Attendee</footer>
              </blockquote>

              <h2 className="text-3xl md:text-4xl font-bold text-primary-background mt-12 mb-6">
                Key Insights and Learnings
              </h2>

              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                The summit reinforced several important insights about the future of AI in Africa:
              </p>

              <div className="bg-primary-light/10 border-l-4 border-primary-background p-6 my-8 rounded">
                <h3 className="text-2xl font-bold text-primary-background mb-3">
                  Summit Key Takeaway
                </h3>
                <p className="text-lg text-gray-700">
                  Africa has the talent, innovation capacity, and market opportunity to become a global leader in AI. The next phase requires connecting technical innovation with market adoption and sustainable business models.
                </p>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-primary-background mt-12 mb-6">
                Building the Future
              </h2>

              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                Our participation in the Kenya Software & AI Summit 2025 reinforced our commitment to building AI solutions that address African challenges. We're inspired by the caliber of technical talent and entrepreneurial spirit on display and excited about the possibilities for collaboration in advancing AI for agriculture and beyond.
              </p>

              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-12">
                We look forward to continuing to engage with the Kenya tech community, contributing to open-source initiatives, and supporting the next generation of African AI developers and innovators.
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

export default KenyaSoftwareAISummit2025;
