import React from 'react';

import {
  Jumbotron as JumbotronCustom,
  OurVision,
  CommonFooter,
} from '../components/elements';
import MentorCardContainer from '../components/MentorCardContainer';
import ClassroomContainer from '../components/classroom/ClassroomCarousel';

export default function HomeScreen() {
  return (
    <>
      <JumbotronCustom />
      <ClassroomContainer />
      <MentorCardContainer />
      <OurVision />
      <CommonFooter />
    </>
  );
}
