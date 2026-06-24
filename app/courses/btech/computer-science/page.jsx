import CSEOverview from './components/CSEOverview';
import CSEAICurriculum from './components/CSEAICurriculum';
import CSECertifications from './components/CSECertifications';
import CSELabsInfrastructure from './components/CSELabsInfrastructure';
import CSEReadinessIndex from './components/CSEReadinessIndex';
import CSECareerOutcomes from './components/CSECareerOutcomes';
import WhyCSE from './components/WhyCSE';
import CSECTABanner from './components/CSECTABanner';
import CSEHero from './components/CSEHero';
import NewFooter from '@/component/NewFooter';
import MegaMenu from '@/component/Navbar/MegaMenu';
import NewNavbar from '@/component/Navbar/NewNavbar';
import CSEProgramDetails from './components/CSEProgramDetails';

export default function CSEPage() {
  return (
    <main>
      <div className="hidden md:block">
              <MegaMenu />
            </div>
            
            <div className="block md:hidden">
              <NewNavbar fullBanner={true}/>
            </div>
      <CSEHero/>
      <CSEOverview />
      <CSEAICurriculum />
      <CSECertifications />
      <CSEProgramDetails/>
      {/* <CSELabsInfrastructure /> */}
      {/* <CSEReadinessIndex /> */}
      <CSECareerOutcomes />
      <WhyCSE />
      {/* <CSECTABanner /> */}
      <NewFooter/>
    </main>
  );
}
