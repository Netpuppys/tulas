'use client';
import MBAMktHero from './components/MBAMktHero';
import MBAMktOverview from './components/MBAMktOverview';
import MBAMktLearning from './components/MBAMktLearning';
import MBAMktPractical from './components/MBAMktPractical';
import MBAMktProgramDetails from './components/MBAMktProgramDetails';
import MBAMktCareerOutcomes from './components/MBAMktCareerOutcomes';
import MBAMktWhyTulas from './components/MBAMktWhyTulas';
import MBAMktCTABanner from './components/MBAMktCTABanner';
import MegaMenu from '@/component/Navbar/MegaMenu';
import NewNavbar from '@/component/Navbar/NewNavbar';
import NewFooter from '@/component/NewFooter';

export default function MBAMktPage() {
  return (
    <main>
      <div className="hidden md:block">
              <MegaMenu />
            </div>
            
            <div className="block md:hidden">
              <NewNavbar fullBanner={true}/>
            </div>
      <MBAMktHero />
      <MBAMktOverview />
      <MBAMktLearning />
      <MBAMktPractical />
      <MBAMktProgramDetails />
      <MBAMktCareerOutcomes />
      <MBAMktWhyTulas />
      {/* <MBAMktCTABanner /> */}
      <NewFooter/>
    </main>
  );
}
