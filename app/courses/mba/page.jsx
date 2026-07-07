'use client';

import MBAGHero           from './components/MBAGHero';
import MBAGOverview       from './components/MBAGOverview';
import MBAGCurriculum     from './components/MBAGCurriculum';
import MBAGCertifications from './components/MBAGCertifications';
import MBAGProgramDetails from './components/MBAGProgramDetails';
import MBAGCareerOutcomes from './components/MBAGCareerOutcomes';
import MBAGWhyTulas       from './components/MBAGWhyTulas';
import MBAGCTABanner      from './components/MBAGCTABanner';
import MegaMenu from '@/component/Navbar/MegaMenu';
import NewNavbar from '@/component/Navbar/NewNavbar';
import NewFooter from '@/component/NewFooter';

export default function MBAGPage() {
  return (
    <>
    <div className="hidden md:block">
  <MegaMenu />
</div>

<div className="block md:hidden">
  <NewNavbar fullBanner={true}/>
</div>
      <MBAGHero />
      <MBAGOverview />
      <MBAGCurriculum />
      <MBAGCertifications />
      <MBAGProgramDetails />
      <MBAGCareerOutcomes />
      <MBAGWhyTulas />
      {/* <MBAGCTABanner /> */}
      <NewFooter/>
    </>
  );
}
