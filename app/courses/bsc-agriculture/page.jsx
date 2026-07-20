import BScAgHero from './components/BScAgHero';
import BScAgOverview from './components/BScAgOverview';
import BScAgLearning from './components/BScAgLearning';
import BScAgPractical from './components/BScAgPractical';
import BScAgProgramDetails from './components/BScAgProgramDetails';
import BScAgCareerOutcomes from './components/BScAgCareerOutcomes';
import BScAgWhyTulas from './components/BScAgWhyTulas';
import BScAgCTABanner from './components/BScAgCTABanner';
import MegaMenu from '@/component/Navbar/MegaMenu';
import NewNavbar from '@/component/Navbar/NewNavbar';
import NewFooter from '@/component/NewFooter';

export default function BScAgPage() {
  return (
    <main>
      <div className="hidden md:block">
                          <MegaMenu/>
                        </div>
                        
                        <div className="block md:hidden">
                          <NewNavbar fullBanner={true}/>
                        </div>
      <BScAgHero />
      <BScAgOverview />
      <BScAgLearning />
      <BScAgPractical />
      <BScAgProgramDetails />
      <BScAgCareerOutcomes />
      <BScAgWhyTulas />
      {/* <BScAgCTABanner /> */}
      <NewFooter/>
    </main>
  );
}
