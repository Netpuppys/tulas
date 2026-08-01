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
  title: "Freshers Orientation | Tulas University, Dehradun",
  description: "Discover how Tulas University, Dehradun welcomes new students through orientation week, mentor allocation, campus tours and induction into clubs and societies.",
  alternates: {
    canonical: "https://tulas.edu.in/campus-life/freshers-orientation/",
  },
  openGraph: {
    title: "Freshers Orientation | Tulas University, Dehradun",
    description: "Discover how Tulas University, Dehradun welcomes new students through orientation week, mentor allocation, campus tours and induction into clubs and societies.",
    url: "https://tulas.edu.in/campus-life/freshers-orientation/",
    type: "website",
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
