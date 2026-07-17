import MCAGHero from './MCAGHero';
import MCAGOverview from './MCAGOverview';
import MCAGLearning from './MCAGLearning';
import MCAGPractical from './MCAGPractical';
import MCAGProgramDetails from './MCAGProgramDetails';
import MCAGCareerOutcomes from './MCAGCareerOutcomes';
import MCAGWhyTulas from './MCAGWhyTulas';
import MCAGCTABanner from './MCAGCTABanner';

export default function MCAGPage() {
  return (
    <main>
      <MCAGHero />
      <MCAGOverview />
      <MCAGLearning />
      <MCAGPractical />
      <MCAGProgramDetails />
      <MCAGCareerOutcomes />
      <MCAGWhyTulas />
      <MCAGCTABanner />
    </main>
  );
}
