'use client';

import LLBHero from './LLBHero';
import LLBOverview from './LLBOverview';
import LLBLearning from './LLBLearning';
import LLBPractical from './LLBPractical';
import LLBProgramDetails from './LLBProgramDetails';
import LLBCareerOutcomes from './LLBCareerOutcomes';
import LLBWhyTulas from './LLBWhyTulas';
import LLBCTABanner from './LLBCTABanner';

export default function LLBPage() {
  return (
    <main>
      <LLBHero />
      <LLBOverview />
      <LLBLearning />
      <LLBPractical />
      <LLBProgramDetails />
      <LLBCareerOutcomes />
      <LLBWhyTulas />
      <LLBCTABanner />
    </main>
  );
}
