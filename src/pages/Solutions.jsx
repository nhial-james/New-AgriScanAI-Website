import Navbar from '../components/Navbar';
import SolutionsHeroSection from '../components/SolutionsHeroSection';
import SolutionsTargetAudienceSection from '../components/SolutionsTargetAudienceSection';
import SolutionsWebAppSection from '../components/SolutionsWebAppSection';
import SolutionsInsightSection from '../components/SolutionsInsightSection';
import SolutionsAgriPaySection from '../components/SolutionsAgriPaySection';
import SolutionsGetInvolvedSection from '../components/SolutionsGetInvolvedSection';
import SolutionsJoinSection from '../components/SolutionsJoinSection';
import Footer from '../components/Footer';
import '../Solutions.css';

export default function Solutions() {
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
        <SolutionsJoinSection />
      </main>
      <Footer />
    </>
  );
}
