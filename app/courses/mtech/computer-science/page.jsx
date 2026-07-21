import MTechCSEHero           from './components/MTechCSEHero';
import MTechCSEOverview        from './components/MTechCSEOverview';
import MTechCSELearning        from './components/MTechCSELearning';
import MTechCSEPractical       from './components/MTechCSEPractical';
import MTechCSEProgramDetails  from './components/MTechCSEProgramDetails';
import MTechCSECareerOutcomes  from './components/MTechCSECareerOutcomes';
import MTechCSEWhyTulas        from './components/MTechCSEWhyTulas';
import MTechCSECTABanner       from './components/MTechCSECTABanner';
import MegaMenu from '@/component/Navbar/MegaMenu';
import NewNavbar from '@/component/Navbar/NewNavbar';
import NewFooter from '@/component/NewFooter';

export default function MTechCSEPage() {
  return (
    <main>
      <div className="hidden md:block">
                                <MegaMenu/>
                              </div>
                              
                              <div className="block md:hidden">
                                <NewNavbar fullBanner={true}/>
                              </div>
      <MTechCSEHero />
      <MTechCSEOverview />
      <MTechCSELearning />
      <MTechCSEPractical />
      <MTechCSEProgramDetails />
      <MTechCSECareerOutcomes />
      <MTechCSEWhyTulas />
      {/* <MTechCSECTABanner /> */}
      <NewFooter/>
    </main>
  );
}
