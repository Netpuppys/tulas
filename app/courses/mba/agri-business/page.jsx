'use client';
import MBAAgrMHero from './components/MBAAgrMHero';
import MBAAgrMOverview from './components/MBAAgrMOverview';
import MBAAgrMLearning from './components/MBAAgrMLearning';
import MBAAgrMPractical from './components/MBAAgrMPractical';
import MBAAgrMProgramDetails from './components/MBAAgrMProgramDetails';
import MBAAgrMCareerOutcomes from './components/MBAAgrMCareerOutcomes';
import MBAAgrMWhyTulas from './components/MBAAgrMWhyTulas';
import MBAAgrMCTABanner from './components/MBAAgrMCTABanner';
import MegaMenu from '@/component/Navbar/MegaMenu';
import NewNavbar from '@/component/Navbar/NewNavbar';
import NewFooter from '@/component/NewFooter';

export default function MBAAgrMPage() {
  return (
    <main>
      <div className="hidden md:block">
              <MegaMenu />
            </div>
            
            <div className="block md:hidden">
              <NewNavbar fullBanner={true}/>
            </div>
      <MBAAgrMHero />
      <MBAAgrMOverview />
      <MBAAgrMLearning />
      <MBAAgrMPractical />
      <MBAAgrMProgramDetails />
      <MBAAgrMCareerOutcomes />
      <MBAAgrMWhyTulas />
      {/* <MBAAgrMCTABanner /> */}
      <NewFooter/>
    </main>
  );
}
