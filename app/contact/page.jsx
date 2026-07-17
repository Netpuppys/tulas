'use client';

import ContactHero from './components/ContactHero';
import ContactReachUs from './components/ContactReachUs';
import ContactSafety from './components/ContactSafety';
import ContactCampuses from './components/ContactCampuses';
import ContactFAQ from './components/ContactFAQ';
import MegaMenu from '@/component/Navbar/MegaMenu';
import NewNavbar from '@/component/Navbar/NewNavbar';
import NewFooter from '@/component/NewFooter';

export default function ContactPage() {
  return (
    <main>
       <div className="hidden md:block">
              <MegaMenu />
            </div>
            
            <div className="block md:hidden">
              <NewNavbar fullBanner={true}/>
            </div>      
      <ContactHero />
      <ContactReachUs />
      <ContactSafety />
      <ContactCampuses />
      <ContactFAQ />
      <NewFooter/>
    </main>
  );
}
