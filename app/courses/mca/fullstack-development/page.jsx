import MCAFSHero from './components/MCAFSHero';
import MCAFSOverview from './components/MCAFSOverview';
import MCAFSLearning from './components/MCAFSLearning';
import MCAFSCurriculum from './components/MCAFSCurriculum';
import MCAFSPractical from './components/MCAFSPractical';
import MCAFSProgramDetails from './components/MCAFSProgramDetails';
import MCAFSCareerOutcomes from './components/MCAFSCareerOutcomes';
import MCAFSWhyTulas from './components/MCAFSWhyTulas';
import MCAFSCTABanner from './components/MCAFSCTABanner';
import MegaMenu from '@/component/Navbar/MegaMenu';
import NewNavbar from '@/component/Navbar/NewNavbar';
import NewFooter from '@/component/NewFooter';

export default function MCAFSPage() {
  return (
    <main>
       <div className="hidden md:block">
              <MegaMenu/>
            </div>
            
            <div className="block md:hidden">
              <NewNavbar fullBanner={true}/>
            </div>      
      <MCAFSHero />
      <MCAFSOverview />
      <MCAFSLearning />
      <MCAFSCurriculum />
      <MCAFSPractical />
      <MCAFSProgramDetails />
      <MCAFSCareerOutcomes />
      <MCAFSWhyTulas />
      {/* <MCAFSCTABanner /> */}
      <NewFooter/>
    </main>
  );
}
