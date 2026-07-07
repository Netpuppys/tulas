'use client';

import BCAIHero           from './components/BCAIHero';
import BCAIOverview       from './components/BCAIOverview';
import BCAILearning       from './components/BCAILearning';
import BCAICurriculum     from './components/BCAICurriculum';
import BCAICertifications from './components/BCAICertifications';
import BCAIProgramDetails from './components/BCAIProgramDetails';
import BCAICareerOutcomes from './components/BCAICareerOutcomes';
import BCAIWhyTulas       from './components/BCAIWhyTulas';
import BCAICTABanner      from './components/BCAICTABanner';
import MegaMenu from '@/component/Navbar/MegaMenu';
import NewNavbar from '@/component/Navbar/NewNavbar';
import NewFooter from '@/component/NewFooter';

export default function BCAIPage() {
  return (
    <>
    <div className="hidden md:block">
              <MegaMenu />
            </div>
            
            <div className="block md:hidden">
              <NewNavbar fullBanner={true}/>
            </div>
      <BCAIHero />
      <BCAIOverview />
      <BCAILearning />
      <BCAICurriculum />
      <BCAICertifications />
      <BCAIProgramDetails />
      <BCAICareerOutcomes />
      <BCAIWhyTulas />
      {/* <BCAICTABanner /> */}
      <NewFooter/>
    </>
  );
}
