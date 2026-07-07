'use client';

import BCAIHero           from './BCAIHero';
import BCAIOverview       from './BCAIOverview';
import BCAILearning       from './BCAILearning';
import BCAICurriculum     from './BCAICurriculum';
import BCAICertifications from './BCAICertifications';
import BCAIProgramDetails from './BCAIProgramDetails';
import BCAICareerOutcomes from './BCAICareerOutcomes';
import BCAIWhyTulas       from './BCAIWhyTulas';
import BCAICTABanner      from './BCAICTABanner';

export default function BCAIPage() {
  return (
    <>
      <BCAIHero />
      <BCAIOverview />
      <BCAILearning />
      <BCAICurriculum />
      <BCAICertifications />
      <BCAIProgramDetails />
      <BCAICareerOutcomes />
      <BCAIWhyTulas />
      <BCAICTABanner />
    </>
  );
}
