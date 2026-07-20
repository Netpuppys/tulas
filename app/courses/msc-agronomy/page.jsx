import MScAgrHero           from './components/MScAgrHero';
import MScAgrOverview        from './components/MScAgrOverview';
import MScAgrLearning        from './components/MScAgrLearning';
import MScAgrPractical       from './components/MScAgrPractical';
import MScAgrProgramDetails  from './components/MScAgrProgramDetails';
import MScAgrCareerOutcomes  from './components/MScAgrCareerOutcomes';
import MScAgrWhyTulas        from './components/MScAgrWhyTulas';
import MScAgrCTABanner       from './components/MScAgrCTABanner';
import MegaMenu from '@/component/Navbar/MegaMenu';
import NewNavbar from '@/component/Navbar/NewNavbar';
import NewFooter from '@/component/NewFooter';

export default function MScAgrPage() {
  return (
    <main>
      <div className="hidden md:block">
                          <MegaMenu/>
                        </div>
                        
                        <div className="block md:hidden">
                          <NewNavbar fullBanner={true}/>
                        </div>
      <MScAgrHero />
      <MScAgrOverview />
      <MScAgrLearning />
      <MScAgrPractical />
      <MScAgrProgramDetails />
      <MScAgrCareerOutcomes />
      <MScAgrWhyTulas />
      {/* <MScAgrCTABanner /> */}
      <NewFooter/>
    </main>
  );
}
