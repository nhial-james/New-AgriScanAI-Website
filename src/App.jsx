import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './Home.css';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import PilotProgram from './pages/PilotProgram';
import Solutions from './pages/Solutions';
import Events from './pages/Events';
import Resources from './pages/Resources';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfUse from './pages/TermsOfUse';
import ICCF2025 from './components/ICCF2025';
import KenyaSoftwareAISummit2025 from './components/KenyaSoftwareAISummit2025';
import AgriFin2025 from './components/AgriFin2025';
import FoundersLive2025 from './components/FoundersLive2025';
import Finas2025 from './components/Finas2025';
import AIKigali2025 from './components/AIKigali2025';
import KakamegaTraining2026 from './components/KakamegaTraining2026';
import AmrefPHCCongress2026 from './components/AmrefPHCCongress2026';
import NairobiStartupSummit2026 from './components/NairobiStartupSummit2026';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
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
        <Route path="/events/ai-kigali-2025" element={<AIKigali2025 />} />
        <Route path="/events/agriscanai-farmer-training-kakamega-2026" element={<KakamegaTraining2026 />} />
        <Route path="/events/amref-2nd-phc-congress-2026" element={<AmrefPHCCongress2026 />} />
        <Route path="/events/nairobi-startup-summit-2026" element={<NairobiStartupSummit2026 />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-use" element={<TermsOfUse />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
