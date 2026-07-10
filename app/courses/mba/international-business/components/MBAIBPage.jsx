import MBAIBHero          from './MBAIBHero';
import MBAIBOverview      from './MBAIBOverview';
import MBAIBLearning      from './MBAIBLearning';
import MBAIBPractical     from './MBAIBPractical';
import MBAIBProgramDetails from './MBAIBProgramDetails';
import MBAIBCareerOutcomes from './MBAIBCareerOutcomes';
import MBAIBWhyTulas      from './MBAIBWhyTulas';
import MBAIBCTABanner     from './MBAIBCTABanner';

export default function MBAIBPage() {
  return (
    <>
      <MBAIBHero />
      <MBAIBOverview />
      <MBAIBLearning />
      <MBAIBPractical />
      <MBAIBProgramDetails />
      <MBAIBCareerOutcomes />
      <MBAIBWhyTulas />
      <MBAIBCTABanner />
    </>
  );
}
