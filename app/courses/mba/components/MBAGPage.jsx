'use client';

import MBAGHero           from './MBAGHero';
import MBAGOverview       from './MBAGOverview';
import MBAGCurriculum     from './MBAGCurriculum';
import MBAGCertifications from './MBAGCertifications';
import MBAGProgramDetails from './MBAGProgramDetails';
import MBAGCareerOutcomes from './MBAGCareerOutcomes';
import MBAGWhyTulas       from './MBAGWhyTulas';
import MBAGCTABanner      from './MBAGCTABanner';

export default function MBAGPage() {
  return (
    <>
      <MBAGHero />
      <MBAGOverview />
      <MBAGCurriculum />
      <MBAGCertifications />
      <MBAGProgramDetails />
      <MBAGCareerOutcomes />
      <MBAGWhyTulas />
      <MBAGCTABanner />
    </>
  );
}
