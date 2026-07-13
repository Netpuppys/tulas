import BTechMEHero           from './components/BTechMEHero';
import BTechMEOverview       from './components/BTechMEOverview';
import BTechMELearning       from './components/BTechMELearning';
import BTechMEPractical      from './components/BTechMEPractical';
import BTechMEProgramDetails from './components/BTechMEProgramDetails';
import BTechMECareerOutcomes from './components/BTechMECareerOutcomes';
import BTechMEWhyTulas       from './components/BTechMEWhyTulas';
import BTechMECTABanner      from './components/BTechMECTABanner';
import MegaMenu from '@/component/Navbar/MegaMenu';
import NewNavbar from '@/component/Navbar/NewNavbar';
import NewFooter from '@/component/NewFooter';

export default function BTechMEPage() {
  return (
    <>
    <div className="hidden md:block">
  <MegaMenu />
</div>

<div className="block md:hidden">
  <NewNavbar fullBanner={true}/>
</div>
      <BTechMEHero />
      <BTechMEOverview />
      <BTechMELearning />
      <BTechMEPractical />
      <BTechMEProgramDetails />
      <BTechMECareerOutcomes />
      <BTechMEWhyTulas />
      {/* <BTechMECTABanner /> */}
      <NewFooter/>
    </>
  );
}
