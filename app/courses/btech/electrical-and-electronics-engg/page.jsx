'use client';

import BTechEEEHero from './components/BTechEEEHero';
import BTechEEEOverview from './components/BTechEEEOverview';
import BTechEEELearning from './components/BTechEEELearning';
import BTechEEEPractical from './components/BTechEEEPractical';
import BTechEEEProgramDetails from './components/BTechEEEProgramDetails';
import BTechEEECareerOutcomes from './components/BTechEEECareerOutcomes';
import BTechEEEWhyTulas from './components/BTechEEEWhyTulas';
import BTechEEECTABanner from './components/BTechEEECTABanner';
import MegaMenu from '@/component/Navbar/MegaMenu';
import NewNavbar from '@/component/Navbar/NewNavbar';
import NewFooter from '@/component/NewFooter';

export default function BTechEEEPage() {
  return (
    <main>
       <div className="hidden md:block">
              <MegaMenu />
            </div>
            
            <div className="block md:hidden">
              <NewNavbar fullBanner={true}/>
            </div>
      <BTechEEEHero />
      <BTechEEEOverview />
      <BTechEEELearning />
      <BTechEEEPractical />
      <BTechEEEProgramDetails />
      <BTechEEECareerOutcomes />
      <BTechEEEWhyTulas />
      {/* <BTechEEECTABanner /> */}
      <NewFooter/>
    </main>
  );
}
