import AboutLeadershipFest from './components/AboutLeadershipFest';
import ChhatraSansadConclave from './components/ChhatraSansadConclave';
import ProminentSpeakers from './components/ProminentSpeakers';
import LeadershipExperiences from './components/LeadershipExperiences';
import EventHighlights from './components/EventHighlights';
import LeadershipCultureSection from './components/LeadershipCultureSection';
import LeadershipFestCTA from './components/LeadershipFestCTA';
import LeadershipFestHero from './components/LeadershipFestHero';
import MegaMenu from '@/component/Navbar/MegaMenu';
import NewNavbar from '@/component/Navbar/NewNavbar';
import NewFooter from '@/component/NewFooter';

export const metadata = {
  title: "Leadership Fests & Events | Tulas University, Dehradun",
  description: "Explore leadership summits, conclaves and student-led fests at Tulas University, Dehradun that build public speaking, teamwork and management skills.",
  alternates: {
    canonical: "https://tulas.edu.in/campus-life/leadership-fests/",
  },
  openGraph: {
    title: "Leadership Fests & Events | Tulas University, Dehradun",
    description: "Explore leadership summits, conclaves and student-led fests at Tulas University, Dehradun that build public speaking, teamwork and management skills.",
    url: "https://tulas.edu.in/campus-life/leadership-fests/",
    type: "website",
  },
};

export default function LeadershipFestPage() {
  return (
    <main>
      <div className="hidden md:block">
              <MegaMenu />
            </div>
            
            <div className="block md:hidden">
              <NewNavbar fullBanner={true}/>
            </div>
      <LeadershipFestHero/>
      <AboutLeadershipFest />
      <ChhatraSansadConclave />
      {/* <ProminentSpeakers /> */}
      <LeadershipExperiences />
      <EventHighlights />
      <LeadershipCultureSection />
      <LeadershipFestCTA />
      <NewFooter/>
    </main>
  );
}
