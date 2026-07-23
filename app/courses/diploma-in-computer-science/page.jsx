import DiplomaCsEHero           from './components/DiplomaCsEHero';
import DiplomaCsEOverview        from './components/DiplomaCsEOverview';
import DiplomaCsELearning        from './components/DiplomaCsELearning';
import DiplomaCsEPractical       from './components/DiplomaCsEPractical';
import DiplomaCsEProgramDetails  from './components/DiplomaCsEProgramDetails';
import DiplomaCsECareerOutcomes  from './components/DiplomaCsECareerOutcomes';
import DiplomaCsEWhyTulas        from './components/DiplomaCsEWhyTulas';
import DiplomaCsECTABanner       from './components/DiplomaCsECTABanner';
import MegaMenu from '@/component/Navbar/MegaMenu';
import NewNavbar from '@/component/Navbar/NewNavbar';
import NewFooter from '@/component/NewFooter';

export default function DiplomaCsEPage() {
  return (
    <main>
      <div className="hidden md:block">
               <MegaMenu/>
            </div>
                                                
            <div className="block md:hidden">
              <NewNavbar fullBanner={true}/>
            </div>
      <DiplomaCsEHero />
      <DiplomaCsEOverview />
      <DiplomaCsELearning />
      <DiplomaCsEPractical />
      <DiplomaCsEProgramDetails />
      <DiplomaCsECareerOutcomes />
      <DiplomaCsEWhyTulas />
      {/* <DiplomaCsECTABanner /> */}
      <NewFooter/>
    </main>
  );
}
