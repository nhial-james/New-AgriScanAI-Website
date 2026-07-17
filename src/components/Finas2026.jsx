import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import PageTransition from './PageTransition';
import '../EventDetail.css';

const finasImageModules = import.meta.glob('../assets/images/FINAS 2026 Images/*.{jpg,jpeg,png,JPG,JPEG,PNG}', { eager: true });
const finasPdfModules = import.meta.glob('../assets/images/FINAS 2026 Images/*.pdf', { eager: true });

const finasImageMap = Object.fromEntries(
  Object.entries(finasImageModules).map(([path, module]) => [path.split('/').pop(), module.default ?? module])
);

const finasPdfMap = Object.fromEntries(
  Object.entries(finasPdfModules).map(([path, module]) => [path.split('/').pop(), module.default ?? module])
);

const image = (name) => finasImageMap[name];
const pdf = (name) => finasPdfMap[name];

const progressImages = ['1.jpg', '2.jpg', '3.jpg', '4.jpg'].map(image);
const boothImages = ['Booth 1.jpg', 'Booth 2.jpg', 'Booth 3.jpg', 'Booth 4.jpg', 'Booth 5.jpg', 'Booth 6.jpg'].map(image);
const pitchImages = ['IMG_4307.jpg', 'IMG_4310.jpg', 'IMG_4311.jpg'].map(image);
const nasipImages = ['IMG_0148.jpg', 'IMG_0160_1.jpg', 'IMG_0153.jpg'].map(image);
const coldChainImages = ['1782823040792.jpg', '1782823046295.jpg', '1782823046895.jpg'].map(image);
const cultureImages = ['dance hightlight 1.jpg', 'dance hightlight 2.jpg', 'dance hightlight 3.jpg', 'dance hightlight 4.jpg'].map(image);
const galleryImages = ['hightlight 1.jpg', 'hightlight 2.jpg', 'hightlight 3.jpg', 'hightlight 4.jpg', 'hightlight 5.jpg', 'hightlight 6.jpg', 'hightlight 7.jpg'].map(image);

