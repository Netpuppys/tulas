'use client';

import BBALLBHero from './components/BBALLBHero';
import BBALLBOverview from './components/BBALLBOverview';
import BBALLBLearning from './components/BBALLBLearning';
import BBALLBPractical from './components/BBALLBPractical';
import BBALLBProgramDetails from './components/BBALLBProgramDetails';
import BBALLBCareerOutcomes from './components/BBALLBCareerOutcomes';
import BBALLBWhyTulas from './components/BBALLBWhyTulas';
import BBALLBCTABanner from './components/BBALLBCTABanner';
import MegaMenu from '@/component/Navbar/MegaMenu';
import NewNavbar from '@/component/Navbar/NewNavbar';
import NewFooter from '@/component/NewFooter';

export default function BBALLBPage() {
  return (
    <main>
      <div className="hidden md:block">
        <MegaMenu />
      </div>
      
      <div className="block md:hidden">
        <NewNavbar fullBanner={true}/>
      </div>         
      <BBALLBHero />
      <BBALLBOverview />
      <BBALLBLearning />
      <BBALLBPractical />
      <BBALLBProgramDetails />
      <BBALLBCareerOutcomes />
      <BBALLBWhyTulas />
      {/* <BBALLBCTABanner /> */}
      <NewFooter/>
    </main>
  );
}
