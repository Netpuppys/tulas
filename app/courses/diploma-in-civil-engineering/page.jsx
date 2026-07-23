import DiplomaCivilHero           from './components/DiplomaCivilHero';
import DiplomaCivilOverview        from './components/DiplomaCivilOverview';
import DiplomaCivilLearning        from './components/DiplomaCivilLearning';
import DiplomaCivilPractical       from './components/DiplomaCivilPractical';
import DiplomaCivilProgramDetails  from './components/DiplomaCivilProgramDetails';
import DiplomaCivilCareerOutcomes  from './components/DiplomaCivilCareerOutcomes';
import DiplomaCivilWhyTulas        from './components/DiplomaCivilWhyTulas';
import DiplomaCivilCTABanner       from './components/DiplomaCivilCTABanner';
import MegaMenu from '@/component/Navbar/MegaMenu';
import NewNavbar from '@/component/Navbar/NewNavbar';
import NewFooter from '@/component/NewFooter';

export default function DiplomaCivilPage() {
  return (
    <main>
      <div className="hidden md:block">
               <MegaMenu/>
            </div>
                                                
            <div className="block md:hidden">
              <NewNavbar fullBanner={true}/>
            </div>      
      <DiplomaCivilHero />
      <DiplomaCivilOverview />
      <DiplomaCivilLearning />
      <DiplomaCivilPractical />
      <DiplomaCivilProgramDetails />
      <DiplomaCivilCareerOutcomes />
      <DiplomaCivilWhyTulas />
      {/* <DiplomaCivilCTABanner /> */}
      <NewFooter/>
    </main>
  );
}
