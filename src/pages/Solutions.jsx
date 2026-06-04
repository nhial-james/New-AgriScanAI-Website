import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import SolutionsHeroSection from '../components/SolutionsHeroSection';
import SolutionsTargetAudienceSection from '../components/SolutionsTargetAudienceSection';
import SolutionsWebAppSection from '../components/SolutionsWebAppSection';
import SolutionsInsightSection from '../components/SolutionsInsightSection';
import SolutionsAgriPaySection from '../components/SolutionsAgriPaySection';
import SolutionsGetInvolvedSection from '../components/SolutionsGetInvolvedSection';
import JoinSection from '../components/JoinSection';
import Footer from '../components/Footer';
import '../Solutions.css';

export default function Solutions() {
  useEffect(() => {
    document.title = 'Solutions | AgriScanAI';
  }, []);

  return (
    <>
      <Navbar />
      <main className="sol-page">
        <SolutionsHeroSection />
        <SolutionsTargetAudienceSection />
        <SolutionsWebAppSection />
        <SolutionsInsightSection />
        <SolutionsAgriPaySection />
        <SolutionsGetInvolvedSection />
        <JoinSection />
      </main>
      <Footer />
    </>
  );
}
