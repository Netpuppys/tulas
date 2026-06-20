import UGProgramsExplorer from './components/UGProgramsExplorer';
import UGPageNote from './components/UGPageNote';
import UGHero from './components/UGHero';
import MegaMenu from '@/component/Navbar/MegaMenu';
import NewNavbar from '@/component/Navbar/NewNavbar';
import NewFooter from '@/component/NewFooter';

export default function UGProgramsPage() {
  return (
    <main>
      <div className="hidden md:block">
  <MegaMenu />
</div>

<div className="block md:hidden">
  <NewNavbar fullBanner={true}/>
</div>
      <UGHero/>
      <UGProgramsExplorer />
      <UGPageNote />
      <NewFooter/>
    </main>
  );
}
