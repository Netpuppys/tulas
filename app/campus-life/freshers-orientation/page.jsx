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

export const metadata = {
  title: "Tulas University in Dehradun, Uttarakhand | Admission Open 2026 | Tulas University",
  description:
    "Tulas University is a leading university in Dehradun, Uttarakhand, known for academic excellence, modern infrastructure and strong placement outcomes. UGC Approved and NAAC A+ Accredited",
  alternates: {
    canonical:
      "https://tulas.edu.in/campus-life/freshers-orientation",
  },
};

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
