import MBAIBHero          from './components/MBAIBHero';
import MBAIBOverview      from './components/MBAIBOverview';
import MBAIBLearning      from './components/MBAIBLearning';
import MBAIBPractical     from './components/MBAIBPractical';
import MBAIBProgramDetails from './components/MBAIBProgramDetails';
import MBAIBCareerOutcomes from './components/MBAIBCareerOutcomes';
import MBAIBWhyTulas      from './components/MBAIBWhyTulas';
import MBAIBCTABanner     from './components/MBAIBCTABanner';
import NewFooter from '@/component/NewFooter';
import MegaMenu from '@/component/Navbar/MegaMenu';
import NewNavbar from '@/component/Navbar/NewNavbar';

export default function MBAIBPage() {
  return (
    <>
    <div className="hidden md:block">
                      <MegaMenu />
                    </div>
                    
                    <div className="block md:hidden">
                      <NewNavbar fullBanner={true}/>
                    </div>
      <MBAIBHero />
      <MBAIBOverview />
      <MBAIBLearning />
      <MBAIBPractical />
      <MBAIBProgramDetails />
      <MBAIBCareerOutcomes />
      <MBAIBWhyTulas />
      {/* <MBAIBCTABanner /> */}
      <NewFooter/>
    </>
  );
}
