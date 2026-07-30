import MTechThermalHero           from './components/MTechThermalHero';
import MTechThermalOverview        from './components/MTechThermalOverview';
import MTechThermalLearning        from './components/MTechThermalLearning';
import MTechThermalPractical       from './components/MTechThermalPractical';
import MTechThermalProgramDetails  from './components/MTechThermalProgramDetails';
import MTechThermalCareerOutcomes  from './components/MTechThermalCareerOutcomes';
import MTechThermalWhyTulas        from './components/MTechThermalWhyTulas';
import MTechThermalCTABanner       from './components/MTechThermalCTABanner';
import MegaMenu from '@/component/Navbar/MegaMenu';
import NewNavbar from '@/component/Navbar/NewNavbar';
import NewFooter from '@/component/NewFooter';

export default function MTechThermalPage() {
  return (
    <main>
      <div className="hidden md:block">
                                      <MegaMenu/>
                                    </div>
                                    
                                    <div className="block md:hidden">
                                      <NewNavbar fullBanner={true}/>
                                    </div>
      <MTechThermalHero />
      <MTechThermalOverview />
      <MTechThermalLearning />
      <MTechThermalPractical />
      <MTechThermalProgramDetails />
      <MTechThermalCareerOutcomes />
      <MTechThermalWhyTulas />
      {/* <MTechThermalCTABanner /> */}
      <NewFooter/>
    </main>
  );
}
