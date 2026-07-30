import MTechStructuralHero           from './components/MTechStructuralHero';
import MTechStructuralOverview        from './components/MTechStructuralOverview';
import MTechStructuralLearning        from './components/MTechStructuralLearning';
import MTechStructuralPractical       from './components/MTechStructuralPractical';
import MTechStructuralProgramDetails  from './components/MTechStructuralProgramDetails';
import MTechStructuralCareerOutcomes  from './components/MTechStructuralCareerOutcomes';
import MTechStructuralWhyTulas        from './components/MTechStructuralWhyTulas';
import MTechStructuralCTABanner       from './components/MTechStructuralCTABanner';
import MegaMenu from '@/component/Navbar/MegaMenu';
import NewNavbar from '@/component/Navbar/NewNavbar';
import NewFooter from '@/component/NewFooter';

export default function MTechStructuralPage() {
  return (
    <main>
      <div className="hidden md:block">
                                            <MegaMenu/>
                                          </div>
                                          
                                          <div className="block md:hidden">
                                            <NewNavbar fullBanner={true}/>
                                          </div>
      <MTechStructuralHero />
      <MTechStructuralOverview />
      <MTechStructuralLearning />
      <MTechStructuralPractical />
      <MTechStructuralProgramDetails />
      <MTechStructuralCareerOutcomes />
      <MTechStructuralWhyTulas />
      {/* <MTechStructuralCTABanner /> */}
      <NewFooter/>
    </main>
  );
}
