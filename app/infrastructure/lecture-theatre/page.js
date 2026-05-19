// app/lecture-theatre/page.js
// Place all components in: app/lecture-theatre/components/

import RankingTicker       from './components/RankingTicker';
import OverviewSection     from './components/OverviewSection';
import StatsRow            from './components/StatsRow';
import InteractiveLearning from './components/InteractiveLearning';
import FacilitiesGrid      from './components/FacilitiesGrid';
import DesignEnvironment   from './components/DesignEnvironment';
import CTABanner           from './components/CTABanner';
import MarqueeStrip        from './components/MarqueeStrip';
import GallerySection      from './components/GallerySection';
import FinalCTA            from './components/FinalCTA';
import HeroSection from './components/HeroSection';
import MegaMenu from '@/component/Navbar/MegaMenu';
import NewNavbar from '@/component/Navbar/NewNavbar';
import NewFooter from '@/component/NewFooter';

export const metadata = {
  title: "Lecture Theatre | Tula's Institute, Dehradun",
  description:
    "Tulas Lecture Theatres — spacious 70-seat halls with advanced AV aids, ergonomic tiered seating, superior acoustics, and purpose-designed lighting.",
};

export default function LectureTheatrePage() {
  return (
    <main>
      <div className="hidden md:block">
  <MegaMenu />
</div>

<div className="block md:hidden">
  <NewNavbar fullBanner={true}/>
</div>
      <HeroSection />
      <RankingTicker />
      <OverviewSection />
      <StatsRow />
      <InteractiveLearning />
      <FacilitiesGrid />
      <DesignEnvironment />
      <CTABanner />
      <MarqueeStrip />
      <GallerySection />
      <FinalCTA />
      <NewFooter/>
    </main>
  );
}
