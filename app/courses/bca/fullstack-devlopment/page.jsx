'use client';
import BCFSHero from './components/BCFSHero';
import BCFSOverview from './components/BCFSOverview';
import BCFSLearning from './components/BCFSLearning';
import BCFSCurriculum from './components/BCFSCurriculum';
import BCFSPractical from './components/BCFSPractical';
import BCFSProgramDetails from './components/BCFSProgramDetails';
import BCFSCareerOutcomes from './components/BCFSCareerOutcomes';
import BCFSWhyTulas from './components/BCFSWhyTulas';
import BCFSCTABanner from './components/BCFSCTABanner';
import MegaMenu from '@/component/Navbar/MegaMenu';
import NewNavbar from '@/component/Navbar/NewNavbar';
import NewFooter from '@/component/NewFooter';

export default function BCFSPage() {
  return (
    <main>
      <div className="hidden md:block">
              <MegaMenu />
            </div>
            
            <div className="block md:hidden">
              <NewNavbar fullBanner={true}/>
            </div>
      <BCFSHero />
      <BCFSOverview />
      <BCFSLearning />
      <BCFSCurriculum />
      <BCFSPractical />
      <BCFSProgramDetails />
      <BCFSCareerOutcomes />
      <BCFSWhyTulas />
      {/* <BCFSCTABanner /> */}
      <NewFooter/>
    </main>
  );
}
