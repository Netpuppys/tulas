'use client';

import BBALLBHero from './BBALLBHero';
import BBALLBOverview from './BBALLBOverview';
import BBALLBLearning from './BBALLBLearning';
import BBALLBPractical from './BBALLBPractical';
import BBALLBProgramDetails from './BBALLBProgramDetails';
import BBALLBCareerOutcomes from './BBALLBCareerOutcomes';
import BBALLBWhyTulas from './BBALLBWhyTulas';
import BBALLBCTABanner from './BBALLBCTABanner';

export default function BBALLBPage() {
  return (
    <main>
      <BBALLBHero />
      <BBALLBOverview />
      <BBALLBLearning />
      <BBALLBPractical />
      <BBALLBProgramDetails />
      <BBALLBCareerOutcomes />
      <BBALLBWhyTulas />
      <BBALLBCTABanner />
    </main>
  );
}
