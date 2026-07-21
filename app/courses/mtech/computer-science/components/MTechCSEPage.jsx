import MTechCSEHero           from './MTechCSEHero';
import MTechCSEOverview        from './MTechCSEOverview';
import MTechCSELearning        from './MTechCSELearning';
import MTechCSEPractical       from './MTechCSEPractical';
import MTechCSEProgramDetails  from './MTechCSEProgramDetails';
import MTechCSECareerOutcomes  from './MTechCSECareerOutcomes';
import MTechCSEWhyTulas        from './MTechCSEWhyTulas';
import MTechCSECTABanner       from './MTechCSECTABanner';

export default function MTechCSEPage() {
  return (
    <main>
      <MTechCSEHero />
      <MTechCSEOverview />
      <MTechCSELearning />
      <MTechCSEPractical />
      <MTechCSEProgramDetails />
      <MTechCSECareerOutcomes />
      <MTechCSEWhyTulas />
      <MTechCSECTABanner />
    </main>
  );
}
