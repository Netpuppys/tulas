import CyberSecOverview from './components/CyberSecOverview';
import CyberSecCurriculum from './components/CyberSecCurriculum';
import CyberSecCertifications from './components/CyberSecCertifications';
import CyberSecProgramDetails from './components/CyberSecProgramDetails';
import CyberSecCareerOutcomes from './components/CyberSecCareerOutcomes';
import CyberSecWhyTulas from './components/CyberSecWhyTulas';
import CyberSecCTABanner from './components/CyberSecCTABanner';
import CyberSecHero from './components/CyberSecHero';
import NewFooter from '@/component/NewFooter';
import MegaMenu from '@/component/Navbar/MegaMenu';
import NewNavbar from '@/component/Navbar/NewNavbar';

export default function CyberSecPage() {
  return (
    <main>
      <div className="hidden md:block">
                    <MegaMenu />
                  </div>
                  
                  <div className="block md:hidden">
                    <NewNavbar fullBanner={true}/>
                  </div>
      <CyberSecHero/>
      <CyberSecOverview />
      <CyberSecCurriculum />
      <CyberSecCertifications />
      <CyberSecProgramDetails />
      <CyberSecCareerOutcomes />
      <CyberSecWhyTulas />
      {/* <CyberSecCTABanner /> */}
      <NewFooter/>
    </main>
  );
}
