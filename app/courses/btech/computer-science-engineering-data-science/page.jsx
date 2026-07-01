import DSHero from './components/DSHero';
import DSOverview from './components/DSOverview';
import DSCurriculum from './components/DSCurriculum';
import DSCertifications from './components/DSCertifications';
import DSProgramDetails from './components/DSProgramDetails';
import DSCareerOutcomes from './components/DSCareerOutcomes';
import DSWhyTulas from './components/DSWhyTulas';
import DSCTABanner from './components/DSCTABanner';
import MegaMenu from '@/component/Navbar/MegaMenu';
import NewNavbar from '@/component/Navbar/NewNavbar';
import NewFooter from '@/component/NewFooter';

export default function DSPage() {
  return (
    <main>
      <div className="hidden md:block">
                          <MegaMenu />
                        </div>
                        
                        <div className="block md:hidden">
                          <NewNavbar fullBanner={true}/>
                        </div>
      <DSHero />
      <DSOverview />
      <DSCurriculum />
      <DSCertifications />
      <DSProgramDetails />
      <DSCareerOutcomes />
      <DSWhyTulas />
      <NewFooter/>      
    </main>
  );
}
