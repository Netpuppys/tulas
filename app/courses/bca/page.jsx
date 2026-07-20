import BCAGHero from './components/BCAGHero';
import BCAGOverview from './components/BCAGOverview';
import BCAGLearning from './components/BCAGLearning';
import BCAGPractical from './components/BCAGPractical';
import BCAGProgramDetails from './components/BCAGProgramDetails';
import BCAGCareerOutcomes from './components/BCAGCareerOutcomes';
import BCAGWhyTulas from './components/BCAGWhyTulas';
import BCAGCTABanner from './components/BCAGCTABanner';
import MegaMenu from '@/component/Navbar/MegaMenu';
import NewNavbar from '@/component/Navbar/NewNavbar';
import NewFooter from '@/component/NewFooter';

export default function BCAGPage() {
  return (
    <main>
      <div className="hidden md:block">
                    <MegaMenu/>
                  </div>
                  
                  <div className="block md:hidden">
                    <NewNavbar fullBanner={true}/>
                  </div>  
      <BCAGHero />
      <BCAGOverview />
      <BCAGLearning />
      <BCAGPractical />
      <BCAGProgramDetails />
      <BCAGCareerOutcomes />
      <BCAGWhyTulas />
      {/* <BCAGCTABanner /> */}
      <NewFooter/>
    </main>
  );
}
