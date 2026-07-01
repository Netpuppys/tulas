'use client';

import BBADMHero from './components/BBADMHero';
import BBADMOverview from './components/BBADMOverview';
import BBADMCurriculum from './components/BBADMCurriculum';
import BBADMCertifications from './components/BBADMCertifications';
import BBADMProgramDetails from './components/BBADMProgramDetails';
import BBADMCareerOutcomes from './components/BBADMCareerOutcomes';
import BBADMWhyTulas from './components/BBADMWhyTulas';
import BBADMCTABanner from './components/BBADMCTABanner';
import MegaMenu from '@/component/Navbar/MegaMenu';
import NewNavbar from '@/component/Navbar/NewNavbar';
import NewFooter from '@/component/NewFooter';

export default function BBADMPage() {
  return (
    <main>
      <div className="hidden md:block">
                          <MegaMenu />
                        </div>
                        
                        <div className="block md:hidden">
                          <NewNavbar fullBanner={true}/>
                        </div>
      <BBADMHero />
      <BBADMOverview />
      <BBADMCurriculum />
      <BBADMCertifications />
      <BBADMProgramDetails />
      <BBADMCareerOutcomes />
      <BBADMWhyTulas />
      {/* <BBADMCTABanner /> */}
      <NewFooter/>
    </main>
  );
}
