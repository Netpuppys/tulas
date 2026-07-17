'use client';

import ContactHero from './ContactHero';
import ContactReachUs from './ContactReachUs';
import ContactSafety from './ContactSafety';
import ContactCampuses from './ContactCampuses';
import ContactFAQ from './ContactFAQ';

export default function ContactPage() {
  return (
    <main>
      <ContactHero />
      <ContactReachUs />
      <ContactSafety />
      <ContactCampuses />
      <ContactFAQ />
    </main>
  );
}
