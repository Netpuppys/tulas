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

export const metadata = {
  title: "NCC & NSS at Tulas University, Dehradun",
  description: "Take part in NCC and NSS at Tulas University, Dehradun through camps, community outreach, blood donation drives, cleanliness campaigns and rural engagement.",
  alternates: {
    canonical: "https://tulas.edu.in/campus-life/ncc-nss/",
  },
  openGraph: {
    title: "NCC & NSS at Tulas University, Dehradun",
    description: "Take part in NCC and NSS at Tulas University, Dehradun through camps, community outreach, blood donation drives, cleanliness campaigns and rural engagement.",
    url: "https://tulas.edu.in/campus-life/ncc-nss/",
    type: "website",
  },
};

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
      {/* <CommunityImpact /> */}
      <NCCExperiences />
      <LeadershipDevelopment />
      <VideoGallery />
      <NCCCTABanner />
      <NewFooter/>
    </main>
  );
}
