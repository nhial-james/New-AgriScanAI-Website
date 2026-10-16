import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import './Home.css';
import ScrollToTop from './components/ScrollToTop';
import Seo from './seo/Seo';
import Home from './pages/Home';

// Routes other than Home are code-split so the landing page ships less JavaScript.
// The router itself lives in main.jsx (BrowserRouter) and entry-server.jsx (StaticRouter).
const About = lazy(() => import('./pages/About'));
const PilotProgram = lazy(() => import('./pages/PilotProgram'));
const Solutions = lazy(() => import('./pages/Solutions'));
const Events = lazy(() => import('./pages/Events'));
const Resources = lazy(() => import('./pages/Resources'));
const Contact = lazy(() => import('./pages/Contact'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const TermsOfUse = lazy(() => import('./pages/TermsOfUse'));
const NotFound = lazy(() => import('./pages/NotFound'));
const ICCF2025 = lazy(() => import('./components/ICCF2025'));
const KenyaSoftwareAISummit2025 = lazy(() => import('./components/KenyaSoftwareAISummit2025'));
const AgriFin2025 = lazy(() => import('./components/AgriFin2025'));
const FoundersLive2025 = lazy(() => import('./components/FoundersLive2025'));
const Finas2025 = lazy(() => import('./components/Finas2025'));
const Finas2026 = lazy(() => import('./components/Finas2026'));
const AIKigali2025 = lazy(() => import('./components/AIKigali2025'));
const KakamegaTraining2026 = lazy(() => import('./components/KakamegaTraining2026'));
const AmrefPHCCongress2026 = lazy(() => import('./components/AmrefPHCCongress2026'));
const NairobiStartupSummit2026 = lazy(() => import('./components/NairobiStartupSummit2026'));

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Seo />
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/pilot-program" element={<PilotProgram />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/events" element={<Events />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/events/iccf-2025" element={<ICCF2025 />} />
          <Route path="/events/kenya-software-ai-summit-2025" element={<KenyaSoftwareAISummit2025 />} />
          <Route path="/events/agrifin-2025" element={<AgriFin2025 />} />
          <Route path="/events/founders-live-2025" element={<FoundersLive2025 />} />
          <Route path="/events/finas-2025" element={<Finas2025 />} />
          <Route path="/events/finas-2026" element={<Finas2026 />} />
          <Route path="/events/ai-kigali-2025" element={<AIKigali2025 />} />
          <Route path="/events/agriscanai-farmer-training-kakamega-2026" element={<KakamegaTraining2026 />} />
          <Route path="/events/amref-2nd-phc-congress-2026" element={<AmrefPHCCongress2026 />} />
          <Route path="/events/nairobi-startup-summit-2026" element={<NairobiStartupSummit2026 />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-use" element={<TermsOfUse />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
}
