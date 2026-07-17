import MCAGHero from './components/MCAGHero';
import MCAGOverview from './components/MCAGOverview';
import MCAGLearning from './components/MCAGLearning';
import MCAGPractical from './components/MCAGPractical';
import MCAGProgramDetails from './components/MCAGProgramDetails';
import MCAGCareerOutcomes from './components/MCAGCareerOutcomes';
import MCAGWhyTulas from './components/MCAGWhyTulas';
import MCAGCTABanner from './components/MCAGCTABanner';
import MegaMenu from '@/component/Navbar/MegaMenu';
import NewNavbar from '@/component/Navbar/NewNavbar';
import NewFooter from '@/component/NewFooter';

export default function MCAGPage() {
  return (
    <main>
       <div className="hidden md:block">
              <MegaMenu/>
            </div>
            
            <div className="block md:hidden">
              <NewNavbar fullBanner={true}/>
            </div>        
      <MCAGHero />
      <MCAGOverview />
      <MCAGLearning />
      <MCAGPractical />
      <MCAGProgramDetails />
      <MCAGCareerOutcomes />
      <MCAGWhyTulas />
      {/* <MCAGCTABanner /> */}
      <NewFooter/>
    </main>
  );
}
