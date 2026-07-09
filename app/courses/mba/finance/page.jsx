'use client';

import MBAFinHero           from './components/MBAFinHero';
import MBAFinOverview       from './components/MBAFinOverview';
import MBAFinLearning       from './components/MBAFinLearning';
import MBAFinPractical      from './components/MBAFinPractical';
import MBAFinProgramDetails from './components/MBAFinProgramDetails';
import MBAFinCareerOutcomes from './components/MBAFinCareerOutcomes';
import MBAFinWhyTulas       from './components/MBAFinWhyTulas';
import MBAFinCTABanner      from './components/MBAFinCTABanner';
import MegaMenu from '@/component/Navbar/MegaMenu';
import NewNavbar from '@/component/Navbar/NewNavbar';
import NewFooter from '@/component/NewFooter';

export default function MBAFinPage() {
  return (
    <>
    <div className="hidden md:block">
                  <MegaMenu />
                </div>
                
                <div className="block md:hidden">
                  <NewNavbar fullBanner={true}/>
                </div>
      <MBAFinHero />
      <MBAFinOverview />
      <MBAFinLearning />
      <MBAFinPractical />
      <MBAFinProgramDetails />
      <MBAFinCareerOutcomes />
      <MBAFinWhyTulas />
      {/* <MBAFinCTABanner /> */}
      <NewFooter/>
    </>
  );
}
