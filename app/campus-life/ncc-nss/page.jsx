import AboutLeadershipService from './components/AboutLeadershipService';
import CommunityImpact from './components/CommunityImpact';
import NCCExperiences from './components/NCCExperiences';
import LeadershipDevelopment from './components/LeadershipDevelopment';
import VideoGallery from './components/VideoGallery';
import NCCCTABanner from './components/NCCCTABanner';
import NCCHeroSection from './components/NCCHeroSection';
import MegaMenu from '@/component/Navbar/MegaMenu';
import NewNavbar from '@/component/Navbar/NewNavbar';
import NewFooter from '@/component/NewFooter';

export default function NCCPage() {
  return (
    <main>
      <div className="hidden md:block">
        <MegaMenu />
      </div>
      
      <div className="block md:hidden">
        <NewNavbar fullBanner={true}/>
      </div>
      <NCCHeroSection/>
      <AboutLeadershipService />
      <CommunityImpact />
      <NCCExperiences />
      <LeadershipDevelopment />
      <VideoGallery />
      <NCCCTABanner />
      <NewFooter/>
    </main>
  );
}
