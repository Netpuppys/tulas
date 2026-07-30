import BComHonsHero           from './components/BComHonsHero';
import BComHonsOverview        from './components/BComHonsOverview';
import BComHonsLearning        from './components/BComHonsLearning';
import BComHonsPractical       from './components/BComHonsPractical';
import BComHonsProgramDetails  from './components/BComHonsProgramDetails';
import BComHonsCareerOutcomes  from './components/BComHonsCareerOutcomes';
import BComHonsWhyTulas        from './components/BComHonsWhyTulas';
import BComHonsCTABanner       from './components/BComHonsCTABanner';
import MegaMenu from '@/component/Navbar/MegaMenu';
import NewNavbar from '@/component/Navbar/NewNavbar';
import NewFooter from '@/component/NewFooter';

export default function BComHonsPage() {
  return (
    <main>
      <div className="hidden md:block">
         <MegaMenu/>
      </div>
                                          
      <div className="block md:hidden">
        <NewNavbar fullBanner={true}/>
      </div>

      <BComHonsHero />
      <BComHonsOverview />
      <BComHonsLearning />
      <BComHonsPractical />
      <BComHonsProgramDetails />
      <BComHonsCareerOutcomes />
      <BComHonsWhyTulas />
      {/* <BComHonsCTABanner /> */}
      <NewFooter/>
    </main>
  );
}
