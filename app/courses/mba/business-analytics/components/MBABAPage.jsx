'use client';
import MBABAHero from './MBABAHero';
import MBABAOverview from './MBABAOverview';
import MBABALearning from './MBABALearning';
import MBABAPractical from './MBABAPractical';
import MBABAProgramDetails from './MBABAProgramDetails';
import MBABACareerOutcomes from './MBABACareerOutcomes';
import MBABAWhyTulas from './MBABAWhyTulas';
import MBABACTABanner from './MBABACTABanner';

export default function MBABAPage() {
  return (
    <main>
      <MBABAHero />
      <MBABAOverview />
      <MBABALearning />
      <MBABAPractical />
      <MBABAProgramDetails />
      <MBABACareerOutcomes />
      <MBABAWhyTulas />
      <MBABACTABanner />
    </main>
  );
}
