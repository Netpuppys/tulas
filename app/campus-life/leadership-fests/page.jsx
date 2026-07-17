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
  title: "Tulas University in Dehradun, Uttarakhand | Admission Open 2026 | Tulas University",
  description:
    "Tulas University is a leading university in Dehradun, Uttarakhand, known for academic excellence, modern infrastructure and strong placement outcomes. UGC Approved and NAAC A+ Accredited",
  alternates: {
    canonical:
      "https://tulas.edu.in/campus-life/leadership-fests",
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
