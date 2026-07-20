import BScAgHero from './BScAgHero';
import BScAgOverview from './BScAgOverview';
import BScAgLearning from './BScAgLearning';
import BScAgPractical from './BScAgPractical';
import BScAgProgramDetails from './BScAgProgramDetails';
import BScAgCareerOutcomes from './BScAgCareerOutcomes';
import BScAgWhyTulas from './BScAgWhyTulas';
import BScAgCTABanner from './BScAgCTABanner';

export default function BScAgPage() {
  return (
    <main>
      <BScAgHero />
      <BScAgOverview />
      <BScAgLearning />
      <BScAgPractical />
      <BScAgProgramDetails />
      <BScAgCareerOutcomes />
      <BScAgWhyTulas />
      <BScAgCTABanner />
    </main>
  );
}
