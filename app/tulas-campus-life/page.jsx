// app/campus-life/page.js
// Place all components in: app/campus-life/components/

import HeroSection      from './components/HeroSection';
import RankingTicker    from './components/RankingTicker';
import VibeStorytelling from './components/VibeStorytelling';
import WhyCampusLife    from './components/WhyCampusLife';
import MajorExperiences from './components/MajorExperiences';
import CelebsSection    from './components/CelebsSection';
import StudentStories   from './components/StudentStories';
import MarqueeStrip     from './components/MarqueeStrip';
import GallerySection   from './components/GallerySection';
import CTABanner        from './components/CTABanner';
import FinalCTA         from './components/FinalCTA';
import HappinessMeter   from './components/HappinessMeter';
import MegaMenu from '@/component/Navbar/MegaMenu';
import NewNavbar from '@/component/Navbar/NewNavbar';
import NewFooter from '@/component/NewFooter';

export const metadata = {
  title: "Campus Life | Tula's Institute, Dehradun",
  description:
    "Experience campus life at Tulas Institute — 1,000+ events, 50+ celebrity visits, 11 student clubs, DIFF, Sanskriti, Utkrisht, and 7,000+ alumni stories.",
};

export default function CampusLifePage() {
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
      <VibeStorytelling />
      <WhyCampusLife />
      <MajorExperiences />
      <CelebsSection />
      <StudentStories />
      <MarqueeStrip />
      <GallerySection />
      <CTABanner />
      <FinalCTA />
      {/* Fixed widget — renders on top of all sections */}
      <HappinessMeter />
    <NewFooter/>
    </main>
  );
}
