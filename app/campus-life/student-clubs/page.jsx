import StorytellingSection      from './components/StorytellingSection';
import VibgyorSection           from './components/VibgyorSection';
import ClubsShowcase            from './components/ClubsShowcase';
import PersonalityDevelopment   from './components/PersonalityDevelopment';
import ClubsGallery             from './components/ClubsGallery';
import ClubsCTABanner           from './components/ClubsCTABanner';
import ClubsHeroSection from './components/ClubsHeroSection';
import MegaMenu from '@/component/Navbar/MegaMenu';
import NewNavbar from '@/component/Navbar/NewNavbar';
import NewFooter from '@/component/NewFooter';

export const metadata = {
  title: "Student Clubs & Societies | Tulas University, Dehradun",
  description: "Explore 11+ student clubs at Tulas University, Dehradun covering coding, robotics, music, dance, drama, photography, literature, entrepreneurship and sports.",
  alternates: {
    canonical: "https://tulas.edu.in/campus-life/student-clubs/",
  },
  openGraph: {
    title: "Student Clubs & Societies | Tulas University, Dehradun",
    description: "Explore 11+ student clubs at Tulas University, Dehradun covering coding, robotics, music, dance, drama, photography, literature, entrepreneurship and sports.",
    url: "https://tulas.edu.in/campus-life/student-clubs/",
    type: "website",
  },
};

export default function ClubsPage() {
  return (
    <main>
      <div className="hidden md:block">
  <MegaMenu />
</div>

<div className="block md:hidden">
  <NewNavbar fullBanner={true}/>
</div>
      <ClubsHeroSection/>
      <StorytellingSection />
      <VibgyorSection />
      <ClubsShowcase />
      <PersonalityDevelopment />
      {/* <ClubsGallery /> */}
      <ClubsCTABanner />
      <NewFooter/>
    </main>
  );
}
