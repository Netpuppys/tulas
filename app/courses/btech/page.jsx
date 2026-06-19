import BtechSpecializations from './components/BtechSpecializations';
import AIIntegratedLearning from './components/AIIntegratedLearning';
import LabsProjectsExposure from './components/LabsProjectsExposure';
import EngineeringReadinessIndex from './components/EngineeringReadinessIndex';
import PlacementsCareerOutcomes from './components/PlacementsCareerOutcomes';
import EngineeringEcosystem from './components/EngineeringEcosystem';
import BtechCTABanner from './components/BtechCTABanner';
import BtechHero from './components/BtechHero';
import WhyBtech from './components/WhyBtech';
import MegaMenu from '@/component/Navbar/MegaMenu';
import NewNavbar from '@/component/Navbar/NewNavbar';
import NewFooter from '@/component/NewFooter';

export default function BtechPage() {
  return (
    <main>
      <div className="hidden md:block">
              <MegaMenu />
            </div>
            
            <div className="block md:hidden">
              <NewNavbar fullBanner={true}/>
            </div>
      <BtechHero/>
      <WhyBtech/>
      <BtechSpecializations />
      <AIIntegratedLearning />
      <LabsProjectsExposure />
      {/* <EngineeringReadinessIndex /> */}
      <PlacementsCareerOutcomes />
      {/* <EngineeringEcosystem /> */}
      {/* <BtechCTABanner /> */}
      <NewFooter/>
    </main>
  );
}
