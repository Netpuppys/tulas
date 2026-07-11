import BTechCEHero           from './components/BTechCEHero';
import BTechCEOverview       from './components/BTechCEOverview';
import BTechCELearning       from './components/BTechCELearning';
import BTechCEPractical      from './components/BTechCEPractical';
import BTechCEProgramDetails from './components/BTechCEProgramDetails';
import BTechCECareerOutcomes from './components/BTechCECareerOutcomes';
import BTechCEWhyTulas       from './components/BTechCEWhyTulas';
import BTechCECTABanner      from './components/BTechCECTABanner';
import MegaMenu from '@/component/Navbar/MegaMenu';
import NewNavbar from '@/component/Navbar/NewNavbar';
import NewFooter from '@/component/NewFooter';

export default function BTechCEPage() {
  return (
    <>
    <div className="hidden md:block">
                          <MegaMenu />
                        </div>
                        
                        <div className="block md:hidden">
                          <NewNavbar fullBanner={true}/>
                        </div>
      <BTechCEHero />
      <BTechCEOverview />
      <BTechCELearning />
      <BTechCEPractical />
      <BTechCEProgramDetails />
      <BTechCECareerOutcomes />
      <BTechCEWhyTulas />
      {/* <BTechCECTABanner /> */}
      <NewFooter/>
    </>
  );
}
