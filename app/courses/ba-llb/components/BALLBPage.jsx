'use client';

import BALLBHero from './BALLBHero';
import BALLBOverview from './BALLBOverview';
import BALLBLearning from './BALLBLearning';
import BALLBPractical from './BALLBPractical';
import BALLBProgramDetails from './BALLBProgramDetails';
import BALLBCareerOutcomes from './BALLBCareerOutcomes';
import BALLBWhyTulas from './BALLBWhyTulas';
import BALLBCTABanner from './BALLBCTABanner';

export default function BALLBPage() {
  return (
    <main>
      <BALLBHero />
      <BALLBOverview />
      <BALLBLearning />
      <BALLBPractical />
      <BALLBProgramDetails />
      <BALLBCareerOutcomes />
      <BALLBWhyTulas />
      <BALLBCTABanner />
    </main>
  );
}
