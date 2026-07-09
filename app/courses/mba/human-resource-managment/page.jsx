'use client';

import MBAHRMHero          from './components/MBAHRMHero';
import MBAHRMOverview      from './components/MBAHRMOverview';
import MBAHRMLearning      from './components/MBAHRMLearning';
import MBAHRMPractical     from './components/MBAHRMPractical';
import MBAHRMProgramDetails from './components/MBAHRMProgramDetails';
import MBAHRMCareerOutcomes from './components/MBAHRMCareerOutcomes';
import MBAHRMWhyTulas      from './components/MBAHRMWhyTulas';
import MBAHRMCTABanner     from './components/MBAHRMCTABanner';
import MegaMenu from '@/component/Navbar/MegaMenu';
import NewNavbar from '@/component/Navbar/NewNavbar';
import NewFooter from '@/component/NewFooter';

export default function MBAHRMPage() {
  return (
    <>
    <div className="hidden md:block">
                  <MegaMenu />
                </div>
                
                <div className="block md:hidden">
                  <NewNavbar fullBanner={true}/>
                </div>
      <MBAHRMHero />
      <MBAHRMOverview />
      <MBAHRMLearning />
      <MBAHRMPractical />
      <MBAHRMProgramDetails />
      <MBAHRMCareerOutcomes />
      <MBAHRMWhyTulas />
      {/* <MBAHRMCTABanner /> */}
      <NewFooter/>
    </>
  );
}
