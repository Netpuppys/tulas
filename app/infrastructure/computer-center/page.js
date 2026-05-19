// app/computer-centre/page.js
// Place all components in: app/computer-centre/components/

import MegaMenu from "@/component/Navbar/MegaMenu";
import CTABanner from "./components/CTABanner";
import FinalCTA from "./components/FinalCTA";
import GallerySection from "./components/GallerySection";
import HeroSection from "./components/HeroSection";
import InfrastructureGrid from "./components/InfrastructureGrid";
import MarqueeStrip from "./components/MarqueeStrip";
import NetworkSection from "./components/NetworkSection";
import OverviewSection from "./components/OverviewSection";
import RankingTicker from "./components/RankingTicker";
import SoftwareDevCell from "./components/SoftwareDevCell";
import StatsDashboard from "./components/StatsDashboard";
import NewNavbar from "@/component/Navbar/NewNavbar";
import NewFooter from "@/component/NewFooter";



export const metadata = {
  title: "Computer Centre | Tula's Institute, Dehradun",
  description:
    "World-class IT infrastructure at Tula's Institute — 500+ desktops, 1 Gbps internet, Software Development Cell, and AI/ML labs.",
};

export default function ComputerCentrePage() {
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
      <StatsDashboard />
      <SoftwareDevCell />
      <InfrastructureGrid />
      <NetworkSection />
      <CTABanner />
      <MarqueeStrip />
      <GallerySection />
      <FinalCTA />
      <NewFooter/>
    </main>
  );
}
