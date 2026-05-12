import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ChallengeSection from '../components/ChallengeSection';
import ApproachSection from '../components/ApproachSection';
import FeaturesSection from '../components/FeaturesSection';
import PartnershipSection from '../components/PartnershipSection';
import GlimpseSection from '../components/GlimpseSection';
import JoinSection from '../components/JoinSection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ChallengeSection />
      <ApproachSection />
      <FeaturesSection />
      <PartnershipSection />
      <GlimpseSection />
      <JoinSection />
      <Footer />
    </>
  );
}
