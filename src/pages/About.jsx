import '../About.css';
import Navbar from '../components/Navbar';
import AboutHeroSection from '../components/AboutHeroSection';
import AboutIntroSection from '../components/AboutIntroSection';
import AboutEmpoweringSection from '../components/AboutEmpoweringSection';
import AboutIdeaSection from '../components/AboutIdeaSection';
import AboutMissionVisionSection from '../components/AboutMissionVisionSection';
import AboutGoodPartnersSection from '../components/AboutGoodPartnersSection';
import AboutWhyChooseSection from '../components/AboutWhyChooseSection';
import AboutJoinJourneySection from '../components/AboutJoinJourneySection';
import Footer from '../components/Footer';

export default function About() {
  return (
    <>
      <Navbar />
      <AboutHeroSection />
      <AboutIntroSection />
      <AboutEmpoweringSection />
      <AboutIdeaSection />
      <AboutMissionVisionSection />
      <AboutGoodPartnersSection />
      <AboutWhyChooseSection />
      <AboutJoinJourneySection />
      <Footer />
    </>
  );
}
