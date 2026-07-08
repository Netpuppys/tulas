'use client';
import MBABAHero from './components/MBABAHero';
import MBABAOverview from './components/MBABAOverview';
import MBABALearning from './components/MBABALearning';
import MBABAPractical from './components/MBABAPractical';
import MBABAProgramDetails from './components/MBABAProgramDetails';
import MBABACareerOutcomes from './components/MBABACareerOutcomes';
import MBABAWhyTulas from './components/MBABAWhyTulas';
import MBABACTABanner from './components/MBABACTABanner';
import MegaMenu from '@/component/Navbar/MegaMenu';
import NewNavbar from '@/component/Navbar/NewNavbar';
import NewFooter from '@/component/NewFooter';

export default function MBABAPage() {
  return (
    <main>
      <div className="hidden md:block">
              <MegaMenu />
            </div>
            
            <div className="block md:hidden">
              <NewNavbar fullBanner={true}/>
            </div>
      <MBABAHero />
      <MBABAOverview />
      <MBABALearning />
      <MBABAPractical />
      <MBABAProgramDetails />
      <MBABACareerOutcomes />
      <MBABAWhyTulas />
      {/* <MBABACTABanner /> */}
      <NewFooter/>
    </main>
  );
}
