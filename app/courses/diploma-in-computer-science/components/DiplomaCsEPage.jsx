import DiplomaCsEHero           from './DiplomaCsEHero';
import DiplomaCsEOverview        from './DiplomaCsEOverview';
import DiplomaCsELearning        from './DiplomaCsELearning';
import DiplomaCsEPractical       from './DiplomaCsEPractical';
import DiplomaCsEProgramDetails  from './DiplomaCsEProgramDetails';
import DiplomaCsECareerOutcomes  from './DiplomaCsECareerOutcomes';
import DiplomaCsEWhyTulas        from './DiplomaCsEWhyTulas';
import DiplomaCsECTABanner       from './DiplomaCsECTABanner';

export default function DiplomaCsEPage() {
  return (
    <main>
      <DiplomaCsEHero />
      <DiplomaCsEOverview />
      <DiplomaCsELearning />
      <DiplomaCsEPractical />
      <DiplomaCsEProgramDetails />
      <DiplomaCsECareerOutcomes />
      <DiplomaCsEWhyTulas />
      <DiplomaCsECTABanner />
    </main>
  );
}
