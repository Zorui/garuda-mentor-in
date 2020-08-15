import React from 'react';

import { JumbotronHome, OurVision, CommonFooter } from '../components/elements';
import MentorCardContainer from '../components/MentorCardContainer';
import ClassroomContainer from '../components/classroom/ClassroomCarousel';
import FooterStats from '../components/stat/FooterStats';

export default function HomeScreen() {
  return (
    <>
      <JumbotronHome />
      <ClassroomContainer />
      <MentorCardContainer />
      <OurVision />
      <FooterStats />
      <CommonFooter />
    </>
  );
}
