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
  title: "Alumni Meet | Tulas University, Dehradun",
  description: "Relive the annual alumni meet at Tulas University, Dehradun, where 7,000+ graduates reconnect, mentor students and share career journeys across industries.",
  alternates: {
    canonical: "https://tulas.edu.in/campus-life/alumni-meet/",
  },
  openGraph: {
    title: "Alumni Meet | Tulas University, Dehradun",
    description: "Relive the annual alumni meet at Tulas University, Dehradun, where 7,000+ graduates reconnect, mentor students and share career journeys across industries.",
    url: "https://tulas.edu.in/campus-life/alumni-meet/",
    type: "website",
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
