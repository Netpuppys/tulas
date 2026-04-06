import Navbar from "@/Component/claude/Navbar";
import HeroSection from "@/Component/claude/HeroSection";
import UnlockSection from "@/Component/claude/UnlockSection";
import AboutSection from "@/Component/claude/AboutSection";
import ProgramsSection from "@/Component/claude/ProgramsSection";
import AlumniSection from "@/Component/claude/AlumniSection";
import LifeAtTulas from "@/Component/claude/LifeAtTulas";
import Footer from "@/Component/claude/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <UnlockSection />
      <AboutSection />
      <ProgramsSection />
      <AlumniSection />
      <LifeAtTulas />
      <Footer />
    </main>
  );
}
