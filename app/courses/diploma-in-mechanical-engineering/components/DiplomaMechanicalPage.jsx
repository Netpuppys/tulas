import DiplomaMechanicalHero           from './DiplomaMechanicalHero';
import DiplomaMechanicalOverview        from './DiplomaMechanicalOverview';
import DiplomaMechanicalLearning        from './DiplomaMechanicalLearning';
import DiplomaMechanicalPractical       from './DiplomaMechanicalPractical';
import DiplomaMechanicalProgramDetails  from './DiplomaMechanicalProgramDetails';
import DiplomaMechanicalCareerOutcomes  from './DiplomaMechanicalCareerOutcomes';
import DiplomaMechanicalWhyTulas        from './DiplomaMechanicalWhyTulas';
import DiplomaMechanicalCTABanner       from './DiplomaMechanicalCTABanner';

export default function DiplomaMechanicalPage() {
  return (
    <main>
      <DiplomaMechanicalHero />
      <DiplomaMechanicalOverview />
      <DiplomaMechanicalLearning />
      <DiplomaMechanicalPractical />
      <DiplomaMechanicalProgramDetails />
      <DiplomaMechanicalCareerOutcomes />
      <DiplomaMechanicalWhyTulas />
      <DiplomaMechanicalCTABanner />
    </main>
  );
}