export default function Finas2026() {
  useEffect(() => {
    document.title = 'Good Partners Returns to FINAS 2026 - AgriScanAI';
  }, []);

  return (
    <PageTransition>
      <div className="flex flex-col min-h-screen bg-white">
        <Navbar />

        <section className="w-full relative">
          <div className="relative h-[400px] md:h-[500px] lg:h-[600px]">
            <img src={image('FINAS 2026 Hero Image.jpeg')} alt="FINAS 2026 Event - Good Partners at KICC Nairobi" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/50" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 lg:p-16">
              <div className="max-w-7xl mx-auto">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                  Good Partners Returns to FINAS 2026: Showcasing the Growth of AgriScanAI and Advancing Africa&apos;s Sustainable Food Systems
                </h1>
                <p className="text-lg md:text-xl text-white/90">
                  Nairobi, Kenya | KICC | June 30 – July 2, 2026
                </p>
              </div>
            </div>
          </div>
        </section>

        <article className="w-full py-12 md:py-16 lg:py-20 bg-gray-50/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-lg text-gray-700 leading-relaxed mb-6 font-medium">
                Good Partners proudly returned to the <strong>Financing Agri-Food Systems Sustainably (FINAS) Summit 2026</strong>, reaffirming our commitment to driving digital transformation in agriculture through innovation, collaboration, and farmer-centered technology.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Having first participated in <Link to="/events/finas-2025" className="text-primary-background hover:underline font-semibold">FINAS 2025</Link>, where we introduced AgriScanAI to the wider agricultural ecosystem, this year&apos;s summit marked an exciting milestone in our journey. We returned not only with a stronger solution but with measurable impact, real-world deployments, and valuable lessons from working directly with farmers across Kenya.
              </p>

              <div className="my-8 rounded-xl overflow-hidden shadow-xl border border-gray-100 bg-white">
                <img src={image('IMG_2844.jpg')} alt="Good Partners at FINAS 2026 Summit Overview" className="w-full h-auto" />
              </div>

              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-primary-background mb-4">About FINAS 2026</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  FINAS 2026, held under the theme <em>&ldquo;Towards Sustainable Financial Architecture for Africa&apos;s Food Systems,&rdquo;</em> brought together governments, financial institutions, development partners, agribusinesses, innovators, researchers, and investors to explore sustainable financing models capable of transforming Africa&apos;s agri-food systems.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  For Good Partners, the summit created a powerful platform to show how AgriScanAI is maturing from a promising concept into a practical digital tool that supports farmers, strengthens data-driven decision-making, and contributes to a more resilient agricultural finance ecosystem.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-primary-background mb-4">Building on the Momentum from FINAS 2025</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Our participation in FINAS 2025 was the beginning of an exciting chapter for Good Partners. At last year&apos;s summit, we introduced AgriScanAI, our AI-powered agricultural intelligence platform designed to help farmers detect crop diseases, receive personalized recommendations, and make informed farming decisions.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Since then, our team has made remarkable progress through pilot programs and direct engagement with farmers in Kakamega County. Those deployments gave us the feedback and validation needed to keep improving the platform in real farming environments.
                </p>

                <div className="flex flex-nowrap items-start gap-4 my-8 p-3 bg-white border border-gray-100 rounded-xl shadow-md overflow-x-auto">
                  {progressImages.map((src, index) => (
                    <div key={index} className="flex-none w-[78%] sm:w-[48%] lg:w-1/4 rounded-lg overflow-hidden bg-white">
                      <img src={src} alt={`AgriScanAI progress ${index + 1}`} className="w-full h-auto object-contain block hover:scale-105 transition-transform duration-300" />
                    </div>
                  ))}
                </div>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Today, AgriScanAI has evolved from a promising innovation into a practical digital tool supporting farmers with real-time crop intelligence and data-driven decision-making.
                </p>

                <div className="bg-[#e6f0fa] border-l-4 border-primary-light rounded-r-xl p-6 md:p-8 my-8">
                  <p className="text-xl md:text-2xl text-gray-800 font-medium italic leading-relaxed">
                    &ldquo;This journey demonstrates our belief that meaningful innovation happens when technology is developed with farmers, not simply for them.&rdquo;
                  </p>
                  <p className="text-lg text-gray-700 font-semibold mt-4">&mdash; Good Partners Team</p>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-primary-background mb-4">Showcasing AgriScanAI at FINAS 2026</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  At the FINAS 2026 exhibition, Good Partners proudly showcased the latest evolution of AgriScanAI. Visitors to our booth experienced live demonstrations of how the platform enables farmers to detect crop diseases instantly, receive AI-powered treatment recommendations, improve crop productivity and yields, minimize disease-related losses, and monitor farm performance using actionable data and insights.
                </p>

                <div className="my-8 rounded-xl overflow-hidden shadow-xl border border-gray-100 bg-white">
                  <img src={image('IMG_0284.jpg')} alt="Good Partners exhibition at FINAS 2026" className="w-full h-auto" />
                </div>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  The exhibition attracted hundreds of visitors from across Africa, including policymakers, investors, financial institutions, researchers, agribusinesses, development organizations, technology innovators, and fellow exhibitors eager to learn how AI can strengthen agricultural productivity and resilience.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 my-8">
                  {boothImages.map((src, index) => (
                    <div key={index} className="aspect-square rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow bg-white">
                      <img src={src} alt={`FINAS 2026 booth ${index + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                    </div>
                  ))}
                </div>

                <p className="text-lg text-gray-700 leading-relaxed">
                  Our booth became a hub for engaging conversations around digital agriculture, responsible AI, financial inclusion, and climate-smart farming.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-primary-background mb-4">Representing Good Partners on the FINAS 2026 Stage</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  One of the highlights of our participation was the FINAS 2026 Exhibitor Pitch, where Liza Karen Achagana, our Business Development &amp; Partnerships Lead, proudly represented Good Partners.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
                  <div className="md:row-span-2 rounded-lg overflow-hidden shadow-lg bg-white">
                    <img src={pitchImages[0]} alt="Liza Karen Achagana at FINAS 2026 Pitch" className="w-full h-full object-cover" />
                  </div>
                  <div className="rounded-lg overflow-hidden shadow-lg bg-white">
                    <img src={pitchImages[1]} alt="FINAS 2026 Pitch stage 2" className="w-full h-full object-cover" />
                  </div>
                  <div className="rounded-lg overflow-hidden shadow-lg bg-white">
                    <img src={pitchImages[2]} alt="FINAS 2026 Pitch stage 3" className="w-full h-full object-cover" />
                  </div>
                </div>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Standing before an audience of agricultural leaders, investors, innovators, and development partners, Liza presented the vision behind AgriScanAI and demonstrated how artificial intelligence can bridge critical gaps in agricultural productivity, disease management, and food security.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Her presentation highlighted the progress made since FINAS 2025, from concept validation to successful pilot deployments and a growing user base, while sharing our long-term vision of empowering millions of African farmers through accessible, intelligent digital solutions.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-primary-background mb-4">NASIP: A Defining Conversation</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  One of the most significant discussions throughout FINAS 2026 centered around Kenya&apos;s newly launched National Agri-Food Systems Investment Plan (NASIP).
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
                  {nasipImages.map((src, index) => (
                    <div key={index} className="rounded-lg overflow-hidden shadow-lg bg-white">
                      <img src={src} alt={`NASIP discussion ${index + 1}`} className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  One of the key highlights was the launch of Kenya&apos;s National Agri-Food Systems Investment Plan (NASIP) 2026&ndash;2030, a KES 1.081 trillion framework aimed at modernizing agriculture, strengthening food security, building climate resilience, and creating over two million jobs.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  What stood out for us is the scale of ambition and the financing model behind it. NASIP places strong emphasis on blended financing, with 45% of investment expected from the private sector, 35% from national and county governments, and 20% from development partners. This signals an important shift toward shared responsibility in transforming crops, livestock, fisheries, irrigation, agro-processing, digital agriculture, and climate-resilient production systems.
                </p>

                <div className="bg-gray-100 rounded-xl p-6 md:p-8 my-8">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">KSh 1 Trillion in Planned Agricultural Investment</h4>
                  <p className="text-gray-700">
                    Kenya&apos;s National Agri-Food Systems Investment Plan (NASIP) represents a landmark commitment to transforming the country&apos;s agricultural sector, and digital innovations like AgriScanAI are positioned to play a critical role in its implementation.
                  </p>
                </div>

                <div className="bg-[#e6f0fa] border border-primary-light rounded-2xl p-5 md:p-6 my-8 flex flex-col md:flex-row gap-4 items-start md:items-center">
                  <img src={image('NASIP Image.jpg')} alt="NASIP document" className="w-full md:w-24 rounded-lg shadow-sm object-cover" />
                  <div className="flex-1">
                    <p className="font-bold text-gray-900 mb-1">National Agri-Food Systems Investment Plan (NASIP)</p>
                    <p className="text-gray-600 text-sm">Download the full NASIP document to learn more about Kenya&apos;s agricultural investment framework.</p>
                  </div>
                  <a href={pdf('NASIP.pdf')} download="NASIP.pdf" className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-primary-background text-white font-semibold hover:bg-primary-light transition-colors">
                    Download NASIP PDF
                  </a>
                </div>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  For Good Partners, the conversations around NASIP reinforced the importance of AI-powered agricultural solutions like AgriScanAI in supporting evidence-based farming, improving productivity, and contributing to national food security objectives.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-primary-background mb-4">Strengthening Agricultural Finance Through Collaboration</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Another major highlight of FINAS 2026 was the official launch of the Agricultural Finance Technical Working Group, a permanent multi-stakeholder platform established to bridge the gap between evidence, policy, and implementation in agricultural finance.
                </p>

                <div className="my-8 rounded-xl overflow-hidden shadow-lg bg-white">
                  <img src={image('Agricultural Finance Technical Working Group.jpg')} alt="Launch of the Agricultural Finance Technical Working Group" className="w-full h-auto" />
                </div>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Bringing together leaders from the financial sector, government, development organizations, and policy institutions, the Technical Working Group aims to ensure that research, data, and stakeholder recommendations translate into practical reforms that improve access to agricultural finance across Kenya and the wider region.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-white border rounded-xl p-6 shadow-sm">
                    <h3 className="text-xl font-bold text-primary-background mb-2">David Sajabi</h3>
                    <p className="text-sm font-semibold text-gray-500 mb-3">Finance &amp; Investment Expert</p>
                    <p className="text-gray-700 text-sm leading-relaxed mb-3">David Sajabi challenged stakeholders to move beyond dialogue and ensure that meaningful reforms are implemented.</p>
                    <div className="border-l-4 border-primary-light pl-4 italic text-gray-800">&ldquo;Good ideas must not remain reports. Reforms must be followed through.&rdquo;</div>
                  </div>

                  <div className="bg-white border rounded-xl p-6 shadow-sm">
                    <h3 className="text-xl font-bold text-primary-background mb-2">Dr. Samuel Tiriongo</h3>
                    <p className="text-sm font-semibold text-gray-500 mb-3">Kenya Bankers Association</p>
                    <p className="text-gray-700 text-sm leading-relaxed mb-3">Dr. Tiriongo emphasized the importance of improving financial inclusion for farmers through better use of agricultural data and innovative lending approaches.</p>
                    <ul className="text-gray-700 text-sm leading-relaxed space-y-1 list-disc pl-5">
                      <li>Evidence-based advocacy</li>
                      <li>Improved agricultural data systems</li>
                      <li>Alternative forms of collateral beyond land ownership</li>
                      <li>Stronger collaboration between financial institutions and the agricultural sector</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-white border rounded-xl p-6 shadow-sm">
                  <h3 className="text-xl font-bold text-primary-background mb-2">Titian Donda</h3>
                  <p className="text-sm font-semibold text-gray-500 mb-3">Managing Director, Policy, Aceli Africa</p>
                  <p className="text-gray-700 text-sm leading-relaxed">Reflecting on years of collaboration across the agricultural finance ecosystem, Titian Donda observed that fragmented efforts have often slowed meaningful progress. He described the Technical Working Group as a product of partnership and coordination, designed to transform data into evidence and evidence into policy reforms that strengthen agricultural finance systems across the continent.</p>
                </div>

                <div className="bg-white border rounded-xl p-6 shadow-sm mt-4">
                  <h3 className="text-xl font-bold text-primary-background mb-2">Petra Jacoby</h3>
                  <p className="text-sm font-semibold text-gray-500 mb-3">Programme Director, Agriculture Development, GIZ Kenya</p>
                  <p className="text-gray-700 text-sm leading-relaxed mb-3">Petra Jacoby described the launch of the Technical Working Group as a reaffirmation of the collective commitment shared by governments, development partners, financial institutions, and innovators.</p>
                  <ul className="text-gray-700 text-sm leading-relaxed space-y-1 list-disc pl-5">
                    <li>Sound and enabling policies</li>
                    <li>Reliable agricultural data</li>
                    <li>Effective risk-sharing mechanisms</li>
                    <li>Strong coordination across institutions</li>
                  </ul>
                </div>

                <p className="text-lg text-gray-700 leading-relaxed mt-6 font-semibold">What This Means for Good Partners</p>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  The launch of the Agricultural Finance Technical Working Group closely aligns with Good Partners&apos; vision of leveraging technology to strengthen agricultural ecosystems. As developers of AgriScanAI, we recognize that access to finance depends not only on capital but also on credible data, informed decision-making, and trust.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-primary-background mb-4">A Landmark Launch: Green Cold Chain Financing Facility</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Beyond the policy discussions, FINAS 2026 also marked a major milestone in Kenya&apos;s agricultural finance landscape with the official launch of the Green Cold Chain Financing Facility, a strategic partnership between the Agricultural Finance Corporation (AFC) and DanChurchAid.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
                  {coldChainImages.map((src, index) => (
                    <div key={index} className="rounded-lg overflow-hidden shadow-lg bg-white">
                      <img src={src} alt={`Green Cold Chain Financing Facility ${index + 1}`} className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>

                <p className="text-lg text-gray-700 leading-relaxed mb-4">The initiative is designed to:</p>
                <ul className="text-lg text-gray-700 leading-relaxed space-y-3 list-disc pl-6 mb-6">
                  <li>Reduce post-harvest losses through sustainable cold chain solutions.</li>
                  <li>Empower smallholder farmers with access to affordable financing.</li>
                  <li>Transform agricultural waste into wealth while strengthening community resilience.</li>
                </ul>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Aligned with the FINAS 2026 theme, &ldquo;Towards Sustainable Financial Architecture for Africa&apos;s Food Systems,&rdquo; the Green Cold Chain Financing Facility demonstrates how innovative financing can directly improve food security, reduce post-harvest losses, and strengthen farmer livelihoods.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-primary-background mb-4">Celebrating Africa&apos;s Culture Alongside Innovation</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  While FINAS 2026 was a platform for policy dialogue and technological advancement, it also celebrated Africa&apos;s rich cultural heritage. Throughout the summit, vibrant African music and traditional dance performances energized the venue, reminding participants that sustainable food systems are ultimately built around people, communities, and shared cultural values.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
                  {cultureImages.map((src, index) => (
                    <div key={index} className="aspect-square rounded-lg overflow-hidden shadow-lg bg-white">
                      <img src={src} alt={`African cultural dance ${index + 1}`} className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>

                <p className="text-lg text-gray-700 leading-relaxed">
                  These performances beautifully reflected the resilience, diversity, collaboration, and innovation that continue to drive Africa&apos;s agricultural transformation.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-primary-background mb-4">Key Lessons &amp; Takeaways from FINAS 2026</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Beyond the exhibition, networking sessions, and policy discussions, FINAS 2026 provided valuable insights into the future of Africa&apos;s agricultural transformation. For Good Partners, the summit reaffirmed several important lessons that will continue to shape our mission and the evolution of AgriScanAI.
                </p>

                <div className="space-y-4">
                  {[
                    ['Data is Becoming Agriculture&apos;s Most Valuable Asset', 'Sustainable agricultural growth depends on timely, reliable, and actionable data. This reinforces our commitment to expanding AgriScanAI as a trusted source of AI-powered insights.'],
                    ['Innovation Must Deliver Measurable Impact', 'Successful technologies are those that demonstrate tangible value, improve livelihoods, and address everyday agricultural challenges.'],
                    ['Partnerships Accelerate Transformation', 'The summit highlighted the importance of strong collaboration between governments, financial institutions, researchers, innovators, development partners, communities, and the private sector.'],
                    ['Access to Finance Requires Better Information', 'Reliable farm data, digital records, AI-powered analytics, and alternative approaches to risk assessment can help financial institutions make more informed lending decisions.'],
                    ['Farmers Must Remain at the Centre of Innovation', 'Technology should empower farmers, not complicate their work. Co-developed tools are more intuitive and more trusted.'],
                    ['Africa&apos;s Agricultural Future Will Be Powered by Collaboration, Technology, and Sustainable Investment', 'Realizing this vision will require sustained investment, supportive policies, inclusive financial systems, climate-smart technologies, and strong collaboration across the public and private sectors.'],
                  ].map(([title, description], index) => (
                    <div key={title} className="bg-white border rounded-xl p-5 shadow-sm">
                      <p className="font-semibold text-gray-900 mb-2">{index + 1}. {title}</p>
                      <p className="text-gray-700 text-sm leading-relaxed">{description}</p>
                    </div>
                  ))}
                </div>

                <div className="bg-[#e6f0fa] border-l-4 border-primary-light rounded-r-xl p-6 md:p-8 my-8">
                  <p className="text-xl md:text-2xl text-gray-800 font-medium italic leading-relaxed">
                    &ldquo;Farmers are not resistant to change; they are resistant to loss. Show them value they can trust, and they will run toward innovation.&rdquo;
                  </p>
                  <p className="text-lg text-gray-700 font-semibold mt-4">&mdash; Liza Karen Achagana, Business Development &amp; Partnerships Lead</p>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-primary-background mb-4">Looking Ahead</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Our return to FINAS demonstrates Good Partners&apos; continued commitment to advancing digital agriculture across Africa. From introducing AgriScanAI at FINAS 2025 to returning in 2026 with validated pilots, trained farmers, an expanding user community, and a more mature AI platform, our journey reflects the power of continuous learning, collaboration, and farmer-centered innovation.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">As we continue scaling AgriScanAI, we remain committed to:</p>
                <ul className="text-lg text-gray-700 leading-relaxed space-y-3 list-disc pl-6 mb-6">
                  <li>Expanding partnerships across Africa</li>
                  <li>Supporting the implementation of national agricultural transformation initiatives</li>
                  <li>Advancing responsible AI for agriculture</li>
                  <li>Empowering farmers with practical, accessible technology</li>
                  <li>Building sustainable and resilient agri-food systems</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-primary-background mb-4">Closing Reflection</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  As we leave FINAS 2026, we do so with renewed inspiration and a deeper sense of purpose. The conversations, partnerships, and ideas shared throughout the summit reaffirm our belief that technology, when designed with farmers and supported by strong ecosystems, has the power to transform agriculture across Africa.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  For Good Partners, FINAS 2026 was more than an event, it was a catalyst for the next chapter of our journey. We remain committed to advancing AgriScanAI, fostering meaningful collaborations, and delivering innovative solutions that create lasting impact for farmers, communities, and the future of Africa&apos;s food systems.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-primary-background mb-4">Event Highlights</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">Below are some highlights from our participation at FINAS 2026.</p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {galleryImages.map((src, index) => (
                    <div key={index} className="group overflow-hidden rounded-lg aspect-square shadow-sm hover:shadow-md transition-shadow bg-gray-100">
                      <img src={src} alt={`FINAS 2026 highlight ${index + 1}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                    </div>
                  ))}
                </div>
              </section>
            </div>

            <section className="text-center bg-gray-50 rounded-2xl p-8 md:p-12 border border-gray-100 shadow-sm mt-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Join Us in Transforming Agriculture</h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Whether you&apos;re a farmer, agribusiness, investor, or development partner, AgriScanAI invites you to be part of this movement.
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

            <div className="w-full h-px bg-gray-200 my-10" />

            <div className="flex justify-between items-center my-8">
              <Link
                to="/events/nairobi-startup-summit-2026"
                className="inline-flex items-center gap-2 text-primary-background font-semibold hover:text-primary-light transition-colors"
              >
                <svg className="w-5 h-5 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
                <span>Previous Event</span>
              </Link>

              <Link to="/events" className="inline-flex items-center gap-2 text-gray-600 hover:text-primary-background font-semibold transition-colors">
                <span>All Events</span>
              </Link>

              <div className="w-32 hidden sm:block" />
            </div>
          </div>
        </article>

        <Footer />
      </div>
    </PageTransition>
  );
}