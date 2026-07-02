'use client';

import BBABAHero           from './components/BBABAHero';
import BBABAOverview       from './components/BBABAOverview';
import BBABACurriculum     from './components/BBABACurriculum';
import BBABACertifications from './components/BBABACertifications';
import BBABAProgramDetails from './components/BBABAProgramDetails';
import BBABACareerOutcomes from './components/BBABACareerOutcomes';
import BBABAWhyTulas       from './components/BBABAWhyTulas';
import BBABACTABanner      from './components/BBABACTABanner';
import MegaMenu from '@/component/Navbar/MegaMenu';
import NewNavbar from '@/component/Navbar/NewNavbar';
import NewFooter from '@/component/NewFooter';

export default function BBABAPage() {
  return (
    <>
    <div className="hidden md:block">
                          <MegaMenu />
                        </div>
                        
                        <div className="block md:hidden">
                          <NewNavbar fullBanner={true}/>
                        </div>
      <BBABAHero />
      <BBABAOverview />
      <BBABACurriculum />
      <BBABACertifications />
      <BBABAProgramDetails />
      <BBABACareerOutcomes />
      <BBABAWhyTulas />
      {/* <BBABACTABanner /> */}
      <NewFooter/>
    </>
  );
}
