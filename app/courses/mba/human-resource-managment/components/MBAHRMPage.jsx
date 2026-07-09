'use client';

import MBAHRMHero          from './MBAHRMHero';
import MBAHRMOverview      from './MBAHRMOverview';
import MBAHRMLearning      from './MBAHRMLearning';
import MBAHRMPractical     from './MBAHRMPractical';
import MBAHRMProgramDetails from './MBAHRMProgramDetails';
import MBAHRMCareerOutcomes from './MBAHRMCareerOutcomes';
import MBAHRMWhyTulas      from './MBAHRMWhyTulas';
import MBAHRMCTABanner     from './MBAHRMCTABanner';

export default function MBAHRMPage() {
  return (
    <>
      <MBAHRMHero />
      <MBAHRMOverview />
      <MBAHRMLearning />
      <MBAHRMPractical />
      <MBAHRMProgramDetails />
      <MBAHRMCareerOutcomes />
      <MBAHRMWhyTulas />
      <MBAHRMCTABanner />
    </>
  );
}
