import BTechCEHero           from './BTechCEHero';
import BTechCEOverview       from './BTechCEOverview';
import BTechCELearning       from './BTechCELearning';
import BTechCEPractical      from './BTechCEPractical';
import BTechCEProgramDetails from './BTechCEProgramDetails';
import BTechCECareerOutcomes from './BTechCECareerOutcomes';
import BTechCEWhyTulas       from './BTechCEWhyTulas';
import BTechCECTABanner      from './BTechCECTABanner';

export default function BTechCEPage() {
  return (
    <>
      <BTechCEHero />
      <BTechCEOverview />
      <BTechCELearning />
      <BTechCEPractical />
      <BTechCEProgramDetails />
      <BTechCECareerOutcomes />
      <BTechCEWhyTulas />
      <BTechCECTABanner />
    </>
  );
}
