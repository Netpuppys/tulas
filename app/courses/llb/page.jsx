'use client';

import LLBHero from './components/LLBHero';
import LLBOverview from './components/LLBOverview';
import LLBLearning from './components/LLBLearning';
import LLBPractical from './components/LLBPractical';
import LLBProgramDetails from './components/LLBProgramDetails';
import LLBCareerOutcomes from './components/LLBCareerOutcomes';
import LLBWhyTulas from './components/LLBWhyTulas';
import LLBCTABanner from './components/LLBCTABanner';
import MegaMenu from '@/component/Navbar/MegaMenu';
import NewNavbar from '@/component/Navbar/NewNavbar';
import NewFooter from '@/component/NewFooter';

export default function LLBPage() {
  return (
    <main>
      <div className="hidden md:block">
        <MegaMenu />
      </div>
      
      <div className="block md:hidden">
        <NewNavbar fullBanner={true}/>
      </div>      
      <LLBHero />
      <LLBOverview />
      <LLBLearning />
      <LLBPractical />
      <LLBProgramDetails />
      <LLBCareerOutcomes />
      <LLBWhyTulas />
      {/* <LLBCTABanner /> */}
      <NewFooter/>
    </main>
  );
}
