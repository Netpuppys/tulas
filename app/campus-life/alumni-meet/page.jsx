import AboutAlumniCommunity from './components/AboutAlumniCommunity';
import ReunionsCampusMemories from './components/ReunionsCampusMemories';
import AlumniNetworking from './components/AlumniNetworking';
import SuccessStories from './components/SuccessStories';
import AlumniStoriesSection from './components/AlumniStoriesSection';
import MemoryWallGallery from './components/MemoryWallGallery';
import AlumniMeetCTA from './components/AlumniMeetCTA';
import AlumniMeetHero from './components/AlumniMeetHero';
import MegaMenu from '@/component/Navbar/MegaMenu';
import NewNavbar from '@/component/Navbar/NewNavbar';
import NewFooter from '@/component/NewFooter';

export const metadata = {
  title: "Tulas University in Dehradun, Uttarakhand | Admission Open 2026 | Tulas University",
  description:
    "Tulas University is a leading university in Dehradun, Uttarakhand, known for academic excellence, modern infrastructure and strong placement outcomes. UGC Approved and NAAC A+ Accredited",
  alternates: {
    canonical:
      "https://tulas.edu.in/alumni-meet",
  },
};

export default function AlumniMeetPage() {
  return (
    <main>
      <div className="hidden md:block">
              <MegaMenu />
            </div>
            
            <div className="block md:hidden">
              <NewNavbar fullBanner={true}/>
            </div>
      <AlumniMeetHero/>
      <AboutAlumniCommunity />
      <ReunionsCampusMemories />
      <AlumniNetworking />
      <SuccessStories />
      {/* <AlumniStoriesSection /> */}
      <MemoryWallGallery />
      {/* <AlumniMeetCTA /> */}

      <NewFooter/>
    </main>
  );
}
