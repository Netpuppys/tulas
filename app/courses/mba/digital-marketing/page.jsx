'use client';

import MBADMHero           from './components/MBADMHero';
import MBADMOverview       from './components/MBADMOverview';
import MBADMCurriculum     from './components/MBADMCurriculum';
import MBADMCertifications from './components/MBADMCertifications';
import MBADMProgramDetails from './components/MBADMProgramDetails';
import MBADMCareerOutcomes from './components/MBADMCareerOutcomes';
import MBADMWhyTulas       from './components/MBADMWhyTulas';
import MBADMCTABanner      from './components/MBADMCTABanner';
import MegaMenu from '@/component/Navbar/MegaMenu';
import NewNavbar from '@/component/Navbar/NewNavbar';
import NewFooter from '@/component/NewFooter';

export default function MBADMPage() {
  return (
    <>
    <div className="hidden md:block">
  <MegaMenu />
</div>

<div className="block md:hidden">
  <NewNavbar fullBanner={true}/>
</div>
      <MBADMHero />
      <MBADMOverview />
      <MBADMCurriculum />
      <MBADMCertifications />
      <MBADMProgramDetails />
      <MBADMCareerOutcomes />
      <MBADMWhyTulas />
      {/* <MBADMCTABanner /> */}
      <NewFooter/>
    </>
  );
}
