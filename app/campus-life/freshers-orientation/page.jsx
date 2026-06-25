import AboutOrientation         from './components/AboutOrientation';
import FirstDayExperiences      from './components/FirstDayExperiences';
import CampusConnections        from './components/CampusConnections';
import LearningBeyond           from './components/LearningBeyond';
import FreshersStudentStories   from './components/FreshersStudentStories';
import MemoryWall               from './components/MemoryWall';
import FreshersCTABanner        from './components/FreshersCTABanner';
import FreshersHeroSection from './components/FreshersHeroSection';
import MegaMenu from '@/component/Navbar/MegaMenu';
import NewNavbar from '@/component/Navbar/NewNavbar';
import NewFooter from '@/component/NewFooter';

export default function FreshersOrientationPage() {
  return (
    <main>
      <div className="hidden md:block">
  <MegaMenu />
</div>

<div className="block md:hidden">
  <NewNavbar fullBanner={true}/>
</div>
      <FreshersHeroSection/>
      <AboutOrientation />
      <FirstDayExperiences />
      <CampusConnections />
      <LearningBeyond />
      <FreshersStudentStories />
      <MemoryWall />
      {/* <FreshersCTABanner /> */}
      <NewFooter/>
    </main>
  );
}
