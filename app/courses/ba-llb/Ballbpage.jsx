'use client';

import BALLBHero from './components/BALLBHero';
import BALLBOverview from './components/BALLBOverview';
import BALLBLearning from './components/BALLBLearning';
import BALLBPractical from './components/BALLBPractical';
import BALLBProgramDetails from './components/BALLBProgramDetails';
import BALLBCareerOutcomes from './components/BALLBCareerOutcomes';
import BALLBWhyTulas from './components/BALLBWhyTulas';
import BALLBCTABanner from './components/BALLBCTABanner';
import MegaMenu from '@/component/Navbar/MegaMenu';
import NewNavbar from '@/component/Navbar/NewNavbar';
import NewFooter from '@/component/NewFooter';


export default function Ballbpage() {
  return (
    <main>
      <div className="hidden md:block">
        <MegaMenu />
      </div>
      
      <div className="block md:hidden">
        <NewNavbar fullBanner={true}/>
      </div>        
      <BALLBHero />
      <BALLBOverview />
      <BALLBLearning />
      <BALLBPractical />
      <BALLBProgramDetails />
      <BALLBCareerOutcomes />
      <BALLBWhyTulas />
      {/* <BALLBCTABanner /> */}
      <NewFooter/>
    </main>
  );
}

