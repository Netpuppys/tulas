// app/hostel/page.js
// Place this file at: app/hostel/page.js
// Make sure your Header & Footer live in app/layout.js

import HeroSection        from './components/HeroSection';
import RankingTicker      from './components/RankingTicker';
import OverviewSection    from './components/OverviewSection';
import HostelTypesSection from './components/HostelTypesSection';
import FacilitiesSection  from './components/FacilitiesSection';
import MessSection        from './components/MessSection';
import StatsRow           from './components/StatsRow';
import AmenitiesStrip     from './components/AmenitiesStrip';
import SafetyBanner       from './components/SafetyBanner';
import GallerySection     from './components/GallerySection';
import CTASection         from './components/CTASection';

export const metadata = {
  title: "Hostel & Mess Facilities | Tula's Institute, Dehradun",
  description:
    "Six well-maintained hostel blocks, nutritious vegetarian mess, and round-the-clock amenities at Tula's Institute Dehradun.",
};

export default function HostelMessPage() {
  return (
    <main>
      <HeroSection />
      <RankingTicker />
      <OverviewSection />
      <HostelTypesSection />
      <FacilitiesSection />
      <MessSection />
      <StatsRow />
      <AmenitiesStrip />
      <SafetyBanner />
      <GallerySection />
      <CTASection />
    </main>
  );
}
