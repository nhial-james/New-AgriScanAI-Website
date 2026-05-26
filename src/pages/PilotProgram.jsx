import { useEffect } from 'react';
import '../PilotProgram.css';
import Navbar from '../components/Navbar';
import PilotProgramHeroSection from '../components/PilotProgramHeroSection';
import PilotProgramPhotoSection from '../components/PilotProgramPhotoSection';
import PilotProgramIncludesSection from '../components/PilotProgramIncludesSection';
import PilotProgramTestimonialSection from '../components/PilotProgramTestimonialSection';
import PilotProgramGetInvolvedSection from '../components/PilotProgramGetInvolvedSection';
import JoinSection from '../components/JoinSection';
import Footer from '../components/Footer';

export default function PilotProgram() {
  useEffect(() => {
    document.title = 'Pilot Program | AgriScanAI';
  }, []);

  return (
    <div className="pilot-page">
      <Navbar />
      <PilotProgramHeroSection />
      <PilotProgramPhotoSection />
      <PilotProgramIncludesSection />
      <PilotProgramTestimonialSection />
      <PilotProgramGetInvolvedSection />
      <JoinSection />
      <Footer />
    </div>
  );
}
