'use client';
import BCFSHero from './BCFSHero';
import BCFSOverview from './BCFSOverview';
import BCFSLearning from './BCFSLearning';
import BCFSCurriculum from './BCFSCurriculum';
import BCFSPractical from './BCFSPractical';
import BCFSProgramDetails from './BCFSProgramDetails';
import BCFSCareerOutcomes from './BCFSCareerOutcomes';
import BCFSWhyTulas from './BCFSWhyTulas';
import BCFSCTABanner from './BCFSCTABanner';

export default function BCFSPage() {
  return (
    <main>
      <BCFSHero />
      <BCFSOverview />
      <BCFSLearning />
      <BCFSCurriculum />
      <BCFSPractical />
      <BCFSProgramDetails />
      <BCFSCareerOutcomes />
      <BCFSWhyTulas />
      <BCFSCTABanner />
    </main>
  );
}
