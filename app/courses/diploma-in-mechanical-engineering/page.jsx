import DiplomaMechanicalHero           from './components/DiplomaMechanicalHero';
import DiplomaMechanicalOverview        from './components/DiplomaMechanicalOverview';
import DiplomaMechanicalLearning        from './components/DiplomaMechanicalLearning';
import DiplomaMechanicalPractical       from './components/DiplomaMechanicalPractical';
import DiplomaMechanicalProgramDetails  from './components/DiplomaMechanicalProgramDetails';
import DiplomaMechanicalCareerOutcomes  from './components/DiplomaMechanicalCareerOutcomes';
import DiplomaMechanicalWhyTulas        from './components/DiplomaMechanicalWhyTulas';
import DiplomaMechanicalCTABanner       from './components/DiplomaMechanicalCTABanner';
import MegaMenu from '@/component/Navbar/MegaMenu';
import NewNavbar from '@/component/Navbar/NewNavbar';
import NewFooter from '@/component/NewFooter';

export default function DiplomaMechanicalPage() {
  return (
    <main>
      <div className="hidden md:block">
               <MegaMenu/>
            </div>
                                                
            <div className="block md:hidden">
              <NewNavbar fullBanner={true}/>
            </div>          
      <DiplomaMechanicalHero />
      <DiplomaMechanicalOverview />
      <DiplomaMechanicalLearning />
      <DiplomaMechanicalPractical />
      <DiplomaMechanicalProgramDetails />
      <DiplomaMechanicalCareerOutcomes />
      <DiplomaMechanicalWhyTulas />
      {/* <DiplomaMechanicalCTABanner /> */}
      <NewFooter/>
    </main>
  );
}
