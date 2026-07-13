'use client';

import BTechECEHero from './components/BTechECEHero';
import BTechECEOverview from './components/BTechECEOverview';
import BTechECELearning from './components/BTechECELearning';
import BTechECEPractical from './components/BTechECEPractical';
import BTechECEProgramDetails from './components/BTechECEProgramDetails';
import BTechECECareerOutcomes from './components/BTechECECareerOutcomes';
import BTechECEWhyTulas from './components/BTechECEWhyTulas';
import BTechECECTABanner from './components/BTechECECTABanner';
import MegaMenu from '@/component/Navbar/MegaMenu';
import NewNavbar from '@/component/Navbar/NewNavbar';
import NewFooter from '@/component/NewFooter';

export default function BTechECEPage() {
  return (
    <main>
      <div className="hidden md:block">
        <MegaMenu />
      </div>
      
      <div className="block md:hidden">
        <NewNavbar fullBanner={true}/>
      </div>
      <BTechECEHero />
      <BTechECEOverview />
      <BTechECELearning />
      <BTechECEPractical />
      <BTechECEProgramDetails />
      <BTechECECareerOutcomes />
      <BTechECEWhyTulas />
      {/* <BTechECECTABanner /> */}
      <NewFooter/>
    </main>
  );
}
