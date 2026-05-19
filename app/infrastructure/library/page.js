// app/library/page.js
// Place all components in: app/library/components/
import HeroSection from './components/HeroSection';
import RankingTicker from './components/RankingTicker';
import OverviewSection from './components/OverviewSection';
import StatsRow from './components/StatsRow';
import DigitalLibrary from './components/DigitalLibrary';
import ReferenceLibrary from './components/ReferenceLibrary';
import ServicesSection from './components/ServicesSection';
import CTABanner from './components/CTABanner';
import MarqueeStrip from './components/MarqueeStrip';
import GallerySection from './components/GallerySection';
import FinalCTA from './components/FinalCTA';
import MegaMenu from '@/component/Navbar/MegaMenu';
import NewNavbar from '@/component/Navbar/NewNavbar';
import NewFooter from '@/component/NewFooter';


export const metadata = {
  title: "Library | Tula's Institute, Dehradun",
  description:
    "Tulas Library — over 60,000 volumes, 18,383+ e-books, 3,338+ e-journals, NPTEL video lectures, and a 448 m² reference hall.",
};

export default function LibraryPagee() {
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
      <DigitalLibrary />
      <ReferenceLibrary />
      <ServicesSection />
      <CTABanner />
      <MarqueeStrip />
      <GallerySection />
      <FinalCTA />

<NewFooter/>
    </main>
  );
}
