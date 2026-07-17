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
  title: "Tulas University in Dehradun, Uttarakhand | Admission Open 2026 | Tulas University",
  description:
    "Tulas University is a leading university in Dehradun, Uttarakhand, known for academic excellence, modern infrastructure and strong placement outcomes. UGC Approved and NAAC A+ Accredited",
  alternates: {
    canonical:
      "https://tulas.edu.in/campus-life/tulas-experiences",
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
