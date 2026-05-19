/**
 * HostelMessPage.tsx
 *
 * Drop this into your Next.js app router as:
 *   app/hostel-mess/page.tsx
 *
 * Make sure your Header and Footer are in your root layout.tsx,
 * so this page only renders the content sections.
 */

import MegaMenu from "@/component/Navbar/MegaMenu";
import AmenitiesStrip from "../components/AmenitiesStrip";
import CTASection from "../components/CTASection";
import FacilitiesSection from "../components/FacilitiesSection";
import GallerySection from "../components/GallerySection";
import HeroSection from "../components/HeroSection";
import HostelTypesSection from "../components/HostelTypesSection";
import MessSection from "../components/MessSection";
import OverviewSection from "../components/OverviewSection";
import RankingTicker from "../components/RankingTicker";
import SafetyBanner from "../components/SafetyBanner";
import StatsRow from "../components/StatsRow";
import NewNavbar from "@/component/Navbar/NewNavbar";
import NewFooter from "@/component/NewFooter";



export const metadata = {
  title: 'Hostel & Mess Facilities | Tula\'s Institute, Dehradun',
  description:
    'Six well-maintained hostel blocks, nutritious vegetarian mess, and round-the-clock amenities at Tula\'s Institute Dehradun.',
};

export default function HostelMessPage() {
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
      <HostelTypesSection />
      <FacilitiesSection />
      <MessSection />
      <StatsRow />
      <AmenitiesStrip />
      <SafetyBanner />
      <GallerySection />
      <CTASection />
      <NewFooter/>
    </main>
  );
}
