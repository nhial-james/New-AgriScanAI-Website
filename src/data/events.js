// Event listing shared by the Events page and route metadata (src/seo/routes.js)
import IccfImg from '../assets/ICCF 2025.webp'
import KenyaAIImg from '../assets/The Kenya Software & AI Summit 2025.webp'
import AgriFinImg from '../assets/agrifin_hero_image.webp'
import FoundersLiveImg from '../assets/Founders-Live-Nairobi-2025-Hero.webp'
import FinasImg from '../assets/FINAS-2025-hero.webp'
import Finas2026Img from '../assets/images/FINAS 2026 Images/FINAS 2026 Hero Image.jpeg'
import KigaliImg from '../assets/ai-kigali-2025-Hero.webp'
import KakamegaHero from '../assets/events/kakamega-training-2026-images/kakamega-training-hero-image.webp';
import AmrefHero from '../assets/events/Amref-2nd-PHC-Congres-Images/DSC_7252.webp';
import StartupHero from '../assets/events/Nairobi-StartUp-2026/Nairobi StartUp Summit.jpg';

export const events = [
  {
    id: 10,
    image: Finas2026Img,
    date: 'June 30 – July 2, 2026',
    location: 'KICC, Nairobi, Kenya',
    title: 'Good Partners Returns to FINAS 2026: Showcasing AgriScanAI and Advancing Africa\'s Sustainable Food Systems',
    excerpt: 'Good Partners returned to FINAS 2026 to showcase AgriScanAI\'s growth, engage stakeholders on agricultural finance, and highlight the progress made through farmer pilots and real-world deployments.',
    slug: 'finas-2026',
  },
  {
    id: 9,
    image: StartupHero,
    date: 'May 28–29, 2026',
    location: 'USIU Africa, Nairobi',
    title: 'Good Partners at the 4th Edition of Nairobi Startup Summit & Awards',
    excerpt: 'Good Partners presented AgriScanAI and BetterPAY at the 4th Nairobi Startup Summit, engaging East Africa’s innovation ecosystem on data-driven agriculture, secure payments, and community accountability.',
    slug: 'nairobi-startup-summit-2026',
  },
  {
    id: 7,
    image: KakamegaHero,
    date: 'March 23–25, 2026',
    location: 'Kakamega County, Kenya',
    title: 'AgriScanAI Farmer Training in Kakamega: Empowering Smallholder Farmers Through AI',
    excerpt: 'Good Partners partnered with Kilimo Permaculture (KTIP) to onboard 103 farmers in Ikholomani, Kakamega. Farmers received hands-on training on AI crop disease scanning, record keeping, and advisory workflows.',
    slug: 'agriscanai-farmer-training-kakamega-2026',
  },
  {
    id: 8,
    image: AmrefHero,
    date: 'March 4–6, 2026',
    location: 'Nairobi, Kenya',
    title: 'Good Partners at the 2nd Primary Health Care Congress, Nairobi 2026',
    excerpt: 'Good Partners showcased BetterPay for attendance and payment verification at the 2nd PHC Congress hosted by Amref Health Africa and MoH Kenya. Highlighting transparent systems for community health programmes.',
    slug: 'amref-2nd-phc-congress-2026',
  },
  {
    id: 1,
    image: IccfImg, // replace with: import IccfImg from '../assets/iccf-2025.jpg'
    date: 'November 18–19, 2025',
    location: 'Sarit Expo Centre, Nairobi',
    title: 'AgriScanAI at the International Conference on Contract Farming (ICCF) 2025',
    excerpt: 'AgriScanAI showcased transformative AI-powered farm management solutions at ICCF 2025, demonstrating how technology can revolutionize contract farming by providing transparent, data-driven insights that build trust between farmers and buyers.',
    slug: 'iccf-2025',
  },
  {
    id: 2,
    image: KenyaAIImg, // replace with: import KenyaAIImg from '../assets/kenya-software-ai-summit-2025.jpg'
    date: 'November 10–12, 2025',
    location: 'Moi University Annex Campus, Eldoret',
    title: 'AgriScanAI at the Kenya Software & AI Summit 2025',
    excerpt: 'AgriScanAI participated in the Kenya Software & AI Summit 2025, showcasing AI-powered agricultural innovation and positioning Kenya as a continental leader in technology-driven transformation.',
    slug: 'kenya-software-ai-summit-2025',
  },
  {
    id: 3,
    image: AgriFinImg, // replace with: import AgriFinImg from '../assets/agrifin-2025.jpg'
    date: 'October 14, 2025',
    location: 'Radisson Blu Hotel, Upper Hill, Nairobi',
    title: 'AgriScanAI Showcased at the 9th Annual AgriFin Learning Event (ALE 2025)',
    excerpt: "AgriScanAI proudly participated in the 9th Annual AgriFin Learning Event hosted under the theme 'Data-Driven Innovations and Investments: Harnessing Intelligence to Build Sustainable, Investable Agri-Food Systems.'",
    slug: 'agrifin-2025',
  },
  {
    id: 4,
    image: FoundersLiveImg, // replace with: import FoundersLiveImg from '../assets/founders-live-2025.jpg'
    date: 'September 18, 2025',
    location: 'BaoBox, Nairobi',
    title: 'AgriScanAI Wins at Founders Live Nairobi 2025',
    excerpt: 'AgriScanAI emerged as the winner of Founders Live Nairobi, where we pitched our groundbreaking AI-powered solution. The global pitch competition celebrated creativity, resilience, and bold ideas shaping the future of entrepreneurship.',
    slug: 'founders-live-2025',
  },
  {
    id: 5,
    image: FinasImg, // replace with: import FinasImg from '../assets/finas-2025.jpg'
    date: 'May 20–22, 2025',
    location: 'KICC, Nairobi, Kenya',
    title: 'Financing Agri-food Systems Sustainably Conference 2025',
    excerpt: 'AgriScanAI took center stage at FINAS 2025, a high-level gathering focused on building resilient and sustainable food systems in Africa. We shared insights on digital solutions for agri-finance and smallholder farmer support.',
    slug: 'finas-2025',
  },
  {
    id: 6,
    image: KigaliImg, // replace with: import KigaliImg from '../assets/ai-kigali-2025.jpg'
    date: 'April 3–4, 2025',
    location: 'Kigali, Rwanda',
    title: 'Global AI Summit on Africa (AI Kigali 2025)',
    excerpt: "AgriScanAI participated in the inaugural Global AI Summit on Africa under the theme 'AI and Africa's Demographic Dividend: Reimagining Economic Opportunities for Africa's Workforce.'",
    slug: 'ai-kigali-2025',
  },
];
