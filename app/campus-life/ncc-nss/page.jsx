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
  title: "Tulas University in Dehradun, Uttarakhand | Admission Open 2026 | Tulas University",
  description:
    "Tulas University is a leading university in Dehradun, Uttarakhand, known for academic excellence, modern infrastructure and strong placement outcomes. UGC Approved and NAAC A+ Accredited",
  alternates: {
    canonical:
      "https://tulas.edu.in/campus-life/ncc-nss",
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
