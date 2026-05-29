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
      <VideosStories />
      <MemoriesGallery />
      <ExperiencesCTABanner />

      <NewFooter/>
    </main>
  );
}
