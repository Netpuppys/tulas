'use client';

import MCAMLHero           from './components/MCAMLHero';
import MCAMLOverview       from './components/MCAMLOverview';
import MCAMLCurriculum     from './components/MCAMLCurriculum';
import MCAMLProgramDetails from './components/MCAMLProgramDetails';
import MCAMLCareerOutcomes from './components/MCAMLCareerOutcomes';
import MCAMLCTABanner      from './components/MCAMLCTABanner';
import NewFooter from '@/component/NewFooter';
import MegaMenu from '@/component/Navbar/MegaMenu';
import NewNavbar from '@/component/Navbar/NewNavbar';
import CyberSecCertifications from '../../btech/computer-science-engineering-cyber-security/components/CyberSecCertifications';

export default function MCAMLPage() {
  return (
    <>
    <div className="hidden md:block">
                          <MegaMenu />
                        </div>
                        
                        <div className="block md:hidden">
                          <NewNavbar fullBanner={true}/>
                        </div>
      <MCAMLHero />
      <MCAMLOverview />
      <MCAMLCurriculum />
      <CyberSecCertifications/>
      <MCAMLProgramDetails />
      <MCAMLCareerOutcomes />
      {/* <MCAMLCTABanner /> */}
      <NewFooter/>
    </>
  );
}
