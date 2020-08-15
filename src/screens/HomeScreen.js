import React from 'react';

import {
  JumbotronHome,
  OurVision,
  CommonFooter,
} from '../components/elements';
import MentorCardContainer from '../components/MentorCardContainer';
import ClassroomContainer from '../components/classroom/ClassroomCarousel';

export default function HomeScreen() {
  return (
    <>
      <JumbotronHome />
      <ClassroomContainer />
      <MentorCardContainer />
      <OurVision />
      <CommonFooter />
    </>
  );
}
