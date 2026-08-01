import AboutExperiences from './components/AboutExperiences';
import SpontaneousCampusLife from './components/SpontaneousCampusLife';
import LearningExperiences from './components/LearningExperiences';
import CelebrationsFestivals from './components/CelebrationsFestivals';
import VideosStories from './components/VideosStories';
import MemoriesGallery from './components/MemoriesGallery';
import ExperiencesCTABanner from './components/ExperiencesCTABanner';
import ExperiencesHeroSection from './components/ExperiencesHeroSection';
import MegaMenu from '@/component/Navbar/MegaMenu';
import NewNavbar from '@/component/Navbar/NewNavbar';
import NewFooter from '@/component/NewFooter';

export const metadata = {
  title: "Student Experiences at Tulas University, Dehradun",
  description: "See what daily life looks like at Tulas University, Dehradun through student stories on academics, hostels, clubs, fests, sports and placement journeys.",
  alternates: {
    canonical: "https://tulas.edu.in/campus-life/tulas-experiences/",
  },
  openGraph: {
    title: "Student Experiences at Tulas University, Dehradun",
    description: "See what daily life looks like at Tulas University, Dehradun through student stories on academics, hostels, clubs, fests, sports and placement journeys.",
    url: "https://tulas.edu.in/campus-life/tulas-experiences/",
    type: "website",
  },
};

export default function ExperiencesPage() {
  return (
    <main>
      <div className="hidden md:block">
        <MegaMenu />
      </div>
      
      <div className="block md:hidden">
        <NewNavbar fullBanner={true}/>
      </div>
      <ExperiencesHeroSection/>
      <AboutExperiences />
      <SpontaneousCampusLife />
      <LearningExperiences />
      <CelebrationsFestivals />
      {/* <VideosStories /> */}
      <MemoriesGallery />
      <ExperiencesCTABanner />

      <NewFooter/>
    </main>
  );
}
