import MCAFSHero from './MCAFSHero';
import MCAFSOverview from './MCAFSOverview';
import MCAFSLearning from './MCAFSLearning';
import MCAFSCurriculum from './MCAFSCurriculum';
import MCAFSPractical from './MCAFSPractical';
import MCAFSProgramDetails from './MCAFSProgramDetails';
import MCAFSCareerOutcomes from './MCAFSCareerOutcomes';
import MCAFSWhyTulas from './MCAFSWhyTulas';
import MCAFSCTABanner from './MCAFSCTABanner';

export default function MCAFSPage() {
  return (
    <main>
      <MCAFSHero />
      <MCAFSOverview />
      <MCAFSLearning />
      <MCAFSCurriculum />
      <MCAFSPractical />
      <MCAFSProgramDetails />
      <MCAFSCareerOutcomes />
      <MCAFSWhyTulas />
      <MCAFSCTABanner />
    </main>
  );
}
