// app/auditorium/page.js
// Place all components in: app/auditorium/components/

import RankingTicker  from './components/RankingTicker';
import OverviewSection from './components/OverviewSection';
import StatsRow       from './components/StatsRow';
import ConcertHall    from './components/ConcertHall';
import AmenitiesGrid  from './components/AmenitiesGrid';
import CTABanner      from './components/CTABanner';
import MarqueeStrip   from './components/MarqueeStrip';
import GallerySection from './components/GallerySection';
import FinalCTA       from './components/FinalCTA';
import HeroSection from './components/HeroSection';
import MegaMenu from '@/component/Navbar/MegaMenu';
import NewNavbar from '@/component/Navbar/NewNavbar';
import NewFooter from '@/component/NewFooter';

export const metadata = {
  title: "Auditorium | Tula's Institute, Dehradun",
  description:
    "Tulas Auditorium — 550-seat capacity, Dolby surround sound, HD projector, central AC. Largest auditorium in Dehradun, one of its kind in Northern India.",
};

export default function AuditoriumPage() {
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
      <ConcertHall />
      <AmenitiesGrid />
      <CTABanner />
      <MarqueeStrip />
      <GallerySection />
      <FinalCTA />
      <NewFooter/>
    </main>
  );
}
